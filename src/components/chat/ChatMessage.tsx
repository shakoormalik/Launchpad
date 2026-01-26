import { cn } from "@/lib/utils";
import { Rocket, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "mentor";
  content: string;
  isTyping?: boolean;
}

export const ChatMessage = ({ role, content, isTyping }: ChatMessageProps) => {
  const isMentor = role === "mentor";

  const formatContent = (text: string) => {
    // Split by **text** pattern
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        // Remove asterisks and render bold
        return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div
      className={cn(
        "flex gap-3 animate-fade-in",
        isMentor ? "justify-start" : "justify-end"
      )}
    >
      {isMentor && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-soft">
          <Rocket className="w-5 h-5 text-primary-foreground" />
        </div>
      )}

      <div
        className={cn(
          "max-w-[80%] px-4 py-3 rounded-2xl",
          isMentor
            ? "bg-chat-mentor text-chat-mentor-foreground rounded-tl-md"
            : "bg-chat-user text-chat-user-foreground rounded-tr-md"
        )}
      >
        {isTyping ? (
          <div className="flex gap-1.5 py-1">
            <span className="w-2 h-2 rounded-full bg-current opacity-60 animate-typing" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-current opacity-60 animate-typing" style={{ animationDelay: "200ms" }} />
            <span className="w-2 h-2 rounded-full bg-current opacity-60 animate-typing" style={{ animationDelay: "400ms" }} />
          </div>
        ) : (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{formatContent(content)}</p>
        )}
      </div>

      {!isMentor && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <User className="w-5 h-5 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
};
