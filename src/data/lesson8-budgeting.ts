// Lesson 8: The Art of Budgeting

export interface PreTestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface PostTestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface LessonTopic {
  id: string;
  title: string;
  content: string;
  discussionQuestion: string;
}

export const lessonIntroduction = `Hey! I'm LaunchPad Money Mentor, and I'm excited to be your guide for this lesson on The Art of Budgeting.

Budgeting is one of the most important money skills you can learn. It's not about restriction or punishment — it's about control, choices, and building the life you want on purpose. In this lesson, you'll learn what budgeting really is, why it matters, and how to use it as a tool to reach your goals.

By the end of this lesson, you'll understand how to:
• Use a budget to guide your spending decisions
• Track and control where your money goes
• Build habits that support saving and financial stability
• Avoid common budgeting mistakes and misconceptions`;

export const preTestIntro = `Let's see what you already know about budgeting!`;

export const preTest: PreTestQuestion[] = [
  {
    id: "pre1",
    question: "What does it mean to budget your money?",
    options: ["To spend all of your money quickly", "To plan how you will spend and save your money", "To borrow more money than you earn", "To only buy what you want"],
    correctAnswer: "To plan how you will spend and save your money"
  },
  {
    id: "pre2",
    question: "Why is it important to maintain a budget?",
    options: ["To track income and expenses and help reach financial goals", "To spend money faster", "To avoid saving any money", "To impress your friends"],
    correctAnswer: "To track income and expenses and help reach financial goals"
  },
  {
    id: "pre3",
    question: "Which of the following is a common misconception about budgeting?",
    options: ["Budgeting is only for people with low income", "Budgeting helps manage money", "Budgeting helps save for future goals", "Budgeting is a skill anyone can learn"],
    correctAnswer: "Budgeting is only for people with low income"
  },
  {
    id: "pre4",
    question: "Which step is part of creating a personal budget?",
    options: ["Ignoring your income", "Recording all income and expenses", "Spending without a plan", "Avoiding financial goals"],
    correctAnswer: "Recording all income and expenses"
  },
  {
    id: "pre5",
    question: "Which behavior supports healthy spending habits?",
    options: ["Making impulsive purchases", "Tracking expenses and avoiding unnecessary spending", "Spending more than you earn", "Avoiding any savings goals"],
    correctAnswer: "Tracking expenses and avoiding unnecessary spending"
  }
];

export const preTestComplete = `Great start! Now let's master the art of budgeting.`;

export const topics: LessonTopic[] = [
  {
    id: "topic1",
    title: "What Is Budgeting?",
    content: `Budgeting is the process of planning how you will use your money before you spend it. Instead of guessing where your money went at the end of the month, a budget lets you decide ahead of time where your money should go.

A budget shows two main things: how much money you have coming in (income) and how much money is going out (expenses). When you compare the two, you can make sure you are not spending more than you earn.

Think of a budget like a map or GPS for your money. It gives you direction, helps you avoid getting lost, and keeps you moving toward your goals instead of drifting from paycheck to paycheck.`,
    discussionQuestion: "If you had to describe budgeting to a friend, how would you explain it?"
  },
  {
    id: "topic2",
    title: "Why Budgeting Is Important",
    content: `Budgeting is important because it gives you control over your money instead of letting your money control you.

A good budget:
• Encourages mindful spending and saving
• Reduces financial stress
• Helps you avoid overspending
• Builds habits that support financial independence
• Prepares you for emergencies
• Creates a clear path toward long-term goals

Without a budget, many people spend first and hope for the best. With a budget, you make decisions on purpose and give every dollar a job.`,
    discussionQuestion: "What problems might happen if someone doesn't have a budget?"
  },
  {
    id: "topic3",
    title: "Steps to Creating a Budget",
    content: `Creating a budget is not complicated, but it does require honesty and consistency.

The basic steps include:
1. Identify all sources of income (allowance, job, gifts, etc.)
2. List all expenses, both regular and occasional
3. Set clear financial goals
4. Decide how much money should go into each category (needs, wants, savings)
5. Track your spending and review your budget regularly

A budget is not something you set once and forget. It is a living tool that should change as your life and priorities change.`,
    discussionQuestion: "What would be the hardest part of creating a budget for you?"
  },
  {
    id: "topic4",
    title: "Tracking Expenses and Reviewing Your Budget",
    content: `Tracking expenses means writing down everything you spend money on, no matter how small. This can be done using a notebook, spreadsheet, or budgeting app.

When you track your expenses, you begin to see patterns in your spending. You may be surprised how much money goes to small purchases that do not seem important at the time.

Budget review is the process of comparing what you planned to spend with what you actually spent. This helps you:
• Spot problems early
• Make better decisions next month
• Stay focused on your goals
• Build discipline and awareness`,
    discussionQuestion: "How often do you think someone should review their budget?"
  },
  {
    id: "topic5",
    title: "Mindful Spending and Healthy Habits",
    content: `Mindful spending means pausing before you buy something and asking yourself if it is a need or a want and whether it fits your goals.

Healthy money habits include:
• Avoiding impulse purchases
• Practicing delayed gratification
• Setting spending limits
• Making saving a priority
• Being honest about your choices

Small daily decisions have a big impact over time. When you practice mindful spending, you start building a future instead of just reacting to the moment.`,
    discussionQuestion: "What's one spending habit you'd like to change or improve?"
  },
  {
    id: "topic6",
    title: "Common Misconceptions About Budgeting",
    content: `Many people avoid budgeting because of myths and misunderstandings.

Some common misconceptions include:
• "I don't earn enough to budget." (In reality, budgeting is most important when money is tight.)
• "Budgeting is too restrictive." (A good budget gives freedom, not punishment.)
• "Budgeting means no fun." (A budget should include money for enjoyment, just in a planned way.)

Understanding the truth about budgeting makes it easier to stick with it.`,
    discussionQuestion: "Have you ever believed one of these misconceptions? What changed your mind?"
  },
  {
    id: "topic7",
    title: "Evaluating Your Spending Behavior",
    content: `One of the most powerful money skills is learning to evaluate your own behavior.

A good exercise is to track every expense for a week and then review it. Look for:
• Patterns
• Waste
• Areas where you could improve
• Places where your money is not matching your priorities

This process helps you become intentional instead of accidental with your money.`,
    discussionQuestion: "If you tracked every expense for a week, what do you think you'd discover?"
  },
  {
    id: "topic8",
    title: "Putting It All Together in Real Life",
    content: `In real life, budgeting is about balance. You need to:
• Pay bills
• Save for the future
• Enjoy life
• Handle unexpected expenses

A good budget helps you do all of these without guilt or stress. It is not about being perfect — it is about being consistent and improving over time.`,
    discussionQuestion: "How would having a budget change the way you think about money day-to-day?"
  }
];

