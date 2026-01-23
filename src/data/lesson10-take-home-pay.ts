// Lesson 10: Take-Home Pay – Taxes & Deductions

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

export const lessonIntroduction = `Hey! I'm LaunchPad Money Mentor. Today we're going to talk about something that affects every working person: your paycheck.

Most people get excited when they hear how much they earn per hour or per year. But what really matters for your daily life is how much of that money actually shows up in your account. This lesson will help you understand what happens between the time you earn money and the time you receive it — and how to make smart plans with what you take home.

By the end of this lesson, you'll understand:
• The difference between gross pay and net pay
• What taxes and deductions are and why they exist
• What a W-4 form does
• How to read a pay stub
• How to make smart choices with your take-home pay`;

export const preTestIntro = `Let's see what you already know about your paycheck!`;

export const preTest: PreTestQuestion[] = [
  {
    id: "pre1",
    question: "What is gross pay?",
    options: ["The money left after deductions", "The total amount earned before deductions", "The money you save", "The money you spend"],
    correctAnswer: "The total amount earned before deductions"
  },
  {
    id: "pre2",
    question: "What is net pay?",
    options: ["The total amount earned before deductions", "The money your employer keeps", "The amount left after all deductions are taken out", "The amount you owe in taxes"],
    correctAnswer: "The amount left after all deductions are taken out"
  },
  {
    id: "pre3",
    question: "Which of the following is a required payroll tax?",
    options: ["Health insurance", "Federal income tax", "401(k) savings", "Gym membership"],
    correctAnswer: "Federal income tax"
  },
  {
    id: "pre4",
    question: "What is the purpose of a W-4 form?",
    options: ["To apply for a job", "To determine how much federal income tax to withhold", "To open a bank account", "To track your hours"],
    correctAnswer: "To determine how much federal income tax to withhold"
  },
  {
    id: "pre5",
    question: "Which deduction is usually for retirement savings?",
    options: ["Rent", "Insurance", "401(k) contribution", "Transportation"],
    correctAnswer: "401(k) contribution"
  }
];

export const preTestComplete = `Great! Now let's learn about your take-home pay.`;

export const topics: LessonTopic[] = [
  {
    id: "topic1",
    title: "Why Earning Money Matters",
    content: `Earning money is more than just getting paid. It represents independence, responsibility, and progress toward your goals. The money you earn allows you to pay for things you need — like food, housing, and transportation — and things you enjoy — like clothes, entertainment, or hobbies. It also allows you to prepare for the future by saving and investing.

The first time you earn a paycheck, it can feel exciting. But many people are surprised when the amount they receive is less than what they expected. That's because not all the money you earn is money you get to keep. Understanding take-home pay helps you plan and avoid disappointment or confusion.

When you understand how your paycheck works, you stop guessing and start taking control of your money.`,
    discussionQuestion: "Have you ever been surprised by how much money was taken out of a paycheck? What surprised you?"
  },
  {
    id: "topic2",
    title: "Gross Pay vs. Net Pay",
    content: `Gross pay is the total amount of money you earn before anything is taken out. It is what your employer agrees to pay you for your work.

Net pay is what you actually receive after taxes and deductions are taken out. This is your real, usable income.

Many people make the mistake of planning their spending based on their gross pay. This causes problems because they think they have more money than they really do. Smart money plans are always based on net pay, not gross pay.

Understanding this difference is one of the most important steps in managing your money responsibly.`,
    discussionQuestion: "Why do you think so many people are surprised by the difference between gross and net pay?"
  },
  {
    id: "topic3",
    title: "What Are Payroll Taxes and Deductions?",
    content: `Deductions are amounts taken out of your paycheck before you receive your net pay. Some deductions are required by law, and others are optional.

The main required payroll taxes usually include:
• Federal income tax
• Social Security (FICA)
• Medicare (FICA)

Some states and cities also have their own income taxes.

These taxes help pay for things like schools, roads, healthcare for seniors, disability benefits, and other public services. Even though it can be frustrating to see money taken out, these systems help support the whole society.

Optional deductions might include health insurance, retirement savings, or other benefits.`,
    discussionQuestion: "What do you think your taxes help pay for in your community?"
  },
  {
    id: "topic4",
    title: "Why Do These Taxes Exist?",
    content: `Taxes are how a country pays for shared services. Things like public schools, emergency services, highways, and national defense are funded by taxes.

When you pay payroll taxes, you are not just losing money — you are contributing to systems that you and your family may use now or in the future.

Social Security and Medicare, for example, help support older adults and people with disabilities. By paying into these systems now, you are helping build a safety net for society and for yourself later in life.`,
    discussionQuestion: "Can you name some public services that are paid for by taxes?"
  },
  {
    id: "topic5",
    title: "The W-4 Form — Setting Up Your Paycheck",
    content: `Before you get your first paycheck, you will fill out a W-4 form. This form tells your employer how much federal income tax to withhold from your pay.

If too little is withheld, you might owe money at tax time. If too much is withheld, you might get a refund — but you also had less money during the year.

The goal is to have your withholding as accurate as possible so your paycheck matches your real tax situation.`,
    discussionQuestion: "Would you rather get a big tax refund or have more money in each paycheck? Why?"
  },
  {
    id: "topic6",
    title: "Understanding Your Pay Stub",
    content: `Your pay stub is like a receipt for your paycheck. It shows:
• Your gross pay
• Each deduction
• Your net pay
• Your hours worked (if paid hourly)

Checking your pay stub helps you:
• Make sure you were paid correctly
• Catch mistakes
• Understand where your money is going

Ignoring your pay stub is like ignoring a bank statement — it puts your money at risk.`,
    discussionQuestion: "What would you do if you noticed an error on your pay stub?"
  },
  {
    id: "topic7",
    title: "Planning Your Life Using Net Pay",
    content: `Your net pay is your real income. This is the number you should use when making a budget, planning savings, or deciding what you can afford.

When people plan using gross pay, they usually overspend and end up stressed. When people plan using net pay, they stay in control.

A simple rule: If it doesn't show up in your account, don't count it as spendable money.`,
    discussionQuestion: "How would your spending change if you only planned based on your net pay?"
  },
  {
    id: "topic8",
    title: "Making Smart Money Moves with Your Paycheck",
    content: `Once you understand your take-home pay, you can start using it wisely.

Smart habits include:
• Saving a little from every paycheck
• Spending with a plan
• Avoiding lifestyle inflation
• Building an emergency fund

Small habits repeated every paycheck turn into big results over time.`,
    discussionQuestion: "What's one smart money habit you want to start when you get regular paychecks?"
  },
  {
    id: "topic9",
    title: "How Small Decisions Add Up Over Time",
    content: `Saving $10 or $25 per paycheck may not seem like much. But over a year, it can turn into hundreds or even thousands of dollars.

The same is true for bad habits. Small unnecessary spending, repeated often, can quietly destroy your financial progress.

Your paycheck is not just money — it is a tool. How you use it shapes your future.`,
    discussionQuestion: "If you saved $20 from every paycheck for a year, how much would you have?"
  }
];

