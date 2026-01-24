// Contextual analogies and expanded content for each topic
// These help students better relate to the material

export interface TopicAnalogy {
  analogy: string;
  realWorldExample: string;
  funFact?: string;
}

// Generate contextual analogies based on topic title and content keywords
export const generateTopicAnalogy = (topicTitle: string, topicContent: string): TopicAnalogy => {
  const title = topicTitle.toLowerCase();
  const content = topicContent.toLowerCase();
  
  // Wants and Needs
  if (title.includes("want") && title.includes("need")) {
    return {
      analogy: "Think of your money like a phone battery. Needs are like essential apps that keep your phone running - calling, texting, maps. Wants are like games and social media - fun, but you can live without them when your battery is low!",
      realWorldExample: "Imagine you have $50 for the week. Food for lunch ($35) is a need. A new phone case ($15) is a want. If you buy the case first, you might not have enough for lunch!",
      funFact: "Studies show that people who wait 24 hours before buying 'wants' end up not buying them 70% of the time!"
    };
  }
  
  // Budget related
  if (title.includes("budget") || content.includes("budget")) {
    return {
      analogy: "A budget is like a playlist for your money. Just like you organize songs into categories (chill, workout, study), you organize your dollars into categories (needs, savings, fun). Without a playlist, you're just hitting shuffle and hoping for the best!",
      realWorldExample: "A student with $200/month might budget: $80 for transportation, $60 for food, $40 for savings, and $20 for entertainment. That's their money playlist!",
      funFact: "People who write down their budget are 42% more likely to achieve their financial goals!"
    };
  }
  
  // Saving and Investing
  if (title.includes("saving") || title.includes("invest") || content.includes("compound")) {
    return {
      analogy: "Saving money is like planting a tree. At first, it's just a tiny seed. But if you keep watering it (adding more savings) and give it time, it grows into something huge. Compound interest is like the tree growing branches that grow their own branches!",
      realWorldExample: "If you save $10 a week starting at age 15, by age 25 you'd have over $5,200 saved - just from $10 a week!",
      funFact: "If you invest $1,000 at age 18 and it grows 7% per year, it becomes over $21,000 by age 65 - without adding another penny!"
    };
  }
  
  // Credit Score
  if (title.includes("credit") || content.includes("credit score")) {
    return {
      analogy: "Your credit score is like your reputation in a video game. Every good action (paying bills on time) gives you XP. Bad actions (missing payments) take XP away. Higher levels unlock better rewards - like lower interest rates and better apartments!",
      realWorldExample: "Someone with a 750 credit score might pay $150/month for a car loan. Someone with a 550 score might pay $250/month for the same car - that's $100 extra every month!",
      funFact: "The average credit score in the US is 714, and yours starts being calculated as soon as you get your first credit card!"
    };
  }
  
  // Banking
  if (title.includes("bank") || content.includes("checking") || content.includes("savings account")) {
    return {
      analogy: "A bank is like a gym for your money. A checking account is like a locker where you keep stuff you need every day. A savings account is like a locked storage unit - a bit harder to access, but your stuff (money) is safer and can even grow!",
      realWorldExample: "Direct deposit is like having your paycheck automatically teleported to your account instead of having to physically deposit it each time.",
      funFact: "The first ATM was installed in 1967 - before that, you could only get cash by waiting in line at the bank during business hours!"
    };
  }
  
  // Insurance
  if (title.includes("insurance") || content.includes("insurance") || content.includes("premium")) {
    return {
      analogy: "Insurance is like having a safety net when you're on a tightrope. You pay a little bit to have it there (the premium), and if you fall (something bad happens), it catches you instead of you hitting the ground (going broke)!",
      realWorldExample: "A $100/month health insurance plan might save you $50,000 if you ever need surgery. That's like paying $1 to avoid a $500 bill!",
      funFact: "The average American will file an auto insurance claim once every 17.9 years - so that safety net does get used!"
    };
  }
  
  // Advertising
  if (title.includes("advertising") || content.includes("advertising") || content.includes("marketing")) {
    return {
      analogy: "Advertisers are like skilled magicians - they know how to make you want things you didn't even know existed 5 minutes ago. Learning to spot their tricks is like learning how the magic works - suddenly you're not fooled anymore!",
      realWorldExample: "Companies pay celebrities millions to wear their products because seeing your favorite artist in Nike makes YOU want Nike - even though they were paid to wear it!",
      funFact: "The average person sees 6,000-10,000 ads per day - your brain is filtering most of them out without you even knowing!"
    };
  }
  
  // College Costs
  if (title.includes("college") || content.includes("tuition") || content.includes("scholarship")) {
    return {
      analogy: "Paying for college is like buying a car, but instead of getting a car, you're investing in yourself. Just like you'd shop around for the best car deal, you should shop around for scholarships, grants, and the best value education!",
      realWorldExample: "A student who applies for 10 scholarships and wins just 2 small ones ($500 each) has essentially earned $1,000 for a few hours of work - way better than minimum wage!",
      funFact: "Over $100 million in scholarship money goes unclaimed every year because students don't apply!"
    };
  }
  
  // Taxes
  if (title.includes("tax") || content.includes("tax") || content.includes("deduction")) {
    return {
      analogy: "Taxes are like paying for a group subscription to your community. Everyone chips in, and in return, everyone gets roads, schools, firefighters, and parks. Your tax return is like getting a refund when you overpaid for that subscription!",
      realWorldExample: "If you earn $1,000, about $100-150 goes to taxes. But that money funds the roads you drive on, the school you attend, and the WiFi at the library!",
      funFact: "The IRS tax code is over 70,000 pages long - that's why many people hire professionals to help!"
    };
  }
  
  // Consumer Privacy
  if (title.includes("privacy") || content.includes("privacy") || content.includes("data")) {
    return {
      analogy: "Your personal data is like currency - companies collect it and trade it like money. Every 'free' app you use is actually being paid for with your information. Protecting your data is like protecting your wallet!",
      realWorldExample: "When a website asks for your email, birthday, and location, they might sell that info for $0.50 to advertisers. Over hundreds of sites, you've given away a lot of value!",
      funFact: "The average person's data is worth about $240/year to advertising companies!"
    };
  }
  
  // Decision Making
  if (title.includes("decision") || content.includes("decision") || content.includes("choice")) {
    return {
      analogy: "Financial decisions are like choosing paths in a video game. Some paths lead to treasure (savings, investments), some lead to traps (debt, impulse buys). The best players pause and think before every big choice!",
      realWorldExample: "Choosing to pack lunch instead of buying it saves about $2,000 a year - that's one small daily decision adding up to a big win!",
      funFact: "The average adult makes about 35,000 decisions per day - but only a few of them really impact your financial future!"
    };
  }
  
  // Earning Money / Jobs
  if (title.includes("earning") || title.includes("income") || content.includes("job") || content.includes("paycheck")) {
    return {
      analogy: "Your income is like water flowing into a bucket. It doesn't matter how much water flows in if your bucket has holes (spending leaks). First, plug the holes, then watch your bucket fill up!",
      realWorldExample: "A student working 10 hours/week at $12/hour earns about $500/month. That might not seem like much, but managed wisely, that's $6,000/year in experience AND savings!",
      funFact: "The first job you take after high school often shapes your career path for the next 10 years - choose wisely!"
    };
  }
  
  // Impulse Spending
  if (title.includes("impulse") || content.includes("impulse")) {
    return {
      analogy: "Impulse spending is like eating the whole pizza when you're hungry - it feels great in the moment, but you regret it later. The trick is to order the right amount before you start eating (budget before you're tempted)!",
      realWorldExample: "That 'Add to Cart' button is designed to be easy and fast. Try adding items to your cart, then waiting 24 hours before buying. You'll be surprised how often you change your mind!",
      funFact: "Stores play slower music to make you walk slower and look at more products - it increases impulse purchases by up to 38%!"
    };
  }
  
  // Trade-offs
  if (title.includes("trade-off") || content.includes("trade-off") || content.includes("opportunity cost")) {
    return {
      analogy: "Every dollar is like a one-use ticket - once you spend it on one thing, you can't use it for anything else. Before you buy that $60 game, ask yourself: what else could this ticket get me?",
      realWorldExample: "Spending $5/day on coffee = $1,825/year. That's a vacation, a new phone, or the start of an investment account - all from one daily habit!",
      funFact: "Economists call this 'opportunity cost' - Warren Buffett considers it in every purchase and he's worth over $100 billion!"
    };
  }
  
  // Default / Fallback
  return {
    analogy: "Think of money management like a video game - there are strategies, power-ups (good habits), and traps (bad spending). The more you practice, the better your high score (financial health) gets!",
    realWorldExample: "Start small: track every dollar you spend for just one week. You might be surprised where your money actually goes!",
    funFact: "People who learn about money as teenagers are twice as likely to save regularly as adults!"
  };
};

