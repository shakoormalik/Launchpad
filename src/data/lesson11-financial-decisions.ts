// Lesson 11: Making Personal Financial Decisions

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

export const lessonIntroduction = `Hey! I'm LaunchPad Money Mentor. In this lesson, we're going to learn how to make smart money decisions that help you today and set you up for the future.

Every day, you make choices that affect your money — even when you don't realize it. Some choices are small, like buying a snack or downloading an app. Others can shape your life for years, like choosing how to pay for school, whether to take on debt, or how to save for something important. The goal of this lesson is not to be perfect. The goal is to learn how to slow down, think clearly, and choose on purpose.

By the end of this lesson, you'll be able to:
• Understand what financial decision-making really means
• Use a simple step-by-step decision process
• Recognize internal and external influences on your choices
• Understand risk and opportunity cost
• Make more confident, intentional money decisions`;

export const preTestIntro = `Let's see what you already know about making financial decisions!`;

export const preTest: PreTestQuestion[] = [
  {
    id: "pre1",
    question: "What is the first step in making a financial decision?",
    options: ["Spend money quickly", "Set a financial goal", "Ignore your budget", "Ask a friend"],
    correctAnswer: "Set a financial goal"
  },
  {
    id: "pre2",
    question: "Which of the following is a factor that may affect financial decision-making?",
    options: ["Personal values", "Peer pressure", "Income level", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: "pre3",
    question: "How do economic conditions influence personal financial decisions?",
    options: ["They don't affect your finances", "They change your career interests", "They impact job opportunities, prices, and income", "They only affect banks"],
    correctAnswer: "They impact job opportunities, prices, and income"
  },
  {
    id: "pre4",
    question: "What is an opportunity cost?",
    options: ["A special offer at a store", "A discount for students", "What you give up when you make a choice", "A loan you have to repay"],
    correctAnswer: "What you give up when you make a choice"
  },
  {
    id: "pre5",
    question: "Why is it important to identify risks when making financial decisions?",
    options: ["To ignore consequences", "To find someone else to blame", "To avoid mistakes and make better choices", "So you never spend money again"],
    correctAnswer: "To avoid mistakes and make better choices"
  }
];

export const preTestComplete = `Great start! Now let's learn about making smart financial decisions.`;

export const topics: LessonTopic[] = [
  {
    id: "topic1",
    title: "Decision-Making — Spontaneous vs. Strategic",
    content: `Decision-making is the act of choosing between two or more options. You make decisions every day, often without even thinking about them. Some of these decisions are small and have very little impact, while others can shape your life for years to come.

Spontaneous decisions are quick, automatic choices. For example, choosing what song to play, what snack to buy, or what video to watch. These decisions usually do not change your future, and they are not always bad. However, problems happen when big money decisions are treated like small ones.

Strategic decisions are choices that affect your future. These include decisions like choosing a phone plan, deciding whether to save or spend, buying a car, or planning how to pay for college or training. These decisions deserve time, research, and careful thinking.

One of the most important financial skills you can learn is knowing when to slow down. The bigger the decision, the more carefully you should think it through.`,
    discussionQuestion: "Can you think of a decision you made quickly that you later wished you had thought about more?"
  },
  {
    id: "topic2",
    title: "What Counts as a Financial Decision?",
    content: `A financial decision is any choice that involves money in any way. This includes spending, saving, borrowing, and investing.

Some financial decisions happen every day, such as buying food, paying for transportation, or choosing whether to save or spend your allowance or paycheck. Other financial decisions are much bigger, like choosing a car, signing up for a phone plan, or deciding how to pay for school.

Even small financial decisions matter because they add up over time. A few dollars spent here and there may not seem important, but over weeks and months, those small choices can turn into hundreds or even thousands of dollars. Being intentional matters more than being perfect.`,
    discussionQuestion: "What's a small financial decision you make almost every day?"
  },
  {
    id: "topic3",
    title: "Why Financial Decisions Matter and What a Financial Plan Is",
    content: `Every money choice has consequences. Good decisions usually create more options and less stress. Poor decisions can create debt, pressure, and limits on what you can do in the future.

A financial plan is a roadmap for your money. It helps you decide what is important to you, where your money should go, and how to prepare for both expected and unexpected events. A plan does not have to be complicated. Even a simple plan gives you direction.

Without a plan, many people spend first and hope for the best. With a plan, you decide first and spend with purpose.`,
    discussionQuestion: "Do you have any kind of financial plan, even a simple one? What does it include?"
  },
  {
    id: "topic4",
    title: "The Financial Decision-Making Steps",
    content: `Smart decisions usually follow a process, especially for bigger choices.

A simple and effective process looks like this:
1. Define the goal or problem. What are you trying to accomplish?
2. Identify your options. What choices do you have?
3. Evaluate the pros, cons, and consequences of each option.
4. Choose the best option based on your goals and values.
5. Review the result and adjust if needed.

Using a process protects you from impulse decisions and emotional choices. It helps you think clearly instead of reacting in the moment.`,
    discussionQuestion: "Think of a decision you need to make soon. How could you use these steps?"
  },
  {
    id: "topic5",
    title: "What Influences Your Money Decisions?",
    content: `Your money decisions are influenced by many things, often without you realizing it.

External influences include:
• The economy (prices, jobs, interest rates)
• Friends and family
• Advertising and social media
• Trends and peer pressure

Internal influences include:
• Your values and beliefs
• Your goals and dreams
• Your emotions and moods
• Your habits and experiences

The more aware you are of these influences, the more control you have over your choices instead of being controlled by pressure or impulse.`,
    discussionQuestion: "What influences your spending decisions the most — friends, ads, emotions, or something else?"
  },
  {
    id: "topic6",
    title: "Tools That Strengthen Your Decisions",
    content: `Certain tools make good decisions easier and bad decisions less likely.

These tools include:
• Understanding needs vs wants
• Setting clear goals
• Using a budget
• Saving regularly
• Practicing mindful spending

These tools help you make choices based on priorities instead of pressure, and on long-term benefits instead of short-term feelings.`,
    discussionQuestion: "Which of these tools do you already use? Which would you like to try?"
  },
  {
    id: "topic7",
    title: "Risk and Opportunity Cost",
    content: `Risk is what could go wrong. Every decision has some level of risk, even if it seems small.

Opportunity cost is what you give up when you choose one option instead of another. For example, if you spend money on shoes, you give up the chance to save that money or spend it on something else.

Thinking about both risk and opportunity cost helps you avoid regret and make more thoughtful choices.`,
    discussionQuestion: "What's something you gave up recently to choose something else? Was it worth it?"
  },
  {
    id: "topic8",
    title: "Applying the Decision Process in Real Life",
    content: `Using a real-life scenario helps you see how the decision process works in action. The goal is always the same: meet your needs today while protecting your future at the same time.

When you practice using the decision steps regularly, they start to become a habit. Over time, good decision-making becomes automatic, and you start building confidence in your ability to handle money wisely.`,
    discussionQuestion: "What's one financial decision you're facing right now that you could apply this process to?"
  }
];

export const postTestIntro = `Excellent! Let's see what you've learned about making financial decisions.`;

export const postTest: PostTestQuestion[] = [
  {
    id: "post1",
    question: "What is decision making?",
    options: ["The act of randomly choosing", "The process of making a choice from available alternatives", "The act of choosing the most expensive option", "The act of copying others"],
    correctAnswer: "The process of making a choice from available alternatives",
    explanation: "Decision-making is the thoughtful process of choosing between available options."
  },
  {
    id: "post2",
    question: "What is an opportunity cost?",
    options: ["The benefit of your choice", "What you give up when you choose one thing over another", "A discount at a store", "A type of loan"],
    correctAnswer: "What you give up when you choose one thing over another",
    explanation: "Opportunity cost is what you sacrifice when you make one choice instead of another."
  },
  {
    id: "post3",
    question: "Which is an internal factor that influences decisions?",
    options: ["Inflation", "Advertising", "Personal values", "Interest rates"],
    correctAnswer: "Personal values",
    explanation: "Personal values are internal factors that come from within you and influence your choices."
  },
  {
    id: "post4",
    question: "Which is an external factor that influences decisions?",
    options: ["Goals", "Habits", "Emotions", "Economic conditions"],
    correctAnswer: "Economic conditions",
    explanation: "Economic conditions are external factors that come from outside you and affect your financial options."
  },
  {
    id: "post5",
    question: "Why is using a decision-making process important?",
    options: ["It slows you down and helps you think", "It makes decisions harder", "It removes all risk", "It guarantees success"],
    correctAnswer: "It slows you down and helps you think",
    explanation: "A decision-making process helps you pause, think clearly, and make more intentional choices."
  }
];

export const lessonCompletion = `Great decisions don't come from luck — they come from habits.

Every time you slow down, think it through, and choose on purpose, you strengthen your financial future. That skill will serve you for the rest of your life.

Good job on completing this lesson! 🎯`;
