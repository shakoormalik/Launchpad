// Lesson 9: Understanding Banking Services

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

export const lessonIntroduction = `Hey! I'm LaunchPad Money Mentor. In this lesson, we're going to explore how banks and credit unions work, what accounts and cards actually do, and how to manage your money safely and smartly.

Banks are like the operating system for your money. They help you store it, move it, protect it, and organize it. When you understand how banking services work, you stop guessing and start controlling your financial life.

By the end of this lesson, you'll be able to:
• Explain what banks and credit unions do and why they exist
• Compare different types of financial institutions and choose wisely
• Use checking and savings accounts correctly and for the right purposes
• Read statements and track balances with confidence
• Avoid overdrafts, fees, and common mistakes
• Protect yourself from fraud and identity theft`;

export const preTestIntro = `Let's see what you already know about banking services!`;

export const preTest: PreTestQuestion[] = [
  {
    id: "pre1",
    question: "Which of the following is a traditional financial institution?",
    options: ["PayPal", "Bank of America", "Cash App", "Venmo"],
    correctAnswer: "Bank of America"
  },
  {
    id: "pre2",
    question: "What is one advantage of a credit union?",
    options: ["Fewer services", "Higher fees", "Lower fees and better rates", "No accounts needed"],
    correctAnswer: "Lower fees and better rates"
  },
  {
    id: "pre3",
    question: "Which account usually earns interest?",
    options: ["Checking", "Savings", "Debit", "Prepaid"],
    correctAnswer: "Savings"
  },
  {
    id: "pre4",
    question: "What document shows your account activity?",
    options: ["Contract", "Budget", "Bank statement", "Credit score"],
    correctAnswer: "Bank statement"
  },
  {
    id: "pre5",
    question: "Why is overdraft protection helpful?",
    options: ["Makes account invisible", "Prevents loans", "Reduces declined transactions and fees", "Deposits money automatically"],
    correctAnswer: "Reduces declined transactions and fees"
  }
];

export const preTestComplete = `Great! Now let's explore the world of banking services.`;

