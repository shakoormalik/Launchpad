// Lesson 12: Your Credit Score & You

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

export const lessonIntroduction = `Hey! I'm your LaunchPad Money Mentor — your guide to understanding one of the most important tools in adult life: your credit score.

Your credit score is more than just a number. It's a reputation, a record of trust, and a key that can open or close doors for years to come. In this lesson, we'll explore what a credit score really means, why it matters in real life, and how you can build and protect it starting now — even before you ever apply for your first big loan.

By the end of this lesson, you'll understand:
• What credit really is and how it works in everyday life
• What a credit score measures and why the range matters
• What "creditworthiness" means and how lenders think
• How credit affects housing, transportation, and future choices
• The five main factors that make up a credit score
• The habits that build strong credit over time`;

export const preTestIntro = `Let's see what you already know about credit scores!`;

export const preTest: PreTestQuestion[] = [
  {
    id: "pre1",
    question: "What is a credit score?",
    options: ["A bank account number", "A three-digit number that shows how trustworthy you are as a borrower", "A type of loan", "A savings goal"],
    correctAnswer: "A three-digit number that shows how trustworthy you are as a borrower"
  },
  {
    id: "pre2",
    question: "Why do lenders look at credit scores?",
    options: ["To determine your age", "To see if you're a reliable borrower", "To find your address", "To calculate your income"],
    correctAnswer: "To see if you're a reliable borrower"
  },
  {
    id: "pre3",
    question: "Which of the following affects your credit score?",
    options: ["Payment history", "Credit utilization", "Length of credit history", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: "pre4",
    question: "What is one way to build good credit?",
    options: ["Pay bills late", "Max out credit cards", "Pay on time consistently", "Apply for many cards"],
    correctAnswer: "Pay on time consistently"
  },
  {
    id: "pre5",
    question: "Why does credit matter beyond borrowing?",
    options: ["It only matters for loans", "It can affect housing, insurance, and other services", "It only affects banks", "It replaces a resume"],
    correctAnswer: "It can affect housing, insurance, and other services"
  }
];

export const preTestComplete = `Good job! Now let's learn all about credit scores.`;

export const topics: LessonTopic[] = [
  {
    id: "topic1",
    title: "What Is Credit, Really?",
    content: `Credit is built on trust. When a company lets you get something now and pay later, they are trusting you to keep your promise. Since they don't know you personally, they rely on your past behavior to predict your future behavior. That prediction is based on patterns: do you pay on time, do you keep balances reasonable, and do you avoid overloading yourself with debt?

Think of credit like borrowing something valuable from a friend. If you return it on time and in good condition, trust grows and future favors are easier to get. If you return it late or damaged, trust shrinks and the next request becomes harder. In the financial world, this trust is recorded and shared across lenders through your credit report and summarized by your credit score.

Good habits build trust slowly over time. Bad habits can damage it quickly and take years to repair. That's why credit should be used carefully and intentionally.`,
    discussionQuestion: "Have you ever lent something to a friend? How did their behavior affect whether you'd lend to them again?"
  },
  {
    id: "topic2",
    title: "Understanding the Credit Score Range",
    content: `A credit score usually ranges from 300 to 850. The number itself is a shortcut that tells lenders how risky it might be to lend to you. Higher scores suggest reliability; lower scores suggest uncertainty.

The general ranges are:
• 800-850: Exceptional
• 740-799: Very Good
• 670-739: Good
• 580-669: Fair
• 300-579: Poor

Even small differences in score can change your life in practical ways. For example, two people might buy the same car, but the person with a higher score could pay much less in interest every month. Over several years, that difference can add up to thousands of dollars. In other words, your score doesn't just affect approvals — it affects the total cost of your life.`,
    discussionQuestion: "Why do you think a higher credit score saves you money over time?"
  },
  {
    id: "topic3",
    title: "What Creditworthiness Means",
    content: `Creditworthiness is how safe you look to lenders. Because lending involves risk, lenders want to minimize surprises. They use your credit history as evidence of how you behave when money is involved.

Your score and report act like a financial resume. They don't describe who you are as a person, but they do describe how you handle responsibility. The more consistent and reliable your past behavior, the more confident lenders feel about your future behavior.`,
    discussionQuestion: "What do you think lenders want to see when they look at someone's credit history?"
  },
  {
    id: "topic4",
    title: "How Credit Affects Your Life",
    content: `Your credit score can affect far more than just loans. It can influence:
• Apartment approvals
• Car insurance prices
• Phone deposits
• Sometimes even job-related background checks

Strong credit usually means fewer deposits, lower monthly payments, and more choices. Weak credit often means higher costs, more restrictions, and fewer options. Over time, these differences can shape how much freedom you have in your budget and in your life.`,
    discussionQuestion: "Were you surprised to learn credit affects things like apartments and insurance? Why might companies check credit for those?"
  },
  {
    id: "topic5",
    title: "Credit Beyond Borrowing",
    content: `Many companies use credit information to judge reliability and risk, even when they are not lending you money. They are trying to answer a simple question: "Is this person consistent and responsible?"

This means your credit score is not just a money tool — it's a reputation tool. Protecting your credit is really about protecting how the world sees your reliability.`,
    discussionQuestion: "How might a landlord or employer use credit information differently than a bank?"
  },
  {
    id: "topic6",
    title: "Payment History (About 35%)",
    content: `Payment history is usually the largest part of your credit score. This makes sense: the most important question lenders ask is whether you pay what you owe on time.

One late payment can hurt your score for a long time, especially if it becomes a pattern. On the other hand, a long streak of on-time payments sends a powerful signal of reliability. This is why reminders, calendars, and automatic payments can be life-changing tools for your financial future.`,
    discussionQuestion: "What strategies could you use to make sure you never miss a payment?"
  },
  {
    id: "topic7",
    title: "Credit Utilization (About 30%)",
    content: `Credit utilization is how much of your available credit you are using. If you have a $1,000 limit and regularly use $900, it looks like you're stretched thin. If you usually keep it around $200 or $300, it looks controlled and healthy.

Even if you pay on time, high balances can still hurt your score. The general guideline is to try to stay under about 30% of your limit. This shows discipline and breathing room.`,
    discussionQuestion: "If you had a $500 credit limit, how much would you try to keep your balance under?"
  },
  {
    id: "topic8",
    title: "Length of Credit History",
    content: `The longer you manage credit responsibly, the more confident lenders feel. Time allows patterns to form, and patterns are what lenders trust.

This is why closing old, well-managed accounts can sometimes hurt your score — you are shortening your visible history. Time doesn't fix bad habits, but it greatly rewards good ones.`,
    discussionQuestion: "Why do you think older accounts are valuable for your credit score?"
  },
  {
    id: "topic9",
    title: "Credit Mix",
    content: `Credit mix refers to having more than one type of credit, such as a card and a loan. You don't need many accounts or fancy products. The goal is simply to show that you can handle different kinds of responsibility over time.

Think of this as demonstrating versatility and consistency rather than collecting accounts.`,
    discussionQuestion: "What different types of credit might someone have as an adult?"
  },
  {
    id: "topic10",
    title: "New Credit and Inquiries",
    content: `Every time you apply for credit, a record called a "hard inquiry" appears on your report. Too many in a short time can make you look desperate or financially stressed.

Being intentional about when and why you apply for credit helps protect your score and your reputation.`,
    discussionQuestion: "Why do you think applying for lots of credit at once might worry lenders?"
  },
  {
    id: "topic11",
    title: "Building Smart Credit Habits",
    content: `Strong credit is not built in a week or a month. It is built through habits repeated over years:
• Paying on time
• Keeping balances low
• Checking your credit report
• Fixing mistakes quickly
• Borrowing only when it makes sense

These habits quietly shape your financial life. You may not notice the benefits every day, but they compound into freedom, lower costs, and more choices.`,
    discussionQuestion: "What's one credit habit you want to make sure you practice when you're older?"
  }
];

export const postTestIntro = `Excellent work! Let's see how much you've learned about credit scores.`;

export const postTest: PostTestQuestion[] = [
  {
    id: "post1",
    question: "What is a credit score used for?",
    options: ["Choosing jobs", "Assessing creditworthiness", "Tracking spending", "Setting prices"],
    correctAnswer: "Assessing creditworthiness",
    explanation: "Lenders use credit scores to assess how trustworthy you are as a borrower."
  },
  {
    id: "post2",
    question: "Which factor matters most in your credit score?",
    options: ["Credit mix", "Payment history", "New credit", "Length of history"],
    correctAnswer: "Payment history",
    explanation: "Payment history makes up about 35% of your score — the largest single factor."
  },
  {
    id: "post3",
    question: "What is credit utilization?",
    options: ["Number of cards", "Time using credit", "Amount of credit limit used", "Income"],
    correctAnswer: "Amount of credit limit used",
    explanation: "Credit utilization is the percentage of your available credit that you're currently using."
  },
  {
    id: "post4",
    question: "Why does good credit matter?",
    options: ["Guarantees wealth", "Lowers costs and increases options", "Replaces saving", "Only matters for banks"],
    correctAnswer: "Lowers costs and increases options",
    explanation: "Good credit leads to lower interest rates, more approvals, and more financial opportunities."
  },
  {
    id: "post5",
    question: "Which habit helps your credit the most?",
    options: ["Paying late", "Maxing out cards", "Paying on time", "Opening many accounts quickly"],
    correctAnswer: "Paying on time",
    explanation: "Consistent on-time payments are the most important factor in building a strong credit score."
  }
];

export const lessonCompletion = `Congratulations! You've completed one of the most important lessons in your financial life.

Understanding credit gives you power, flexibility, and control. Be proud of yourself for finishing this lesson — you're building real financial strength!

Great job! 💳`;
