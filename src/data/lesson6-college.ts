// Lesson 6: The Cost of College

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

export const lessonIntroduction = `Hey! I'm LaunchPad Money Mentor. College is one of the biggest investments most people ever make, and like any big investment, it deserves careful thinking and smart planning.

Many students focus only on getting accepted, but smart students also ask an important question: "Can I afford this, and what will it really cost me over time?" This lesson will help you see the full picture — not just tuition, but all the pieces that make up the real cost of college.

By the end of this lesson, you'll understand:
• What "cost of attendance" really includes
• The difference between tuition, fees, and living expenses
• How financial aid works
• How student loans really affect your future
• How to manage money wisely while in school`;

export const preTestIntro = `Let's start by seeing what you already know about the cost of college!`;

export const preTest: PreTestQuestion[] = [
  {
    id: "pre1",
    question: "Which of the following is a key factor to consider when selecting a college?",
    options: ["The mascot", "The campus size", "Cost of attendance and financial aid options", "The school colors"],
    correctAnswer: "Cost of attendance and financial aid options"
  },
  {
    id: "pre2",
    question: "What is one benefit of securing a student loan?",
    options: ["It makes college free", "It helps cover education costs when needed", "It eliminates all future debt", "It replaces scholarships"],
    correctAnswer: "It helps cover education costs when needed"
  },
  {
    id: "pre3",
    question: "How can student loans affect your future finances?",
    options: ["They disappear after graduation", "They improve your income automatically", "They must be repaid with interest, impacting your future budget", "They only affect your credit score"],
    correctAnswer: "They must be repaid with interest, impacting your future budget"
  },
  {
    id: "pre4",
    question: "What is a smart money management strategy while in college?",
    options: ["Spending first, saving later", "Making a monthly budget and tracking expenses", "Ignoring small purchases", "Using only credit cards"],
    correctAnswer: "Making a monthly budget and tracking expenses"
  },
  {
    id: "pre5",
    question: "Which type of financial aid does not have to be repaid?",
    options: ["Loan", "Work-study", "Scholarship or grant", "Credit card"],
    correctAnswer: "Scholarship or grant"
  }
];

export const preTestComplete = `Great start! Now let's explore everything you need to know about the cost of college.`;

