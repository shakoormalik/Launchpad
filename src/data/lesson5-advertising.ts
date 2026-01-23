// Lesson 5: The Influence of Advertising

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

export const lessonIntroduction = `Hey! I'm LaunchPad Money Mentor, and I'm excited to be your guide for this lesson on The Influence of Advertising.

Advertising is everywhere — on TV, social media, radio, billboards, websites, and even inside games and apps. Ads don't just sell products; they sell ideas, lifestyles, and expectations. In this lesson, you'll learn how advertising works, the techniques it uses to influence you, and how to protect yourself from misleading messages.

By the end of this lesson, you'll understand how to:
• Recognize common advertising techniques and appeals
• Identify deceptive or questionable advertising practices
• Tell the difference between facts and unsupported claims
• Make smarter, more informed consumer decisions`;

export const preTestIntro = `Let's see what you already know about advertising and how it influences us!`;

export const preTest: PreTestQuestion[] = [
  {
    id: "pre1",
    question: "What is one common advertising appeal?",
    options: ["Ignoring consumer needs", "Creating confusing slogans", "Emotional connection with the audience", "Listing every product feature"],
    correctAnswer: "Emotional connection with the audience"
  },
  {
    id: "pre2",
    question: "What is a basic advertising technique?",
    options: ["Hiding product information", "Using celebrity endorsements", "Providing no images", "Making ads boring"],
    correctAnswer: "Using celebrity endorsements"
  },
  {
    id: "pre3",
    question: "Which is an example of deceptive advertising?",
    options: ["Clearly stating product ingredients", "Offering a money-back guarantee", "Making false claims about product results", "Showing customer reviews"],
    correctAnswer: "Making false claims about product results"
  },
  {
    id: "pre4",
    question: "A misleading advertisement may:",
    options: ["Contain full product details", "Accurately represent the product", "Use fine print to hide important terms", "Be approved by a government agency"],
    correctAnswer: "Use fine print to hide important terms"
  },
  {
    id: "pre5",
    question: "What is an unsupported claim in a commercial?",
    options: ["A claim with documented proof", "A testimonial by a real user", "A statement with no evidence", "A description of features"],
    correctAnswer: "A statement with no evidence"
  },
  {
    id: "pre6",
    question: "What is a red flag in print advertising?",
    options: ["Clear contact information", "A price that seems too good to be true", "Government certification logos", "Product images"],
    correctAnswer: "A price that seems too good to be true"
  },
  {
    id: "pre7",
    question: "Which technique uses fear to persuade consumers?",
    options: ["Repetition", "Humor", "Scare tactics", "Celebrity endorsements"],
    correctAnswer: "Scare tactics"
  },
  {
    id: "pre8",
    question: "Why should you be cautious with celebrity endorsements?",
    options: ["Celebrities always use the products they promote", "They ensure high quality", "Endorsements may not reflect actual use or benefits", "Celebrities provide customer service"],
    correctAnswer: "Endorsements may not reflect actual use or benefits"
  },
  {
    id: "pre9",
    question: "What kind of claim should you verify before purchasing a product?",
    options: ["Brand name", "Country of origin", "\"Clinically proven\" results", "Color options"],
    correctAnswer: "\"Clinically proven\" results"
  },
  {
    id: "pre10",
    question: "Which type of advertisement is most likely to be exaggerated?",
    options: ["Government public service ads", "Product comparison charts", "Infomercials", "Instruction manuals"],
    correctAnswer: "Infomercials"
  }
];

export const preTestComplete = `Great job! Now let's dive deep into how advertising really works.`;

