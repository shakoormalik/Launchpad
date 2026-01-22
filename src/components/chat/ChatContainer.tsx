import { useEffect, useRef, useState, useCallback } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { QuickReplies } from "./QuickReplies";
import { LessonSelector } from "./LessonSelector";
import { useChatbot } from "@/hooks/useChatbot";
import { useLesson2Chatbot } from "@/hooks/useLesson2Chatbot";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowLeft } from "lucide-react";
import { lessons } from "@/data/lessons";
import launchpadLogo from "@/assets/launchpad-logo.png";

type ViewState = "menu" | "lesson1" | "lesson2";

export const ChatContainer = () => {
  const [viewState, setViewState] = useState<ViewState>("menu");
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
  const lesson1 = useChatbot();
  const lesson2 = useLesson2Chatbot();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Get current lesson data based on view state
  const getCurrentLesson = () => {
    if (viewState === "lesson1") return lesson1;
    if (viewState === "lesson2") return lesson2;
    return null;
  };

  const currentLesson = getCurrentLesson();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentLesson?.messages, currentLesson?.isTyping]);

  const handleSelectLesson = useCallback((lessonId: string) => {
    if (lessonId === "earning-money") {
      setViewState("lesson1");
    } else if (lessonId === "living-on-your-own") {
      setViewState("lesson2");
    }
  }, []);

  const handleBackToMenu = useCallback(() => {
    setViewState("menu");
    // Reset lessons when going back
    lesson1.messages.length > 0 && window.location.reload(); // Simple reset
  }, [lesson1.messages.length]);

  const handleSendMessage = useCallback(async (content: string) => {
    if (viewState === "lesson1") {
      await lesson1.sendMessage(content);
      // Check if user wants to go back to menu
      if (content.toLowerCase().includes("menu") || content.toLowerCase().includes("restart")) {
        // Lesson 1 handles restart internally
      }
    } else if (viewState === "lesson2") {
      const shouldGoToMenu = await lesson2.sendMessage(content);
      if (shouldGoToMenu) {
        // Mark lesson as completed if they finished
        if (!completedLessons.includes("living-on-your-own")) {
          setCompletedLessons(prev => [...prev, "living-on-your-own"]);
        }
        lesson2.resetLesson();
        setViewState("menu");
      }
    }
  }, [viewState, lesson1, lesson2, completedLessons]);

  // Render menu/lesson selector
  if (viewState === "menu") {
    return (
      <div className="flex flex-col h-screen max-h-screen bg-background">
        <ChatHeader />
        
        <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center animate-fade-in py-8 max-w-lg w-full">
            <img 
              src={launchpadLogo} 
              alt="LaunchPad Financial Literacy Series" 
              className="h-20 w-auto mb-6"
            />
            
            <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
              Welcome to LaunchPad!
            </h2>
            <p className="text-muted-foreground text-center max-w-sm mb-8">
              Your journey to financial literacy starts here. Choose a lesson to begin learning!
            </p>
            
            <LessonSelector 
              lessons={lessons} 
              onSelectLesson={handleSelectLesson}
              completedLessons={completedLessons}
            />
            
            <p className="text-xs text-muted-foreground mt-6 text-center max-w-xs">
              This is part of the LaunchPad Financial Literacy program, designed to help students learn independently.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Render lesson view
  const lessonData = currentLesson!;
  const lessonTitle = viewState === "lesson1" ? "Earning Money" : "Living on Your Own";

  return (
    <div className="flex flex-col h-screen max-h-screen bg-background">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!lessonData.hasStarted ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in py-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToMenu}
              className="absolute top-20 left-4 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Lessons
            </Button>
            
            <img 
              src={launchpadLogo} 
              alt="LaunchPad Financial Literacy Series" 
              className="h-20 w-auto mb-6"
            />
            
            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
              {viewState === "lesson1" ? "Lesson 1" : "Lesson 2"}
            </span>
            
            <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
              {lessonTitle}
            </h2>
            <p className="text-muted-foreground text-center max-w-sm mb-6">
              {viewState === "lesson1" 
                ? "Learn what earning money means and how you can start building your financial future today!"
                : "Discover what it really takes to live independently and manage your own life successfully!"
              }
            </p>
            
            <Button 
              onClick={lessonData.startLesson}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-soft transition-all hover:scale-105 active:scale-95"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start the Lesson
            </Button>
            
            <p className="text-xs text-muted-foreground mt-4 text-center max-w-xs">
              This is part of the LaunchPad Financial Literacy program
            </p>
          </div>
        ) : (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToMenu}
              className="text-muted-foreground hover:text-foreground mb-2"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Lessons
            </Button>
            
            {lessonData.messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}
            
            {lessonData.isTyping && (
              <ChatMessage role="mentor" content="" isTyping />
            )}
            
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      
      {lessonData.hasStarted && (
        <>
          <QuickReplies options={lessonData.quickReplies} onSelect={handleSendMessage} />
          <ChatInput onSend={handleSendMessage} disabled={lessonData.isTyping} />
        </>
      )}
    </div>
  );
};
