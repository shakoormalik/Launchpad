// Lesson 7: Protecting & Insuring Your Money

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

export const lessonIntroduction = `Hey! I'm LaunchPad Money Mentor, and today we're going to talk about something that doesn't always feel exciting, but is one of the smartest moves you can make with your money: protecting it.

Most people think about money in terms of how to earn it, save it, or spend it. But smart money management also means asking a very important question: "What could go wrong, and what's my plan if it does?" Life is full of surprises, and not all of them are good. This lesson is about learning how to prepare instead of panic.

By the end of this lesson, you'll understand:
• What financial risks are and how they show up in real life
• The three main ways people manage risk
• How insurance works and why it exists
• How to protect your money, your health, your belongings, and your identity`;

export const preTestIntro = `Let's see what you already know about protecting and insuring your money!`;

export const preTest: PreTestQuestion[] = [
  {
    id: "pre1",
    question: "What is a financial risk related to income?",
    options: ["Winning a lottery", "Losing a job", "Buying groceries", "Receiving a promotion"],
    correctAnswer: "Losing a job"
  },
  {
    id: "pre2",
    question: "How can you manage the risk of losing your assets?",
    options: ["Ignoring financial planning", "Buying property insurance", "Spending all your money", "Avoiding savings"],
    correctAnswer: "Buying property insurance"
  },
  {
    id: "pre3",
    question: "What helps reduce financial risk from illness?",
    options: ["Health insurance", "Auto insurance", "Travel plans", "Gym membership"],
    correctAnswer: "Health insurance"
  },
  {
    id: "pre4",
    question: "What kind of insurance helps protect your income if you can't work?",
    options: ["Car insurance", "Life insurance", "Disability insurance", "Dental insurance"],
    correctAnswer: "Disability insurance"
  },
  {
    id: "pre5",
    question: "How can you protect your identity?",
    options: ["Share passwords with friends", "Use public Wi-Fi for banking", "Monitor credit reports and use secure passwords", "Post personal info on social media"],
    correctAnswer: "Monitor credit reports and use secure passwords"
  },
  {
    id: "pre6",
    question: "Which insurance type covers damage to your car?",
    options: ["Life insurance", "Health insurance", "Auto insurance", "Disability insurance"],
    correctAnswer: "Auto insurance"
  },
  {
    id: "pre7",
    question: "Why is renter's insurance important?",
    options: ["It covers car accidents", "It protects belongings in a rented space", "It pays your rent", "It increases your credit score"],
    correctAnswer: "It protects belongings in a rented space"
  },
  {
    id: "pre8",
    question: "What is a strategy to avoid unwanted mail?",
    options: ["Change your name", "File a police report", "Remove your name from mailing lists", "Switch internet providers"],
    correctAnswer: "Remove your name from mailing lists"
  },
  {
    id: "pre9",
    question: "What is one benefit of life insurance?",
    options: ["Free gym access", "Protects your car", "Provides money to your family if you pass away", "Pays for vacations"],
    correctAnswer: "Provides money to your family if you pass away"
  },
  {
    id: "pre10",
    question: "What is one reason to have insurance?",
    options: ["To save money on groceries", "To protect against unexpected financial losses", "To avoid paying taxes", "To get government aid"],
    correctAnswer: "To protect against unexpected financial losses"
  }
];

export const preTestComplete = `Good job! Now let's learn about protecting and insuring your money.`;

