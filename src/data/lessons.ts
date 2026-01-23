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
      "Tenant and landlord rights"
    ],
    isAvailable: true
  },
  {
    id: "understanding-wants-needs",
    number: 3,
    title: "Understanding Wants & Needs",
    description: "Learn the difference between what you truly need and what you simply want, and how this affects your budget.",
    duration: "15-20 min",
    topics: [
      "What are wants and needs?",
      "How they affect your budget",
      "Critical thinking before spending",
      "Impulse vs intentional spending"
    ],
    isAvailable: true
  },
  {
    id: "saving-investing",
    number: 4,
    title: "Saving & Investing",
    description: "Learn how saving and investing help you protect and grow your money over time.",
    duration: "20-25 min",
    topics: [
      "What does it mean to save?",
      "What does it mean to invest?",
      "Difference between saving and investing",
      "Smart investment principles"
    ],
    isAvailable: true
  },
  {
    id: "influence-of-advertising",
    number: 5,
    title: "The Influence of Advertising",
    description: "Learn how advertising works, the techniques it uses to influence you, and how to protect yourself.",
    duration: "15-20 min",
    topics: [
      "What is advertising?",
      "Common advertising techniques",
      "Deceptive advertising",
      "Becoming a smarter consumer"
    ],
    isAvailable: true
  },
  {
    id: "cost-of-college",
    number: 6,
    title: "The Cost of College",
    description: "Understand what college really costs, including tuition, fees, housing, and how financial aid works.",
    duration: "20-25 min",
    topics: [
      "Tuition and fees",
      "Room and board",
      "Financial aid",
      "Understanding student loans"
    ],
    isAvailable: true
  },
  {
    id: "protecting-insuring",
    number: 7,
    title: "Protecting & Insuring Your Money",
    description: "Learn about financial risks, how insurance works, and how to protect your money and identity.",
    duration: "25-30 min",
    topics: [
      "Understanding financial risk",
      "The three ways to manage risk",
      "How insurance works",
      "Protecting yourself from identity theft"
    ],
    isAvailable: true
  },
  {
    id: "art-of-budgeting",
    number: 8,
    title: "The Art of Budgeting",
    description: "Master the fundamentals of creating and sticking to a budget that works for your lifestyle.",
    duration: "15-20 min",
    topics: [
      "What is budgeting?",
      "Why budgeting is important",
      "Steps to creating a budget",
      "Mindful spending habits"
    ],
    isAvailable: true
  },
  {
    id: "understanding-banking",
    number: 9,
    title: "Understanding Banking Services",
    description: "Learn how banks and credit unions work, what accounts do, and how to manage your money safely.",
    duration: "20-25 min",
    topics: [
      "What do banks do?",
      "Checking vs savings accounts",
      "Understanding bank statements",
      "Avoiding fees and fraud"
    ],
    isAvailable: true
  },
  {
    id: "take-home-pay",
    number: 10,
    title: "Take-Home Pay – Taxes & Deductions",
    description: "Understand what happens between when you earn money and when you receive it.",
    duration: "15-20 min",
    topics: [
      "Gross pay vs net pay",
      "Payroll taxes and deductions",
      "The W-4 form",
      "Reading your pay stub"
    ],
    isAvailable: true
  },
  {
    id: "financial-decisions",
    number: 11,
    title: "Making Personal Financial Decisions",
    description: "Learn how to make smart money decisions that help you today and set you up for the future.",
    duration: "15-20 min",
    topics: [
      "Decision-making types",
      "The financial decision process",
      "Risk and opportunity cost",
      "Internal and external influences"
    ],
    isAvailable: true
  },
  {
    id: "credit-score",
    number: 12,
    title: "Your Credit Score & You",
    description: "Understand what a credit score is, why it matters, and how to build and protect it.",
    duration: "15-20 min",
    topics: [
      "What is credit?",
      "Understanding the credit score range",
      "The five factors of your credit score",
      "Building smart credit habits"
    ],
    isAvailable: true
  },
  {
    id: "consumer-privacy",
    number: 13,
    title: "Consumer Privacy",
    description: "Learn what consumer privacy is, why it matters, and how to protect your personal information in the digital age.",
    duration: "20-25 min",
    topics: [
      "What is data privacy?",
      "Data profiles and how they affect you",
      "Laws that protect your privacy",
      "Practical steps to protect yourself"
    ],
    isAvailable: true
  },
  {
    id: "using-credit",
    number: 14,
    title: "Using Credit",
    description: "Learn how to use credit wisely, understand the types of consumer credit, and avoid common debt traps.",
    duration: "25-30 min",
    topics: [
      "What it means to use credit",
      "Pros and cons of borrowing",
      "Creditworthiness and building credit",
      "Managing a safe debt load"
    ],
    isAvailable: true
  }
];

export const getLessonById = (id: string): LessonInfo | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getAvailableLessons = (): LessonInfo[] => {
  return lessons.filter(lesson => lesson.isAvailable);
};
