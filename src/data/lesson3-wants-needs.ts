// Lesson 3: Understanding Wants & Needs

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

export const lessonIntroduction = `Hey there! I'm LaunchPad Money Mentor and I'm glad you're here! One of the most important money skills you'll ever learn is how to tell the difference between what you truly need and what you simply want.

Most financial problems don't start with not earning enough money — they start with spending decisions. This lesson will help you learn how to take control of those decisions so your money works for you instead of against you.

By the end of this lesson, you'll understand:
• The true difference between wants and needs
• Why this difference matters in real life
• How wants and needs affect your budget
• How to think critically before spending
• How to prioritize your money in smart ways`;

export const preTestIntro = `Before we dive in, let's see what you already know about wants and needs. Don't worry — this isn't graded! It just helps us understand where to focus.`;

export const preTest: PreTestQuestion[] = [
  {
    id: "pre1",
    question: "What is the best definition of a need?",
    options: ["Something you want for fun", "An essential item required for survival", "A luxury item", "Something bought on impulse"],
    correctAnswer: "An essential item required for survival"
  },
  {
    id: "pre2",
    question: "Which of the following is a want?",
    options: ["Rent", "Groceries", "Designer shoes", "Medical care"],
    correctAnswer: "Designer shoes"
  },
  {
    id: "pre3",
    question: "Why is it important to know the difference between wants and needs?",
    options: ["To spend more money", "To avoid saving", "To prioritize essential expenses", "To impress others"],
    correctAnswer: "To prioritize essential expenses"
  },
  {
    id: "pre4",
    question: "Which choice shows good financial judgment?",
    options: ["Buying concert tickets before paying rent", "Buying a new phone even though the old one works", "Paying bills before spending on entertainment", "Using credit for wants"],
    correctAnswer: "Paying bills before spending on entertainment"
  },
  {
    id: "pre5",
    question: "What happens when people confuse wants with needs?",
    options: ["Their money lasts longer", "Their budget usually breaks down", "They save more", "They become richer"],
    correctAnswer: "Their budget usually breaks down"
  }
];

export const preTestComplete = `Great job completing the pre-test! Now let's learn about the important difference between wants and needs.`;

