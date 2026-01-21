import { Rocket, Sparkles } from "lucide-react";

export const ChatHeader = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
            <Rocket className="w-6 h-6 animate-bounce-subtle" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-secondary-foreground" />
          </div>
        </div>
        <div>
          <h1 className="font-display font-bold text-lg">LaunchPad Money Mentor</h1>
          <p className="text-sm opacity-90">Your Financial Literacy Guide</p>
        </div>
      </div>
    </header>
  );
};