export const postTestIntro = `Awesome! Let's see what you've learned about budgeting.`;

export const postTest: PostTestQuestion[] = [
  {
    id: "post1",
    question: "What is the purpose of budgeting?",
    options: ["To track expenses", "To make informed spending decisions", "To maintain financial well-being", "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Budgeting serves multiple purposes: tracking expenses, making informed decisions, and maintaining financial health."
  },
  {
    id: "post2",
    question: "What are the benefits of budgeting?",
    options: ["Helps manage money effectively", "Provides a clear overview of expenses and income", "Enables evaluation of spending choices", "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Budgeting offers many benefits including money management, financial visibility, and spending awareness."
  },
  {
    id: "post3",
    question: "Which technique is useful for tracking expenses?",
    options: ["Writing down every expense in a notebook", "Using a budgeting app or spreadsheet", "Both A and B", "Ignoring expenses and relying on memory"],
    correctAnswer: "Both A and B",
    explanation: "Both notebooks and digital tools are effective ways to track your expenses."
  },
  {
    id: "post4",
    question: "How can you monitor your budget's progress?",
    options: ["Regularly reviewing your spending against your budget", "Adjusting your budget as needed", "Analyzing your financial goals", "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Monitoring your budget involves regular review, making adjustments, and staying focused on your goals."
  },
  {
    id: "post5",
    question: "How can budgeting help with making informed decisions?",
    options: ["It allows you to prioritize expenses based on your financial goals", "It helps you identify areas where you can cut back or save money", "It ensures you don't overspend and stay within your means", "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Budgeting helps with prioritization, identifying savings opportunities, and preventing overspending."
  },
  {
    id: "post6",
    question: "Why is it important to create a budget regularly?",
    options: ["To adapt to changes in income and expenses", "To maintain financial well-being", "To evaluate and adjust spending choices", "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Regular budgeting helps you adapt to changes, maintain financial health, and continuously improve your spending."
  },
  {
    id: "post7",
    question: "True or False: Budgeting is only necessary for people with limited income.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. Budgeting is beneficial for everyone, regardless of income level. It helps you manage money intentionally."
  },
  {
    id: "post8",
    question: "True or False: Budgeting requires strict restrictions on spending and eliminates all flexibility.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. A good budget includes flexibility and room for enjoyment — it's about making intentional choices, not eliminating fun."
  }
];

export const lessonCompletion = `Budgeting is more than numbers — it's a strategy for building the life you want.

When you tell your money where to go instead of wondering where it went, you take control of your future. Start small, stay consistent, and watch your financial confidence grow.

Great job completing this lesson! 📊`;
