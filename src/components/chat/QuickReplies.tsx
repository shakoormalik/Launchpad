import { Button } from "@/components/ui/button";

interface QuickRepliesProps {
  options: string[];
  onSelect: (option: string) => void;
}

export const QuickReplies = ({ options, onSelect }: QuickRepliesProps) => {
  if (options.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 px-4 py-3 animate-slide-up">
      {options.map((option, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={() => onSelect(option)}
          className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground transition-all hover:scale-105 active:scale-95 lg:text-base lg:px-5 lg:py-6"
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
