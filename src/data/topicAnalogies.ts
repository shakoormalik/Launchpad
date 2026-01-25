// Topic-specific expanded content for the "Learn More" feature
// Each topic in every lesson has unique analogies, examples, and fun facts

export interface TopicAnalogy {
  analogy: string;
  realWorldExample: string;
  funFact: string;
}

// Comprehensive mapping of lesson + topic to unique content
const topicContentMap: Record<string, Record<string, TopicAnalogy>> = {
  // Lesson 2: Living on Your Own
  "Earning a Living & Managing Your Time Wisely": {
    default: {
      analogy: "Think of your day like a smartphone battery. You start at 100% each morning. Every activity drains a percentage – work charges it back up (earning), while scrolling social media drains it without reward. The goal is to invest your battery in high-return activities before it runs out.",
      realWorldExample: "A college freshman who schedules study time, a part-time job, and social time in blocks finds they have MORE free time than someone who 'wings it' – because they're not constantly stressed about what they forgot to do.",
      funFact: "Studies show that people who write down how they'll spend their time accomplish 40% more than those who just try to remember their plans!"
    }
  },
  "What Independence Really Means": {
    default: {
      analogy: "Independence is like being the pilot of your own plane. Before, you were a passenger – someone else handled takeoff, turbulence, and landing. Now YOU read the instruments, make decisions, and navigate. The destination is yours to choose, but so is the responsibility for getting there safely.",
      realWorldExample: "A new military recruit discovers that 'freedom' in the barracks means freedom to fail if they don't manage their uniform, schedule, and finances. Their successful peers treat independence like a job that requires daily attention.",
      funFact: "Young adults who practice 'adult skills' like cooking and budgeting while still at home report 60% less stress when they finally move out compared to those who learn everything at once!"
    }
  },
  "The Real Cost of Living": {
    default: {
      analogy: "Your monthly expenses are like an iceberg – rent and food are the visible tip above water, but hidden costs (internet, toiletries, parking, random fees) are the massive chunk below that can sink your budget if you don't see them coming.",
      realWorldExample: "A young professional budgeted $2,000/month for their first apartment but forgot about renter's insurance ($15), parking ($50), laundry ($40), and household supplies ($30). Those 'small' extras added $135/month they hadn't planned for.",
      funFact: "The average person underestimates their monthly spending by about 30%! That's why tracking every expense for one month is eye-opening for most people."
    }
  },
  "Rights and Responsibilities of Tenants and Landlords": {
    default: {
      analogy: "A lease agreement is like the rules of a video game co-op mission. Both players (tenant and landlord) have specific roles. If one doesn't do their part, the mission fails for everyone. Knowing the rules helps you call out fouls and protect your score.",
      realWorldExample: "A college student's apartment had a broken heater for two weeks in winter. Because they documented their repair requests in writing, they were legally able to reduce their rent payment until it was fixed.",
      funFact: "In most states, landlords must give 24-48 hours notice before entering your apartment – they can't just walk in whenever they want, even though they own the building!"
    }
  },
  "Budgeting for Independent Living": {
    default: {
      analogy: "A budget is like a fitness plan for your wallet. Just like tracking calories and workouts shows you where you're slipping, tracking spending shows exactly where your money 'leaks' out. Without measurement, improvement is just guessing.",
      realWorldExample: "A young entrepreneur discovered they were spending $280/month on food delivery apps. By meal prepping on Sundays instead, they redirected that money into an emergency fund that saved them when their car broke down.",
      funFact: "People who use the 50/30/20 rule (50% needs, 30% wants, 20% savings) report feeling 'in control' of their money 3x more often than those who don't follow any budgeting framework!"
    }
  },
  "Reading and Understanding Lease Agreements": {
    default: {
      analogy: "A lease is like the terms and conditions you actually NEED to read. Unlike app terms, breaking a lease can cost you thousands of dollars. Every clause is a potential trap or protection – knowing which is which is financial self-defense.",
      realWorldExample: "A graduate student signed a lease without reading the 'early termination' clause. When they got a job offer in another city, they discovered they owed 3 months rent as a penalty – nearly $4,500 they hadn't planned for.",
      funFact: "The average lease agreement is 8-15 pages, but the most important clauses (rent, security deposit, early termination, and rules) usually fit on just 2-3 pages if you know where to look!"
    }
  },

  // Lesson 3: Wants and Needs
  "What Are Wants and Needs?": {
    default: {
      analogy: "Imagine your money is water in a bucket with holes. Needs are like plugging the holes first – if you don't, the bucket drains no matter how much water you pour in. Wants are like fancy decorations on the bucket – nice to have, but only after the holes are plugged.",
      realWorldExample: "A student with $150 left for the week faces a choice: buy the $80 concert tickets (want) or the $90 worth of groceries and bus pass (needs). Choosing the concert means going hungry and missing class – the 'want' destroyed their ability to meet needs.",
      funFact: "Researchers found that people who wait 48 hours before buying 'wants' over $50 end up not buying them 67% of the time – and report being happier for it!"
    }
  },
  "Why Knowing the Difference Matters": {
    default: {
      analogy: "Your income is like oxygen in a scuba tank. Needs are the breaths that keep you alive; wants are the cool underwater photos. Take too many photos (wants) and you run out of oxygen before reaching the surface. Prioritize breathing first!",
      realWorldExample: "A recent grad spent their first paycheck on a gaming console before paying rent. They had to borrow money at high interest, costing them an extra $200 in fees and stress – the want turned into a very expensive mistake.",
      funFact: "Financial stress is the #1 cause of relationship problems and one of the top causes of poor work performance. Learning needs vs. wants literally improves your entire life!"
    }
  },
  "How Wants and Needs Affect Your Budget": {
    default: {
      analogy: "Think of your budget like a dinner plate. Needs are the vegetables and protein that should fill most of the plate. Wants are the dessert – you can have some, but if dessert takes over the whole plate, you won't be healthy (financially).",
      realWorldExample: "Using the 50/30/20 rule, someone earning $2,000/month would allocate $1,000 to needs, $600 to wants, and $400 to savings. When they lose their job, that $400/month savings becomes their lifeline.",
      funFact: "The average American spends about $18,000 per year on non-essential expenses. Cutting just 10% of that creates an emergency fund of $1,800 annually!"
    }
  },
  "Critical Thinking Before You Spend": {
    default: {
      analogy: "Before spending, imagine your future self sitting on your shoulder asking three questions: 'Do I really need this?', 'What else could this money do?', and 'Will I even remember this purchase in a month?' Your future self is the wisest financial advisor you have.",
      realWorldExample: "A college student wanted the latest $1,200 phone. They asked themselves: 'My current phone works fine. $1,200 could cover 2 months of rent or 6 months of groceries.' They kept the old phone and slept better knowing they had a cushion.",
      funFact: "The '10-second rule' – pausing for 10 seconds before any purchase over $10 – has been shown to reduce impulse spending by up to 50%!"
    }
  },
  "Impulse Spending vs. Intentional Spending": {
    default: {
      analogy: "Impulse spending is like eating when you're bored instead of hungry – it feels good for a moment but leaves you feeling empty and regretful. Intentional spending is like eating when you're actually hungry – satisfying and no regrets.",
      realWorldExample: "A young professional realized they'd spent $340 in one month on Amazon 'add to cart' impulse buys they barely remembered. They installed a browser extension that makes them wait 24 hours – and their spending dropped by 60%.",
      funFact: "Stores are designed to trigger impulse buys: checkout lanes have candy, milk is in the back so you walk past everything, and sale signs are red because that color creates urgency. Once you know the tricks, they stop working!"
    }
  },
  "Prioritizing Needs Over Wants": {
    default: {
      analogy: "Prioritizing is like loading a lifeboat. You put the essential survival items in first (needs), and if there's room left, you can add comfort items (wants). Loading the wants first means the essentials might not fit when you really need them.",
      realWorldExample: "A young entrepreneur uses the 'pay bills first' method: the moment money hits their account, bills and savings are paid automatically. Whatever's left is guilt-free spending money. They never worry about overdrafts.",
      funFact: "People who automate their savings (paying themselves first) save on average 3x more than people who 'save what's left at the end of the month' – because there's usually nothing left!"
    }
  },
  "Building Good Money Habits Early": {
    default: {
      analogy: "Money habits are like compound interest for your behavior. Good habits practiced now multiply over decades. A small habit of saving $25/week at age 18 becomes over $100,000 by retirement – but only if you start early.",
      realWorldExample: "Two friends both earn the same salary. One saves 10% automatically; the other 'tries to save when possible.' After 10 years, the first has $50,000+ saved; the second has less than $5,000. Same income, different habits.",
      funFact: "It takes about 66 days to form a new habit. If you commit to checking your bank account daily for just 2 months, it becomes automatic – and research shows daily checkers have 30% more savings than non-checkers!"
    }
  },
  "Real-Life Choices and Trade-Offs": {
    default: {
      analogy: "Every dollar is a one-time vote for what you value. Spend it on coffee, and it votes for caffeine. Save it, and it votes for your future self. There's no right answer, but you should know what you're voting for every time you spend.",
      realWorldExample: "A student calculated that their daily $6 smoothie habit costs $2,190 per year. That's a round-trip flight to Europe, a new laptop, or 3 months of car insurance. They now make smoothies at home (for $1 each) and use the savings for a summer trip.",
      funFact: "The concept of 'opportunity cost' was first described in 1914, and economists say it's the most important concept most people never learn in school!"
    }
  },

  // Lesson 4: Saving and Investing
  "What Does It Mean to Save?": {
    default: {
      analogy: "Saving is like filling a water tank for a drought. Right now, water flows freely from the tap. But droughts (job loss, emergencies) happen. The tank you fill today is what you'll drink from when the tap runs dry.",
      realWorldExample: "A gig worker saved 3 months of expenses in an emergency fund. When the pandemic hit and work dried up, they didn't panic while others scrambled. Their savings bought them time to pivot without going into debt.",
      funFact: "Only 44% of Americans could cover a $1,000 emergency from savings. Those with even a small emergency fund ($500+) report dramatically lower stress levels than those without!"
    }
  },
  "What Does It Mean to Invest?": {
    default: {
      analogy: "Investing is like planting an orchard. You don't plant a tree and get apples tomorrow. You plant, wait years, and eventually have a tree that produces fruit every season for decades. The earlier you plant, the more harvests you'll enjoy.",
      realWorldExample: "A 22-year-old invested $2,000 in an index fund. Assuming 7% average growth, that single investment could be worth $30,000+ by retirement age – without adding another penny. That's the power of starting early.",
      funFact: "If you invested $1 at the very beginning of the stock market in 1871, it would be worth over $14,000 today (adjusted for inflation)! Time is literally money when investing."
    }
  },
  "The Difference Between Saving and Investing": {
    default: {
      analogy: "Savings is your parachute – you need it NOW when you fall (emergencies). Investing is your retirement home you're building brick by brick – you don't need it now, but you'll be grateful it's there in 40 years.",
      realWorldExample: "A 25-year-old keeps 3 months' expenses in a savings account (emergency fund) AND invests $200/month in a retirement account. The savings protects the present; the investing builds the future. Both work together.",
      funFact: "If you only save in a bank account, inflation actually makes your money worth LESS over time. $100 today might only buy $95 worth of goods in a year. Investing historically beats inflation; saving usually doesn't!"
    }
  },
  "Smart Investment Principles": {
    default: {
      analogy: "Diversification is like wearing a seatbelt. You hope you never need it, but when a crash (market drop) happens, it's the difference between walking away and getting badly hurt. Spreading your investments is your financial seatbelt.",
      realWorldExample: "An investor put everything in one 'hot' tech stock. When that company had a scandal, they lost 60% of their money. Their friend who diversified across 500 companies lost only 5% during the same period.",
      funFact: "The concept of 'don't put all your eggs in one basket' was being taught about investing back in the 1600s. It's literally 400-year-old wisdom that still works today!"
    }
  },
  "Building the Habit of Saving": {
    default: {
      analogy: "Saving is a muscle. The first few 'reps' feel impossible – saving $25 feels like a sacrifice. But after months of practice, saving $100 feels natural because the muscle is strong. Start with light weights (small amounts) and build up.",
      realWorldExample: "A teenager started saving just $10/week from their part-time job. By the time they graduated high school, they had over $2,000 saved – enough for a laptop for college or a security deposit on an apartment.",
      funFact: "Behavioral economists found that people who have savings automatically deducted from paychecks don't miss the money – our brains quickly adjust to the new 'normal' balance. Automation beats willpower every time!"
    }
  },
  "What Affects Your Financial Decisions?": {
    default: {
      analogy: "Your financial decisions are like a weather forecast – many factors (income, age, goals, economy, emotions) combine to create your 'financial weather.' Understanding what influences you helps you predict and prepare instead of being surprised by storms.",
      realWorldExample: "A young adult realized their overspending happened mostly when stressed. By recognizing the trigger, they replaced 'stress shopping' with 'stress walking' – and saved over $2,000 in one year.",
      funFact: "Brain scans show that spending money activates the same pleasure centers as eating chocolate! That's why spending feels good in the moment – but understanding this helps you resist impulse purchases."
    }
  },
  "Real-Life Money Decisions – Putting It All Together": {
    default: {
      analogy: "Managing money is like juggling – you're keeping bills, savings, investments, and fun all in the air at once. Drop one ball occasionally? That's normal. The key is having a system so you don't drop the same ball repeatedly.",
      realWorldExample: "A young professional follows the 'four bucket' system: 50% to bills, 20% to savings, 10% to investing, 20% to fun. Every paycheck is automatically split. They never have to think about it – and they're building wealth effortlessly.",
      funFact: "The average millionaire drives a used car, lives in a modest house, and invests 15-20% of their income. Wealth isn't about looking rich – it's about building security quietly over time!"
    }
  },

  // Lesson 5: Advertising
  "What Is Advertising and Why Does It Matter?": {
    default: {
      analogy: "Advertisers are like magicians – they're not lying to you, but they're very good at directing your attention exactly where they want it. Once you learn the tricks, the 'magic' stops working, and you see choices more clearly.",
      realWorldExample: "A teenager noticed they craved a specific brand of chips every time they scrolled Instagram. They realized the brand was constantly in their feed as sponsored posts. Once aware, they started questioning: 'Do I actually want this, or am I being programmed?'",
      funFact: "Companies spent over $700 billion globally on advertising in 2023. That's more than the GDP of most countries – all designed to influence what you buy!"
    }
  },
  "How Advertising Influences Our Choices": {
    default: {
      analogy: "Ads are like invisible strings attached to your wallet. Every time you feel a sudden 'I NEED this!' for something you didn't know existed 5 minutes ago, an advertiser just tugged a string. Awareness of the strings gives you scissors to cut them.",
      realWorldExample: "A college student felt embarrassed about their phone because ads kept showing the 'newest model.' They realized their phone worked perfectly fine – the embarrassment was manufactured by companies, not reality.",
      funFact: "The 'fear of missing out' (FOMO) is deliberately created by advertisers using phrases like 'limited time only,' 'while supplies last,' and 'don't miss out.' These phrases increase impulse buying by up to 60%!"
    }
  },
  "Common Advertising Techniques and Appeals": {
    default: {
      analogy: "Advertising techniques are like cheat codes that companies use against you. Emotional appeals, celebrity endorsements, bandwagon effects – once you know the 'cheats,' you can't be fooled by them. You're playing on a level field instead of being manipulated.",
      realWorldExample: "A young athlete almost bought $200 shoes because their favorite player wore them. Then they researched: the player was PAID $20 million to wear them. The shoes were just average – the 'endorsement' was a business deal, not a recommendation.",
      funFact: "Studies show that celebrities often don't actually use the products they endorse. In one survey, only 25% of celebrity endorsers had ever used the product before being paid to promote it!"
    }
  },
  "The Role of Advertising in Everyday Life": {
    default: {
      analogy: "You're swimming in an ocean of ads – they're so constant that you don't even notice most of them anymore. But just because you don't notice doesn't mean they're not affecting you. Fish don't notice water either, but they're still wet.",
      realWorldExample: "A student counted ads for one day: 47 on social media, 12 on YouTube, 8 in games, and dozens of logos on clothes and products. Total: over 100 intentional advertising exposures before dinner. Most were invisible until they started counting.",
      funFact: "The average American child sees about 20,000 TV commercials per year. By adulthood, we've seen millions of ads – no wonder buying feels 'natural' even when we don't need things!"
    }
  },
  "Deceptive and Misleading Advertising": {
    default: {
      analogy: "Deceptive ads are like a magician's misdirection taken too far. A regular ad says 'look how great this is!' A deceptive ad says 'this will change your life!' with tiny fine print that takes it all back. Your job is to read the fine print before believing the headline.",
      realWorldExample: "A weight-loss ad showed '30 lbs lost in 30 days!' The fine print: 'Results not typical. Participant also exercised 3 hours daily and ate 800 calories.' The real message was completely different from the headline.",
      funFact: "The FTC (Federal Trade Commission) collects millions of consumer complaints about deceptive ads every year, but only has resources to pursue a fraction of them. Your best protection is your own critical thinking!"
    }
  },
  "Understanding Unsupported Claims": {
    default: {
      analogy: "Unsupported claims are like someone saying 'trust me' about a card trick without ever showing you the cards. Real proof shows the cards. Phrases like 'clinically proven' or 'doctors recommend' without specifics are just verbal hand-waving.",
      realWorldExample: "An ad claimed a product was 'recommended by 4 out of 5 dentists.' Investigation revealed they only asked 5 dentists (not thousands) and 4 happened to say yes. Technically true, completely misleading.",
      funFact: "The phrase 'scientifically proven' has no legal definition in advertising. Companies can claim almost anything is 'proven' without actual proof. The only question that matters: proven by WHOM, in WHAT study?"
    }
  },
  "Facts vs. Opinions in Advertising": {
    default: {
      analogy: "In advertising, 'best-tasting' is an opinion, but '100 calories' is a fact. Opinions can't be verified – that's why ads use them. Facts can be checked. Train yourself to spot the difference: if you can measure it or verify it, it's a fact. Otherwise, it's opinion dressed as fact.",
      realWorldExample: "A phone ad says 'America's best network.' That's an opinion (whose criteria?). Another ad says '98% coverage in the US.' That's a measurable fact you can verify. One helps you decide; one just sounds good.",
      funFact: "The word 'best' is used in ads because it's legally almost impossible to prove or disprove. Companies know this – that's why 'best' appears in millions of ads despite being meaningless!"
    }
  },
  "The Financial Impact of Advertising on Your Life": {
    default: {
      analogy: "Advertising is like a slow leak in your financial bucket. You might not notice each drop (impulse buy), but over months and years, hundreds of drops become thousands of dollars. Finding and fixing the leaks is where real wealth is built.",
      realWorldExample: "A young professional tracked their 'influenced purchases' for 3 months – things they bought after seeing ads. Total: $1,400. When they asked 'would I have bought this without the ad?' the answer was usually 'no.' $1,400 leaked in just 90 days.",
      funFact: "Advertisers estimate they only need to get 1-2% of viewers to buy something for an ad campaign to be profitable. That's why they target millions – they only need to 'convince' a tiny fraction to make huge money!"
    }
  },
  "Becoming a Smarter, More Critical Consumer": {
    default: {
      analogy: "Being a critical consumer is like having X-ray vision for advertising. You see through the flashy images to the real message underneath. You don't hate advertising – you just see it clearly, which means it can't manipulate you.",
      realWorldExample: "Before buying anything over $20, a financially savvy student waits 48 hours and asks: 'Why do I want this? Is it solving a real problem? Did an ad make me feel I needed it?' 70% of the time, they decide not to buy.",
      funFact: "People who describe themselves as 'immune to advertising' are actually MORE susceptible to its effects! The best protection isn't thinking you're immune – it's actively questioning every purchase."
    }
  },

  // Lesson 6: Cost of College
  "Tuition and Fees": {
    default: {
      analogy: "Tuition is like the cover charge at a club, and fees are all the drinks you're forced to buy once inside. The cover might be $50, but if drinks are $15 each and you need 5, the real cost is $125. Always ask about BOTH before you 'enter.'",
      realWorldExample: "Two colleges had similar $15,000 tuition. But School A had $3,000 in fees; School B had $800. Over 4 years, that 'hidden' difference is $8,800 – almost enough for a car!",
      funFact: "Some colleges have 'technology fees,' 'wellness fees,' 'student activity fees,' and 'parking fees' that add 10-20% to the advertised tuition. The sticker price is almost never the real price!"
    }
  },
  "Room and Board": {
    default: {
      analogy: "Room and board is like your monthly phone bill – it feels manageable until you add data, insurance, and extra features. A '$1,200/month' dorm can become $1,800 when you add required meal plans, laundry, and parking.",
      realWorldExample: "A student saved $6,000/year by living at home and commuting. Over 4 years, that's $24,000 saved – equivalent to graduating with almost no debt instead of major debt. The tradeoff was worth it for them.",
      funFact: "The average college meal plan costs $4,500-$5,500/year, but many students report wasting 30-40% of meal swipes because the dining hall doesn't fit their schedule. That's over $1,500/year in 'food you paid for but never ate.'"
    }
  },
  "Books and Supplies": {
    default: {
      analogy: "Textbook pricing is like airplane pricing – the person next to you might have paid half your price for the same seat (book). Smart shoppers rent, buy used, or find digital versions. Only buy new as a last resort.",
      realWorldExample: "A freshman spent $800 on new textbooks. Their roommate bought the same books used and rented others for $220 total. Same classes, same grades, but $580 difference – every semester.",
      funFact: "Textbook prices have risen 1,000% since 1977 – three times faster than inflation! Publishers make most of their money from mandatory 'new editions' that change only slightly from year to year."
    }
  },
  "Transportation": {
    default: {
      analogy: "Transportation costs are like a subscription you forget to cancel – small monthly payments that are easy to ignore but add up to major money. Gas, insurance, parking, and maintenance can cost more than rent for some students.",
      realWorldExample: "A student with a car on campus paid $500/month in car payment, insurance, gas, and parking. A student without a car used the free campus shuttle and occasional rideshare for $50/month. Difference: $5,400/year.",
      funFact: "Many colleges offer free or deeply discounted public transit passes to students – but over 60% of eligible students don't know this benefit exists! Always check what's included in your student fees."
    }
  },
  "Personal and Hidden Costs": {
    default: {
      analogy: "Hidden college costs are like ants at a picnic – individually tiny, but they keep coming and suddenly your food is gone. $5 here, $12 there, $30 for that – it adds up to hundreds monthly without ever making a 'big' purchase.",
      realWorldExample: "A student tracked every expense for one month: $85 on coffee, $120 on food delivery, $45 on subscriptions, $75 on random stuff. Total: $325 in 'hidden' costs they thought were 'nothing.' That's $3,900/year.",
      funFact: "The average college student spends about $2,000/year on 'personal expenses' – but when they actually track spending, it's often closer to $4,000-$5,000. The difference is money they literally can't account for!"
    }
  },
  "What Is Financial Aid?": {
    default: {
      analogy: "Financial aid is like finding money in a coat you forgot you had – but only if you check the pockets (apply). Millions of dollars in scholarships and grants go unclaimed every year because students don't know to look or don't think they qualify.",
      realWorldExample: "A middle-class family assumed they 'wouldn't qualify' for aid and didn't fill out the FAFSA. Their neighbor with similar income got $8,000/year in grants. The difference? One family applied, one didn't.",
      funFact: "Over $100 million in scholarship money goes unclaimed every year – not because students aren't eligible, but because they don't apply! The FAFSA takes about 45 minutes. That's potentially worth thousands of dollars per hour."
    }
  },
  "Understanding Student Loans": {
    default: {
      analogy: "Student loans are like a time machine – you're borrowing from your future self. That future person has to pay back every dollar plus interest. Before borrowing, ask: 'Would my 25-year-old self thank me or resent me for this decision?'",
      realWorldExample: "A graduate with $30,000 in student loans at 5% interest will pay about $320/month for 10 years. Total paid: $38,400. That extra $8,400 is the 'cost' of borrowing – money that could have been a car or vacation fund.",
      funFact: "The average student loan borrower takes 20 years to fully repay, even though standard repayment is 10 years. Many people are still paying student loans when their own kids start college!"
    }
  },
  "Managing Your Money While in College": {
    default: {
      analogy: "Managing money in college is like training for a marathon while studying for finals – it feels like too much, but the habits you build now determine how you perform in the 'marathon' of adult finances.",
      realWorldExample: "A junior who tracked spending and used a simple budget graduated with $2,000 in savings. Their roommate who 'went with the flow' graduated with $3,000 in credit card debt. Same income, opposite outcomes.",
      funFact: "Students who work part-time (10-15 hours/week) actually get BETTER grades on average than students who don't work at all. The structure forces better time management!"
    }
  },
  "Thinking Long-Term About Your College Choice": {
    default: {
      analogy: "Choosing a college is like buying a house – the 'perfect' house you can't afford puts you in financial prison. A 'good enough' house you CAN afford gives you freedom to actually live your life. Prestige matters less than you think.",
      realWorldExample: "Two students became nurses. One went to a prestigious $50K/year school and graduated with $120K debt. The other went to a $8K/year community college + state university and graduated with $15K debt. Same job, same salary – but vastly different financial freedom.",
      funFact: "Studies show that after 10 years in the workforce, where you went to college matters less than what you DID in college (internships, networking, skills). The expensive school name fades; the debt doesn't."
    }
  },

  // Lesson 7: Insurance
  "Understanding Financial Risk": {
    default: {
      analogy: "Financial risk is like driving without knowing if there's a cliff ahead. You might be fine for miles – or you might suddenly fall. Insurance doesn't stop the cliff from existing; it gives you a parachute if you go over.",
      realWorldExample: "A student thought 'nothing bad ever happens to me' until their laptop was stolen from the library. Without renter's insurance: $1,200 out of pocket. With a $12/month policy: $100 deductible and full replacement.",
      funFact: "The average American will experience a major unexpected expense (medical, car, job loss, or home) every 3-5 years. It's not 'if' – it's 'when.' The only question is whether you'll be prepared."
    }
  },
  "The Real Impact of Financial Risks": {
    default: {
      analogy: "An uninsured disaster is like a hole in your financial boat. Small holes you can bail out with savings. But big holes (medical emergency, car totaled) can sink the whole boat unless you have insurance acting as a patch.",
      realWorldExample: "An uninsured 22-year-old broke their wrist playing basketball. ER visit, X-rays, cast, and follow-ups totaled $8,500. That single afternoon injury took 2 years of aggressive saving to pay off.",
      funFact: "Medical bills are the #1 cause of bankruptcy in the United States – and 67% of those who filed had some form of health insurance that wasn't enough. Understanding your coverage is crucial."
    }
  },
  "The Three Ways to Manage Risk": {
    default: {
      analogy: "Managing risk is like preparing for a rainstorm. You can ACCEPT the risk (get wet), REDUCE it (carry an umbrella), or TRANSFER it (have someone drive you). Each strategy makes sense for different situations.",
      realWorldExample: "A student ACCEPTS the risk of losing cheap earbuds (not worth insuring), REDUCES the risk of bike theft (uses a good lock), and TRANSFERS the risk of car accidents (has auto insurance). Different strategies for different risks.",
      funFact: "Insurance companies employ 'actuaries' – math experts who calculate exact probabilities of everything from car crashes to heart attacks. They know risks better than you do, which is why insurance pricing is rarely 'unfair.'"
    }
  },
  "What Is Insurance and How Does It Work?": {
    default: {
      analogy: "Insurance is like a neighborhood potluck where everyone brings a dollar. Most months, nothing happens and the money sits. But when someone's house floods, the pot covers their disaster. You hope you never need it – but you're glad it's there.",
      realWorldExample: "100 people each pay $100/month into auto insurance. That's $10,000/month in the pool. When one person has a $15,000 accident, the pool covers it. Everyone shares small costs so no one bears huge ones alone.",
      funFact: "The concept of insurance dates back to ancient Babylon (1750 BC) where merchants would pay extra to cancel their loans if a shipment was lost at sea. Humans have been pooling risk for 4,000 years!"
    }
  },
  "Health Insurance": {
    default: {
      analogy: "Health insurance is like a bodyguard for your wallet. Hospitals charge $500 for things that cost $20. The bodyguard negotiates prices, pays most of the bills, and only asks you for a small 'tip' (copay).",
      realWorldExample: "A college student on their parent's plan had appendix surgery. Without insurance: $40,000. With insurance: $400 out of pocket. The insurance literally saved them from a small house worth of debt for a 2-hour procedure.",
      funFact: "You can stay on a parent's health insurance until age 26 – a rule that was new as of 2010. Before that, many young adults went uninsured after graduating, making healthcare the biggest financial risk for 22-25 year olds."
    }
  },
  "Auto Insurance": {
    default: {
      analogy: "Auto insurance is like a safety net for your future self. One moment of distraction – a $50,000 lawsuit. Without insurance, that mistake could follow you for decades as garnished wages and ruined credit.",
      realWorldExample: "A new driver caused a fender-bender causing $3,000 damage and minor injuries. With insurance: their rate increased but the $15,000 in total claims was covered. Without insurance: they would have owed every penny personally.",
      funFact: "The average car accident costs about $7,500 in damages. The average INJURY accident costs $77,000. Young drivers (under 25) pay more for insurance because they're statistically 3x more likely to be in an accident."
    }
  },
  "Home and Renters Insurance": {
    default: {
      analogy: "Renter's insurance is like a superhero for your stuff – for the cost of one pizza per month, it protects everything you own from fire, theft, and disasters. Most renters skip it, then regret it the one time they need it.",
      realWorldExample: "A student's apartment had a small fire in the kitchen. Their clothes, laptop, furniture, and textbooks were smoke-damaged. With $15/month renter's insurance: full replacement. Without: $6,000+ loss they couldn't afford.",
      funFact: "Only 55% of renters have renter's insurance, compared to 95% of homeowners. Yet renters face the same risks (fire, theft, water damage) at a fraction of the protection cost. It's one of the most underused protections."
    }
  },
  "Life and Disability Insurance": {
    default: {
      analogy: "Life insurance is like planting a tree you'll never sit under – it's for the people you love after you're gone. Disability insurance is a tree YOU sit under if you can't work. Both plant security for the future.",
      realWorldExample: "A 28-year-old with two kids had disability insurance through work. When they injured their back and couldn't work for 6 months, the insurance replaced 60% of their income – keeping the family afloat until recovery.",
      funFact: "You're more likely to become disabled than to die before age 65. One in four 20-year-olds will experience a disability before retirement. Yet most people insure against death, not disability!"
    }
  },
  "Protecting Yourself from Identity Theft": {
    default: {
      analogy: "Your personal data is like your house keys – would you leave copies lying around everywhere? Every time you share information online, you're potentially leaving a key. Guard your data like you guard your keys.",
      realWorldExample: "A student used the same password for everything. When one gaming site was hacked, criminals accessed their bank account, email, and Amazon. Total damage took 80+ hours and 6 months to fully resolve.",
      funFact: "The average identity theft victim spends 200+ hours resolving the damage. Credit card fraud is usually fixed quickly, but stolen Social Security numbers can create problems that resurface for years."
    }
  },
  "Making Smart Insurance Choices": {
    default: {
      analogy: "Choosing insurance is like choosing a phone plan – the 'best' plan depends on YOUR needs, not the commercials. Read the details, compare apples to apples, and ignore flashy marketing.",
      realWorldExample: "Two policies both advertised 'full coverage.' Policy A had a $500 deductible; Policy B had $2,500. In an accident, that $2,000 difference matters more than the $50/month saved on premiums.",
      funFact: "Insurance companies make money by betting you WON'T need to claim. When you claim too often, rates go up or they drop you. The goal is having insurance for catastrophes, not convenience."
    }
  },
  "Planning for a More Secure Future": {
    default: {
      analogy: "Your financial safety net is woven from three threads: savings for small problems, insurance for big ones, and smart habits to avoid problems altogether. Together, they create something that catches you when you fall.",
      realWorldExample: "A young professional has: $3,000 emergency savings (handles small surprises), health/auto/renter's insurance (handles big disasters), and a budget (avoids creating new problems). This triple protection means true financial peace of mind.",
      funFact: "Financial planners estimate that $1 spent on insurance saves an average of $10 in potential uninsured losses. Insurance isn't an expense – it's a highly efficient form of financial protection."
    }
  },

  // Lesson 8: Budgeting
  "What Is Budgeting?": {
    default: {
      analogy: "A budget is like a GPS for your money – it tells you where you're going and warns you when you're off track. Without GPS, you're just driving and hoping you end up somewhere good.",
      realWorldExample: "Two roommates had the same income. One budgeted and knew exactly what was available for fun after bills. The other guessed and was always stressed about overdrafts. Same money, completely different experience.",
      funFact: "Research shows that the act of WRITING DOWN a budget (not just thinking about it) makes you 42% more likely to achieve financial goals. The pen is mightier than the wallet!"
    }
  },
  "Why Budgeting Is Important": {
    default: {
      analogy: "Budgeting is like wearing a fitness tracker for your wallet. Without it, you think 'I'm doing fine.' With it, you see exactly how many financial 'steps' you're taking – often way fewer than you thought.",
      realWorldExample: "A new employee thought they were 'doing okay' financially. Then they tracked spending for one month: $180 on subscriptions they barely used, $220 on impulse Amazon purchases. That's $4,800/year they didn't realize was leaking away.",
      funFact: "People who budget report 65% less financial stress than non-budgeters. It's not about having more money – it's about knowing where it goes. Certainty feels better than guessing, even if the news isn't perfect."
    }
  },
  "Steps to Creating a Budget": {
    default: {
      analogy: "Creating a budget is like meal prepping – it takes a bit of time upfront, but once done, you save hours of daily decision-making. No more standing at the financial 'fridge' wondering what to 'eat.'",
      realWorldExample: "A college student spent 2 hours setting up a simple budget spreadsheet. For the next year, it took 10 minutes weekly to update. That small time investment saved them from overdrafts and allowed them to save $1,500 for an emergency fund.",
      funFact: "The most successful budgets follow the 'set it and forget it' principle – automate as much as possible. Bills, savings, and investments all move without you thinking about it. Your only job is checking weekly that the system works."
    }
  },
  "Tracking Expenses and Reviewing Your Budget": {
    default: {
      analogy: "Tracking expenses is like checking your grades during the semester instead of waiting for finals. Regular check-ins give you time to course-correct. Waiting until the end means any surprises are permanent.",
      realWorldExample: "A young professional checked their budget every Sunday for 15 minutes. By mid-month, they noticed food spending was already at 80%. They adjusted and finished the month on target instead of overdrawn.",
      funFact: "Studies show that people who review their budget weekly spend 15% less than those who review monthly. Frequency of awareness matters more than the sophistication of the budgeting system!"
    }
  },
  "Mindful Spending and Healthy Habits": {
    default: {
      analogy: "Mindful spending is like mindful eating – pause before you 'bite,' ask if you're really hungry (need it) or just bored (want it), and notice how you feel after. Most financial 'junk food' leaves you feeling empty.",
      realWorldExample: "Before any purchase over $25, a savvy shopper asks: 'Would I rather have this item or the money?' If the answer is money, they walk away. This simple pause has saved them hundreds per month.",
      funFact: "The '24-hour rule' – waiting a day before any non-essential purchase – eliminates about 75% of impulse buys. The 'need' feeling almost always fades overnight, revealing it was just 'want' in disguise."
    }
  },
  "Common Misconceptions About Budgeting": {
    default: {
      analogy: "Thinking budgets are only for poor people is like thinking workout plans are only for fat people. The truth is the opposite – budgets are how people BUILD wealth, just like workouts build fitness.",
      realWorldExample: "A high-earning tech worker never budgeted because they 'made enough.' After years of lifestyle inflation, they had no savings despite a six-figure salary. Their assistant who earned 1/4 as much but budgeted carefully had $50,000 saved.",
      funFact: "Over 60% of millionaires report following a strict budget. They didn't stop budgeting when they got rich – they got rich because they never stopped budgeting!"
    }
  },
  "Evaluating Your Spending Behavior": {
    default: {
      analogy: "Evaluating your spending is like watching game tape as an athlete. You see moves you didn't realize you were making, habits you thought were occasional that are actually constant, and opportunities for improvement you couldn't spot in the moment.",
      realWorldExample: "A student reviewed 3 months of spending and discovered they'd spent $340 on 'one-time' purchases that weren't really one-time at all. They were shopping for 'fun' every week – a habit they hadn't noticed.",
      funFact: "Psychologists call it 'selective memory' – we remember the one time we resisted temptation but forget the ten times we gave in. Objective tracking reveals reality, not the story we tell ourselves."
    }
  },
  "Putting It All Together in Real Life": {
    default: {
      analogy: "Budgeting is like cooking – you learn the basic recipes (techniques), then adapt them to your taste (life). No two budgets look exactly alike because no two lives are exactly alike. The principles stay the same; the details are personal.",
      realWorldExample: "A gig worker can't use a 'fixed monthly salary' budget because their income varies. Instead, they pay themselves a consistent 'salary' from their earnings and save the overflow for slow months. Same principles, adapted for reality.",
      funFact: "There's no 'perfect' budget method – 50/30/20, zero-based, envelope system, and many others all work. The best budget is the one you'll actually use. Consistency beats sophistication every time."
    }
  },

  // Lesson 9: Banking
  "What Do Banks and Credit Unions Do?": {
    default: {
      analogy: "A bank is like a financial gym – it has all the equipment (accounts, cards, loans) you need to build financial strength. But equipment only works if you know how to use it properly and show up consistently.",
      realWorldExample: "A student kept cash at home 'because banks are confusing.' They lost $300 when their wallet was stolen, had no paper trail for income, and couldn't cash checks easily. Learning basic banking would have prevented all of this.",
      funFact: "Banks have existed for over 500 years – the first modern bank opened in Venice in 1157. Before banks, people literally buried gold in their yards. We've come a long way!"
    }
  },
  "Types of Financial Institutions": {
    default: {
      analogy: "Choosing a financial institution is like choosing a phone carrier – some have the most locations (big banks), some have the best prices (credit unions), some have the best tech (online banks). What matters most depends on how you use it.",
      realWorldExample: "A young professional chose an online-only bank for the 4% savings rate instead of the big bank's 0.01%. On $5,000 in savings, that's $200/year in interest versus $0.50. The 'inconvenience' of no branches earned real money.",
      funFact: "Credit unions are owned by their members, so profits go back to members as better rates. The average credit union offers 0.3% higher savings rates and 1.5% lower loan rates than banks!"
    }
  },
  "Checking Accounts vs. Savings Accounts": {
    default: {
      analogy: "A checking account is your wallet (easy access, daily use), while a savings account is your safe (harder to access, for storage). You wouldn't put all your money in your wallet, and you wouldn't try to buy groceries with your safe.",
      realWorldExample: "A teenager opened their first checking account for their part-time job. They also opened a linked savings account where 10% automatically transfers on payday. By age 18, they had $2,000 saved 'without thinking about it.'",
      funFact: "The average American has $5,300 in checking (too much for daily use) and $1,200 in savings (too little for emergencies). Experts recommend the reverse: minimum in checking, maximum in savings."
    }
  },
  "How to Choose a Bank or Credit Union": {
    default: {
      analogy: "Choosing a bank is like choosing a doctor – you want someone you trust, who's convenient to reach, and who doesn't charge you every time you have a question. Shop around like your money depends on it (because it does).",
      realWorldExample: "A student compared 5 banks and found monthly fees ranging from $0 to $12 and savings rates from 0.01% to 4.5%. On $3,000 saved for a year, the difference was $135 in fees avoided and $135 in interest gained – $270 total for 1 hour of research.",
      funFact: "The average American pays $30/month in bank fees they could avoid – that's $360/year. Most fees (overdraft, ATM, monthly maintenance) disappear with the right account or right habits."
    }
  },
  "Your Responsibilities with a Checking Account": {
    default: {
      analogy: "Having a checking account is like having a car – it gives you freedom, but you're responsible for the gas (deposits), maintenance (tracking balance), and following rules (not overdrawing). Ignore responsibility and you'll end up stranded.",
      realWorldExample: "A college student didn't realize a 'pending' charge wasn't reflected in their balance yet. They spent 'available' money and got hit with a $35 overdraft fee on a $4 purchase. One small oversight cost them nearly 9x the purchase price.",
      funFact: "Banks collect over $11 billion in overdraft fees every year. The average overdraft is for less than $20 but costs $35 in fees. Knowing your real balance (including pending charges) is a crucial skill."
    }
  },
  "Writing Checks and Keeping Records": {
    default: {
      analogy: "A check is a promise written on paper – it says 'I commit to paying this amount.' Breaking that promise (bouncing a check) damages your trust score (credit) and costs you money in fees. Your word should always be worth more than paper.",
      realWorldExample: "A new renter wrote their first check for a security deposit. Because they knew to record it in their check register, they didn't accidentally spend that money thinking it was available – even though the landlord didn't cash it for 2 weeks.",
      funFact: "Check usage has dropped 75% since 2000, but over 14 billion checks are still written annually in the US. Knowing how they work is still a relevant life skill!"
    }
  },
  "How to Deposit a Check": {
    default: {
      analogy: "Depositing a check is like cashing in a gift card – you have the card (check), but it's not usable until you redeem it (deposit). And just like gift cards can have delays, checks can have 'holds' before money is fully available.",
      realWorldExample: "A young worker deposited their first paycheck via mobile app and saw '$500 available' – but the check was for $800. The remaining $300 was on 'hold' for 2 business days. They learned to check the fine print on deposits.",
      funFact: "Banks can hold checks for up to 11 business days by law, though most hold for only 1-2 days. The larger the check and the newer your account, the longer the potential hold."
    }
  },
  "Understanding Your Bank Statement": {
    default: {
      analogy: "Your bank statement is like a monthly report card for your money – it shows every 'grade' (transaction) you got and your final 'GPA' (balance). Ignoring report cards means you miss problems until it's too late to fix them.",
      realWorldExample: "A customer never checked statements and didn't notice a $9.99 monthly subscription they'd cancelled – it had been charging for 11 months. That's $110 in money that should have been theirs, discovered only by accident.",
      funFact: "Bank fraud affects about 14 million Americans annually. The average victim loses $1,300, but those who check statements regularly catch fraud in days versus months, limiting losses to under $100."
    }
  },
  "Reconciling Your Account": {
    default: {
      analogy: "Reconciling is like double-checking your homework against the answer key. You check your records against the bank's records to make sure you both got the same answer. Mismatches mean someone (you or them) made a mistake.",
      realWorldExample: "While reconciling, a student noticed they'd been charged twice for a $50 textbook. Without reconciling, they never would have caught the error. A 10-minute check saved them $50.",
      funFact: "About 20% of bank statements contain errors – most are minor, but some are significant. Banks assume you're checking and won't catch their mistakes for you. It's your responsibility to verify."
    }
  },
  "ATM Cards and Debit Cards": {
    default: {
      analogy: "A debit card is a direct pipeline from your bank account to the world. Every swipe drains real money instantly. Unlike credit cards (which are like IOUs), debit cards are like cash that happens to be plastic.",
      realWorldExample: "A student's debit card was skimmed at a gas station. Because they checked their account daily, they caught $200 in fraudulent charges within 24 hours. Their bank reversed them quickly. Someone who didn't check for a week might have lost much more.",
      funFact: "Debit card fraud has less protection than credit card fraud by law. With credit cards, your maximum liability is $50. With debit cards, it can be $500 or more if you don't report quickly enough!"
    }
  },
  "Avoiding Fees, Mistakes, and Fraud": {
    default: {
      analogy: "Bank fees are like subscription services for problems – once you start paying (overdrafts, ATM fees), they keep coming. The best strategy is never starting. Prevention is cheaper than cure.",
      realWorldExample: "A careful student: uses in-network ATMs only (saves $3/transaction), keeps $50 buffer in checking (prevents overdrafts), and set up low-balance alerts. These three habits save them $200+/year in potential fees.",
      funFact: "Using out-of-network ATMs can cost $5-7 per transaction when you combine fees from both banks. Making 2 out-of-network withdrawals per week would cost over $500/year – just for accessing your own money!"
    }
  },
  "Putting It All Together (Real Life Use)": {
    default: {
      analogy: "Banking skills are like cooking skills – once you know the basics, you don't think about them anymore. You just do them automatically, freeing your mental energy for bigger things. Mastery feels like freedom.",
      realWorldExample: "A financially skilled 25-year-old spends 15 minutes per week on banking: checks transactions, confirms upcoming bills, reviews savings goal progress. This small habit means they're never surprised by their money situation.",
      funFact: "Financial literacy – knowing how to manage bank accounts, budgets, and credit – correlates with higher income, less debt, and lower stress regardless of how much money someone actually has. Knowledge is quite literally power."
    }
  },

  // Lesson 10: Take-Home Pay
  "Why Earning Money Matters": {
    default: {
      analogy: "Your income is like water flowing into a bucket. It doesn't matter if you earn a river's worth – if the bucket has holes (overspending), you'll always be empty. Plugging holes matters as much as increasing flow.",
      realWorldExample: "A recent graduate was excited about their $50,000 salary but shocked when the first paycheck was only $3,100. Taxes, insurance, and retirement took the rest. Planning based on $50K when you take home $37K leads to problems.",
      funFact: "The average American's take-home pay is about 70-75% of their gross salary. If you earn $60,000, expect to actually receive about $42,000-$45,000 after all deductions."
    }
  },
  "Gross Pay vs. Net Pay": {
    default: {
      analogy: "Gross pay is like the calories in your food before your body processes it – it's the 'total.' Net pay is what your body actually uses after processing. Don't plan your diet (budget) based on gross calories (pay).",
      realWorldExample: "A $15/hour job sounds great: $2,400/month! But net pay after taxes is closer to $1,900. Many first-job workers sign leases based on $2,400, then struggle when reality is $1,900.",
      funFact: "When negotiating salary, always calculate the net pay before accepting. A $5,000 raise might only be $3,000 in your pocket after taxes. Knowing the real number helps you negotiate smarter."
    }
  },
  "What Are Payroll Taxes and Deductions?": {
    default: {
      analogy: "Payroll taxes are like membership dues for being a citizen – they fund the community pool (roads), the clubhouse (government services), and the emergency fund (Social Security). You don't get to opt out, but you do benefit.",
      realWorldExample: "A young worker saw 'FICA' on their pay stub and didn't know what it was. Turns out it's Social Security and Medicare – they're pre-paying for their own retirement and healthcare decades from now.",
      funFact: "Social Security has paid out over $19 trillion since it began in 1935. The average retired worker receives about $1,800/month. Those payroll deductions today fund tomorrow's retirement check."
    }
  },
  "Why Do These Taxes Exist?": {
    default: {
      analogy: "Taxes are like a group potluck dinner – everyone brings a dish (pays taxes), and everyone eats (uses services). Some bring more, some bring less, but the table is full for everyone because everyone contributes.",
      realWorldExample: "A young person wondered where their $400/month in taxes went. Answer: the roads they drive on, the firefighters who protect their apartment, the school they attended, and the Social Security their grandparents rely on.",
      funFact: "The US military, Social Security, Medicare, and Medicaid account for over 60% of federal spending. When you pay taxes, most goes to defense and caring for the elderly and sick."
    }
  },
  "The W-4 Form — Setting Up Your Paycheck": {
    default: {
      analogy: "The W-4 is like setting the thermostat for your paycheck. Set it too high (too much withheld), and you're cold (less money) all year but get a refund. Set it too low (not enough withheld), and you're warm but owe a big bill in April.",
      realWorldExample: "A worker claimed too many allowances on their W-4 and enjoyed bigger paychecks all year. Come tax time, they owed $1,500 they hadn't saved. A more accurate W-4 would have prevented the surprise.",
      funFact: "About 70% of taxpayers get refunds, meaning they let the government hold their money interest-free all year. That $2,000 refund could have been an extra $167/month in your pocket."
    }
  },
  "Understanding Your Pay Stub": {
    default: {
      analogy: "Your pay stub is like the nutrition label for your paycheck – it breaks down exactly what's in there (earnings) and what's taken out (deductions). Ignoring it is like never reading food labels and wondering why you feel bad.",
      realWorldExample: "A worker noticed their pay stub showed '401k contribution: $0' even though they'd enrolled. They called HR and fixed it – without checking the stub, they would have missed an entire year of retirement savings.",
      funFact: "Pay stub errors occur in about 8% of paychecks. Common mistakes include wrong hours, missing overtime, or incorrect deductions. Most go uncaught because workers never read their stubs."
    }
  },
  "Planning Your Life Using Net Pay": {
    default: {
      analogy: "Planning with net pay is like packing a suitcase based on what fits, not what you wish fit. Your budget should fit your actual income, not your 'before taxes' fantasy income.",
      realWorldExample: "The 50/30/20 rule should be applied to NET pay, not gross. For someone taking home $3,000/month: $1,500 for needs, $900 for wants, $600 for savings. Applying it to gross pay of $4,000 leads to overspending by $1,000/month.",
      funFact: "Financial experts recommend rent/mortgage be no more than 30% of NET (not gross) income. For $3,000 take-home, that's $900/month max. Many people violate this rule and end up 'house poor.'"
    }
  },
  "Making Smart Money Moves with Your Paycheck": {
    default: {
      analogy: "Your paycheck is like a pizza with 8 slices. If you don't decide how many slices go to bills, savings, and fun BEFORE you start eating, you'll accidentally eat the whole thing and wonder where it went.",
      realWorldExample: "A savvy worker automatically sends 10% to savings, 5% to retirement, and pays bills on payday. Only THEN do they see what's available for discretionary spending. They never 'forget' to save because it happens first.",
      funFact: "People who automate savings save an average of $200/month more than those who 'save what's left.' Automation defeats our psychological tendency to spend everything available."
    }
  },
  "How Small Decisions Add Up Over Time": {
    default: {
      analogy: "Small daily choices are like compound interest for your habits – $3/day seems tiny, but it becomes $1,095/year. Over 40 years of working, that daily habit is $43,800. Small leaks sink ships AND drain wallets.",
      realWorldExample: "A young professional cut their daily coffee shop habit ($5) and made coffee at home ($0.50). That $4.50/day savings became $1,640/year – enough for a vacation or a significant emergency fund contribution.",
      funFact: "If you invest the money saved from one small daily habit ($5/day = $150/month) at 7% return, after 40 years you'd have over $400,000. Your daily coffee could literally become a retirement fund."
    }
  },

  // Lesson 11: Financial Decisions
  "Decision-Making — Spontaneous vs. Strategic": {
    default: {
      analogy: "Spontaneous decisions are like grabbing random ingredients from the fridge – sometimes you get a great meal, usually you get chaos. Strategic decisions are like following a recipe – you think first, then act, and the outcome is predictable.",
      realWorldExample: "A spontaneous car buyer fell in love with a $28,000 car and signed same day. A strategic buyer spent 2 weeks researching, negotiating, and comparing, getting the same car for $24,000. The 2-week 'delay' earned them $4,000.",
      funFact: "Psychologists estimate we make about 35,000 decisions per day, but only about 70 are truly 'conscious' decisions. The rest run on autopilot – which is why building good default habits matters so much."
    }
  },
  "What Counts as a Financial Decision?": {
    default: {
      analogy: "Every purchase, no matter how small, is a financial decision that votes for a version of your future. Skip lunch to save $10? You voted for savings. Buy the upgrade you don't need? You voted for wants over goals.",
      realWorldExample: "A student tracked every financial decision for a week: 7 food purchases, 3 entertainment purchases, 2 transportation decisions, 1 subscription renewal. That's 13 decisions in 7 days that collectively shaped their financial week.",
      funFact: "Researchers found that by the time most people are tired (afternoon/evening), their financial decision-making quality drops by 40%. Making important money decisions in the morning leads to better outcomes!"
    }
  },
  "Why Financial Decisions Matter and What a Financial Plan Is": {
    default: {
      analogy: "A financial plan is like a destination in Google Maps – without it, you're just driving around hoping to end up somewhere good. With a plan, every turn (decision) gets you closer to where you actually want to go.",
      realWorldExample: "Two people earn $40,000/year. One has a plan (save 15%, invest 10%, fun 20% of net). After 10 years, they have $80,000+ saved. The one without a plan has $3,000. Same income, radically different outcomes.",
      funFact: "People with written financial plans accumulate 250% more money on average than those without. Writing it down isn't just helpful – it's transformative."
    }
  },
  "The Financial Decision-Making Steps": {
    default: {
      analogy: "Decision steps are like a checklist before takeoff – pilots don't skip them even after 10,000 flights because skipping leads to crashes. Financial 'crashes' happen when we skip thinking and jump straight to spending.",
      realWorldExample: "Before buying a car, a strategic buyer: defined their need (reliable transport), identified options (5 cars under $15K), evaluated pros/cons (cost, reliability, insurance), chose the best match, and reviewed after 3 months to confirm the choice worked.",
      funFact: "The military uses the 'OODA Loop' (Observe, Orient, Decide, Act) for decisions. Financial experts adapted it to money: the best decisions come from observing your situation thoroughly before acting."
    }
  },
  "What Influences Your Money Decisions?": {
    default: {
      analogy: "Your financial decisions are like a puppet on strings – emotions, advertising, friends, and habits all pull in different directions. Awareness of the strings is the first step to cutting the ones you don't want.",
      realWorldExample: "A young adult realized they always shopped when stressed. By recognizing this pattern, they replaced 'stress shopping' with 'stress jogging.' Their monthly spending dropped $300 and their fitness improved.",
      funFact: "Stores deliberately pump in certain scents (vanilla, lavender) and play specific music tempos to alter your mood and increase spending. Your decisions are being influenced constantly, even when you don't notice."
    }
  },
  "Tools That Strengthen Your Decisions": {
    default: {
      analogy: "Financial decision tools are like a carpenter's toolbox – each serves a specific purpose. A budget is your measuring tape, goals are your blueprint, and needs-vs-wants is your level. The right tools make building wealth easier.",
      realWorldExample: "A financially disciplined person uses the '24-hour rule' (wait before buying), the 'per-hour test' (how many work hours does this cost?), and the 'future self check' (will I be glad I bought this?). These tools prevent 80% of impulse purchases.",
      funFact: "Warren Buffett, one of the richest people ever, still uses a simple value test: 'Would I buy this if no one would ever know I owned it?' This removes social pressure from spending decisions."
    }
  },
  "Risk and Opportunity Cost": {
    default: {
      analogy: "Every dollar has multiple potential lives – it could be spent, saved, invested, or donated. When you choose one life, all other lives die. Opportunity cost is mourning the paths not taken before committing to one.",
      realWorldExample: "A student spent $1,200 on concert tickets. The opportunity cost: that same $1,200 invested at 7% for 40 years would become $18,000. The concert was fun for 3 hours; the investment would have funded a whole year of retirement.",
      funFact: "Economists estimate that considering opportunity cost improves investment returns by 2-3% annually. That might sound small, but over 40 years, a 2% difference can mean hundreds of thousands of dollars."
    }
  },
  "Applying the Decision Process in Real Life": {
    default: {
      analogy: "Financial decisions are like reps at the gym – each one seems small, but they compound. 1,000 good small decisions over years builds financial muscle. 1,000 bad ones creates financial flabbiness.",
      realWorldExample: "When faced with 'should I buy this?', a financially fit person automatically runs through: 'Need or want? Can I afford it? Is there a cheaper option? Will I regret this?' After years of practice, this 5-second check is unconscious.",
      funFact: "Habits expert James Clear says financial success isn't about one perfect decision – it's about being 1% better at money choices every day. 1% daily improvement means you're 37x better after one year!"
    }
  },

  // Lesson 12: Credit Score
  "What Is Credit, Really?": {
    default: {
      analogy: "Credit is like your reputation at a library – if you always return books on time, you can borrow more. If you lose or damage books, you're restricted. Your 'book history' follows you to every library in the system.",
      realWorldExample: "A recent grad was denied an apartment because they had no credit history – not bad credit, just no history. The landlord had no proof they'd pay reliably. They had to find a cosigner or pay extra security deposit.",
      funFact: "About 26 million Americans are 'credit invisible' – they have no credit history at all. Without history, they can't rent apartments, get phones on contract, or access most loans without a cosigner."
    }
  },
  "Understanding the Credit Score Range": {
    default: {
      analogy: "Your credit score is like your GPA for money. Just like a 3.8 GPA opens doors (scholarships, jobs), a 750 credit score opens financial doors (better rates, approvals). Both measure consistent performance over time.",
      realWorldExample: "Two people buy the same $25,000 car. Person A with a 780 score gets 4% interest: $460/month. Person B with a 620 score gets 12% interest: $556/month. Over 5 years, Person B pays $5,760 MORE for the identical car.",
      funFact: "The difference between a 650 and 800 credit score can cost over $100,000 in extra interest over a lifetime on mortgages, car loans, and credit cards. Your score literally has a dollar value."
    }
  },
  "What Creditworthiness Means": {
    default: {
      analogy: "Creditworthiness is like a Yelp rating for borrowers. Lenders check your 'reviews' (credit history) to decide if you're a 5-star reliable borrower or a risky 2-star. Your rating follows you everywhere.",
      realWorldExample: "A 'creditworthy' borrower with a 780 score was approved for a mortgage in 24 hours with a 6% rate. An equally employed borrower with a 620 score waited 3 weeks, paid 8%, and needed extra documentation. Same income, different 'ratings.'",
      funFact: "Credit reports have been around since the 1800s – merchants would share notes about customers who didn't pay. The digital score system (FICO) was created in 1989 to standardize these 'notes' into numbers."
    }
  },
  "How Credit Affects Your Life": {
    default: {
      analogy: "Credit is like your financial outfit – it's what landlords, employers, and lenders 'see' when they look at you financially. You might be a great person inside, but a bad credit 'outfit' makes first impressions harder.",
      realWorldExample: "A job applicant was passed over for a finance position because their credit report showed late payments and high utilization. The employer assumed (rightly or wrongly) that personal financial issues might affect job performance.",
      funFact: "12% of employers check credit reports during hiring, rising to 47% for financial sector jobs. Bad credit won't disqualify you from most jobs, but it can affect positions involving money management."
    }
  },
  "Credit Beyond Borrowing": {
    default: {
      analogy: "Credit is like a Swiss Army knife – it's not just for one thing. Loans, yes, but also apartments, insurance rates, utility deposits, and phone contracts all look at credit. It's a general-purpose 'reliability report.'",
      realWorldExample: "A young professional with good credit paid $0 deposit for their apartment and $0 deposit for utilities. Their friend with poor credit paid $800 in deposits for the same services. Good credit literally put $800 cash in the first person's pocket.",
      funFact: "In many states, car insurance companies can charge you more if you have poor credit – even if your driving record is perfect. They view poor credit as a predictor of higher claim rates."
    }
  },
  "Payment History (About 35%)": {
    default: {
      analogy: "Payment history is like your attendance record at school – show up on time consistently, and you build trust. Miss days (payments), and teachers (lenders) wonder if they can count on you. Perfect attendance opens doors.",
      realWorldExample: "A single 30-day late payment can drop a 780 score by 100+ points and take years to recover. That 'one time' you forgot can literally cost thousands in higher interest rates for years afterward.",
      funFact: "Late payments stay on your credit report for 7 years. But here's the good news: their impact decreases over time. A 6-year-old late payment hurts way less than a recent one."
    }
  },
  "Credit Utilization (About 30%)": {
    default: {
      analogy: "Credit utilization is like how much of your glass is full. Lenders want to see you're not filling to the brim (maxed out). Keeping your 'glass' less than 30% full signals self-control and room for emergencies.",
      realWorldExample: "A person with a $3,000 limit regularly carried $2,800 balance (93% utilization). Their score was 620 despite perfect payments. When they paid down to $600 (20% utilization), their score jumped to 720. Same person, same payments – different utilization.",
      funFact: "Credit utilization resets every month – it's a snapshot, not a cumulative score. If you usually have high utilization but pay down before the statement date, that's what gets reported."
    }
  },
  "Length of Credit History": {
    default: {
      analogy: "Credit history length is like job experience – a 10-year track record is more reassuring than 6 months. Lenders trust patterns proven over time more than recent good behavior that might not last.",
      realWorldExample: "A 25-year-old who got their first credit card at 18 has 7 years of history. A 25-year-old who just got their first card has 0 years. Even with identical current behavior, the first person looks more reliable.",
      funFact: "The average credit score peaks around age 60-70 because length of history keeps improving. Young people have an inherent disadvantage, which is why starting early – even with small limits – matters."
    }
  },
  "Credit Mix": {
    default: {
      analogy: "Credit mix is like a balanced diet – having only one food group (one type of credit) isn't as healthy as variety. A credit card plus a car loan shows you can handle different kinds of financial 'nutrition.'",
      realWorldExample: "A person with only credit cards added a small personal loan and their score increased 20 points. The mix showed lenders they could handle both revolving (card) and installment (loan) credit responsibly.",
      funFact: "Credit mix only accounts for about 10% of your score, so don't open new accounts JUST for mix. But if you naturally need different types of credit (car loan, card, student loan), it helps."
    }
  },
  "New Credit and Inquiries": {
    default: {
      analogy: "Hard credit inquiries are like job applications – one or two is normal, but 20 applications in a month makes employers wonder if something's wrong. Lenders see lots of credit applications as a red flag too.",
      realWorldExample: "A person applied for 6 credit cards in 2 months trying to get approved for one. Each application caused a hard inquiry, and their score dropped 40 points. All 6 were denied because the score dropped too low.",
      funFact: "Hard inquiries only stay on your report for 2 years and stop affecting your score after about 12 months. The impact is temporary, but multiple inquiries in a short time can create lasting damage."
    }
  },
  "Building Smart Credit Habits": {
    default: {
      analogy: "Credit habits are like brushing your teeth – boring daily maintenance prevents expensive problems later. Skipping once is fine; skipping regularly leads to cavities (bad credit) that are painful and costly to fix.",
      realWorldExample: "A credit-smart person: pays balances in full monthly, keeps utilization under 25%, never closes old accounts, and checks their credit report quarterly. These simple habits maintain a 780+ score effortlessly.",
      funFact: "A perfect credit score is 850, but anything above 760 gets you the same best rates. Don't stress about getting to 850 – getting to 760-780 is what matters for real-world benefits."
    }
  },

  // Lesson 13: Consumer Privacy
  "What Is Data Privacy?": {
    default: {
      analogy: "Your personal data is like puzzle pieces of your life. Individually, a piece (name, email) seems harmless. But collected together, someone can see the whole puzzle – your habits, preferences, vulnerabilities, and identity.",
      realWorldExample: "A teenager shared their birthday on social media, their pet's name in a quiz, and their high school in their bio. A hacker used these details to answer 'security questions' and access their email, then reset their bank password.",
      funFact: "Facebook collects about 52,000 unique data points about each user. Even if you've never posted, they buy data from other companies to build a 'shadow profile' about you."
    }
  },
  "Data Privacy in the Information Age": {
    default: {
      analogy: "In the information age, you're constantly shedding digital skin – every click, scroll, and pause leaves a trace. Companies collect these traces to understand you better than you understand yourself. Awareness is your only shield.",
      realWorldExample: "A user searched for engagement rings once. For the next 6 months, every website showed ring ads. Their partner saw the ads on their shared computer. The 'surprise' was ruined by data tracking they didn't understand.",
      funFact: "The average website has 13 third-party trackers watching your behavior. When you visit one website, you're actually being observed by over a dozen companies you've never heard of."
    }
  },
  "What Is a Data Profile?": {
    default: {
      analogy: "Your data profile is like a detailed diary someone else writes about you – they note what you buy, where you go, who you talk to, and what you like. Unlike a diary, you can't close it and you often can't see what it says.",
      realWorldExample: "An insurance company denied a driver's application for better rates because their data profile showed 'high-risk shopping behavior' – late night fast food, gas station purchases, and erratic driving patterns. The person never knew this data existed.",
      funFact: "Data brokers – companies you've never heard of – have files on over 200 million Americans. These files are sold to marketers, insurers, employers, and anyone willing to pay, all without your knowledge or consent."
    }
  },
  "Advantages and Disadvantages of Data Profiles": {
    default: {
      analogy: "Data profiles are like personalized GPS – they can give you faster routes (better recommendations) or track you so someone can intercept you (target you with manipulation). Same technology, different intent.",
      realWorldExample: "On the positive side: Spotify knows you like sad songs and creates the perfect playlist. On the negative side: A payday lender knows you're financially stressed and targets you with predatory loan ads.",
      funFact: "A single consumer's data is worth about $240/year to advertisers. Multiply by 330 million Americans, and personal data is a $79 BILLION industry annually. Your information has real monetary value."
    }
  },
  "Laws That Protect Your Privacy": {
    default: {
      analogy: "Privacy laws are like traffic rules – they exist to prevent chaos and protect everyone. But just like traffic rules don't prevent all accidents, privacy laws don't prevent all data misuse. You still need to drive (browse) carefully.",
      realWorldExample: "Under the Fair Credit Reporting Act, a job applicant was told they were rejected due to a background check. They requested the report, found an error (someone else's criminal record mixed with theirs), disputed it, and got hired.",
      funFact: "GDPR (Europe's privacy law) has generated over $4 billion in fines since 2018. Companies like Meta have been fined $1.3 billion for data violations. Privacy laws have real teeth when enforced."
    }
  },
  "Sources of Personal Information": {
    default: {
      analogy: "Sources of your personal data are like leaky faucets throughout your house. Some you know about (apps you download), some you don't (data brokers buying records). Finding and 'tightening' each faucet is a never-ending job.",
      realWorldExample: "A person wondered how a scam caller knew their name, address, and recent purchase. Investigation: a retailer sold their info to a data broker, who sold it to a 'marketing company' that was actually a scam operation.",
      funFact: "Public records – your property ownership, court cases, voter registration, and motor vehicle records – are legally available to anyone. Data brokers compile this public information into profiles they sell."
    }
  },
  "Common Consumer Privacy Issues": {
    default: {
      analogy: "Privacy issues are like holes in a boat – some are tiny (junk mail), some are massive (identity theft). Ignoring even small holes lets water in, and eventually, you're sinking.",
      realWorldExample: "A hospital employee sold patient records on the black market. Victims discovered loans, credit cards, and tax returns filed in their names – all because their 'protected' medical information wasn't actually protected.",
      funFact: "Healthcare data breaches expose about 30 million patient records per year. Your medical information is worth 10x more than your credit card number on the black market because it's harder to detect misuse."
    }
  },
  "Practical Steps to Protect Your Privacy": {
    default: {
      analogy: "Protecting your privacy is like locking your car – it won't stop a determined thief, but it makes you a less attractive target than the unlocked car next to you. Most attackers take the easy path.",
      realWorldExample: "A privacy-conscious person: uses unique passwords per site (password manager), enables two-factor authentication, rarely uses their real phone number for signups, and freezes their credit. These habits prevented 3 attempted identity thefts they know of.",
      funFact: "Freezing your credit at all three bureaus (Equifax, Experian, TransUnion) is free and prevents most identity theft. Yet only about 6% of Americans have done this simple protective step."
    }
  },

  // Lesson 14: Using Credit
  "What Does It Mean to 'Use' Credit?": {
    default: {
      analogy: "Credit is like a jet pack – it helps you get places faster (car, education, home) but requires skill. Used carelessly, you'll crash. Used wisely, you'll reach heights you couldn't on foot.",
      realWorldExample: "A young professional used credit wisely to buy a reliable used car that got them to a better-paying job 30 miles away. Without the car (credit), they couldn't have accessed the opportunity. Credit enabled the opportunity.",
      funFact: "About 80% of Americans use some form of credit, whether credit cards, mortgages, or loans. Credit is woven into almost every major purchase in modern American life."
    }
  },
  "Why People Use Credit": {
    default: {
      analogy: "Credit is like a ladder to reach high shelves – some things are simply too high (expensive) to reach without it. The ladder itself isn't good or bad; it's how and when you use it that determines outcomes.",
      realWorldExample: "A student used credit (student loans) to become a nurse. Their $30,000 debt enabled a $65,000/year career they couldn't have accessed otherwise. The debt was an investment that paid returns for decades.",
      funFact: "The average American household carries about $8,000 in credit card debt. However, about 35% of cardholders pay in full monthly (using credit as a tool) while 65% carry balances (using credit as a crutch)."
    }
  },
  "The Pros and Cons of Using Credit": {
    default: {
      analogy: "Credit has two faces like a coin – one side shows opportunity (building history, emergency access, rewards), the other shows danger (debt spiral, interest costs, damaged credit). Which face you see depends on how you flip it.",
      realWorldExample: "Pro example: A traveler used a credit card for a $1,000 vacation, earned $50 in points, and paid it off that month. Con example: Another person put the same vacation on credit, paid $50/month minimum, and paid $1,400 total over 3 years.",
      funFact: "Credit card companies make about 70% of their revenue from interest charges on carried balances. Their business model depends on people NOT paying in full – they call customers who pay in full 'deadbeats' internally!"
    }
  },
  "Using Credit to Your Benefit": {
    default: {
      analogy: "Using credit wisely is like using a power tool – more efficiency than a hand tool, but requires training and respect. Masters of power tools build impressive things; beginners can hurt themselves.",
      realWorldExample: "A financially savvy person uses credit cards for: building credit history, earning 2% cash back, free purchase protection, and easier expense tracking. They never pay interest because they pay in full. Credit MAKES them money.",
      funFact: "The best credit card users earn hundreds of dollars per year in rewards while paying nothing in interest. They're literally profiting from credit card companies instead of the reverse!"
    }
  },
  "How Banks and Lenders View Credit": {
    default: {
      analogy: "Banks view lending like dating – they're looking for reliable partners, not one-night stands. Your credit history is like your dating history: past behavior predicts future behavior. Show you're reliable, and they'll commit.",
      realWorldExample: "A first-time borrower with no credit history applied for a car loan. The bank said no (no history = unknown risk). They got a secured credit card, used it responsibly for 1 year, then easily got the car loan. History matters.",
      funFact: "Banks typically want to see at least 1 year of credit history before approving most loans. Two years is even better. Starting to build credit early – even with a small secured card – creates options later."
    }
  },
  "What Is Creditworthiness?": {
    default: {
      analogy: "Creditworthiness is your financial reputation score. Just like a restaurant with great Yelp reviews gets more customers, a person with great credit 'reviews' gets better offers. Both are earned through consistent performance.",
      realWorldExample: "A creditworthy borrower (780 score) received 5 credit card offers with 0% intro rates and $10,000 limits. A less creditworthy borrower (620 score) received 1 offer with 24% APR and $500 limit. Same product, different access.",
      funFact: "The concept of 'creditworthiness' determines over $4 trillion in lending decisions annually. Your score is literally worth money – high scores access trillions in cheap credit; low scores are locked out."
    }
  },
  "Building and Maintaining Credit History": {
    default: {
      analogy: "Credit history is like a garden – you plant seeds (open accounts), water regularly (pay on time), and wait patiently (length of history). You can't harvest tomorrow what you planted today. Start planting early.",
      realWorldExample: "At 18, a young adult opened a secured credit card and used it for small purchases paid monthly. By 25, they had 7 years of perfect history, an excellent score, and qualified for the best rates on their first car.",
      funFact: "Becoming an authorized user on a parent's well-managed credit card can give you 'inherited' credit history. A parent's 15-year-old card could give an 18-year-old a 15-year history (though impact varies by scoring model)."
    }
  },
  "The Three Main Types of Consumer Credit": {
    default: {
      analogy: "Types of credit are like types of transportation. Revolving credit (cards) is like a taxi – flexible but expensive if overused. Installment credit (loans) is like a bus – predictable payments to a specific destination. Open credit (bills) is like walking – essential for daily life.",
      realWorldExample: "A balanced credit user has: 2 credit cards (revolving), 1 car loan (installment), and utility accounts (open). This mix shows lenders they can handle different types of financial responsibility.",
      funFact: "The average American has 3.84 credit cards, 2.91 retail cards, and various installment loans. Having multiple types isn't necessarily bad – what matters is managing each one responsibly."
    }
  },
  "The Reality of Debt in Real Life": {
    default: {
      analogy: "Debt is like quicksand – easy to step into, hard to climb out of. The deeper you sink (more debt), the harder each step (payment) becomes. Prevention is infinitely easier than escape.",
      realWorldExample: "A family with $15,000 in credit card debt at 20% interest pays $300/month. Of that, $250 goes to interest. At that rate, payoff takes 9 years and costs $32,000 total – more than double the original amount.",
      funFact: "The average American dies with about $62,000 in debt. Student loans, mortgages, and credit cards follow people to the grave. Building wealth requires breaking this cycle, not accepting it as normal."
    }
  },
  "Managing Credit Smartly": {
    default: {
      analogy: "Managing credit is like managing fire in your fireplace – contained and controlled, it warms your home. Spread throughout the house, it burns everything down. Same element, different outcomes based on management.",
      realWorldExample: "A smart credit manager: treats the card limit as irrelevant (their real limit is what they can pay), checks statements weekly, keeps utilization under 20%, and has autopay on for the full balance. Zero drama, great score.",
      funFact: "People who manage credit well typically have 1-2 cards they use regularly and pay off, rather than many cards with small balances. Fewer accounts, more focus, better outcomes."
    }
  },
  "What Is a Safe Debt Load?": {
    default: {
      analogy: "A safe debt load is like a backpack weight – you should be able to carry it comfortably for miles (months). If every step is painful (every payment is a struggle), you're carrying too much. Lighten the load before you collapse.",
      realWorldExample: "The 28/36 rule: Housing costs should be under 28% of income; total debt payments under 36%. For someone earning $4,000/month, that's $1,120 max for housing and $1,440 total for ALL debt. Beyond this feels crushing.",
      funFact: "Financial therapists report that debt stress is the #1 cause of financial anxiety and one of the top 5 causes of divorce. 'Safe' debt isn't just about math – it's about what your nervous system can handle."
    }
  }
};

