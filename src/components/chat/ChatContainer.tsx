import { useEffect, useRef } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { QuickReplies } from "./QuickReplies";
import { useChatbot } from "@/hooks/useChatbot";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import launchpadLogo from "@/assets/launchpad-logo.png";

export const ChatContainer = () => {
  const { messages, isTyping, quickReplies, sendMessage, startLesson, hasStarted } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen max-h-screen bg-background">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!hasStarted ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in py-8">
            <img 
              src={launchpadLogo} 
              alt="LaunchPad Financial Literacy Series" 
              className="h-20 w-auto mb-6"
            />
            
            <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
              Welcome to LaunchPad!
            </h2>
            <p className="text-muted-foreground text-center max-w-sm mb-6">
              Ready to learn about earning money? Let's explore how you can start building your financial future today!
            </p>
            
            <Button 
              onClick={startLesson}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-soft transition-all hover:scale-105 active:scale-95"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start the Lesson
            </Button>
            
            <p className="text-xs text-muted-foreground mt-4 text-center max-w-xs">
              This is a demo of the LaunchPad Financial Literacy program
            </p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}
            
            {isTyping && (
              <ChatMessage role="mentor" content="" isTyping />
            )}
            
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      
      {hasStarted && (
        <>
          <QuickReplies options={quickReplies} onSelect={sendMessage} />
          <ChatInput onSend={sendMessage} disabled={isTyping} />
        </>
      )}
    </div>
  );
};