export const topics: LessonTopic[] = [
  {
    id: "topic1",
    title: "Understanding Financial Risk",
    content: `A financial risk is anything that could cause you to lose money or increase your expenses unexpectedly. Some risks are small, like losing a pair of headphones. Others are huge, like getting seriously sick, losing a job, or being in a car accident.

Financial risks usually fall into a few big categories:
• Income risks (losing a job, getting fewer work hours)
• Asset risks (damage, theft, or accidents involving your belongings)
• Health risks (illness or injury)
• Identity risks (fraud or identity theft)

You cannot avoid all risks in life. But you can prepare for them — and preparation is what separates smart financial planning from wishful thinking.`,
    discussionQuestion: "What financial risks do you think are most likely to affect someone your age?"
  },
  {
    id: "topic2",
    title: "The Real Impact of Financial Risks",
    content: `When something unexpected happens, the financial damage can be serious. A single event can wipe out your savings, force you into debt, or damage your credit.

For example, a medical emergency can cost thousands of dollars. A stolen identity can take months or even years to fully fix. A car accident can affect both your transportation and your finances.

Understanding the impact of risk helps you realize why protection is not optional — it is essential.`,
    discussionQuestion: "Have you or someone you know ever faced an unexpected expense? How did it affect them financially?"
  },
  {
    id: "topic3",
    title: "The Three Ways to Manage Risk",
    content: `There are only three main ways to deal with financial risk:

1. Accepting the risk: This means you understand the risk and agree to handle the consequences yourself. This is usually okay for small risks.

2. Reducing the risk: This means taking steps to lower the chance something bad will happen. Examples include locking your doors, using strong passwords, or driving safely.

3. Transferring the risk: This means shifting the financial burden to someone else — usually an insurance company — by buying insurance.

Smart financial planning usually uses all three strategies in different situations.`,
    discussionQuestion: "Can you think of a risk you accept, one you reduce, and one you might transfer?"
  },
  {
    id: "topic4",
    title: "What Is Insurance and How Does It Work?",
    content: `Insurance is a tool that helps protect you from very large financial losses.

You pay a premium to an insurance company. In return, the company agrees to help pay for certain losses if something covered by the policy happens. You usually pay a deductible first, and then insurance helps with the rest.

Insurance does not prevent bad things from happening. It prevents bad things from destroying you financially.`,
    discussionQuestion: "Why do you think people are willing to pay for insurance even if they never end up using it?"
  },
  {
    id: "topic5",
    title: "Health Insurance",
    content: `Health insurance helps cover the cost of doctor visits, hospital stays, emergencies, and medications.

Without health insurance, a single medical emergency can cost more than most people earn in a year. With insurance, those costs are shared and reduced.

Health insurance is one of the most important forms of financial protection because health problems are both unpredictable and expensive.`,
    discussionQuestion: "What could happen to someone's finances if they had a serious medical emergency without health insurance?"
  },
  {
    id: "topic6",
    title: "Auto Insurance",
    content: `Auto insurance is required in most states to drive legally.

It helps cover:
• Damage to your car
• Damage to other people's property
• Medical costs from accidents

Even careful drivers can be in accidents. Auto insurance protects you from financial disasters caused by a single mistake or unlucky moment.`,
    discussionQuestion: "Why do you think auto insurance is required by law in most places?"
  },
  {
    id: "topic7",
    title: "Home and Renters Insurance",
    content: `Homeowners insurance protects your house and belongings.

Renters insurance protects your belongings even if you do not own the building.

These types of insurance can cover fire, theft, water damage, and smoke damage.

Many renters think they do not need insurance because they do not own the building — but their belongings still need protection.`,
    discussionQuestion: "If a fire destroyed everything in your apartment, how much would it cost to replace your belongings?"
  },
  {
    id: "topic8",
    title: "Life and Disability Insurance",
    content: `Life insurance provides money to your family or dependents if you die.

Disability insurance helps replace income if you are injured or too sick to work.

These types of insurance are especially important for adults who have families or people who depend on their income.`,
    discussionQuestion: "Who might need life or disability insurance the most, and why?"
  },
  {
    id: "topic9",
    title: "Protecting Yourself from Identity Theft",
    content: `Identity theft happens when someone steals your personal information and uses it to open accounts, take loans, or commit fraud in your name.

You can reduce your risk by using strong passwords, being careful what you share online, avoiding scams, and monitoring your accounts.

Once your identity is stolen, fixing the damage can take a long time. Prevention is much easier than repair.`,
    discussionQuestion: "What steps do you currently take to protect your personal information online?"
  },
  {
    id: "topic10",
    title: "Making Smart Insurance Choices",
    content: `When choosing insurance, you should:
• Compare premiums, deductibles, and coverage
• Choose based on your real risks and your budget
• Read what is NOT covered

The goal is not to buy the most insurance — it is to buy the right insurance.`,
    discussionQuestion: "How would you decide which types of insurance are most important for your situation?"
  },
  {
    id: "topic11",
    title: "Planning for a More Secure Future",
    content: `Saving money and having insurance work together.

Savings handle small problems.
Insurance protects you from big problems.

When you combine both, you build a much stronger and more stable financial life.`,
    discussionQuestion: "How do savings and insurance work together to protect someone's financial future?"
  }
];

