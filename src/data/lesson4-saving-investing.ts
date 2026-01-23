// Lesson 4: Understanding the Basics of Saving & Investing

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

export const lessonIntroduction = `Hey! I'm LaunchPad Money Mentor, and I'm excited to be your guide for this lesson on Saving and Investing.

Whether your money comes from allowance, a job, or gifts, you already make money decisions every day. Every time you decide to spend, save, or wait, you are shaping your financial future. In this lesson, I'm going to show you how saving and investing help you take control of your future instead of wondering where your money went.

By the end of this lesson, you'll understand how people:
• Protect their money
• Plan for the future
• And grow their money over time`;

export const preTestIntro = `Let's start by seeing what you already know about saving and investing!`;

export const preTest: PreTestQuestion[] = [
  {
    id: "pre1",
    question: "What is the primary difference between saving and investing?",
    options: ["Saving is riskier than investing", "Saving is for short-term, investing is for long-term growth", "Investing has no risk", "They are exactly the same"],
    correctAnswer: "Saving is for short-term, investing is for long-term growth"
  },
  {
    id: "pre2",
    question: "Which of the following is considered a basic investment practice?",
    options: ["Keeping all money in a savings account", "Investing in a variety of assets to reduce risk (diversification)", "Spending money as soon as it is earned", "Avoiding financial planning"],
    correctAnswer: "Investing in a variety of assets to reduce risk (diversification)"
  },
  {
    id: "pre3",
    question: "Which step is essential to mastering the act of saving?",
    options: ["Saving only when there is extra money", "Spending before saving", "Paying yourself first by setting aside savings from each paycheck", "Ignoring your financial goals"],
    correctAnswer: "Paying yourself first by setting aside savings from each paycheck"
  },
  {
    id: "pre4",
    question: "Which factor can most affect your ability to save and invest?",
    options: ["Your favorite color", "Interest rates and inflation", "Your shoe size", "The weather"],
    correctAnswer: "Interest rates and inflation"
  },
  {
    id: "pre5",
    question: "What is one benefit of saving money in a bank account?",
    options: ["It guarantees large profits", "It makes money instantly accessible with no interest", "It earns interest and keeps your money safe", "It prevents you from ever spending money again"],
    correctAnswer: "It earns interest and keeps your money safe"
  }
];

export const preTestComplete = `Nice work on the pre-test! Now let's explore saving and investing in depth.`;

export const topics: LessonTopic[] = [
  {
    id: "topic1",
    title: "What Does It Mean to Save?",
    content: `Saving means setting aside money for future use instead of spending it right away. When you save, you are choosing to delay a reward today so that you can have something more important or more secure tomorrow.

Saving plays several important roles in your life. First, it protects you from emergencies. Life is unpredictable, and unexpected expenses like a broken phone, a medical bill, or car repairs can happen at any time. Having savings keeps these surprises from turning into serious problems.

Second, saving helps you reach your goals. Whether your goal is to buy a new phone, pay for school, or move into your own place, saving allows you to plan ahead instead of relying on borrowing or going without.

Finally, saving gives you peace of mind. Knowing that you have money set aside reduces stress and gives you more confidence in your decisions.`,
    discussionQuestion: "What's something you're currently saving for or would like to start saving for?"
  },
  {
    id: "topic2",
    title: "What Does It Mean to Invest?",
    content: `Investing means using your money to try to make more money over time. Instead of letting your money sit still, investing puts your money to work for you.

When you invest, you use your money to buy assets such as stocks, bonds, real estate, or funds. These assets can increase in value, pay you income, or both. The goal of investing is not to get rich quickly, but to build wealth slowly and steadily over time.

Investing always involves some level of risk. The value of investments can go up and down, especially in the short term. However, over long periods of time, investing has historically been one of the most powerful ways to grow money and stay ahead of inflation.

Think of investing like planting a tree. You do not get fruit right away. But with time, patience, and care, that tree can grow and provide value for many years.`,
    discussionQuestion: "Why do you think investing is considered riskier than saving but potentially more rewarding?"
  },
  {
    id: "topic3",
    title: "The Difference Between Saving and Investing",
    content: `Saving and investing are both important tools, but they are used for different purposes.

Saving is mainly about protection and preparation. It is best used for:
• Emergencies
• Short-term goals
• Money you may need soon

Investing is mainly about growth and long-term planning. It is best used for:
• Long-term goals
• Retirement
• Building wealth over time

Saving usually offers safety and easy access to your money, but it grows slowly. Investing offers the potential for much higher growth, but it also comes with risk.

A simple way to remember this is:
• Saving protects your money.
• Investing grows your money.

Most successful financial plans use both working together.`,
    discussionQuestion: "When do you think it would be smarter to save money versus invest it?"
  },
  {
    id: "topic4",
    title: "Smart Investment Principles",
    content: `Successful investing is not based on guessing or luck. It is based on clear principles and good decision-making.

Time Horizon: Your time horizon is how long you can leave your money invested before you need it. The longer your time horizon, the more risk you can usually afford to take, because you have more time to recover from market ups and downs.

Risk Tolerance: Your risk tolerance is how comfortable you are with uncertainty. Some people can stay calm when their investments go up and down. Others feel stressed and prefer more stable options. Knowing your risk tolerance helps you choose investments that you can stick with even during difficult times.

Diversification: Diversification means spreading your money across different investments instead of putting everything into one place. This reduces the chance that one bad investment decision will seriously damage your financial future.`,
    discussionQuestion: "If you had money to invest, would you prefer safer investments with lower returns or riskier ones with higher potential returns? Why?"
  },
  {
    id: "topic5",
    title: "Building the Habit of Saving",
    content: `Saving is not something you do once. It is a habit that you build over time.

Strong saving habits usually include:
• Setting clear and specific goals
• Paying yourself first by saving before spending
• Tracking where your money goes
• Making saving automatic when possible
• Being careful about impulse spending

Many people lose money in small amounts without realizing it. A few dollars spent here and there may not seem important, but over time those small choices can add up to hundreds or even thousands of dollars.

Building the habit of saving gives you control over your money instead of letting your money control you.`,
    discussionQuestion: "What's one small habit you could start today to save more money?"
  },
  {
    id: "topic6",
    title: "What Affects Your Financial Decisions?",
    content: `Your financial decisions are influenced by many factors, including:
• Your income
• Your goals
• Your age
• Your debts
• The economy
• Inflation
• Your habits and lifestyle

For example, someone with a lot of debt may need to focus more on paying that down before investing heavily. Someone who is young may be able to take a longer-term approach because they have more time.

Understanding these factors helps you make better decisions and adjust your plans when your life circumstances change.`,
    discussionQuestion: "What factors in your life right now might affect how you save or invest money?"
  },
  {
    id: "topic7",
    title: "Real-Life Money Decisions – Putting It All Together",
    content: `In real life, people must often balance several priorities at the same time, including:
• Paying bills
• Paying off debt
• Saving for emergencies
• Investing for the future

There is no single perfect formula that works for everyone. Good financial decisions come from understanding your goals, knowing your situation, and making thoughtful, intentional choices over time.

The most important thing is to start. Even small steps in the right direction can make a big difference over your lifetime.`,
    discussionQuestion: "If you received $100 today, how would you divide it between spending, saving, and investing?"
  }
];

