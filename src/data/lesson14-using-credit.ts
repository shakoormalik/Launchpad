// Lesson 14: Using Credit

export const lessonIntroduction = `Hey! I'm LaunchPad Money Mentor. Today we're talking about a tool that can either help you build your future — or quietly make it harder if you don't understand it: credit.

Credit is powerful because it lets you get things before you have all the money. That can be smart in the right situations (like school, transportation, or emergencies). But it can also become dangerous if it's used without a plan.

By the end of this lesson, you'll understand:
• What it really means to use credit
• The pros and cons of borrowing
• How banks look at borrowers
• What "creditworthiness" means and how to build it
• The main types of consumer credit
• How to avoid taking on too much debt

Let's start with a pre-test to see what you already know!`;

export const preTestIntro = `Before we dive into using credit, let's see what you already know. Don't worry if you're unsure — that's exactly why we're here!`;

export interface PreTestQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const preTest: PreTestQuestion[] = [
  {
    id: 1,
    question: "What does it mean to use credit?",
    options: [
      "Spending cash you already have",
      "Earning points on your debit card",
      "Borrowing money to buy something now and paying later",
      "Putting money in a savings account"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "What is an interest rate?",
    options: [
      "A monthly fee charged by your bank",
      "A donation to your savings",
      "The percentage charged for borrowing money",
      "Your pay raise from work"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What happens if you only pay the minimum payment on a credit card each month?",
    options: [
      "Your credit limit increases",
      "Your balance goes away faster",
      "You pay more in interest over time",
      "The card company rewards you with a bonus"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What is a credit limit?",
    options: [
      "The amount you owe in taxes",
      "The amount your bank pays you each year",
      "The maximum amount you're allowed to borrow on your card",
      "The number of credit cards you can have"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Which of the following is a type of consumer credit?",
    options: [
      "Debit card",
      "Credit card",
      "Gift card",
      "Library card"
    ],
    correctAnswer: 1
  }
];

export const preTestComplete = `Nice work on the pre-test! Now let's learn about using credit wisely — a skill that will serve you for the rest of your life.`;

export interface LessonTopic {
  id: number;
  title: string;
  content: string;
  discussionQuestion: string;
}

export const topics: LessonTopic[] = [
  {
    id: 1,
    title: "What Does It Mean to 'Use' Credit?",
    content: `Using credit means borrowing money to get something now and paying it back later.

This could be:
• A credit card
• A car loan
• A phone payment plan
• Even paying a utility bill at the end of the month

Credit exists because most people cannot pay for everything in life all at once. Very few people can buy a car, pay for college, or handle emergencies using only cash.

**Used correctly, credit is a tool. Used poorly, it becomes a trap.**`,
    discussionQuestion: "Can you think of a situation where borrowing money to buy something now makes sense? What about a situation where it doesn't?"
  },
  {
    id: 2,
    title: "Why People Use Credit",
    content: `People use credit for many reasons:
• Buy big items like cars or education
• Handle emergencies
• Build a credit history
• Spread out payments over time

Sometimes using credit is smart. Sometimes it's just convenient. The key question you should always ask is:

**"Will this help me or hurt me later?"**

If you can honestly answer that question before making a purchase, you're already ahead of most people.`,
    discussionQuestion: "Have you ever wanted to buy something but didn't have enough money? What did you do?"
  },
  {
    id: 3,
    title: "The Pros and Cons of Using Credit",
    content: `**Pros:**
• Helps you build credit history
• Lets you buy important things before you have all the money
• Can offer rewards, protections, and convenience

**Cons:**
• Interest makes things cost more
• Easy to overspend
• Can lead to stress, debt, and damaged credit if misused

**Credit is like fire: useful when controlled, dangerous when ignored.**

The key is understanding how to use it to your advantage without letting it control you.`,
    discussionQuestion: "If credit cards can be dangerous, why do you think so many people use them?"
  },
  {
    id: 4,
    title: "Using Credit to Your Benefit",
    content: `Responsible credit use means:
• Only borrowing what you can repay
• Paying balances on time
• Avoiding high-interest debt
• Paying credit cards in full when possible

**When used correctly, credit can:**
• Help you qualify for better loans
• Save you money through rewards
• Protect purchases (many credit cards offer purchase protection)

The difference between good credit use and bad credit use is often just having a plan.`,
    discussionQuestion: "What's the difference between buying something you need with credit versus buying something you just want?"
  },
  {
    id: 5,
    title: "How Banks and Lenders View Credit",
    content: `Banks use your credit score and history to decide:
• If they will lend to you
• How much they will lend
• What interest rate you'll pay

To banks, lending money is taking a risk. Your job is to prove that you are a safe, responsible borrower.

The better your credit history, the more likely you are to:
• Get approved for loans
• Get lower interest rates
• Access better financial products`,
    discussionQuestion: "If you were lending someone money, what would you want to know about them first?"
  },
  {
    id: 6,
    title: "What Is Creditworthiness?",
    content: `Creditworthiness is how trustworthy you are with borrowed money.

It is based on:
• Paying on time
• Not borrowing too much
• Using credit responsibly over time

The more trustworthy you look, the cheaper and easier borrowing becomes.

Think of it like a reputation. Just like people trust you more when you keep your promises, lenders trust you more when you pay back what you owe on time.`,
    discussionQuestion: "How is creditworthiness similar to your reputation with friends and family?"
  },
  {
    id: 7,
    title: "Building and Maintaining Credit History",
    content: `You build good credit by:
• Paying bills on time
• Keeping balances low
• Not applying for too much credit at once
• Checking for mistakes on your credit report

Your credit history is like a financial reputation. It follows you for years.

**Starting early matters!** Even as a young person, you can start building credit with:
• A secured credit card
• Being an authorized user on a parent's card
• Paying bills in your name on time`,
    discussionQuestion: "Why do you think it's important to start building credit while you're young?"
  },
  {
    id: 8,
    title: "The Three Main Types of Consumer Credit",
    content: `**1. Revolving Credit:**
Credit cards. You can reuse it as you pay it down. Your balance and payments can change each month.

**2. Installment Credit:**
Car loans, student loans. Fixed payment, fixed end date. You know exactly what you'll pay each month.

**3. Open Credit:**
Utility bills or services billed after use. You use the service first, then pay later.

Each type serves a different purpose and should be used carefully based on your needs.`,
    discussionQuestion: "Which type of credit do you think is the easiest to misuse? Why?"
  },
  {
    id: 9,
    title: "The Reality of Debt in Real Life",
    content: `Many people live paycheck-to-paycheck and carry credit card debt.

**Debt can:**
• Reduce your freedom
• Increase stress
• Delay your goals
• Keep you in a cycle of payments

This doesn't mean "never use credit." It means "use it with a plan."

The people who struggle with debt often didn't plan to get there — they just didn't have a plan to avoid it.`,
    discussionQuestion: "How do you think carrying a lot of debt would affect someone's daily life?"
  },
  {
    id: 10,
    title: "Managing Credit Smartly",
    content: `Smart habits include:
• Making a budget
• Spending intentionally
• Understanding interest
• Avoiding unnecessary debt
• Saving for emergencies

**Good money habits protect you from bad credit decisions.**

When you have savings, you don't need to rely on credit for emergencies. When you have a budget, you don't overspend. It all works together.`,
    discussionQuestion: "What's one habit you could start now that would help you manage credit better in the future?"
  },
  {
    id: 11,
    title: "What Is a Safe Debt Load?",
    content: `A safe debt load means:
• Your monthly payments still leave room for savings and living
• You are not stressed every month
• You can handle emergencies

**If debt controls your choices, you have too much.**

A common rule is that your total debt payments (not including housing) should be less than 20% of your take-home pay. But the real test is: can you live comfortably and still save?`,
    discussionQuestion: "How would you know if you had too much debt?"
  }
];

export const postTestIntro = `Excellent work! You've learned a lot about using credit wisely. Now let's test your knowledge with a post-test!`;

export interface PostTestQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const postTest: PostTestQuestion[] = [
  {
    id: 1,
    question: "What does it mean to use credit?",
    options: [
      "Spending money you already have",
      "Borrowing money and paying it back later",
      "Saving for the future",
      "Avoiding banks"
    ],
    correctAnswer: 1,
    explanation: "Using credit means borrowing money to buy something now with the promise to pay it back later, usually with interest."
  },
  {
    id: 2,
    question: "Why do banks check your credit score?",
    options: [
      "To punish borrowers",
      "To decide how risky it is to lend to you",
      "To give you free money",
      "To track your purchases"
    ],
    correctAnswer: 1,
    explanation: "Banks check your credit score to assess the risk of lending to you. A higher score means you're more likely to repay, so you may get better rates."
  },
  {
    id: 3,
    question: "What is one advantage of using credit responsibly?",
    options: [
      "Everything becomes free",
      "You never have to save",
      "You build a strong credit history",
      "You avoid all bills"
    ],
    correctAnswer: 2,
    explanation: "Using credit responsibly helps you build a strong credit history, which can help you get better rates on loans and more opportunities in the future."
  },
  {
    id: 4,
    question: "Which is an example of installment credit?",
    options: [
      "Credit card",
      "Utility bill",
      "Car loan",
      "Store rewards card"
    ],
    correctAnswer: 2,
    explanation: "A car loan is installment credit because you pay a fixed amount each month over a set period of time until it's paid off."
  },
  {
    id: 5,
    question: "What does 'creditworthiness' mean?",
    options: [
      "How much cash you have",
      "How trustworthy you are as a borrower",
      "How many credit cards you own",
      "How often you shop"
    ],
    correctAnswer: 1,
    explanation: "Creditworthiness is a measure of how trustworthy you are as a borrower — basically, how likely you are to repay what you borrow."
  },
  {
    id: 6,
    question: "What is one danger of only paying the minimum on credit cards?",
    options: [
      "Your balance grows slower",
      "You pay more interest over time",
      "Your credit improves faster",
      "Your card closes"
    ],
    correctAnswer: 1,
    explanation: "When you only pay the minimum, most of your payment goes to interest, not the balance. This means you pay much more over time and stay in debt longer."
  },
  {
    id: 7,
    question: "Which habit helps build good credit?",
    options: [
      "Paying late",
      "Maxing out cards",
      "Paying on time",
      "Ignoring bills"
    ],
    correctAnswer: 2,
    explanation: "Paying on time is the #1 factor in building good credit. It shows lenders you're reliable and responsible with borrowed money."
  },
  {
    id: 8,
    question: "What is a safe debt load?",
    options: [
      "The most you can possibly borrow",
      "Debt that doesn't affect your life",
      "Debt you can manage without financial stress",
      "Any debt approved by a bank"
    ],
    correctAnswer: 2,
    explanation: "A safe debt load is an amount you can manage without financial stress — you can still save, cover expenses, and handle emergencies."
  },
  {
    id: 9,
    question: "Why is understanding interest important?",
    options: [
      "It affects how much things really cost",
      "It only matters to banks",
      "It replaces taxes",
      "It lowers prices"
    ],
    correctAnswer: 0,
    explanation: "Interest affects the true cost of everything you buy on credit. A $500 item can cost $700 or more if you pay it off slowly with high interest."
  },
  {
    id: 10,
    question: "What is the best overall approach to credit?",
    options: [
      "Avoid it forever",
      "Use it without thinking",
      "Use it intentionally and carefully",
      "Only use it for fun purchases"
    ],
    correctAnswer: 2,
    explanation: "The best approach is to use credit intentionally and carefully — as a tool, not a crutch. Plan before you borrow, and always have a repayment strategy."
  }
];

export const lessonCompletion = `Congratulations! You've completed the Using Credit lesson! 🎉

Remember: Credit doesn't decide your future — your habits do.

When you use credit with intention, it can help you move faster and farther. When you ignore how it works, it can quietly slow you down. Now you know the difference.

Great job completing this lesson!`;
