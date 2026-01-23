// Lesson 13: Consumer Privacy

export const lessonIntroduction = `Hey! I'm LaunchPad Money Mentor, and I'm excited to be your guide for this lesson on Consumer Privacy.

In today's digital world, your personal information is being collected, shared, and stored more than ever before. Every time you sign up for an app, shop online, apply for a job, or visit a website, pieces of your personal data are created and used.

By the end of this lesson, you'll understand:
• How your personal information is collected and used
• How data profiles affect your life
• What laws exist to protect your privacy
• What steps you can take to protect yourself

Let's start with a quick pre-test to see what you already know!`;

export const preTestIntro = `Before we dive in, let's see what you already know about consumer privacy. Don't worry if you're not sure — that's what this lesson is for!`;

export interface PreTestQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const preTest: PreTestQuestion[] = [
  {
    id: 1,
    question: "What is data privacy?",
    options: [
      "A law that requires people to share personal data",
      "The right to keep personal information secure and control how it is used",
      "A program used to track online activity",
      "A method for advertising on social media"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of the following is an advantage of having a data profile?",
    options: [
      "Increased junk mail",
      "Easier access to personalized services and content",
      "Higher risk of identity theft",
      "Invasion of privacy"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which of the following is a disadvantage of having a data profile?",
    options: [
      "Lower internet speed",
      "Limited access to services",
      "Risk of personal data being misused",
      "Better targeted ads"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Which federal law helps protect consumer privacy?",
    options: [
      "Patriot Act",
      "Freedom of Information Act",
      "Gramm-Leach-Bliley Act",
      "HIPAA"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Why is protecting your Social Security number important?",
    options: [
      "It can improve your credit score",
      "It is required for job applications",
      "It can be used to steal your identity",
      "It lowers your taxes"
    ],
    correctAnswer: 2
  }
];

export const preTestComplete = `Great job completing the pre-test! Now let's learn about consumer privacy and how to protect your personal information in the digital age.`;

export interface LessonTopic {
  id: number;
  title: string;
  content: string;
  discussionQuestion: string;
}

export const topics: LessonTopic[] = [
  {
    id: 1,
    title: "What Is Data Privacy?",
    content: `Data privacy refers to how your personal information is collected, used, stored, and shared — and how it is protected from misuse.

Personal data includes things like:
• Your name, address, phone number
• Social Security number
• Financial information
• Medical records
• Your online behavior

Every time you interact with technology, you create data. When you use a phone, browse the internet, apply for school, visit a doctor, or open a bank account, information about you is recorded somewhere.

Good data privacy protects you from fraud, identity theft, and being taken advantage of. Poor data privacy can lead to financial loss, damaged credit, stress, and harm to your reputation.`,
    discussionQuestion: "Think about all the apps on your phone. How much of your personal information do you think they collect about you?"
  },
  {
    id: 2,
    title: "Data Privacy in the Information Age",
    content: `We live in a world driven by technology and data. Companies and governments collect massive amounts of information every day.

This data helps make services faster, more convenient, and more personalized. For example:
• Streaming services suggest shows
• Maps suggest routes
• Stores recommend products based on your past behavior

However, the same systems that make life easier also create risks. The more data collected, the more valuable it becomes to hackers, scammers, and criminals.

Data breaches, identity theft, and unauthorized surveillance are real and growing threats. Your digital footprint — the trail of data you leave behind — follows you everywhere.`,
    discussionQuestion: "Have you ever noticed an ad pop up for something you just talked about or searched for? How did that make you feel?"
  },
  {
    id: 3,
    title: "What Is a Data Profile?",
    content: `A data profile is a collection of information about you. It may include:
• Your shopping habits
• Online activity
• Location
• Interests
• Financial behavior

Many companies build data profiles without you ever seeing them or realizing they exist.

Businesses use data profiles to decide:
• What ads to show you
• What products to recommend
• Whether to approve you for credit, insurance, or a job

Your data profile can follow you for years. If the information is wrong, outdated, or taken out of context, it can hurt your opportunities.`,
    discussionQuestion: "If a company built a profile about you based on your online activity, what do you think it would say about you?"
  },
  {
    id: 4,
    title: "Advantages and Disadvantages of Data Profiles",
    content: `Data profiles are not always bad. They have both benefits and risks.

**Advantages include:**
• More personalized services and recommendations
• Faster approval for loans, credit, and services
• More convenient and customized online experiences

**Disadvantages include:**
• Loss of privacy and personal control
• Risk of errors in your profile affecting important decisions
• Potential discrimination or unfair treatment
• Greater harm if your data is stolen, sold, or hacked

Understanding both sides helps you make smarter choices about what information you share and with whom.`,
    discussionQuestion: "Would you trade some of your privacy for more personalized services? Why or why not?"
  },
  {
    id: 5,
    title: "Laws That Protect Your Privacy",
    content: `Several laws exist to protect your personal information and limit how companies can use it.

**Important privacy laws include:**
• **Fair Credit Reporting Act (FCRA)**: Protects your credit information and gives you the right to see and correct your credit report
• **HIPAA**: Protects medical information
• **COPPA**: Protects children under 13 online
• **Gramm-Leach-Bliley Act**: Protects consumer financial information

These laws give you rights, set rules for companies, and help prevent abuse, fraud, and misuse of your data.`,
    discussionQuestion: "Did you know you have the right to see your credit report and fix errors? Have you or your family ever checked one?"
  },
  {
    id: 6,
    title: "Sources of Personal Information",
    content: `Your personal information comes from many places:

**Public sector sources:**
• Government agencies
• Schools
• Courts
• Motor vehicle records

**Private sector sources:**
• Banks
• Employers
• Insurance companies
• Retailers and websites

**Online activity:**
• Social media
• Apps
• Search engines
• Shopping sites
• Forms, surveys, and applications you fill out

Every time you share information, you leave a data trail. Being aware of where your data comes from helps you protect it.`,
    discussionQuestion: "Think about the last week. How many places did you share personal information with?"
  },
  {
    id: 7,
    title: "Common Consumer Privacy Issues",
    content: `Privacy issues can appear in many parts of life:

• **Insurance records**: Medical information shared without consent
• **Employment records**: Electronic monitoring of employee activities
• **Direct mail**: Your information sold to marketing lists
• **Credit reporting**: Incorrect or outdated personal information
• **Telecommunications**: Electronic monitoring and data collection
• **Social Security numbers**: Misuse leading to identity theft

These issues can affect your finances, your opportunities, and your personal safety. Many people don't realize a problem exists until damage has already been done.`,
    discussionQuestion: "Have you or someone you know ever received a suspicious call or email trying to get personal information?"
  },
  {
    id: 8,
    title: "Practical Steps to Protect Your Privacy",
    content: `You can take simple but powerful steps to protect yourself:

**Basic protection:**
• Limit what personal information you share
• Use strong passwords and two-factor authentication
• Be careful what you post online
• Shred documents with personal information
• Watch out for scams and phishing messages

**Advanced steps:**
• Add your number to the National Do Not Call Registry
• Reduce junk mail using services like DMAchoice.org
• Check your credit report regularly at AnnualCreditReport.com
• Dispute any errors you find

Your personal information is valuable. Once it is leaked or stolen, it can be very hard to take back.`,
    discussionQuestion: "What's one step you could take today to better protect your personal information online?"
  }
];

export const postTestIntro = `Excellent! You've learned a lot about consumer privacy. Now let's test your knowledge with a post-test to see how much you've learned!`;

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
    question: "What is the primary objective of data privacy in the information age?",
    options: [
      "Protecting personal data from unauthorized use",
      "Analyzing data profiles for marketing purposes",
      "Understanding legal frameworks only",
      "Enhancing data sharing with third parties"
    ],
    correctAnswer: 0,
    explanation: "Data privacy is about protecting your personal information from unauthorized use, misuse, and theft. It's your right to control how your information is collected and used."
  },
  {
    id: 2,
    question: "When analyzing the advantages and disadvantages of a data profile, which is an advantage?",
    options: [
      "Reduced risk of identity theft",
      "Enhanced personalization of online services",
      "Increased data breaches",
      "Decreased relevance of targeted ads"
    ],
    correctAnswer: 1,
    explanation: "One advantage of data profiles is that they enable personalized services — like recommendations on streaming platforms or customized shopping experiences."
  },
  {
    id: 3,
    question: "Which of the following is a federal law in the United States that addresses privacy and data protection?",
    options: [
      "COPPA",
      "GDPR",
      "HIPAA",
      "All of the above that apply in the US"
    ],
    correctAnswer: 0,
    explanation: "COPPA (Children's Online Privacy Protection Act) and HIPAA are US federal laws. GDPR is a European law. COPPA specifically protects children's online privacy."
  },
  {
    id: 4,
    question: "What is the key purpose of identifying common privacy issues across various sectors?",
    options: [
      "Enhancing the effectiveness of direct mail campaigns",
      "Raising awareness about potential data privacy concerns",
      "Promoting unrestricted sharing of Social Security numbers",
      "Encouraging data collection without consent"
    ],
    correctAnswer: 1,
    explanation: "Understanding common privacy issues helps you become aware of potential threats to your personal information across different areas of life."
  },
  {
    id: 5,
    question: "To remove your name from telemarketing lists, what is typically the recommended step?",
    options: [
      "Providing your information to as many marketers as possible",
      "Opting in to receive promotional emails",
      "Registering with the National Do Not Call Registry",
      "Ignoring unsolicited calls and emails"
    ],
    correctAnswer: 2,
    explanation: "The National Do Not Call Registry is a free service that lets you opt out of telemarketing calls. You can register at donotcall.gov."
  },
  {
    id: 6,
    question: "True or False: Data privacy only concerns external threats and has limited relevance within organizations.",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 1,
    explanation: "False! Data privacy concerns both external threats (hackers) AND internal ones (employees misusing data, companies selling your information). It applies everywhere."
  },
  {
    id: 7,
    question: "True or False: The Fair Credit Reporting Act allows a person to access their credit report.",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 0,
    explanation: "True! The Fair Credit Reporting Act (FCRA) gives you the right to access your credit report and dispute any errors you find."
  }
];

export const lessonCompletion = `Congratulations! You've completed the Consumer Privacy lesson! 🎉

Remember: Consumer privacy is not just a technology issue — it's a life issue. The more you understand how your data is used, the more power you have to protect yourself.

Every smart step you take today helps protect your future. Great job!`;
