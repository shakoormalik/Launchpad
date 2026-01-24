import { Trophy, Target, BookOpen } from "lucide-react";

interface ProgressDashboardProps {
  lessonsCompleted: number;
  totalLessons: number;
  overallGrade: number;
  isPassing: boolean;
  encouragementMessage: string;
}

export const ProgressDashboard = ({
  lessonsCompleted,
  totalLessons,
  overallGrade,
  isPassing,
  encouragementMessage,
}: ProgressDashboardProps) => {
  if (lessonsCompleted === 0) return null;
  
  return (
    <div className="w-full max-w-md mb-6 animate-fade-in">
      {/* Encouragement Message */}
      <div className="bg-primary/10 rounded-xl p-4 mb-4 text-center">
        <p className="text-sm font-medium text-primary">
          {encouragementMessage}
        </p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3">
        {/* Lessons Completed */}
        <div className="bg-card border border-border rounded-lg p-3 text-center">
          <BookOpen className="w-5 h-5 mx-auto mb-1 text-primary" />
          <p className="text-lg font-bold text-foreground">{lessonsCompleted}/{totalLessons}</p>
          <p className="text-xs text-muted-foreground">Lessons</p>
        </div>
        
        {/* Overall Grade */}
        <div className={`rounded-lg p-3 text-center ${
          isPassing 
            ? "bg-primary/10 border border-primary/30" 
            : "bg-card border border-border"
        }`}>
          <Trophy className={`w-5 h-5 mx-auto mb-1 ${isPassing ? "text-primary" : "text-muted-foreground"}`} />
          <p className={`text-lg font-bold ${isPassing ? "text-primary" : "text-foreground"}`}>
            {overallGrade}%
          </p>
          <p className="text-xs text-muted-foreground">Grade</p>
        </div>
        
        {/* Passing Status */}
        <div className={`rounded-lg p-3 text-center ${
          isPassing 
            ? "bg-primary/10 border border-primary/30" 
            : "bg-muted/50 border border-border"
        }`}>
          <Target className={`w-5 h-5 mx-auto mb-1 ${isPassing ? "text-primary" : "text-muted-foreground"}`} />
          <p className={`text-sm font-bold ${isPassing ? "text-primary" : "text-muted-foreground"}`}>
            {isPassing ? "Passing!" : "80% Goal"}
          </p>
          <p className="text-xs text-muted-foreground">
            {isPassing ? "Great job!" : "Keep going!"}
          </p>
        </div>
      </div>
    </div>
  );
};
