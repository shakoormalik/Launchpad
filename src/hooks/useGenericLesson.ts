import { useState, useCallback, useRef } from "react";

export interface Message {
  id: string;
  role: "user" | "mentor";
  content: string;
}

// Unified interfaces for lesson data
export interface PreTestQuestion {
  id: string;
  question: string;
  options?: string[];
  correctAnswer?: string;
  mentorAnswer?: string; // For open-ended questions (Lesson 2 style)
}

export interface PostTestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface LessonTopic {
  id: string;
  title: string;
  content: string;
  analogy?: string;
  scenario?: string;
  discussionQuestion: string;
}

export interface LessonData {
  lessonIntroduction: string;
  preTestIntro: string;
  preTest: PreTestQuestion[];
  preTestComplete: string;
  topics: LessonTopic[];
  postTestIntro: string;
  postTest: PostTestQuestion[];
  lessonCompletion: string;
}

type LessonPhase = 
  | "intro" 
  | "pretest-intro" 
  | "pretest" 
  | "pretest-complete" 
  | "topic" 
  | "topic-discussion" 
  | "posttest-intro" 
  | "posttest" 
  | "complete";

interface LessonState {
  phase: LessonPhase;
  pretestIndex: number;
  pretestResponses: string[];
  topicIndex: number;
  posttestIndex: number;
  posttestScore: number;
}

const initialState: LessonState = {
  phase: "intro",
  pretestIndex: 0,
  pretestResponses: [],
  topicIndex: 0,
  posttestIndex: 0,
  posttestScore: 0,
};

