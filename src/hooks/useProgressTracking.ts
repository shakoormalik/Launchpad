
import { useState, useCallback, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  postTestScore: number;
  postTestTotal: number;
  completedAt?: string;
}

export interface ProgressData {
  lessonsCompleted: LessonProgress[];
  totalLessonsCompleted: number;
}

export const useProgressTracking = () => {
  const { user, profile } = useAuth();
  const [progress, setProgress] = useState<ProgressData>({ lessonsCompleted: [], totalLessonsCompleted: 0 });
  const [loading, setLoading] = useState(true);

  // Fetch progress from Supabase
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchProgress = async () => {
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id);

        if (error) throw error;

        const lessonsCompleted: LessonProgress[] = data.map((row: any) => ({
          lessonId: row.lesson_id,
          completed: row.status === 'completed',
          postTestScore: row.score_post || 0,
          postTestTotal: 100, // Defaulting to 100 as total isn't in DB schema yet, or we assume percentage
          completedAt: row.updated_at
        }));

        setProgress({
          lessonsCompleted,
          totalLessonsCompleted: lessonsCompleted.length
        });
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log("Fetch progress aborted");
          return;
        }
        console.error("Error fetching progress:", error);
        // We log the error but don't show a toast to avoid interrupting the user experience
        // specifically when they just signed in and progress might not be ready.
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [user]);

  const recordLessonCompletion = useCallback(async (
    lessonId: string,
    postTestScore: number,
    postTestTotal: number
  ) => {
    if (!user) return;

    // Optimistic update
    setProgress(prev => {
      const existingIndex = prev.lessonsCompleted.findIndex(l => l.lessonId === lessonId);
      const newLessonProgress: LessonProgress = {
        lessonId,
        completed: true,
        postTestScore,
        postTestTotal,
        completedAt: new Date().toISOString(),
      };

      let newLessonsCompleted: LessonProgress[];
      if (existingIndex >= 0) {
        newLessonsCompleted = [...prev.lessonsCompleted];
        newLessonsCompleted[existingIndex] = newLessonProgress;
      } else {
        newLessonsCompleted = [...prev.lessonsCompleted, newLessonProgress];
      }

      return {
        lessonsCompleted: newLessonsCompleted,
        totalLessonsCompleted: newLessonsCompleted.length,
      };
    });

    // Save to Supabase
    try {
      // Emergency: Ensure profile exists to prevent "violates foreign key constraint" error
      // This happens if the profile wasn't created during signup (e.g. network error)
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert(
          {
            id: user.id,
            first_name: 'Student',
            last_name: '(Recovered)',
            group_name: 'Self-Study'
          },
          { onConflict: 'id', ignoreDuplicates: true }
        );

      if (profileError) {
        console.warn("Attempted to auto-fix profile but failed:", profileError);
      }

      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          lesson_id: lessonId,
          status: 'completed',
          score_post: postTestScore,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,lesson_id'
        });

      if (error) throw error;
      toast.success("Progress saved!");
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log("Record progress aborted");
        return;
      }
      console.error("Error saving progress:", error);
      // We don't always want to show an error toast if it's just a network flutter or a double-save
      if (!error.message?.includes('duplicate key')) {
        toast.error(error.message || "Failed to save progress");
      }
    }
  }, [user]);

  const getLessonProgress = useCallback((lessonId: string): LessonProgress | null => {
    return progress.lessonsCompleted.find(l => l.lessonId === lessonId) || null;
  }, [progress]);

  const getOverallGrade = useCallback((): {
    percentage: number;
    isPassing: boolean;
    totalCorrect: number;
    totalQuestions: number;
    lessonsCompleted: number;
  } => {
    if (progress.lessonsCompleted.length === 0) {
      return { percentage: 0, isPassing: false, totalCorrect: 0, totalQuestions: 0, lessonsCompleted: 0 };
    }

    // Simplification since we might not have exact totals in DB
    const totalScore = progress.lessonsCompleted.reduce((sum, l) => sum + l.postTestScore, 0);
    // Assuming each lesson is worth 100 points for now if total missing, or use stored total
    const totalPossible = progress.lessonsCompleted.length * 100;

    // Use the actual totals if we have them, but for the DB migration, we might lose 'total' info
    // For now, let's just use the average score
    const average = Math.round(totalScore / progress.lessonsCompleted.length);

    return {
      percentage: average,
      isPassing: average >= 80,
      totalCorrect: totalScore,
      totalQuestions: totalPossible,
      lessonsCompleted: progress.lessonsCompleted.length,
    };
  }, [progress]);

  const getEncouragementMessage = useCallback((): string => {
    const completed = progress.lessonsCompleted.length;
    const grade = getOverallGrade();
    const name = profile?.first_name ? ` ${profile.first_name}` : "";

    if (completed === 0) {
      return `Welcome${name}! Ready to start your first lesson?`;
    }

    if (completed === 1) {
      return `🚀 Great start${name}! You've completed your first lesson!`;
    }

    if (completed >= 3 && completed < 7) {
      return `🌟 Congratulations${name}, you're making good progress! ${completed} lessons completed!`;
    }

    if (completed >= 7 && completed < 12) {
      return `💪 You're on fire${name}! ${completed} lessons done - keep up the great work!`;
    }

    if (completed >= 12) {
      return `🏆 Amazing${name}! You've completed ${completed} lessons! You're becoming a financial literacy champion!`;
    }

    if (grade.isPassing) {
      return `⭐ Excellent work${name}! Your overall grade is ${grade.percentage}% - you're passing with flying colors!`;
    }

    return `📚 Keep learning${name}! You've completed ${completed} lessons so far.`;
  }, [progress, getOverallGrade, profile]);

  const resetProgress = useCallback(async () => {
    if (!user) return;
    // Logic to clear DB progress if needed, usually we don't want this for students
    setProgress({ lessonsCompleted: [], totalLessonsCompleted: 0 });
  }, [user]);

  return {
    progress,
    loading,
    recordLessonCompletion,
    getLessonProgress,
    getOverallGrade,
    getEncouragementMessage,
    resetProgress,
  };
};