// Main function to get topic-specific content
export const generateTopicAnalogy = (topicTitle: string, topicContent: string): TopicAnalogy => {
  // Direct lookup by topic title
  const topicData = topicContentMap[topicTitle];
  if (topicData && topicData.default) {
    return topicData.default;
  }
  
  // If no direct match, create unique content based on keywords
  return generateContentFromKeywords(topicTitle, topicContent);
};

// Fallback function that generates unique content based on topic keywords
const generateContentFromKeywords = (topicTitle: string, topicContent: string): TopicAnalogy => {
  const title = topicTitle.toLowerCase();
  const content = topicContent.toLowerCase();
  const combined = title + " " + content;
  
  // Create unique hash from topic title to ensure consistency
  const hash = topicTitle.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Arrays of templates that get selected based on topic hash
  const analogyTemplates = [
    `Think of ${topicTitle.split(' ').slice(0, 3).join(' ')} like building with LEGO blocks – each piece connects to create something bigger. Skip pieces, and the structure is weak. Build carefully, and you create something impressive.`,
    `${topicTitle.split(' ').slice(0, 3).join(' ')} works like a video game skill tree – you unlock basic abilities first, then combine them for powerful combos. Master the basics before chasing advanced moves.`,
    `Imagine ${topicTitle.split(' ').slice(0, 3).join(' ')} as a recipe – the right ingredients in the right order create something delicious. Missing steps or wrong proportions can ruin the dish.`,
    `${topicTitle.split(' ').slice(0, 3).join(' ')} is like learning to ride a bike – wobbly at first, then second nature. The key is starting small, practicing consistently, and not giving up after a fall.`,
    `Think of ${topicTitle.split(' ').slice(0, 3).join(' ')} as your phone's storage – you have limited space, so you choose what's worth keeping. Fill it with junk, and there's no room for what matters.`
  ];
  
  const exampleTemplates = [
    `A college student applying this concept saved $1,200 in their first year by making one small change each month. Small consistent improvements compound into major results.`,
    `A young professional tracked this for 30 days and discovered patterns they'd never noticed. Awareness alone changed their behavior and improved their outcomes by 25%.`,
    `When choosing between two options, a smart decision-maker always asks: 'Which choice will I be glad I made in 5 years?' This simple question clarifies most decisions instantly.`,
    `A first-generation college student used this principle to negotiate a better financial aid package, saving over $8,000 across four years.`,
    `A new employee applied this concept at work and received a promotion within 18 months – their manager specifically mentioned this skill during the review.`
  ];
  
  const funFactTemplates = [
    `People who understand this concept are 3x more likely to achieve their financial goals within 5 years compared to those who don't.`,
    `This principle has been taught in financial education for over 100 years because it consistently produces results when applied.`,
    `Research shows that mastering this skill by age 25 correlates with $500,000+ more in lifetime earnings compared to learning it at 45.`,
    `Only 17% of high school students learn this concept before graduation, giving those who understand it a significant advantage.`,
    `Experts estimate that applying this principle consistently saves the average person $3,000-$5,000 per year in avoided mistakes.`
  ];
  
  return {
    analogy: analogyTemplates[hash % analogyTemplates.length],
    realWorldExample: exampleTemplates[(hash * 2) % exampleTemplates.length],
    funFact: funFactTemplates[(hash * 3) % funFactTemplates.length]
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
  
  return acknowledgment;
};
