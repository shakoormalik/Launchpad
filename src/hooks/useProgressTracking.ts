import { useState, useCallback, useEffect } from "react";

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

const STORAGE_KEY = "launchpad_progress";

export const useProgressTracking = () => {
  const [progress, setProgress] = useState<ProgressData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to load progress from storage:", e);
    }
    return { lessonsCompleted: [], totalLessonsCompleted: 0 };
  });

  // Persist to localStorage whenever progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error("Failed to save progress to storage:", e);
    }
  }, [progress]);

  const recordLessonCompletion = useCallback((
    lessonId: string, 
    postTestScore: number, 
    postTestTotal: number
  ) => {
    setProgress(prev => {
      // Check if already completed
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
        // Update existing - keep higher score
        const existing = prev.lessonsCompleted[existingIndex];
        const existingPercentage = (existing.postTestScore / existing.postTestTotal) * 100;
        const newPercentage = (postTestScore / postTestTotal) * 100;
        
        if (newPercentage >= existingPercentage) {
          newLessonsCompleted = [...prev.lessonsCompleted];
          newLessonsCompleted[existingIndex] = newLessonProgress;
        } else {
          newLessonsCompleted = prev.lessonsCompleted;
        }
      } else {
        // Add new
        newLessonsCompleted = [...prev.lessonsCompleted, newLessonProgress];
      }
      
      return {
        lessonsCompleted: newLessonsCompleted,
        totalLessonsCompleted: newLessonsCompleted.length,
      };
    });
  }, []);

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
    
    const totalCorrect = progress.lessonsCompleted.reduce((sum, l) => sum + l.postTestScore, 0);
    const totalQuestions = progress.lessonsCompleted.reduce((sum, l) => sum + l.postTestTotal, 0);
    const percentage = Math.round((totalCorrect / totalQuestions) * 100);
    
    return {
      percentage,
      isPassing: percentage >= 80,
      totalCorrect,
      totalQuestions,
      lessonsCompleted: progress.lessonsCompleted.length,
    };
  }, [progress]);

  const getEncouragementMessage = useCallback((): string => {
    const completed = progress.lessonsCompleted.length;
    const grade = getOverallGrade();
    
    if (completed === 0) {
      return "";
    }
    
    if (completed === 1) {
      return "🚀 Great start! You've completed your first lesson!";
    }
    
    if (completed >= 3 && completed < 7) {
      return `🌟 Congratulations, you're making good progress! ${completed} lessons completed!`;
    }
    
    if (completed >= 7 && completed < 12) {
      return `💪 You're on fire! ${completed} lessons done - keep up the great work!`;
    }
    
    if (completed >= 12) {
      return `🏆 Amazing! You've completed ${completed} lessons! You're becoming a financial literacy champion!`;
    }
    
    if (grade.isPassing) {
      return `⭐ Excellent work! Your overall grade is ${grade.percentage}% - you're passing with flying colors!`;
    }
    
    return `📚 Keep learning! You've completed ${completed} lessons so far.`;
  }, [progress, getOverallGrade]);

  const resetProgress = useCallback(() => {
    setProgress({ lessonsCompleted: [], totalLessonsCompleted: 0 });
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    progress,
    recordLessonCompletion,
    getLessonProgress,
    getOverallGrade,
    getEncouragementMessage,
    resetProgress,
  };
};

