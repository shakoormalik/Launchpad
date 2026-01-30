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
    const [isQAMode, setIsQAMode] = useState(false);
    console.log("useQuestionAnswering Render:", { isQAMode });

    /**
     * Helper to detect if input is likely a question
     */
    const isLikelyQuestion = useCallback((text: string): boolean => {
        const t = text.trim().toLowerCase();
        // Check for question mark
        if (t.endsWith('?')) return true;

        // Check for common question starters and imperative verbs
        const starters = [
            'what', 'how', 'why', 'who', 'where', 'when', 'can', 'does', 'do', 'did',
            'is', 'are', 'explain', 'tell', 'give', 'show', 'list', 'describe', 'define',
            'could', 'would', 'should', 'help'
        ];

        if (starters.some(s => t.startsWith(s + ' ') || t === s)) return true;

        // Check for question-indicating keywords inside the sentence
        const keywords = ['example', 'mean', 'definition', 'difference', 'vs'];
        if (keywords.some(k => t.includes(k))) return true;

        return false;
    }, []);

    /**
     * Search local topics for an answer
     */
    const findLocalAnswer = useCallback((question: string): string | null => {
        const q = question.toLowerCase();

        // 1. Exact Title Match
        const topicByTitle = lessonTopics.find(t => q.includes(t.title.toLowerCase()));
        if (topicByTitle) {
            let answer = `Here's what the lesson says about **${topicByTitle.title}**:\n\n${topicByTitle.content}`;
            if (topicByTitle.analogy) answer += `\n\n💡 **Analogy:** ${topicByTitle.analogy}`;
            return answer;
        }

        return null;
    }, [lessonTopics]);

    /**
     * Generic fallback answer
     */
    const getGenericAnswer = useCallback((): string => {
        return `I'm currently unable to connect to my AI brain 🧠 to give you a custom answer.\n\nHowever, I can help you with the main topics of this lesson:\n\n${lessonTopics.slice(0, 3).map(t => `• ${t.title}`).join('\n')}\n\nPlease check your internet connection or API key if this persists.`;
    }, [lessonName, lessonTopics]);

    /**
    * Generates answer using Gemini AI
    */
    const generateAIAnswer = useCallback(async (question: string): Promise<string | null> => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (!apiKey) {
            console.error("Missing Gemini API Key");
            return "⚠️ **Configuration Error:** Missing VITE_GEMINI_API_KEY. Please check your .env file.";
        }

        const ai = new GoogleGenAI({ apiKey });

        // Prepare context from topics
        const context = lessonTopics.map(t =>
            `Topic: ${t.title}\nContent: ${t.content}\n${t.analogy ? `Analogy: ${t.analogy}` : ''}\n${t.realWorldExample ? `Example: ${t.realWorldExample}` : ''}`
        ).join('\n\n');

        const prompt = `
        You are a friendly, encouraging financial mentor for students.
        The student has just completed a lesson on "${lessonName}".
        
        Here is the main content covered in the lesson:
        ${context}

        Here is additional context from the lesson:
        ${additionalContext}

        Student Question: "${question}"

        Instructions:
        1. Answer the question directly and helpfully.
        2. use the provided lesson content as your primary source.
        3. CRITICAL: If the answer is NOT in the lesson, use your general financial knowledge to answer it anyway. Do NOT refuse to answer. Do NOT say "I cannot answer".
        4. Keep the tone encouraging, educational, and appropriate for a teenage audience.
        5. Keep the answer concise (under 4 sentences if possible).
      `;

        try {
            const response = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: prompt,
            });
            return response.text;
        } catch (error: any) {
            console.error("Gemini AI Error:", error);

            // Handle specific API errors
            const errorMsg = error.toString();
            if (errorMsg.includes("403") || errorMsg.includes("leaked")) {
                return "⛔ **API Access Denied:** Your API key has been flagged as leaked by Google. Please generate a new key and update your .env file.";
            }
            if (errorMsg.includes("404")) {
                // Fallback if model not found
                try {
                    const fallbackResponse = await ai.models.generateContent({
                        model: "gemini-2.0-flash-exp",
                        contents: prompt
                    });
                    return fallbackResponse.text;
                } catch (e) {
                    console.error("Fallback failed", e);
                }
            }

            return null;
        }
    }, [lessonName, lessonTopics, additionalContext]);

    /**
     * Handle user question and return answer
     */
    const processQuestion = useCallback(async (question: string): Promise<{ answer: string | null, shouldExit: boolean }> => {
        console.log("processQuestion called with:", question);

        // Check for continuation commands
        const q = question.toLowerCase();
        if (q === 'continue' || q === 'continue lesson' || q === 'done' || q.includes('go back') || q.includes('understand, continue')) {
            return { answer: null, shouldExit: true };
        }

        // Try local search first
        let answer = findLocalAnswer(question);

        if (!answer) {
            // Try AI answer
            try {
                answer = await generateAIAnswer(question);
            } catch (e) {
                console.log("AI generation failed", e);
            }
        }

        // Fallback if both fail
        if (!answer) {
            // Add artificial delay if AI failed quickly
            await new Promise(resolve => setTimeout(resolve, 1000));
            answer = getGenericAnswer();
        }

        // Add continuation prompt
        answer += "\n\nWould you like to **ask another question** or **continue the lesson**?";

        return { answer, shouldExit: false };
    }, [getGenericAnswer, generateAIAnswer, findLocalAnswer]);

    /**
     * Set Q&A mode
     */
    const setQAMode = useCallback((active: boolean) => {
        setIsQAMode(active);
    }, []);

    const getWelcomeMessage = useCallback(() => {
        return `I'm happy to help! What question do you have about "${lessonName}"?`;
    }, [lessonName]);

    return {
        isQAMode,
        setQAMode,
        getWelcomeMessage,
        processQuestion,
        isLikelyQuestion
    };
};