export const topics: LessonTopic[] = [
  {
    id: "topic1",
    title: "Tuition and Fees",
    content: `Tuition is what you pay for your classes. Fees are extra charges for things like technology, labs, student activities, and campus services. Together, tuition and fees make up the core academic cost of college.

Public colleges usually charge less for students who live in the same state. Private colleges usually charge one price for everyone, but they sometimes offer more financial aid. The sticker price is not always what you end up paying, but it is still important to understand it.

When comparing schools, you should always look at both tuition and fees — not just one or the other.`,
    discussionQuestion: "What surprised you most about how tuition and fees work?"
  },
  {
    id: "topic2",
    title: "Room and Board",
    content: `Room and board means where you live and what you eat. This can include dorm housing, apartments, or living at home, as well as meal plans or grocery costs.

Living on campus is convenient, but it can be expensive. Living off campus or at home can save money, but may add transportation costs and time. The best choice depends on your budget, your school, and your situation.

Housing and food are often the second biggest cost of college after tuition.`,
    discussionQuestion: "If you could choose, would you rather live on campus or off campus? What factors would influence your decision?"
  },
  {
    id: "topic3",
    title: "Books and Supplies",
    content: `Books, online access codes, supplies, and technology can cost hundreds or even thousands of dollars per year.

Some classes require special equipment, calculators, lab gear, or software. Planning for these costs ahead of time can prevent surprises.

Smart students look for ways to save, such as renting books, buying used books, or using digital versions.`,
    discussionQuestion: "What strategies could you use to spend less on textbooks?"
  },
  {
    id: "topic4",
    title: "Transportation",
    content: `Transportation costs include getting to and from school, traveling home, and getting around while you're in school.

This might include gas, bus passes, train tickets, parking, or car maintenance. Even if you live on campus, travel costs still exist.

These costs are easy to forget, but over a year they can add up to a large amount.`,
    discussionQuestion: "How might your transportation costs differ depending on where you go to college?"
  },
  {
    id: "topic5",
    title: "Personal and Hidden Costs",
    content: `College also comes with many small daily costs: laundry, snacks, toiletries, club fees, social activities, and more.

Individually, these costs seem small. Together, they can quietly drain your budget if you are not paying attention.

Planning for these "hidden" costs is one of the biggest differences between students who feel in control of their money and students who feel stressed.`,
    discussionQuestion: "What personal expenses do you think students often forget to budget for?"
  },
  {
    id: "topic6",
    title: "What Is Financial Aid?",
    content: `Financial aid is money that helps you pay for college. It comes in four main forms:
• Grants — Free money based on need
• Scholarships — Free money based on achievement or talent
• Work-study — Part-time jobs for students
• Loans — Borrowed money that must be repaid

Grants and scholarships do not have to be repaid. Loans do.

Filling out the FAFSA early gives you the best chance of receiving aid.`,
    discussionQuestion: "Which type of financial aid would you try to get first, and why?"
  },
  {
    id: "topic7",
    title: "Understanding Student Loans",
    content: `Student loans are borrowed money that must be repaid with interest. They make college possible for many people, but they also create future monthly payments.

Federal loans usually have lower interest rates and better repayment options than private loans. You should always borrow only what you truly need.

A loan helps you now, but your future self has to pay it back.`,
    discussionQuestion: "How might having student loan payments affect your life after graduation?"
  },
  {
    id: "topic8",
    title: "Managing Your Money While in College",
    content: `Once you are in college, managing your money becomes your responsibility.

A budget helps you:
• Make sure your bills are paid
• Avoid running out of money
• Reduce stress
• Make better choices

Tracking your spending helps you see where your money is really going and where you can improve.`,
    discussionQuestion: "What's one money management habit you want to have by the time you're in college?"
  },
  {
    id: "topic9",
    title: "Thinking Long-Term About Your College Choice",
    content: `The real cost of college is not just what you pay while you're in school. It also includes what you will owe after graduation.

A more expensive school is not always a better investment. What matters is the value you get, the debt you take on, and your future earning potential.

Smart students think about both today and tomorrow.`,
    discussionQuestion: "How would you weigh the cost of a college against its reputation or your career goals?"
  }
];

export const postTestIntro = `Great job learning about college costs! Let's check your understanding with a post-test.`;

export const postTest: PostTestQuestion[] = [
  {
    id: "post1",
    question: "What does \"cost of attendance\" include?",
    options: ["Only tuition", "Only housing", "All major college expenses combined", "Only books"],
    correctAnswer: "All major college expenses combined",
    explanation: "Cost of attendance includes tuition, fees, room and board, books, transportation, and personal expenses."
  },
  {
    id: "post2",
    question: "Which type of financial aid does not need to be repaid?",
    options: ["Loan", "Credit card", "Grant or scholarship", "Work-study"],
    correctAnswer: "Grant or scholarship",
    explanation: "Grants and scholarships are free money that you don't have to pay back, unlike loans."
  },
  {
    id: "post3",
    question: "Why is it important to understand student loans before accepting them?",
    options: ["Because they must be repaid with interest", "Because they are free money", "Because they replace scholarships", "Because they lower tuition"],
    correctAnswer: "Because they must be repaid with interest",
    explanation: "Student loans must be repaid with interest, which can significantly impact your budget for years after graduation."
  },
  {
    id: "post4",
    question: "Which is an example of a hidden college cost?",
    options: ["Tuition", "Books", "Laundry and snacks", "Housing"],
    correctAnswer: "Laundry and snacks",
    explanation: "Hidden costs are the small daily expenses like laundry, toiletries, and snacks that add up over time."
  },
  {
    id: "post5",
    question: "Why is budgeting important in college?",
    options: ["It guarantees more money", "It helps you control and plan your spending", "It removes all expenses", "It replaces financial aid"],
    correctAnswer: "It helps you control and plan your spending",
    explanation: "Budgeting helps you track where your money goes and make intentional choices with your limited resources."
  }
];

export const lessonCompletion = `College is an investment in your future. The smartest students are not just the ones who study hard — they are the ones who plan smart.

When you understand the real cost and make thoughtful choices, you protect both your education and your financial future.

Congratulations on completing this lesson! 🎓`;
