import { useState, useCallback, useRef } from "react";
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
import { generateTopicAnalogy } from "@/data/topicAnalogies";

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
  | "topic-learn-more"
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

const initialState: Lesson2State = {
  phase: "intro",
  pretestIndex: 0,
  pretestResponses: [],
  topicIndex: 0,
  posttestIndex: 0,
  posttestScore: 0,
};

export const useLesson2Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const stateRef = useRef<Lesson2State>(initialState);
  const [, forceUpdate] = useState({});

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

  const sendMessage = useCallback(async (content: string): Promise<boolean> => {
    addMessage("user", content);
    
    const state = stateRef.current;
    
    // Check for menu command at any point
    if (content.toLowerCase().includes("menu")) {
      return true;
    }

    const updateState = (updates: Partial<Lesson2State>) => {
      stateRef.current = { ...stateRef.current, ...updates };
      forceUpdate({});
    };

    switch (state.phase) {
      case "intro":
        updateState({ phase: "pretest-intro" });
        await simulateTyping(preTestIntro, ["I'm ready!"]);
        break;
        
      case "pretest-intro":
        updateState({ phase: "pretest" });
        await simulateTyping(
          `Question 1 of ${lesson2PreTest.length}:\n\n${lesson2PreTest[0].question}`
        );
        break;
        
      case "pretest": {
        const { pretestIndex, pretestResponses } = state;
        const currentQuestion = lesson2PreTest[pretestIndex];
        const newResponses = [...pretestResponses, content];
        
        await simulateTyping(currentQuestion.mentorAnswer);
        
        if (pretestIndex < lesson2PreTest.length - 1) {
          const nextIndex = pretestIndex + 1;
          updateState({ pretestIndex: nextIndex, pretestResponses: newResponses });
          
          await new Promise(resolve => setTimeout(resolve, 500));
          await simulateTyping(
            `Question ${nextIndex + 1} of ${lesson2PreTest.length}:\n\n${lesson2PreTest[nextIndex].question}`
          );
        } else {
          updateState({ phase: "pretest-complete", pretestResponses: newResponses });
          await new Promise(resolve => setTimeout(resolve, 500));
          await simulateTyping(preTestComplete, ["Let's learn!", "I'm ready"]);
        }
        break;
      }
        
      case "pretest-complete": {
        // Start first topic
        const topic = lesson2Topics[0];
        const topicContent = `📚 **Topic 1: ${topic.title}**\n\n${topic.content}\n\n💡 **Analogy:** ${topic.analogy}\n\n🎯 **Real-Life Scenario:** ${topic.scenario}`;
        updateState({ phase: "topic", topicIndex: 0 });
        await simulateTyping(topicContent, ["I understand, continue", "Learn More 💡"]);
        break;
      }
      
      case "topic": {
        const { topicIndex } = stateRef.current;
        const topic = lesson2Topics[topicIndex];
        
        // Check if they want to learn more
        if (content.toLowerCase().includes("learn more") || content.toLowerCase().includes("more")) {
          updateState({ phase: "topic-learn-more" });
          const analogy = generateTopicAnalogy(topic.title, topic.content);
          
          const expandedContent = `💡 **Let's Make This Real!**\n\n**Analogy:** ${analogy.analogy}\n\n**Real-World Example:** ${analogy.realWorldExample}${analogy.funFact ? `\n\n🎯 **Fun Fact:** ${analogy.funFact}` : ""}`;
          
          await simulateTyping(expandedContent, ["Got it! Continue", "That helps!"]);
        } else {
          // Move to next topic or post-test
          if (topicIndex < lesson2Topics.length - 1) {
            const nextIndex = topicIndex + 1;
            updateState({ phase: "topic", topicIndex: nextIndex });
            
            const nextTopic = lesson2Topics[nextIndex];
            const topicContent = `📚 **Topic ${nextIndex + 1}: ${nextTopic.title}**\n\n${nextTopic.content}\n\n💡 **Analogy:** ${nextTopic.analogy}\n\n🎯 **Real-Life Scenario:** ${nextTopic.scenario}`;
            
            await simulateTyping(`Great! Let's move on to the next topic!\n\n${topicContent}`, ["I understand, continue", "Learn More 💡"]);
          } else {
            updateState({ phase: "posttest-intro" });
            await simulateTyping(postTestIntro, ["Start the quiz!"]);
          }
        }
        break;
      }
      
      case "topic-learn-more": {
        // Move to next topic or post-test after expanded content
        const { topicIndex } = stateRef.current;
        
        if (topicIndex < lesson2Topics.length - 1) {
          const nextIndex = topicIndex + 1;
          updateState({ phase: "topic", topicIndex: nextIndex });
          
          const nextTopic = lesson2Topics[nextIndex];
          const topicContent = `📚 **Topic ${nextIndex + 1}: ${nextTopic.title}**\n\n${nextTopic.content}\n\n💡 **Analogy:** ${nextTopic.analogy}\n\n🎯 **Real-Life Scenario:** ${nextTopic.scenario}`;
          
          await simulateTyping(`Great! Let's move on to the next topic!\n\n${topicContent}`, ["I understand, continue", "Learn More 💡"]);
        } else {
          updateState({ phase: "posttest-intro" });
          await simulateTyping(postTestIntro, ["Start the quiz!"]);
        }
        break;
      }
        
      case "posttest-intro": {
        updateState({ phase: "posttest" });
        const firstQ = lesson2PostTest[0];
        await simulateTyping(
          `Question 1 of ${lesson2PostTest.length}:\n\n${firstQ.question}\n\n${firstQ.options.join("\n")}`,
          firstQ.options.map(opt => opt.split(". ")[0])
        );
        break;
      }
        
      case "posttest": {
        const { posttestIndex, posttestScore } = state;
        const currentQuestion = lesson2PostTest[posttestIndex];
        
        const userAnswer = content.trim().toUpperCase().charAt(0);
        const isCorrect = userAnswer === currentQuestion.correctAnswer;
        const newScore = isCorrect ? posttestScore + 1 : posttestScore;
        
        const feedback = isCorrect 
          ? `Correct! ${currentQuestion.explanation}`
          : `Not quite. The correct answer is ${currentQuestion.correctAnswer}. ${currentQuestion.explanation}`;
        
        await simulateTyping(feedback);
        
        if (posttestIndex < lesson2PostTest.length - 1) {
          const nextIndex = posttestIndex + 1;
          updateState({ posttestIndex: nextIndex, posttestScore: newScore });
          
          await new Promise(resolve => setTimeout(resolve, 500));
          const nextQ = lesson2PostTest[nextIndex];
          await simulateTyping(
            `Question ${nextIndex + 1} of ${lesson2PostTest.length}:\n\n${nextQ.question}\n\n${nextQ.options.join("\n")}`,
            nextQ.options.map(opt => opt.split(". ")[0])
          );
        } else {
          const finalScore = newScore;
          const percentage = Math.round((finalScore / lesson2PostTest.length) * 100);
          
          updateState({ phase: "complete", posttestScore: finalScore });
          
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
        break;
      }
        
      case "complete": {
        const q = content.toLowerCase();
        
        if (q.includes("menu") || q.includes("back") || q.includes("lesson")) {
          return true;
        }
        
        if (q.includes("budget")) {
          await simulateTyping(
            `Great question about budgeting!\n\nA budget is simply a plan for your money. Here's a basic approach:\n\n1. Calculate your monthly income\n2. List all your expenses (rent, utilities, food, transport)\n3. Subtract expenses from income\n4. Allocate what's left to savings and fun\n\nA popular method is the 50/30/20 rule:\n- 50% for needs (rent, bills, groceries)\n- 30% for wants (entertainment, dining out)\n- 20% for savings and debt repayment\n\nWant to know more about any specific aspect?`,
            ["Tell me more", "Back to menu"]
          );
        } else if (q.includes("lease") || q.includes("rent")) {
          await simulateTyping(
            `Good question about leases and renting!\n\nKey things to look for in a lease:\n- Monthly rent amount and due date\n- Security deposit amount\n- Lease length (usually 6-12 months)\n- Pet policies\n- Maintenance responsibilities\n- Early termination clauses\n- Rules about guests and noise\n\nAlways read EVERYTHING before signing, and don't be afraid to ask questions!\n\nIs there something specific about leasing you want to know?`,
            ["Tell me more", "Back to menu"]
          );
        } else if (q.includes("landlord") || q.includes("tenant")) {
          await simulateTyping(
            `Great question about tenant-landlord relationships!\n\nYour rights as a tenant typically include:\n- A safe, habitable living space\n- Privacy (landlord must give notice before entering)\n- Protection from discrimination\n- Return of security deposit (if no damage)\n\nYour responsibilities include:\n- Paying rent on time\n- Keeping the property clean\n- Reporting maintenance issues\n- Following lease rules\n\nKnow your rights - they protect you!`,
            ["Tell me more", "Back to menu"]
          );
        } else {
          await simulateTyping(
            `That's a thoughtful question!\n\nWhile I'm focused on the Living on Your Own lesson right now, I encourage you to keep exploring. The full LaunchPad Financial Literacy program covers many more topics!\n\nIs there anything specific about independent living, budgeting, or leases I can help with? Or type "menu" to go back to lesson selection.`,
            ["Ask about budgeting", "Ask about leases", "Back to menu"]
          );
        }
        break;
      }
    }
    
    return false;
  }, [addMessage, simulateTyping]);

  const resetLesson = useCallback(() => {
    setMessages([]);
    setQuickReplies([]);
    setHasStarted(false);
    stateRef.current = initialState;
    forceUpdate({});
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
