// Lesson definitions and types for the LaunchPad Money Mentor

export interface LessonInfo {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  isAvailable: boolean;
}

export const lessons: LessonInfo[] = [
  {
    id: "earning-money",
    number: 1,
    title: "Earning Money",
    description: "Learn what earning money means, different ways to earn income, and how to think about your future career.",
    duration: "10-15 min",
    topics: [
      "What does earning money mean?",
      "Ways teens can earn money",
      "Why skills and learning affect income",
      "Basic career awareness"
    ],
    isAvailable: true
  },
  {
    id: "living-on-your-own",
    number: 2,
    title: "Living on Your Own",
    description: "Discover what it takes to live independently, from budgeting to understanding leases and tenant rights.",
    duration: "20-25 min",
    topics: [
      "Earning a living & time management",
      "What independence really means",
      "The real cost of living",
      "Tenant and landlord rights",
      "Budgeting for independent living",
      "Understanding lease agreements"
    ],
    isAvailable: true
  },
  {
    id: "saving-money",
    number: 3,
    title: "Saving Money",
    description: "Learn the importance of saving, different savings strategies, and how to build an emergency fund.",
    duration: "Coming Soon",
    topics: [],
    isAvailable: false
  },
  {
    id: "budgeting-basics",
    number: 4,
    title: "Budgeting Basics",
    description: "Master the fundamentals of creating and sticking to a budget that works for your lifestyle.",
    duration: "Coming Soon",
    topics: [],
    isAvailable: false
  }
];

export const getLessonById = (id: string): LessonInfo | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getAvailableLessons = (): LessonInfo[] => {
  return lessons.filter(lesson => lesson.isAvailable);
};
