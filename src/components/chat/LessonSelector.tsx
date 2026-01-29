import { LessonInfo } from "@/data/lessons";
import { LessonProgress } from "@/hooks/useProgressTracking";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Lock, Trophy, RefreshCw } from "lucide-react";

interface LessonSelectorProps {
  lessons: LessonInfo[];
  onSelectLesson: (lessonId: string) => void;
  completedLessons?: string[];
  lessonProgress?: Map<string, LessonProgress>;
}

export const LessonSelector = ({
  lessons,
  onSelectLesson,
  completedLessons = [],
  lessonProgress = new Map()
}: LessonSelectorProps) => {
  return (
    <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full mb-2">
        <h3 className="text-lg font-semibold text-center text-foreground">
          Choose a Lesson
        </h3>
      </div>

      {lessons.map((lesson) => {
        const isCompleted = completedLessons.includes(lesson.id);
        const progress = lessonProgress.get(lesson.id);
        const percentage = progress
          ? Math.round((progress.postTestScore / progress.postTestTotal) * 100)
          : null;
        const isPassing = percentage !== null && percentage >= 80;

        const isLesson1 = lesson.id === "earning-money";

        return (
          <div
            key={lesson.id}
            className={`relative rounded-xl border-2 transition-all overflow-hidden h-full flex flex-col ${lesson.isAvailable
              ? isCompleted
                ? (isPassing || isLesson1)
                  ? "border-primary/50 bg-primary/5 hover:border-primary hover:shadow-md cursor-pointer"
                  : "border-accent/50 bg-accent/5 hover:border-accent hover:shadow-md cursor-pointer"
                : "border-border hover:border-primary/50 hover:shadow-md cursor-pointer"
              : "border-muted opacity-60"
              }`}
          >
            <Button
              variant="ghost"
              className="w-full h-full p-3 sm:p-4 flex flex-col items-start gap-2 text-left whitespace-normal flex-1"
              disabled={!lesson.isAvailable}
              onClick={() => lesson.isAvailable && onSelectLesson(lesson.id)}
            >
              <div className="flex items-center justify-between w-full gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                    Lesson {lesson.number}
                  </span>
                  {isCompleted && (
                    (isPassing || isLesson1) ? (
                      <div className="flex items-center gap-1">
                        <Badge variant="default" className="text-[10px] px-1.5 py-0 bg-primary hover:bg-primary/90">
                          Completed
                        </Badge>
                        {!isLesson1 && (
                          <>
                            <Trophy className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs font-medium text-primary">{percentage}%</span>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                          Try Again
                        </Badge>
                        <RefreshCw className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                        <span className="text-xs font-medium text-muted-foreground">{percentage}%</span>
                      </div>
                    )
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

              {isCompleted && !isPassing && !isLesson1 && (
                <p className="text-xs text-accent-foreground/70 italic">
                  💪 Try again to reach 80% passing!
                </p>
              )}

              {lesson.isAvailable && lesson.topics.length > 0 && !isCompleted && (
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