export const postTestIntro = `Excellent! You've learned a lot about protecting your money. Let's see how much you remember!`;

export const postTest: PostTestQuestion[] = [
  {
    id: "post1",
    question: "What is the main purpose of insurance?",
    options: ["To make money for insurance companies", "To prevent bad things from happening", "To protect against large financial losses", "To replace savings completely"],
    correctAnswer: "To protect against large financial losses",
    explanation: "Insurance helps protect you from major financial losses that could otherwise devastate your finances."
  },
  {
    id: "post2",
    question: "Which of the following is an example of transferring risk?",
    options: ["Locking your doors", "Driving carefully", "Buying insurance", "Saving money"],
    correctAnswer: "Buying insurance",
    explanation: "When you buy insurance, you transfer the financial risk to the insurance company."
  },
  {
    id: "post3",
    question: "What does a deductible mean?",
    options: ["The monthly cost of insurance", "The amount insurance always pays", "The amount you pay before insurance helps", "The total value of the policy"],
    correctAnswer: "The amount you pay before insurance helps",
    explanation: "A deductible is what you pay out of pocket before your insurance coverage kicks in."
  },
  {
    id: "post4",
    question: "Why is health insurance especially important?",
    options: ["Because doctors require it", "Because medical emergencies are expensive and unpredictable", "Because it replaces your income", "Because it covers car accidents"],
    correctAnswer: "Because medical emergencies are expensive and unpredictable",
    explanation: "Medical care can be extremely expensive, and health problems often happen unexpectedly."
  },
  {
    id: "post5",
    question: "Which type of insurance protects your belongings in an apartment you rent?",
    options: ["Auto insurance", "Renters insurance", "Life insurance", "Disability insurance"],
    correctAnswer: "Renters insurance",
    explanation: "Renters insurance protects your personal belongings even though you don't own the building."
  },
  {
    id: "post6",
    question: "What is one way to reduce the risk of identity theft?",
    options: ["Sharing passwords", "Using strong passwords and monitoring accounts", "Using public Wi-Fi for banking", "Posting personal information online"],
    correctAnswer: "Using strong passwords and monitoring accounts",
    explanation: "Strong passwords and regular monitoring help protect your personal information from theft."
  },
  {
    id: "post7",
    question: "What is an example of accepting risk?",
    options: ["Buying insurance", "Using a seatbelt", "Paying for a small loss yourself", "Installing a security system"],
    correctAnswer: "Paying for a small loss yourself",
    explanation: "Accepting risk means you're willing to handle the consequences yourself, usually for smaller potential losses."
  },
  {
    id: "post8",
    question: "Why is auto insurance required in most states?",
    options: ["To increase car prices", "To protect drivers from small expenses", "To help cover damages and injuries from accidents", "To make driving harder"],
    correctAnswer: "To help cover damages and injuries from accidents",
    explanation: "Auto insurance is required to ensure that accident victims can be compensated for damages and injuries."
  },
  {
    id: "post9",
    question: "Which best describes the relationship between savings and insurance?",
    options: ["Insurance replaces the need for savings", "Savings replace the need for insurance", "Savings handle small problems, insurance handles big ones", "They have nothing to do with each other"],
    correctAnswer: "Savings handle small problems, insurance handles big ones",
    explanation: "Savings and insurance work together: savings cover small unexpected costs while insurance protects against major losses."
  },
  {
    id: "post10",
    question: "What is the best approach to choosing insurance?",
    options: ["Buy as much as possible", "Buy the cheapest option only", "Choose based on risks, coverage, and budget", "Avoid insurance whenever possible"],
    correctAnswer: "Choose based on risks, coverage, and budget",
    explanation: "The best insurance choices consider your actual risks, what's covered, and what you can afford."
  }
];

export const lessonCompletion = `Smart money management isn't just about growing your money — it's also about protecting it.

When you plan for what could go wrong, you give yourself confidence, stability, and peace of mind. That's real financial power.

Great job completing this lesson! 🛡️`;