export const postTestIntro = `Great work! Let's check your understanding of take-home pay.`;

export const postTest: PostTestQuestion[] = [
  {
    id: "post1",
    question: "What is the difference between gross pay and net pay?",
    options: ["Gross pay is after taxes, net pay is before", "Gross pay is before deductions, net pay is after", "They are the same", "Net pay includes bonuses only"],
    correctAnswer: "Gross pay is before deductions, net pay is after",
    explanation: "Gross pay is your total earnings before any deductions, while net pay is what you actually take home."
  },
  {
    id: "post2",
    question: "Which of the following is a required payroll tax?",
    options: ["Health insurance", "Federal income tax", "Retirement savings", "Transportation"],
    correctAnswer: "Federal income tax",
    explanation: "Federal income tax is required by law, while health insurance and retirement savings are usually optional."
  },
  {
    id: "post3",
    question: "What does a W-4 form control?",
    options: ["How many hours you work", "How much tax is withheld from your paycheck", "Your job title", "Your pay schedule"],
    correctAnswer: "How much tax is withheld from your paycheck",
    explanation: "The W-4 tells your employer how much federal income tax to withhold from each paycheck."
  },
  {
    id: "post4",
    question: "Why should you check your pay stub regularly?",
    options: ["To compare with friends", "To make sure your pay and deductions are correct", "To increase your taxes", "To change your job"],
    correctAnswer: "To make sure your pay and deductions are correct",
    explanation: "Reviewing your pay stub helps you catch errors and understand exactly where your money is going."
  },
  {
    id: "post5",
    question: "Why should budgets be based on net pay instead of gross pay?",
    options: ["Because net pay is higher", "Because net pay is your real spendable income", "Because taxes don't matter", "Because gross pay changes daily"],
    correctAnswer: "Because net pay is your real spendable income",
    explanation: "Net pay is the actual money you receive, so budgets should be based on this real, usable amount."
  }
];

export const lessonCompletion = `Understanding your paycheck is a huge step toward financial confidence.

When you know where your money goes before it reaches you and what you can really use, you stop guessing and start leading your financial life on purpose. That's how real money skills are built.

Great job on completing this lesson! 💵`;