export const postTestIntro = `Excellent! You've learned a lot about saving and investing. Let's check your knowledge with a post-test.`;

export const postTest: PostTestQuestion[] = [
  {
    id: "post1",
    question: "What are the four most essential items to look at when choosing a savings account?",
    options: ["Interest rate, account fees, accessibility, and minimum balance", "Account color, bank location, withdrawal limit, and bank logo", "Account size, monthly deposit, ATM availability, and bank popularity", "Account name, account number, account type, and opening hours"],
    correctAnswer: "Interest rate, account fees, accessibility, and minimum balance",
    explanation: "When choosing a savings account, you should compare interest rates, fees, how easily you can access your money, and minimum balance requirements."
  },
  {
    id: "post2",
    question: "What are the main differences between savings and investments?",
    options: ["Savings are riskier, investments are safer", "Savings are typically short-term and low risk, investments are typically long-term and higher risk", "Savings are always in cash, investments are always in stocks", "Savings are for spending, investments are for saving"],
    correctAnswer: "Savings are typically short-term and low risk, investments are typically long-term and higher risk",
    explanation: "Savings are best for short-term goals with low risk, while investments are for long-term growth with higher risk and reward potential."
  },
  {
    id: "post3",
    question: "A mutual fund is an investment issued by a state or local government agency.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. A mutual fund is a collection of investments pooled from many investors, not a government-issued investment. Government bonds are issued by government agencies."
  },
  {
    id: "post4",
    question: "What is a common factor that affects both saving and investing decisions?",
    options: ["Gender", "Credit score", "Inflation", "Shoe size"],
    correctAnswer: "Inflation",
    explanation: "Inflation affects both saving and investing because it reduces the purchasing power of your money over time."
  },
  {
    id: "post5",
    question: "When you save money, where do you typically store it?",
    options: ["In a sock under your mattress", "In a savings account or similar financial instrument", "In stocks and bonds", "In your favorite retail store"],
    correctAnswer: "In a savings account or similar financial instrument",
    explanation: "Savings are typically kept in a savings account where they are safe, insured, and earn some interest."
  },
  {
    id: "post6",
    question: "Which of the following is an example of an investment?",
    options: ["Piggy bank savings", "Putting money in a retirement account", "Keeping cash under your pillow", "Buying a new car"],
    correctAnswer: "Putting money in a retirement account",
    explanation: "A retirement account is an investment vehicle where your money is invested for long-term growth."
  },
  {
    id: "post7",
    question: "What does your risk tolerance impact when it comes to financial decisions?",
    options: ["Your income", "Your financial goals", "Your investment choices", "Your living expenses"],
    correctAnswer: "Your investment choices",
    explanation: "Your risk tolerance directly impacts what types of investments you choose and how you balance your portfolio."
  },
  {
    id: "post8",
    question: "How can managing living expenses affect your capacity to save and invest?",
    options: ["It has no impact", "It can free up more funds for saving and investing", "It reduces your income", "It increases your risk tolerance"],
    correctAnswer: "It can free up more funds for saving and investing",
    explanation: "When you manage your expenses well, you have more money left over to put toward savings and investments."
  },
  {
    id: "post9",
    question: "When creating a budget, you should consider:",
    options: ["Only monthly income", "Only essential expenses", "Only discretionary spending", "All of the above: income, expenses, and spending"],
    correctAnswer: "All of the above: income, expenses, and spending",
    explanation: "A good budget considers your total income, essential expenses, and discretionary spending."
  },
  {
    id: "post10",
    question: "Risk Tolerance refers to:",
    options: ["Spreading investments across various assets", "Concentrating all investments in a single asset", "The amount of loss you are prepared to accept when making an investment decision", "Minimizing all investments to only cash"],
    correctAnswer: "The amount of loss you are prepared to accept when making an investment decision",
    explanation: "Risk tolerance is how much uncertainty or potential loss you're comfortable with in your investments."
  }
];

export const lessonCompletion = `Saving and investing are not just about money. They are about freedom, options, and building the life you want.

Saving protects your future. Investing builds your future.

And every smart choice you make today helps your future self.

Great job completing this lesson! 🎉`;