// Generate contextual acknowledgment based on topic
export const generateDiscussionResponse = (topicTitle: string, studentResponse: string): string => {
  const title = topicTitle.toLowerCase();
  const response = studentResponse.toLowerCase();
  
  // Check response length for engagement level
  const isDetailedResponse = response.length > 50;
  const mentionsPersonalExperience = response.includes("i") || response.includes("my") || response.includes("me");
  
  let acknowledgment: string;
  
  if (isDetailedResponse && mentionsPersonalExperience) {
    acknowledgment = "I really appreciate you sharing that personal experience! 💫 It's exactly that kind of real-life reflection that helps these concepts stick.";
  } else if (isDetailedResponse) {
    acknowledgment = "Great thinking! 🌟 You've clearly put some thought into this, and that's exactly what financial literacy is all about.";
  } else if (mentionsPersonalExperience) {
    acknowledgment = "Thanks for sharing a bit of your experience! 💪 Personal connections make these lessons more meaningful.";
  } else {
    const quickAcknowledgments = [
      "That's a valid point! 👍",
      "Good observation! 💡",
      "I hear you! 🤝",
      "Fair enough! ✨",
      "That's worth considering! 💭"
    ];
    acknowledgment = quickAcknowledgments[Math.floor(Math.random() * quickAcknowledgments.length)];
  }
  
  // Add topic-specific follow-up insight
  if (title.includes("want") && title.includes("need")) {
    acknowledgment += " Remember, recognizing the difference is a skill that gets better with practice!";
  } else if (title.includes("budget")) {
    acknowledgment += " Every budget you create is a vote for your future self!";
  } else if (title.includes("save") || title.includes("invest")) {
    acknowledgment += " The best time to start saving was yesterday - the second best time is today!";
  } else if (title.includes("credit")) {
    acknowledgment += " Building good credit habits now will open so many doors later!";
  }
  
  return acknowledgment;
};