export const topics: LessonTopic[] = [
  {
    id: "topic1",
    title: "What Is Advertising and Why Does It Matter?",
    content: `Advertising is a form of communication used by businesses to inform, persuade, and influence people to buy products or services. Companies spend billions of dollars each year on advertising because it works.

Ads do more than tell you what a product does. They shape how you think, what you want, and what you believe is normal or desirable. Advertising often sells a lifestyle or an image, not just an object.

Because advertising is everywhere, learning how it works is an important life skill. The more you understand advertising, the more control you have over your decisions instead of letting ads make choices for you.`,
    discussionQuestion: "Where do you see the most ads in your daily life? How do they try to get your attention?"
  },
  {
    id: "topic2",
    title: "How Advertising Influences Our Choices",
    content: `Ads are designed to grab your attention and create emotions. They might make you feel excited, confident, afraid, left out, or hopeful. Those feelings can push you toward buying something without fully thinking it through.

Many ads connect products to happiness, success, popularity, or confidence. Over time, these messages can shape what you think you need, even if you didn't want it before.

Understanding this influence helps you pause, think, and decide whether you really want something or whether the ad is simply doing its job well.`,
    discussionQuestion: "Can you think of an ad that made you feel a strong emotion? What was it selling?"
  },
  {
    id: "topic3",
    title: "Common Advertising Techniques and Appeals",
    content: `Advertisers use many techniques to persuade consumers, including:

Emotional Appeals: These ads try to make you feel happy, nostalgic, excited, proud, or even guilty or afraid. They focus more on feelings than facts.

Testimonials and Celebrity Endorsements: These use people (sometimes famous) to say a product is great. The person may or may not actually use the product, but their image helps sell it.

The Bandwagon Effect: These ads suggest that "everyone is using this," creating pressure to fit in and not be left out.

Repetition, humor, and storytelling are also common tools used to make ads more memorable and persuasive.`,
    discussionQuestion: "Which advertising technique do you think is most effective on people your age? Why?"
  },
  {
    id: "topic4",
    title: "The Role of Advertising in Everyday Life",
    content: `Advertising appears in many places: television, social media, websites, apps, radio, billboards, and even inside games and schools.

Some industries, like fast food, heavily target young people using fun images, low prices, and convenience. These ads can make eating out seem cheaper and more exciting than it really is.

Small daily choices influenced by advertising can add up to big financial differences over time. Learning to recognize this helps you spend more intentionally.`,
    discussionQuestion: "Do you think ads should be allowed in schools or games? Why or why not?"
  },
  {
    id: "topic5",
    title: "Deceptive and Misleading Advertising",
    content: `Not all advertising is honest. Some ads exaggerate benefits, hide important details, or make promises that are not realistic.

Deceptive ads might:
• Use fine print to hide fees or conditions
• Show unrealistic results
• Make claims without real evidence
• Use tricky wording to imply something without directly saying it

These ads can trick people into spending money on things that do not work or are not worth the price.`,
    discussionQuestion: "Have you ever seen an ad that seemed too good to be true? What made you suspicious?"
  },
  {
    id: "topic6",
    title: "Understanding Unsupported Claims",
    content: `An unsupported claim is a statement that sounds impressive but has no real proof behind it.

For example, phrases like:
• "Scientifically proven"
• "Doctors recommend"
• "Works instantly"

should always make you ask: Where is the evidence?

Learning to question and verify claims protects you from being misled.`,
    discussionQuestion: "What questions could you ask to verify if an advertising claim is actually true?"
  },
  {
    id: "topic7",
    title: "Facts vs. Opinions in Advertising",
    content: `Facts are statements that can be proven or checked. For example, price, size, or ingredients.

Opinions and claims often describe how something feels or what it supposedly does. These cannot always be proven.

Good consumers learn to separate what can be verified from what is just persuasive language.`,
    discussionQuestion: "Can you give an example of a fact and an opinion that might appear in the same advertisement?"
  },
  {
    id: "topic8",
    title: "The Financial Impact of Advertising on Your Life",
    content: `Advertising can lead to impulse spending — buying things you did not plan to buy or do not really need.

Over time, impulse spending can:
• Drain your savings
• Create debt
• Keep you from reaching your financial goals

Being aware of how advertising affects you is the first step to making better spending choices.`,
    discussionQuestion: "How much money do you think you might save each month if you weren't influenced by ads?"
  },
  {
    id: "topic9",
    title: "Becoming a Smarter, More Critical Consumer",
    content: `Being a smart consumer means:
• Asking questions
• Comparing options
• Looking for real evidence
• Thinking before buying

You don't have to hate advertising — you just have to understand it. When you do, you gain power over your choices instead of giving that power away.`,
    discussionQuestion: "What's one thing you can do starting today to be a more critical consumer?"
  }
];

export const postTestIntro = `Excellent work! Let's test your knowledge of advertising with the post-test.`;

export const postTest: PostTestQuestion[] = [
  {
    id: "post1",
    question: "Which of the following is an example of a basic advertising appeal?",
    options: ["Emotional appeal", "Deceptive appeal", "Niche appeal", "Regulatory appeal"],
    correctAnswer: "Emotional appeal",
    explanation: "Emotional appeals are one of the most common advertising techniques, designed to make you feel something that drives you to buy."
  },
  {
    id: "post2",
    question: "What does it mean when an advertising technique is considered deceptive or questionable?",
    options: ["It follows ethical advertising guidelines", "It creates trust with consumers", "It may mislead or manipulate consumers", "It provides factual information"],
    correctAnswer: "It may mislead or manipulate consumers",
    explanation: "Deceptive advertising uses misleading information or manipulation tactics to get consumers to buy products."
  },
  {
    id: "post3",
    question: "Which of the following is an example of a commonly seen misleading advertisement?",
    options: ["A car ad that highlights its fuel efficiency", "A skincare ad with before-and-after photos", "An ad for a reputable clothing brand", "A fast-food commercial featuring a tasty burger"],
    correctAnswer: "A skincare ad with before-and-after photos",
    explanation: "Before-and-after photos in skincare ads are often manipulated through lighting, makeup, or photo editing, making them potentially misleading."
  },
  {
    id: "post4",
    question: "In an advertisement, what is considered an unsupported claim?",
    options: ["A clear and verifiable statement", "A statement that lacks specific evidence", "A statement endorsed by a celebrity", "A statement that resonates emotionally"],
    correctAnswer: "A statement that lacks specific evidence",
    explanation: "An unsupported claim sounds impressive but has no real evidence or proof to back it up."
  },
  {
    id: "post5",
    question: "When analyzing a print advertisement, how can you discriminate between facts and unsupported claims?",
    options: ["By focusing on the ad's visual elements", "By reading the product's name only", "By identifying verifiable information", "By disregarding the ad's text"],
    correctAnswer: "By identifying verifiable information",
    explanation: "Facts can be verified through independent sources, while unsupported claims cannot be proven."
  },
  {
    id: "post6",
    question: "Why is the ability to differentiate between facts and unsupported claims in advertising important for consumers?",
    options: ["It ensures all ads are truthful", "It helps consumers make informed choices", "It increases advertising revenue", "It encourages consumers to buy products impulsively"],
    correctAnswer: "It helps consumers make informed choices",
    explanation: "When you can tell fact from fiction, you make better purchasing decisions based on real information."
  }
];

export const lessonCompletion = `Advertising will always try to influence you — but knowledge puts you in control.

When you understand how ads work, you stop being a target and start being a decision-maker. Keep thinking critically, stay aware, and make choices that support your goals.

Great job completing this lesson! 🎉`;
