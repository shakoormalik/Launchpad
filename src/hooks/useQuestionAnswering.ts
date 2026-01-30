import { useState, useCallback } from 'react';
import { GoogleGenAI } from "@google/genai";

/**
 * Generic lesson topic interface
 * All lessons should have topics with at least these properties
 */
export interface LessonTopic {
    id: string | number;
    title: string;
    content: string;
    discussionQuestion?: string;
    analogy?: string;
    scenario?: string;
    realWorldExample?: string;
}

/**
 * Message interface for Q&A conversation
 */
export interface QAMessage {
    id: string;
    role: 'user' | 'mentor';
    content: string;
}

/**
 * Universal hook for question answering across all lessons
 * @param lessonTopics - Array of topics from the current lesson
 * @param lessonName - Name of the current lesson for fallback messages
 */
export const useQuestionAnswering = (
    lessonTopics: LessonTopic[],
    lessonName: string,
    additionalContext: string = ""
) => {
    const [qaMessages, setQaMessages] = useState<QAMessage[]>([]);
    const [isQAMode, setIsQAMode] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    console.log("useQuestionAnswering Render:", { isQAMode, msgCount: qaMessages.length });

    /**
     * Generic fallback answer
     */
    const getGenericAnswer = useCallback((): string => {
        return `That's a thoughtful question! 🤔\n\nI don't see that specific topic covered in the "${lessonName}" lesson. Try asking about the topics we discussed, like:\n\n${lessonTopics.slice(0, 3).map(t => `• ${t.title}`).join('\n')}\n\nOr type "done" to go back to the menu.`;
    }, [lessonName, lessonTopics]);

    /**
    * Generates answer using Gemini AI
    */
    const generateAIAnswer = useCallback(async (question: string): Promise<string | null> => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        console.log("generateAIAnswer called. Key present:", !!apiKey); // Check if key exists

        if (!apiKey) {
            console.error("Missing Gemini API Key");
            return null;
        }

        const ai = new GoogleGenAI({ apiKey });

        // Helper to generate content with a specific model
        const generateWithModel = async (modelName: string, promptText: string) => {
            console.log(`Attempting generation with model: ${modelName}`);
            const response = await ai.models.generateContent({
                model: modelName,
                contents: promptText,
            });
            return response.text;
        };

        // Prepare context from topics
        const context = lessonTopics.map(t =>
            `Topic: ${t.title}\nContent: ${t.content}\n${t.analogy ? `Analogy: ${t.analogy}` : ''}\n${t.realWorldExample ? `Example: ${t.realWorldExample}` : ''}`
        ).join('\n\n');

        const prompt = `
        You are a friendly, encouraging financial mentor for students.
        The student has just completed a lesson on "${lessonName}".
        
        Here is the main content covered in the lesson:
        ${context}

        Here is additional context from the lesson (introductions, quizzes, dialogues):
        ${additionalContext}

        Student Question: "${question}"

        Instructions:
        1. Answer the question based primarily on the lesson content provided above.
        2. If the answer is not explicitly in the lesson, use your general financial knowledge to answer, but mention that this wasn't covered in the specific lesson.
        3. Keep the tone encouraging, educational, and appropriate for a teenage audience.
        4. Keep the answer concise (under 4 sentences if possible).
        5. Use simple formatting like bolding key terms.
      `;

        try {
            // Try preferred model from user request
            return await generateWithModel("gemini-3-flash-preview", prompt);
        } catch (error: any) {
            console.warn("Primary model (gemini-3-flash-preview) failed, attempting fallback to gemini-1.5-flash. Error:", error);

            // Fallback to previous model
            try {
                return await generateWithModel("gemini-1.5-flash", prompt);
            } catch (fallbackError) {
                console.error("Secondary model failed, trying final fallback to gemini-pro:", fallbackError);
                try {
                    return await generateWithModel("gemini-pro", prompt);
                } catch (finalError) {
                    console.error("All AI models failed:", finalError);
                    return null;
                }
            }
        }
    }, [lessonName, lessonTopics, additionalContext]);

    /**
     * Handle user question
     */
    const askQuestion = useCallback(async (question: string): Promise<boolean> => {
        console.log("askQuestion called with:", question);
        // Add user message
        const userMessage: QAMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: question,
        };

        setQaMessages(prev => [...prev, userMessage]);

        // Check for exit commands
        const q = question.toLowerCase();
        if (q.includes('done') || q.includes('menu') || q.includes('back')) {
            return true; // Signal to exit Q&A mode
        }

        // Simulate typing delay
        setIsTyping(true);

        // Try AI answer first
        let answer: string | null = null;
        try {
            answer = await generateAIAnswer(question);
        } catch (e) {
            console.log("AI generation failed, falling back to local search");
        }

        // Fallback if AI fails or returns null
        if (!answer) {
            // Add artificial delay if AI failed quickly, to simulate "thinking"
            if (!answer) await new Promise(resolve => setTimeout(resolve, 1000));
            answer = getGenericAnswer();
        }

        // Add mentor response
        const assistantMessage: QAMessage = {
            id: (Date.now() + 1).toString(),
            role: 'mentor',
            content: answer,
        };

        setQaMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);

        return false; // Continue Q&A mode
    }, [getGenericAnswer, generateAIAnswer]);

    /**
     * Start Q&A mode
     */
    const startQAMode = useCallback(async (initialQuestion?: string) => {
        console.log("startQAMode called with:", initialQuestion);
        setIsQAMode(true);
        setQaMessages([]);

        if (initialQuestion) {
            // If starting with a question, immediately process it
            await askQuestion(initialQuestion);
        } else {
            // Add welcome message
            const welcomeMessage: QAMessage = {
                id: Date.now().toString(),
                role: 'mentor',
                content: `Great! I'm here to answer questions about the "${lessonName}" lesson.\n\nWhat would you like to know?`,
            };
            setQaMessages([welcomeMessage]);
        }
    }, [lessonName, askQuestion]);

    /**
     * Exit Q&A mode
     */
    const exitQAMode = useCallback(() => {
        setIsQAMode(false);
        setQaMessages([]);
    }, []);

    return {
        isQAMode,
        qaMessages,
        isTyping,
        startQAMode,
        askQuestion,
        exitQAMode,
    };
};