export const topics: LessonTopic[] = [
  {
    id: "topic1",
    title: "What Do Banks and Credit Unions Do?",
    content: `Banks and credit unions are the control centers for your money. They exist to solve four big problems: safety, movement, organization, and growth of money.

Keeping cash at home is risky and inconvenient. A financial institution gives you a safe place to store your money, usually with insurance protection, so you don't lose everything if something goes wrong.

They also make it easy to move money. Instead of carrying cash everywhere, you can pay bills, shop online, send money, and get cash through cards, apps, and ATMs. They organize your money by keeping records of every deposit and withdrawal so you can see exactly what's happening.

Finally, they help your money grow through savings and help you reach big goals through borrowing. In short, a bank is not just a building — it is a system that runs your financial life.`,
    discussionQuestion: "What do you think would be most difficult about managing money without a bank?"
  },
  {
    id: "topic2",
    title: "Types of Financial Institutions",
    content: `Not all financial institutions work the same way.

Banks are usually for-profit companies that offer many services, including accounts, loans, and credit cards. Because they are for-profit, some charge higher fees, but they often have many locations and advanced technology.

Credit unions are nonprofit and owned by their members. This often allows them to offer lower fees, better interest rates, and more personal service. However, they may have fewer locations.

Online banks focus on apps and websites. They often have low fees and good interest rates but little or no in-person service. Choosing the right type depends on your habits, your needs, and how you like to manage money.`,
    discussionQuestion: "Would you prefer a traditional bank, credit union, or online bank? Why?"
  },
  {
    id: "topic3",
    title: "Checking Accounts vs. Savings Accounts",
    content: `Checking accounts are designed for everyday activity: paying bills, using a debit card, and getting cash. Because the money is meant to be used often, checking accounts usually do not pay much interest.

Savings accounts are designed to hold money for goals and emergencies. They usually pay interest, which means your money slowly grows over time. Savings is not meant for daily spending — it is meant for protection and future plans.

Using only checking makes it too easy to spend everything. Using both creates a system where today's money and tomorrow's money have different jobs.`,
    discussionQuestion: "Why do you think it's smart to have both a checking and a savings account?"
  },
  {
    id: "topic4",
    title: "How to Choose a Bank or Credit Union",
    content: `Choosing a bank is like choosing a long-term partner for your money. Small differences in fees or features can cost or save you hundreds of dollars over time.

You should compare:
• Monthly fees
• ATM access
• Mobile app quality
• Minimum balance requirements
• Customer service

A good bank makes your life easier. A bad one quietly drains your money through fees and frustration.`,
    discussionQuestion: "What features would be most important to you when choosing a bank?"
  },
  {
    id: "topic5",
    title: "Your Responsibilities with a Checking Account",
    content: `When you open an account, you become the manager of your own mini-financial system. That means you are responsible for tracking your balance, watching your transactions, and avoiding overdrafts.

If you don't track your money, you may think you have more than you do. One overdraft fee can erase hours of work. Checking your balance and transactions regularly is not optional — it is part of protecting yourself.`,
    discussionQuestion: "How often do you think you should check your bank balance?"
  },
  {
    id: "topic6",
    title: "Writing Checks and Keeping Records",
    content: `Checks are written instructions to the bank to pay someone. Even though many people use digital payments today, checks still exist for rent, gifts, and some bills.

Keeping records — whether in an app or register — helps you remember what you've already spent and what is still coming out. This prevents double-spending and surprises.`,
    discussionQuestion: "Have you ever written or received a check? What was it for?"
  },
  {
    id: "topic7",
    title: "How to Deposit a Check",
    content: `Depositing a check turns a piece of paper into usable money in your account. You usually must sign the back and deposit it through a teller, ATM, or mobile app.

Sometimes deposits are not available immediately. Understanding hold times helps you avoid spending money that is not fully cleared yet.`,
    discussionQuestion: "Which deposit method do you think is most convenient: in-person, ATM, or mobile?"
  },
  {
    id: "topic8",
    title: "Understanding Your Bank Statement",
    content: `A bank statement is your account's monthly report card. It shows every deposit, withdrawal, fee, and your ending balance.

Reviewing it helps you catch mistakes, notice fees, and understand your habits. Ignoring statements is like ignoring grades — problems grow quietly.`,
    discussionQuestion: "What information on a bank statement do you think is most important to review?"
  },
  {
    id: "topic9",
    title: "Reconciling Your Account",
    content: `Reconciling means matching your own records with the bank's records. This helps you catch missing transactions, errors, or fraud before they become big problems.

It also teaches you exactly where your money is going, which is one of the most powerful money skills you can build.`,
    discussionQuestion: "Why might someone's records not match the bank's records?"
  },
  {
    id: "topic10",
    title: "ATM Cards and Debit Cards",
    content: `ATM cards and debit cards give you fast access to your money. Debit cards spend your money directly, so there is no borrowing involved.

Because these cards connect straight to your account, protecting them is critical. Never share your PIN, and always report lost or stolen cards immediately.`,
    discussionQuestion: "What precautions should you take when using a debit card?"
  },
  {
    id: "topic11",
    title: "Avoiding Fees, Mistakes, and Fraud",
    content: `Common fees include overdraft fees, ATM fees, and monthly maintenance fees. Common mistakes include not tracking your balance and ignoring statements.

Fraud includes scams, phishing, fake texts, and card skimming. Good habits include checking accounts often, using alerts, and acting fast when something looks wrong.`,
    discussionQuestion: "What's one banking habit that could help you avoid fees and fraud?"
  },
  {
    id: "topic12",
    title: "Putting It All Together (Real Life Use)",
    content: `When you combine tracking, reviewing statements, careful spending, and smart account choices, you stay in control. Banking success is not about being perfect — it is about being aware and consistent.

These skills follow you for life and protect every dollar you earn.`,
    discussionQuestion: "What's the most important banking skill you learned today?"
  }
];

export const postTestIntro = `Excellent! Let's see how much you've learned about banking services.`;

export const postTest: PostTestQuestion[] = [
  {
    id: "post1",
    question: "What is the main purpose of a savings account?",
    options: ["Daily spending", "Storing and growing money", "Paying bills", "Using debit cards"],
    correctAnswer: "Storing and growing money",
    explanation: "Savings accounts are designed to store money safely while earning interest, not for everyday spending."
  },
  {
    id: "post2",
    question: "What does a bank statement show?",
    options: ["Goals", "Credit score", "Account activity", "Loan terms"],
    correctAnswer: "Account activity",
    explanation: "A bank statement shows all your deposits, withdrawals, fees, and balance for a specific period."
  },
  {
    id: "post3",
    question: "Why is reconciling important?",
    options: ["To earn more interest", "To catch errors and fraud", "To increase your balance", "To close your account"],
    correctAnswer: "To catch errors and fraud",
    explanation: "Reconciling helps you identify mistakes, missing transactions, or fraudulent activity before they become major problems."
  },
  {
    id: "post4",
    question: "What is an overdraft?",
    options: ["A bonus", "A deposit", "Spending more than you have", "A loan"],
    correctAnswer: "Spending more than you have",
    explanation: "An overdraft occurs when you spend more money than you have in your account, usually resulting in fees."
  },
  {
    id: "post5",
    question: "Which habit best protects your money?",
    options: ["Ignoring statements", "Checking balances and transactions regularly", "Using only cash", "Opening many accounts"],
    correctAnswer: "Checking balances and transactions regularly",
    explanation: "Regularly monitoring your account helps you catch problems early and stay in control of your finances."
  }
];

export const lessonCompletion = `Understanding how banking works puts you ahead of most people your age. You now know how to protect your money, organize it, and use it with confidence.

Keep building these habits — your future self will thank you.

Congratulations! You've just completed one of the most important life-skills lessons in the entire LaunchPad series. 🏦`;
