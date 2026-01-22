import { useState, useCallback } from "react";
import {
  lesson2Introduction,
  preTestIntro,
  lesson2PreTest,
  preTestComplete,
  lesson2Topics,
  postTestIntro,
  lesson2PostTest,
  lesson2Completion,
} from "@/data/lesson2";

export interface Message {
  id: string;
  role: "user" | "mentor";
  content: string;
}

type Lesson2Phase = 
  | "intro"
  | "pretest-intro"
  | "pretest"
  | "pretest-complete"
  | "topic"
  | "topic-discussion"
  | "posttest-intro"
  | "posttest"
  | "complete";

interface Lesson2State {
  phase: Lesson2Phase;
  pretestIndex: number;
  pretestResponses: string[];
  topicIndex: number;
  posttestIndex: number;
  posttestScore: number;
}

export const useLesson2Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [lessonState, setLessonState] = useState<Lesson2State>({
    phase: "intro",
    pretestIndex: 0,
    pretestResponses: [],
    topicIndex: 0,
    posttestIndex: 0,
    posttestScore: 0,
  });

  const addMessage = useCallback((role: "user" | "mentor", content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role,
      content,
    };
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  const simulateTyping = useCallback(async (content: string, replies?: string[]) => {
    setIsTyping(true);
    setQuickReplies([]);
    
    const delay = Math.min(1500 + content.length * 3, 2500);
    await new Promise((resolve) => setTimeout(resolve, delay));
    
    setIsTyping(false);
    addMessage("mentor", content);
    
    if (replies) {
      setQuickReplies(replies);
    }
  }, [addMessage]);

  const startLesson = useCallback(async () => {
    if (hasStarted) return;
    setHasStarted(true);
    
    await simulateTyping(lesson2Introduction, ["Let's do the Pre-Test!", "Tell me more"]);
  }, [hasStarted, simulateTyping]);

  const handlePreTest = useCallback(async (userResponse: string) => {
    const { pretestIndex, pretestResponses } = lessonState;
    
    // Store user's response
    const newResponses = [...pretestResponses, userResponse];
    
    // Get mentor's feedback for this question
    const currentQuestion = lesson2PreTest[pretestIndex];
    await simulateTyping(currentQuestion.mentorAnswer);
    
    // Move to next question or complete pretest
    if (pretestIndex < lesson2PreTest.length - 1) {
      const nextIndex = pretestIndex + 1;
      setLessonState(prev => ({
        ...prev,
        pretestIndex: nextIndex,
        pretestResponses: newResponses,
      }));
      
      await new Promise(resolve => setTimeout(resolve, 500));
      await simulateTyping(
        `Question ${nextIndex + 1} of ${lesson2PreTest.length}:\n\n${lesson2PreTest[nextIndex].question}`,
        ["I'm not sure", "Can you give me a hint?"]
      );
    } else {
      // Pretest complete - move to topics
      setLessonState(prev => ({
        ...prev,
        phase: "pretest-complete",
        pretestResponses: newResponses,
      }));
      
      await new Promise(resolve => setTimeout(resolve, 500));
      await simulateTyping(preTestComplete, ["Let's learn!", "I'm ready"]);
    }
  }, [lessonState, simulateTyping]);

  const handleTopic = useCallback(async () => {
    const { topicIndex } = lessonState;
    const topic = lesson2Topics[topicIndex];
    
    // Present topic content
    const topicContent = `Topic ${topicIndex + 1}: ${topic.title}

${topic.content}

Analogy: ${topic.analogy}

Real-Life Scenario: ${topic.scenario}`;
    
    await simulateTyping(topicContent);
    
    // Wait then ask discussion question
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setLessonState(prev => ({ ...prev, phase: "topic-discussion" }));
    await simulateTyping(
      `Let's discuss:\n\n${topic.discussionQuestion}`,
      ["Share my thoughts", "I need to think about it", "Can you explain more?"]
    );
  }, [lessonState.topicIndex, simulateTyping]);

  const handleTopicDiscussion = useCallback(async (userResponse: string) => {
    const { topicIndex } = lessonState;
    
    // Acknowledge user's response
    const encouragements = [
      "Great insight! That shows you're really thinking about this.",
      "I love that perspective! You're connecting the dots.",
      "Excellent thinking! That's exactly the kind of awareness that leads to success.",
      "Well said! You're already developing a mature mindset about finances.",
      "That's a thoughtful response! Keep that mindset as you grow.",
      "You're getting it! This kind of thinking will serve you well."
    ];
    
    await simulateTyping(encouragements[topicIndex % encouragements.length]);
    
    // Move to next topic or post-test
    if (topicIndex < lesson2Topics.length - 1) {
      const nextIndex = topicIndex + 1;
      setLessonState(prev => ({
        ...prev,
        phase: "topic",
        topicIndex: nextIndex,
      }));
      
      await new Promise(resolve => setTimeout(resolve, 500));
      await simulateTyping(
        `Ready for the next topic? Let's move on to Topic ${nextIndex + 1}!`,
        ["Continue", "Let me catch my breath first"]
      );
    } else {
      // All topics complete - move to post-test
      setLessonState(prev => ({ ...prev, phase: "posttest-intro" }));
      
      await new Promise(resolve => setTimeout(resolve, 500));
      await simulateTyping(postTestIntro, ["I'm ready for the quiz!", "Let me review first"]);
    }
  }, [lessonState.topicIndex, simulateTyping]);

  const handlePostTest = useCallback(async (userResponse: string) => {
    const { posttestIndex, posttestScore } = lessonState;
    const currentQuestion = lesson2PostTest[posttestIndex];
    
    // Check if answer is correct
    const userAnswer = userResponse.trim().toUpperCase().charAt(0);
    const isCorrect = userAnswer === currentQuestion.correctAnswer;
    const newScore = isCorrect ? posttestScore + 1 : posttestScore;
    
    // Provide feedback
    const feedback = isCorrect 
      ? `Correct! ${currentQuestion.explanation}`
      : `Not quite. The correct answer is ${currentQuestion.correctAnswer}. ${currentQuestion.explanation}`;
    
    await simulateTyping(feedback);
    
    // Move to next question or complete
    if (posttestIndex < lesson2PostTest.length - 1) {
      const nextIndex = posttestIndex + 1;
      setLessonState(prev => ({
        ...prev,
        posttestIndex: nextIndex,
        posttestScore: newScore,
      }));
      
      await new Promise(resolve => setTimeout(resolve, 500));
      const nextQ = lesson2PostTest[nextIndex];
      await simulateTyping(
        `Question ${nextIndex + 1} of ${lesson2PostTest.length}:\n\n${nextQ.question}\n\n${nextQ.options.join("\n")}`,
        nextQ.options.map(opt => opt.split(". ")[0])
      );
    } else {
      // Quiz complete
      const finalScore = newScore;
      const percentage = Math.round((finalScore / lesson2PostTest.length) * 100);
      
      setLessonState(prev => ({
        ...prev,
        phase: "complete",
        posttestScore: finalScore,
      }));
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      let scoreMessage = "";
      if (percentage >= 90) {
        scoreMessage = `Amazing! You scored ${finalScore}/${lesson2PostTest.length} (${percentage}%)! You've mastered this material!`;
      } else if (percentage >= 70) {
        scoreMessage = `Great job! You scored ${finalScore}/${lesson2PostTest.length} (${percentage}%)! You have a solid understanding!`;
      } else {
        scoreMessage = `You scored ${finalScore}/${lesson2PostTest.length} (${percentage}%). Keep reviewing the material - you've got this!`;
      }
      
      await simulateTyping(scoreMessage);
      await new Promise(resolve => setTimeout(resolve, 800));
      await simulateTyping(lesson2Completion, ["Back to menu", "Ask a question"]);
    }
  }, [lessonState, simulateTyping]);

  const handleOpenQuestion = useCallback(async (question: string): Promise<boolean> => {
    const q = question.toLowerCase();
    
    if (q.includes("menu") || q.includes("back") || q.includes("lesson")) {
      return true; // Signal to go back to menu
    }
    
    if (q.includes("budget")) {
      await simulateTyping(
        `Great question about budgeting!

A budget is simply a plan for your money. Here's a basic approach:

1. Calculate your monthly income
2. List all your expenses (rent, utilities, food, transport)
3. Subtract expenses from income
4. Allocate what's left to savings and fun

A popular method is the 50/30/20 rule:
- 50% for needs (rent, bills, groceries)
- 30% for wants (entertainment, dining out)
- 20% for savings and debt repayment

Want to know more about any specific aspect?`,
        ["Tell me more", "Back to menu"]
      );
      return false;
    }
    
    if (q.includes("lease") || q.includes("rent")) {
      await simulateTyping(
        `Good question about leases and renting!

Key things to look for in a lease:
- Monthly rent amount and due date
- Security deposit amount
- Lease length (usually 6-12 months)
- Pet policies
- Maintenance responsibilities
- Early termination clauses
- Rules about guests and noise

Always read EVERYTHING before signing, and don't be afraid to ask questions!

Is there something specific about leasing you want to know?`,
        ["Tell me more", "Back to menu"]
      );
      return false;
    }
    
    if (q.includes("landlord") || q.includes("tenant")) {
      await simulateTyping(
        `Great question about tenant-landlord relationships!

Your rights as a tenant typically include:
- A safe, habitable living space
- Privacy (landlord must give notice before entering)
- Protection from discrimination
- Return of security deposit (if no damage)

Your responsibilities include:
- Paying rent on time
- Keeping the property clean
- Reporting maintenance issues
- Following lease rules

Know your rights - they protect you!`,
        ["Tell me more", "Back to menu"]
      );
      return false;
    }
    
    // Default response
    await simulateTyping(
      `That's a thoughtful question!

While I'm focused on the Living on Your Own lesson right now, I encourage you to keep exploring. The full LaunchPad Financial Literacy program covers many more topics!

Is there anything specific about independent living, budgeting, or leases I can help with? Or type "menu" to go back to lesson selection.`,
      ["Ask about budgeting", "Ask about leases", "Back to menu"]
    );
    return false;
  }, [simulateTyping]);

  const sendMessage = useCallback(async (content: string): Promise<boolean> => {
    addMessage("user", content);
    
    const { phase } = lessonState;
    
    // Check for menu command at any point
    if (content.toLowerCase().includes("menu")) {
      return true;
    }
    
    switch (phase) {
      case "intro":
        // Move to pretest intro
        setLessonState(prev => ({ ...prev, phase: "pretest-intro" }));
        await simulateTyping(preTestIntro, ["I'm ready!"]);
        break;
        
      case "pretest-intro":
        // Start pretest with first question
        setLessonState(prev => ({ ...prev, phase: "pretest" }));
        await simulateTyping(
          `Question 1 of ${lesson2PreTest.length}:\n\n${lesson2PreTest[0].question}`,
          ["I'm not sure", "Let me think..."]
        );
        break;
        
      case "pretest":
        await handlePreTest(content);
        break;
        
      case "pretest-complete":
        // Start first topic
        setLessonState(prev => ({ ...prev, phase: "topic" }));
        await handleTopic();
        break;
        
      case "topic":
        // Continue to topic content
        await handleTopic();
        break;
        
      case "topic-discussion":
        await handleTopicDiscussion(content);
        break;
        
      case "posttest-intro":
        // Start post-test with first question
        setLessonState(prev => ({ ...prev, phase: "posttest" }));
        const firstQ = lesson2PostTest[0];
        await simulateTyping(
          `Question 1 of ${lesson2PostTest.length}:\n\n${firstQ.question}\n\n${firstQ.options.join("\n")}`,
          firstQ.options.map(opt => opt.split(". ")[0])
        );
        break;
        
      case "posttest":
        await handlePostTest(content);
        break;
        
      case "complete":
        return await handleOpenQuestion(content);
        
      default:
        break;
    }
    
    return false;
  }, [addMessage, lessonState, simulateTyping, handlePreTest, handleTopic, handleTopicDiscussion, handlePostTest, handleOpenQuestion]);

  const resetLesson = useCallback(() => {
    setMessages([]);
    setQuickReplies([]);
    setHasStarted(false);
    setLessonState({
      phase: "intro",
      pretestIndex: 0,
      pretestResponses: [],
      topicIndex: 0,
      posttestIndex: 0,
      posttestScore: 0,
    });
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