export const useGenericLesson = (lessonData: LessonData) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  
  const stateRef = useRef<LessonState>({ ...initialState });

  const addMessage = useCallback((role: "user" | "mentor", content: string) => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      role,
      content,
    };
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  const simulateTyping = useCallback(async (content: string, replies?: string[]) => {
    setIsTyping(true);
    setQuickReplies([]);
    
    const delay = Math.min(1500 + content.length * 3, 3000);
    await new Promise((resolve) => setTimeout(resolve, delay));
    
    setIsTyping(false);
    addMessage("mentor", content);
    
    if (replies) {
      setQuickReplies(replies);
    }
  }, [addMessage]);

  const formatTopicContent = (topic: LessonTopic): string => {
    let content = `📚 **${topic.title}**\n\n${topic.content}`;
    
    if (topic.analogy) {
      content += `\n\n💡 **Analogy:** ${topic.analogy}`;
    }
    
    if (topic.scenario) {
      content += `\n\n🎯 **Scenario:** ${topic.scenario}`;
    }
    
    return content;
  };

  const startLesson = useCallback(async () => {
    if (hasStarted) return;
    setHasStarted(true);
    stateRef.current = { ...initialState };
    
    await simulateTyping(lessonData.lessonIntroduction, ["Let's go!", "I'm ready!"]);
  }, [hasStarted, lessonData.lessonIntroduction, simulateTyping]);

  const sendMessage = useCallback(async (content: string): Promise<boolean> => {
    addMessage("user", content);
    
    const state = stateRef.current;
    
    // Handle menu/exit request
    if (content.toLowerCase().includes("menu")) {
      return true; // Signal to go back to menu
    }

    switch (state.phase) {
      case "intro": {
        stateRef.current.phase = "pretest-intro";
        await simulateTyping(lessonData.preTestIntro, ["Start the pre-test"]);
        break;
      }

      case "pretest-intro": {
        stateRef.current.phase = "pretest";
        const firstQuestion = lessonData.preTest[0];
        const questionText = `**Question 1 of ${lessonData.preTest.length}:**\n\n${firstQuestion.question}`;
        const replies = firstQuestion.options || ["Share your thoughts..."];
        await simulateTyping(questionText, replies);
        break;
      }

      case "pretest": {
        stateRef.current.pretestResponses.push(content);
        const nextIndex = stateRef.current.pretestIndex + 1;
        
        if (nextIndex >= lessonData.preTest.length) {
          // Pre-test complete
          stateRef.current.phase = "pretest-complete";
          stateRef.current.pretestIndex = nextIndex;
          await simulateTyping(lessonData.preTestComplete, ["Start learning!"]);
        } else {
          stateRef.current.pretestIndex = nextIndex;
          const nextQuestion = lessonData.preTest[nextIndex];
          const questionText = `**Question ${nextIndex + 1} of ${lessonData.preTest.length}:**\n\n${nextQuestion.question}`;
          const replies = nextQuestion.options || ["Share your thoughts..."];
          await simulateTyping(questionText, replies);
        }
        break;
      }

      case "pretest-complete": {
        // Start first topic
        stateRef.current.phase = "topic";
        stateRef.current.topicIndex = 0;
        const firstTopic = lessonData.topics[0];
        const topicContent = formatTopicContent(firstTopic);
        await simulateTyping(topicContent, ["I understand", "Tell me more"]);
        break;
      }

      case "topic": {
        // Show discussion question for current topic
        stateRef.current.phase = "topic-discussion";
        const currentTopic = lessonData.topics[stateRef.current.topicIndex];
        const discussionText = `🤔 **Let's think about this:**\n\n${currentTopic.discussionQuestion}`;
        await simulateTyping(discussionText, ["Share your thoughts..."]);
        break;
      }

      case "topic-discussion": {
        // Move to next topic or post-test
        const nextTopicIndex = stateRef.current.topicIndex + 1;
        
        // Acknowledge their response
        const acknowledgments = [
          "Great thinking! 💡",
          "I appreciate you sharing that! 🌟",
          "That's a thoughtful perspective! 👏",
          "Good reflection! 💪",
          "Thanks for sharing your thoughts! ✨"
        ];
        const ack = acknowledgments[Math.floor(Math.random() * acknowledgments.length)];
        
        if (nextTopicIndex >= lessonData.topics.length) {
          // All topics done, move to post-test
          stateRef.current.phase = "posttest-intro";
          stateRef.current.topicIndex = nextTopicIndex;
          await simulateTyping(`${ack}\n\n${lessonData.postTestIntro}`, ["Start the quiz!"]);
        } else {
          stateRef.current.phase = "topic";
          stateRef.current.topicIndex = nextTopicIndex;
          const nextTopic = lessonData.topics[nextTopicIndex];
          const topicContent = formatTopicContent(nextTopic);
          await simulateTyping(`${ack}\n\nLet's move on to the next topic!\n\n${topicContent}`, ["I understand", "Tell me more"]);
        }
        break;
      }

      case "posttest-intro": {
        stateRef.current.phase = "posttest";
        stateRef.current.posttestIndex = 0;
        stateRef.current.posttestScore = 0;
        const firstQuestion = lessonData.postTest[0];
        const questionText = `**Question 1 of ${lessonData.postTest.length}:**\n\n${firstQuestion.question}`;
        await simulateTyping(questionText, firstQuestion.options);
        break;
      }

      case "posttest": {
        const currentQuestion = lessonData.postTest[stateRef.current.posttestIndex];
        
        // Check if answer is correct
        const userAnswer = content.trim();
        const isCorrect = 
          userAnswer === currentQuestion.correctAnswer ||
          userAnswer.startsWith(currentQuestion.correctAnswer) ||
          currentQuestion.options.some(opt => 
            opt.startsWith(currentQuestion.correctAnswer) && 
            (userAnswer === opt || userAnswer.includes(opt))
          );
        
        if (isCorrect) {
          stateRef.current.posttestScore += 1;
        }
        
        const feedback = isCorrect 
          ? `✅ **Correct!** ${currentQuestion.explanation}`
          : `❌ **Not quite.** The correct answer is ${currentQuestion.correctAnswer}. ${currentQuestion.explanation}`;
        
        const nextIndex = stateRef.current.posttestIndex + 1;
        
        if (nextIndex >= lessonData.postTest.length) {
          // Post-test complete
          stateRef.current.phase = "complete";
          const score = stateRef.current.posttestScore + (isCorrect ? 0 : 0); // Already added above
          const totalQuestions = lessonData.postTest.length;
          const percentage = Math.round((stateRef.current.posttestScore / totalQuestions) * 100);
          
          const scoreMessage = `${feedback}\n\n🎉 **Quiz Complete!**\n\nYou scored **${stateRef.current.posttestScore} out of ${totalQuestions}** (${percentage}%)!\n\n${lessonData.lessonCompletion}`;
          await simulateTyping(scoreMessage, ["Return to menu", "Ask a question"]);
        } else {
          stateRef.current.posttestIndex = nextIndex;
          const nextQuestion = lessonData.postTest[nextIndex];
          const nextQuestionText = `${feedback}\n\n**Question ${nextIndex + 1} of ${lessonData.postTest.length}:**\n\n${nextQuestion.question}`;
          await simulateTyping(nextQuestionText, nextQuestion.options);
        }
        break;
      }

      case "complete": {
        if (content.toLowerCase().includes("menu") || content.toLowerCase().includes("return")) {
          return true; // Signal to go back to menu
        }
        // Handle follow-up questions
        await simulateTyping(
          "Great question! This lesson covered the fundamentals. Feel free to explore more lessons to deepen your understanding, or type 'menu' to return to the lesson selection.",
          ["Return to menu"]
        );
        break;
      }
    }

    return false;
  }, [addMessage, lessonData, simulateTyping]);

  const resetLesson = useCallback(() => {
    setMessages([]);
    setQuickReplies([]);
    setHasStarted(false);
    stateRef.current = { ...initialState };
  }, []);

  return {
    messages,
    isTyping,
    quickReplies,
    sendMessage,
    startLesson,
    hasStarted,
    resetLesson,
  };
};