export const topics: LessonTopic[] = [
  {
    id: "topic1",
    title: "What Are Wants and Needs?",
    content: `A need is something you must have to live a safe and healthy life. This includes things like food, water, shelter, basic clothing, healthcare, and transportation to school or work. Without these, life becomes unstable or even dangerous.

A want is something that makes life more fun, comfortable, or exciting. This could be a new phone, designer clothes, video games, or eating out. Wants are not bad — they are part of enjoying life — but they are not required for survival.

Many people get into financial trouble because they start calling wants "needs." When that happens, spending gets out of control and budgets fall apart. Learning to be honest with yourself is the first step to mastering your money.`,
    discussionQuestion: "Can you think of something you once thought was a need but now realize was actually a want?"
  },
  {
    id: "topic2",
    title: "Why Knowing the Difference Matters",
    content: `Every dollar you earn has a job. If you don't decide where it goes, it will disappear without helping your future.

When you clearly understand your needs, you protect your stability. When you understand your wants, you protect yourself from impulse spending and regret.

Choosing needs first does not mean you can never enjoy life. It means you build a strong foundation before you spend on extras. This habit is one of the biggest differences between people who feel calm about money and people who feel stressed about money.`,
    discussionQuestion: "Have you ever spent money on a want and later wished you had saved it? What happened?"
  },
  {
    id: "topic3",
    title: "How Wants and Needs Affect Your Budget",
    content: `A budget is simply a plan for your money. In a smart budget, needs come first, then savings, and then wants.

When people build budgets that are full of wants but ignore needs or savings, they often run out of money, miss payments, or rely on credit.

When you organize your budget by priorities, your money starts working for you instead of against you.`,
    discussionQuestion: "If you had to create a simple budget, what would you put in your 'needs' category first?"
  },
  {
    id: "topic4",
    title: "Critical Thinking Before You Spend",
    content: `Critical thinking means slowing down and asking good questions before you buy something.

Before spending, ask yourself:
• Do I really need this, or do I just want it?
• What will I give up if I buy this?
• Will this matter to me in a month or a year?

This simple pause can save you hundreds or thousands of dollars over time.`,
    discussionQuestion: "What's one question you could ask yourself before making a purchase to help you decide if it's a smart choice?"
  },
  {
    id: "topic5",
    title: "Impulse Spending vs. Intentional Spending",
    content: `Impulse spending happens when emotions are in control. You see something, feel excited, and buy it without thinking.

Intentional spending happens when you use your goals and priorities to guide your choices.

The more you practice intentional spending, the more confident and in-control you become with your money.`,
    discussionQuestion: "Can you think of a time when you bought something on impulse? How did you feel about it later?"
  },
  {
    id: "topic6",
    title: "Prioritizing Needs Over Wants",
    content: `Prioritizing means deciding what comes first.

When you pay for your needs first, you protect your life and your future. When you pay for wants first, you often create stress and problems later.

The goal is not to never buy wants. The goal is to earn them after your needs and savings are handled.`,
    discussionQuestion: "What strategy could you use to make sure your needs are covered before spending on wants?"
  },
  {
    id: "topic7",
    title: "Building Good Money Habits Early",
    content: `Habits you build when you are young often stay with you for life.

Learning to separate wants from needs helps you:
• Save more
• Stress less
• Avoid debt
• Reach goals faster

This is a small skill with huge long-term impact.`,
    discussionQuestion: "What's one money habit you'd like to start building now?"
  },
  {
    id: "topic8",
    title: "Real-Life Choices and Trade-Offs",
    content: `Every spending decision is also a decision not to spend on something else. This is called a trade-off.

If you spend money on a want, you give up the chance to save it or use it for a need or a goal. Smart money decisions come from thinking about those trade-offs before you spend.`,
    discussionQuestion: "If you had $50 right now, what trade-offs would you consider before spending it?"
  }
];

export const postTestIntro = `Awesome work getting through all those topics! Now let's see what you've learned with a quick post-test.`;

export const postTest: PostTestQuestion[] = [
  {
    id: "post1",
    question: "What is a want?",
    options: ["Something essential for survival", "Something that makes life more enjoyable but isn't essential", "A bill you must pay", "A responsibility"],
    correctAnswer: "Something that makes life more enjoyable but isn't essential",
    explanation: "A want is something that makes life more enjoyable or comfortable but is not essential for survival."
  },
  {
    id: "post2",
    question: "Which of the following is a need?",
    options: ["Video game", "Streaming subscription", "Clean drinking water", "New shoes for fashion"],
    correctAnswer: "Clean drinking water",
    explanation: "Clean drinking water is essential for survival, making it a need rather than a want."
  },
  {
    id: "post3",
    question: "Why should needs come before wants?",
    options: ["Because wants are bad", "Because needs protect your stability", "Because wants cost more", "Because budgets don't matter"],
    correctAnswer: "Because needs protect your stability",
    explanation: "Prioritizing needs protects your stability and ensures you can survive and function before spending on extras."
  },
  {
    id: "post4",
    question: "What is impulse spending?",
    options: ["Spending with a plan", "Spending based on goals", "Spending without thinking", "Saving automatically"],
    correctAnswer: "Spending without thinking",
    explanation: "Impulse spending happens when emotions take over and you buy something without thinking it through."
  },
  {
    id: "post5",
    question: "What is the smartest way to use money?",
    options: ["Spend it quickly", "Follow trends", "Pay needs, save, then enjoy wants", "Use credit first"],
    correctAnswer: "Pay needs, save, then enjoy wants",
    explanation: "The smartest approach is to pay for needs first, set aside savings, and then enjoy wants with what's left."
  }
];

export const lessonCompletion = `Learning to separate wants from needs is one of the most powerful money skills you can build.

Every time you choose priorities over impulse, you get stronger, more confident, and more in control of your future. Keep building those habits — your future self will thank you.

Congratulations on completing this important lesson! 🎉`;
