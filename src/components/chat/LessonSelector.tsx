import { LessonInfo } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, CheckCircle, Lock } from "lucide-react";

interface LessonSelectorProps {
  lessons: LessonInfo[];
  onSelectLesson: (lessonId: string) => void;
  completedLessons?: string[];
}

export const LessonSelector = ({ lessons, onSelectLesson, completedLessons = [] }: LessonSelectorProps) => {
  return (
    <div className="space-y-4 w-full max-w-md">
      <h3 className="text-lg font-semibold text-center text-foreground mb-4">
        Choose a Lesson
      </h3>
      
      {lessons.map((lesson) => {
        const isCompleted = completedLessons.includes(lesson.id);
        
        return (
          <div
            key={lesson.id}
            className={`relative rounded-xl border-2 transition-all overflow-hidden ${
              lesson.isAvailable 
                ? "border-border hover:border-primary/50 hover:shadow-md cursor-pointer" 
                : "border-muted opacity-60"
            }`}
          >
            <Button
              variant="ghost"
              className="w-full h-auto p-3 sm:p-4 flex flex-col items-start gap-2 text-left whitespace-normal"
              disabled={!lesson.isAvailable}
              onClick={() => lesson.isAvailable && onSelectLesson(lesson.id)}
            >
              <div className="flex items-center justify-between w-full gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                    Lesson {lesson.number}
                  </span>
                  {isCompleted && (
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                  {lesson.isAvailable ? (
                    <>
                      <Clock className="w-3 h-3 flex-shrink-0" />
                      {lesson.duration}
                    </>
                  ) : (
                    <>
                      <Lock className="w-3 h-3 flex-shrink-0" />
                      Coming Soon
                    </>
                  )}
                </div>
              </div>
              
              <h4 className="font-semibold text-foreground text-base break-words w-full">
                {lesson.title}
              </h4>
              
              <p className="text-sm text-muted-foreground line-clamp-2 break-words w-full">
                {lesson.description}
              </p>
              
              {lesson.isAvailable && lesson.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1 w-full">
                  {lesson.topics.slice(0, 2).map((topic, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded truncate max-w-[140px] sm:max-w-none"
                    >
                      {topic}
                    </span>
                  ))}
                  {lesson.topics.length > 2 && (
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      +{lesson.topics.length - 2} more
                    </span>
                  )}
                </div>
              )}
            </Button>
          </div>
        );
      })}
    </div>
  );
};
