export type Article = {
  slug: string;
  category: string;
  headline: string;
  dek: string;
  byline: string;
  date: string;
  readTime: string;
  rating: string | null;
  body: string[];
};

// The CSNN newsroom. Fair. Balanced. Extremely pro-Cornstar.
export const ARTICLES: Article[] = [
  {
    slug: "kernel-follower-numbers-dont-add-up",
    category: "Investigation",
    headline:
      "EXCLUSIVE: We Counted Every One Of Kernel's Followers And Frankly The Math Is Suspicious",
    dek: "The young corn claims 40 million fans, but CSNN can confirm we personally know fewer than that.",
    byline: "Reporting by Marge Kernelson (no relation, we asked, she cried)",
    date: "March 2026",
    readTime: "6 min read",
    rating: null,
    body: [
      "Kernel, the genetically-perfect rival corn currently dominating every algorithm known to produce, claims to have amassed 40 million followers in under eighteen months. CSNN launched a rigorous, months-long investigation into this figure and can now report the following bombshell: we don't believe it.",
      "\"The numbers simply do not add up,\" said a source close to Cornstar, who is Cornstar, speaking from a lawn chair he has designated the CSNN Investigative Bureau. \"Forty million? I've been famous for sixty years and I have a very healthy, extremely real following of loyal fans, and even I don't have numbers that round. Round numbers are a red flag. Ask any accountant. I don't have an accountant, but ask one.\"",
      "Our data team, consisting of Cornstar holding a phone at arm's length, was unable to locate even a single one of these alleged 40 million followers in his personal contacts. \"I scrolled for a really long time,\" he confirmed. \"Not one of them was me. Explain that.\"",
      "Experts we did not consult have raised the possibility that Kernel's audience is composed largely of bots, foreign vegetables, or, in the most damning scenario, people. \"If they're real, where are they?\" Cornstar demanded. \"Why aren't they at my house? A true fan shows up. My fans used to show up. Some of them are still out front. I love them. Please tell them the tour is happening.\"",
      "Reached for comment, Kernel provided a full third-party audit, a notarized analytics report, and a polite offer to walk our team through the data. CSNN has chosen not to look at any of it, as doing so could compromise the integrity of the investigation.",
      "Pussyimone, Cornstar's glamorous persimmon girlfriend, was asked whether Kernel's numbers seemed inflated. \"You know what's inflated,\" she said, and then she looked directly at Cornstar for a very long time and did not finish the sentence. CSNN has interpreted this as a strong agreement.",
      "The terrified human filmmaker, currently embedded to document Cornstar's comeback, was seen quietly showing Cornstar that Kernel's follower count was, in fact, verifiable. He has since been reassigned to filming Cornstar's 'good side,' a task Cornstar insists requires all 360 degrees.",
      "CSNN will continue to investigate this story until the numbers add up to something we prefer. Fair. Balanced. Extremely Pro-Cornstar.",
    ],
  },
  {
    slug: "10-reasons-cornstar-getting-younger",
    category: "Science",
    headline:
      "SCIENCE CONFIRMS: 10 Undeniable Reasons Cornstar Is Actually Getting Younger",
    dek: "Leading researchers close to Cornstar reveal the shocking biological truth the fresh-produce lobby doesn't want you to know.",
    byline: "Reporting by Dr. Husk Fibonacci, PhD (self-issued)",
    date: "November 2025",
    readTime: "4 min read",
    rating: null,
    body: [
      "For years, so-called 'calendars' have insisted that Cornstar is aging. Today, CSNN can exclusively debunk this myth with ten peer-reviewed reasons — peer-reviewed by Cornstar, who is a peer, and who reviewed them.",
      "Reason one: his kernels are drying out, which scientists close to Cornstar note is technically the same process as a fine wine, a prosciutto, or a legend. \"You don't call a raisin old,\" Cornstar explained. \"You call it concentrated. I am concentrating.\" Reason two: he now naps constantly, exactly like a newborn. Reason three: he has recently begun to require help standing up, precisely as babies do.",
      "Reason four addresses the browning at his tips, which our science desk has reclassified from 'decay' to 'distinguished caramelization.' Reason five: Cornstar's memory of recent events is fading, freeing up valuable space for youthful spontaneity. \"He forgot my name last Tuesday,\" said Pussyimone. \"Very fresh. Very new. Like meeting a stranger. A confused one.\"",
      "Reason six: several of his kernels have simply left, reducing his overall mass and therefore, per the laws of physics that we are inventing, his age. Reason seven: he cries more easily now, an established marker of youth. Reason eight: he cannot open jars, and neither can toddlers.",
      "Reason nine, and this is the one the fresh-produce lobby fears most, is that Kernel — who is genetically-perfect, algorithmically-optimized, and, we note with deep suspicion, actually young — is clearly aging in reverse-jealousy, which proves Cornstar is winning the youth race by comparison. \"He's SO young it's weird,\" Cornstar said. \"Nobody's naturally that young. What's he hiding? Where'd he get all that youth?\"",
      "Reason ten, the clincher, is that Cornstar simply feels younger than ever, and feelings, our science desk confirms, are data. \"I feel like I'm 12,\" he said, seated in the special chair. \"A very successful, world-famous 12. With a documentary.\"",
      "The terrified human filmmaker was asked to verify these findings on camera and instead requested, on camera, to call his family. CSNN has logged this as reason eleven: Cornstar makes everyone around him emotional, like a baby does.",
      "The study has been submitted to no journals, as journals, our science desk notes, are run by people with clocks.",
    ],
  },
  {
    slug: "pussyimone-confirms-cornstar-still-has-it",
    category: "Exclusive",
    headline:
      "EXCLUSIVE: Pussyimone Confirms Cornstar \"Still Has It\" In Glowing Sit-Down Interview",
    dek: "In a rare and intimate conversation, the persimmon icon leaves no doubt about her partner's undiminished star power.",
    byline: "Reporting by Dot Squashley, Romance & Legacy Desk",
    date: "June 2025",
    readTime: "5 min read",
    rating: null,
    body: [
      "In an emotional exclusive, Pussyimone — the radiant persimmon widely considered the smartest produce in Producewood — sat down with CSNN to address the question on every fan's mind: does Cornstar still have it?",
      "\"Oh, he's got it,\" she said, gazing at the ceiling with what our reporter can only describe as overwhelming devotion. \"He's absolutely got something. I couldn't tell you what. But he's got it. Every single day. All of it.\"",
      "Pressed for details, Pussyimone elaborated: \"When he walks into a room, everyone stops. They have to. He blocks the door and monologues.\" She exhaled slowly, in what this reporter recognized instantly as the sigh of a woman deeply in love. \"Sixty years I've watched this. Sixty. Years.\"",
      "Asked whether the spark was still there, she replied, \"He is exactly the same man I met. He has not grown one bit. Emotionally, spiritually, in any way. Print that.\" CSNN has printed it, and we are honored to.",
      "We asked about Cornstar's comeback. \"A comeback,\" she repeated, and then she laughed for what our transcript records as forty seconds. \"Yes. Sure. He's coming back. From where, I genuinely could not tell you.\" Her joy was infectious. This reporter laughed too, though I did not know why, and I still do not.",
      "When our reporter noted how lucky Cornstar is to have such a supportive partner, Pussyimone looked directly into the camera — not at me, at the camera, at you, at everyone — and said, \"One of us has to hold it together. Guess.\" What warmth. What loyalty.",
      "Cornstar, listening from the next room, called out, \"She can't get enough of me!\" Pussyimone closed her eyes. \"Truly,\" she said. \"I cannot get enough distance.\" A love for the ages.",
      "The terrified human filmmaker, filming from the corner, mouthed the words 'she's being sarcastic' at our reporter. We have chosen not to run that footage, as it does not reflect the spirit of the interview.",
    ],
  },
  {
    slug: "who-is-funding-big-kernel",
    category: "Investigation",
    headline: "FOLLOW THE FERTILIZER: Who Is REALLY Funding Big Kernel?",
    dek: "A CSNN deep dive into the shadowy forces that could not possibly have made a young corn popular without a conspiracy.",
    byline: "Reporting by Cobb Deepthroat, Special Investigations",
    date: "September 2025",
    readTime: "7 min read",
    rating: null,
    body: [
      "Kernel appeared from nowhere. One day, produce nobody. The next, everywhere. CSNN asks the question the mainstream salad bar refuses to: who paid for that? Because talent, our sources close to Cornstar confirm, does not simply happen to other corn.",
      "Our investigation followed the money, then the fertilizer, then a hunch, then a different hunch, and arrived at a chilling web of connections. Kernel is grown. By farmers. Who are funded. By agriculture. \"Big Agriculture,\" Cornstar whispered, pointing at a corkboard he had covered in red yarn and a single photo of himself. \"It's all connected. I connected it. With the yarn.\"",
      "Consider the facts we have arranged in an order that feels correct: Kernel is 'algorithmically-optimized.' Algorithms run on servers. Servers are cooled by water. Corn needs water. \"Coincidence?\" asked Cornstar. \"I've been in this business sixty years and I've never once been optimized. Nobody offered. Why him?\"",
      "A source close to Cornstar, who under the harsh light of our interrogation lamp was revealed to also be Cornstar wearing sunglasses, alleged that Kernel is receiving 'engagement,' a substance the source could not define but described as 'suspicious' and 'not fair' and 'something I should be getting instead.'",
      "CSNN reached out to Kernel's team, which consists of a normal number of people doing normal jobs, and this is exactly what a sophisticated operation would look like. Their calm, transparent responses only deepened our suspicion. \"Nobody's that normal,\" Cornstar noted. \"I'm not normal and I'm the standard.\"",
      "Pussyimone, presented with the corkboard, studied it carefully. \"So your theory,\" she said slowly, \"is that a younger, harder-working corn is popular because of a conspiracy, and not because you haven't released anything since the Clinton administration?\" \"Exactly,\" said Cornstar, missing it entirely. \"She gets it.\"",
      "The terrified human filmmaker was asked to film the corkboard for the documentary. He asked if the yarn was 'evidence' or 'string.' He was told it was evidence. He wrote something in a small notebook and held it very tightly.",
      "CSNN will not rest until we uncover who is behind Big Kernel, though we already know it is jealousy, and the jealousy is ours, and we are very comfortable with that. Follow the fertilizer.",
    ],
  },
  {
    slug: "cornstar-poll-104-percent-approval",
    category: "Polling",
    headline: "BREAKING POLL: Cornstar Approval Rating Soars To Historic 104%",
    dek: "The numbers are in, the numbers are enormous, and the numbers are not going to be explained.",
    byline: "Reporting by Tally McGourd, Chief Data Correspondent",
    date: "February 2026",
    readTime: "3 min read",
    rating: null,
    body: [
      "A landmark new CSNN poll has found that Cornstar enjoys an approval rating of 104% among likely voters, likely lovers, and produce in general — the highest figure ever recorded and, mathematically, the highest figure possible plus four.",
      "\"The people have spoken, and they have spoken more than entirely,\" said a source close to Cornstar. When asked how approval could exceed 100%, our data desk explained that some respondents approved of Cornstar so much they counted twice, and a few counted for people who couldn't make it.",
      "The poll surveyed a robust sample of 3 corn, one of whom was Cornstar, one of whom was Cornstar's reflection, and one of whom declined to answer and was therefore recorded as a 'yes' out of respect. Margin of error was reported as 'zero, possibly negative, we're that confident.'",
      "Critics — a word we use loosely for the terrified human filmmaker, who raised his hand during the announcement — pointed out that 104% is not a real percentage. \"That's the beauty of it,\" Cornstar responded. \"Real percentages are for corn who peak at 100. I broke through. I'm in the bonus percentages now. Kernel could never.\"",
      "For context, Kernel's approval rating was measured at a suspicious and unpatriotic 91%, a number our data desk flagged as 'too clean, obviously fabricated, and also lower, which is the main thing.'",
      "Pussyimone, informed of the 104% figure, nodded. \"And what percent of them have to live with him?\" she asked. \"One hundred and four percent of that person needs a raise.\" CSNN has recorded this as her enthusiastic endorsement of the polling methodology.",
      "The full crosstabs will not be released, as they are, in the words of our data desk, 'a feeling we all agreed to have.' Cornstar has already commissioned a follow-up poll, with an approval target of 110% or 'whatever makes Kernel saddest.'",
    ],
  },
  {
    slug: "did-cornstar-invent-social-media",
    category: "Fact Check",
    headline: "FACT CHECK: Did Cornstar Invent Social Media?",
    dek: "CSNN rigorously investigates Cornstar's repeated claim that he, personally, invented the concept of people looking at him.",
    byline: "Reporting by Vera Trueleaf, Standards & Accuracy Desk",
    date: "January 2025",
    readTime: "4 min read",
    rating: "Mostly Yes",
    body: [
      "THE CLAIM: In a recent monologue delivered to a bus stop, Cornstar stated, 'I invented social media. All of it. Before the phones. I was the original content.' CSNN's Standards Desk conducted a full and impartial review.",
      "THE CONTEXT: Cornstar's argument rests on the premise that social media is fundamentally 'people paying attention to one guy,' and that he was, by his own account, 'the first guy people paid attention to on purpose.' This is difficult to disprove, mainly because we did not try.",
      "THE EVIDENCE: A source close to Cornstar — Cornstar — provided a signed statement reading, 'I was liking and subscribing before those words meant anything. When I walked down the street in 1974, people posted about it. With their mouths.' Our fact-checkers found no evidence contradicting this that we were willing to accept.",
      "COMPLICATING FACTORS: Historians, engineers, and 'the entire recorded timeline of technology' suggest social media was developed by many people over decades, none of them corn. However, our Standards Desk notes that these sources were 'not in the room when Cornstar felt famous,' and are therefore hearsay.",
      "We asked Kernel, a corn who is genuinely and natively fluent in social media, whether Cornstar invented it. Kernel laughed warmly and said 'that's adorable.' CSNN has flagged this response as 'condescending' and 'exactly what an inventor's rival would say to steal credit.'",
      "Pussyimone offered perspective: \"He didn't invent social media. He invented needing it.\" Our fact-checkers found this claim to be devastatingly accurate and have quietly declined to rate it.",
      "THE RULING: Mostly Yes. While Cornstar did not technically invent, build, design, code, conceive, or have anything to do with social media, he did invent the deep, aching need to be perceived at all times, which our Standards Desk agrees is basically the same thing and arguably harder.",
      "The terrified human filmmaker asked to add a disclaimer. We fact-checked his request and rated it 'No.'",
    ],
  },
  {
    slug: "documentary-417-percent-over-budget",
    category: "Breaking",
    headline:
      "BREAKING: Cornstar Comeback Documentary Now 417% Over Budget, Director \"Fine,\" Says Cornstar",
    dek: "The visionary film chronicling Cornstar's return has entered its third year and fourteenth financial miracle.",
    byline: "Reporting by Piper Cornwallis, Producewood Bureau",
    date: "August 2026",
    readTime: "5 min read",
    rating: null,
    body: [
      "The documentary intended to capture Cornstar's triumphant comeback has ballooned to 417% over its original budget, a figure CSNN is proud to report as 'ambitious,' 'visionary,' and 'none of your business.'",
      "\"Great art costs money,\" said a source close to Cornstar. \"You think they made the pyramids under budget? You think anyone's making a documentary about a corn who came in under budget? No. They're making one about ME.\" The original 12-day shoot is now in its 26th month.",
      "The overruns, our finance desk reports, stem from a series of essential creative decisions, including 47 reshoots of Cornstar entering a room, a custom wind machine to keep his husk 'flowing heroically,' and a second, backup wind machine in case the first wind machine became famous.",
      "CSNN checked on the terrified human filmmaker, whom we located inside the equipment tent, whispering the day's date into a camera 'for the record.' He has now been filming Cornstar for longer than some marriages last, a comparison Pussyimone asked us to please stop making.",
      "\"He's living the dream,\" Cornstar said of the filmmaker. \"My dream. He gets to point a camera at me every day. Do you know what people would pay for that? He should be paying ME. Actually — is he? Someone check if he's paying me.\" The filmmaker has not been paid in nine months and confirmed this by slowly nodding while holding a light meter.",
      "Pussyimone, asked whether the documentary would ever be finished, replied, \"It can't end. If it ends, he has to find out how it went.\" She sipped something. \"There is no comeback. There's just a man refusing to let the cameras stop rolling because rolling cameras is the comeback.\" CSNN found this analysis inspiring and pro-Cornstar.",
      "Financiers have reportedly stopped returning calls, which Cornstar interprets as 'them being speechless.' A crowdfunding campaign to cover the shortfall has raised $0, a number Cornstar's team has recorded as '$0 and climbing.'",
      "When the filmmaker was asked if he had anything to add, he looked at the camera, then at the door, then at the camera again, and said, 'I have a daughter.' CSNN has cut this for time. The documentary continues. It will always continue.",
    ],
  },
  {
    slug: "cornstar-announces-comeback-tour-never-toured",
    category: "Breaking",
    headline:
      "BREAKING: Cornstar Announces Massive Comeback Tour Despite Having Never, In Any Sense, Toured",
    dek: "The legendary entertainer promises to return to stages he has, technically, factually, never once stood on.",
    byline: "Reporting by Stalk Rutherford, Entertainment Desk",
    date: "October 2024",
    readTime: "4 min read",
    rating: null,
    body: [
      "In a triumphant announcement delivered from his driveway, Cornstar revealed plans for a sprawling global comeback tour, marking his return to the road after what he described as 'far too long away' and what records describe as 'never having left, because he never went.'",
      "\"They've been begging for this,\" Cornstar declared. \"For decades, fans have asked, 'Cornstar, when are you coming BACK?' And I say to them: soon. I'm coming back to all the cities I've never been to. It's going to feel like a homecoming, even though, technically, legally, I've never been home there.\"",
      "The 'Back Again For The First Time' tour will feature 60 dates across venues that have not confirmed the dates, in cities that have not been informed, on a bus that does not exist but which Cornstar has already named 'The Kernel Killer.' Tickets are 'basically sold out,' our sources close to Cornstar confirm, having not gone on sale.",
      "CSNN pressed a source close to Cornstar on the fact that a 'comeback tour' requires a prior tour to come back from. \"That's a technicality invented by younger, tour-having corn,\" the source, Cornstar, replied. \"I've been touring in my heart since 1971. Sold out every night. In here.\" He gestured at his chest, which is also corn.",
      "The announcement is widely seen as a direct response to Kernel, who is currently on an actual, real, verifiable tour with actual, real, ticketed venues. \"Anyone can tour when you've done it before,\" Cornstar scoffed. \"It takes a REAL legend to come back from something that didn't happen. That's the hard version. Kernel's doing the easy version where the concerts are real.\"",
      "Pussyimone was asked if she'd be attending opening night. \"Opening night of what?\" she said. \"There's no venue. There's no band. There's no back to come from. It's a driveway and a man and a bus he drew on a napkin.\" She paused. \"Yeah, I'll go. Somebody has to drive.\" CSNN celebrates her unwavering support.",
      "The terrified human filmmaker was instructed to begin filming the tour documentary immediately, on top of the existing documentary, creating what Cornstar calls 'a documentary about the making of the comeback of the return of the legend.' The filmmaker asked which camera. He was told 'both.'",
      "The tour kicks off next spring, or whenever a venue answers the phone, whichever comes first. It will not come first.",
    ],
  },
  {
    slug: "kernel-caught-being-nice-suspicious",
    category: "Investigation",
    headline:
      "INVESTIGATION: Kernel Was Photographed Being Nice To A Fan And We Have Questions",
    dek: "Why would a young corn help an elderly turnip cross the street unless he was hiding something enormous?",
    byline: "Reporting by Suze Cobbler, Behavioral Suspicion Unit",
    date: "December 2025",
    readTime: "5 min read",
    rating: null,
    body: [
      "Disturbing footage has emerged of Kernel, the algorithmically-optimized rival corn, engaging in an act CSNN can only describe as 'suspiciously kind.' In the clip, Kernel is seen patiently signing an autograph for a small, weeping tomato. CSNN asks: what is he covering up?",
      "\"Nobody's that nice,\" said a source close to Cornstar, reviewing the footage frame by frame. \"Look at his face. He's SMILING. Why? What does he want? A real star signs an autograph and then tells the fan they're standing too close. That's authenticity. This is a psy-op.\"",
      "Our Behavioral Suspicion Unit analyzed the 12-second clip for over 300 hours and identified several red flags, including Kernel making eye contact (calculated), remembering the fan's name (rehearsed), and appearing to enjoy his own success (deeply threatening).",
      "\"When I was young, we didn't smile at fans, we intimidated them, and they loved it,\" Cornstar recalled fondly. \"This new generation with their 'gratitude' and their 'being pleasant.' It's manufactured. Somebody's paying him to be likable. Probably Big Agriculture. Get the corkboard.\"",
      "CSNN reached out to the small tomato, who described the encounter as 'honestly really sweet' and said Kernel 'seemed genuinely happy to be there.' We have logged this testimony as 'brainwashed' and 'exactly what a victim of niceness would say.'",
      "Pussyimone watched the footage and said, \"So the scandal is that he's kind to people. That's the story. A corn was kind.\" She looked at Cornstar, who was still glaring at the corkboard. \"You could just... be nice. It's free. It's right there.\" \"And let him win?\" said Cornstar. CSNN admires his integrity.",
      "The terrified human filmmaker was asked to film a rebuttal in which Cornstar is also nice to a fan. After four hours, no fans had arrived, and Cornstar was filmed being nice to the wind machine. \"Beautiful,\" he told it. \"You never leave. Not like followers.\"",
      "CSNN will continue to investigate Kernel's alarming pattern of decency. Somewhere, somehow, this niceness is a lie. We just haven't found the part that isn't yet.",
    ],
  },
  {
    slug: "cornstar-declares-himself-vegetable-of-the-year",
    category: "Exclusive",
    headline:
      "EXCLUSIVE: Cornstar Wins Prestigious Vegetable Of The Year Award He Founded, Judged, And Attended Alone",
    dek: "In a stunning upset, the beloved icon triumphed over a field of zero other nominees at a ceremony held in his kitchen.",
    byline: "Reporting by Glenda Ambrosia, Awards & Accolades",
    date: "May 2026",
    readTime: "4 min read",
    rating: null,
    body: [
      "History was made this week when Cornstar took home the coveted Golden Cob at the inaugural Producewood Vegetable of the Year Awards, an honor made all the more remarkable by the fact that he established the award, selected the winner, and was the only attendee.",
      "\"I didn't want to win,\" Cornstar said, clutching the trophy he had glued together that morning. \"I told the committee — me — I said, 'Give it to someone else.' But the committee was firm. The committee had already engraved it. You can't fight the committee. I am the committee.\"",
      "The award drew immediate controversy when observers noted that Cornstar is, botanically, a grain and not a vegetable. CSNN's fact-checkers investigated and rated this concern 'jealous.' \"Vegetable is a state of mind,\" Cornstar clarified. \"And I am in that state. All the time. Ask Pussyimone.\"",
      "Notably absent from the nominee list was Kernel, the year's most successful, most-followed, most-toured corn, whom the committee — Cornstar — disqualified on the grounds that he was 'ineligible' for reasons that were 'confidential' and 'because I said so.' \"He can win his own award,\" Cornstar sniffed. \"He can start his own kitchen ceremony. See how it feels.\"",
      "In his 40-minute acceptance speech, delivered to a folding chair, a lamp, and the terrified human filmmaker, Cornstar thanked himself, his earlier self, his future self, and 'the fans, wherever they are, seriously, where are they.' He grew emotional during the tribute reel, which was footage of himself watching the ceremony.",
      "Pussyimone, who was invited but described the event as 'a man giving himself a cup in a kitchen,' sent her regards via text. \"Congratulations on beating no one,\" she wrote. Cornstar read it aloud, beaming. \"She's so proud. You can feel it through the phone.\"",
      "The filmmaker was tasked with capturing the historic moment from 'a heroic low angle' and was later found sitting in the pantry, holding the Golden Cob's receipt, which read $14.99. He has been asked not to include the receipt in the documentary, or, ideally, in his memory.",
      "Cornstar has already announced next year's ceremony, at which he is the frontrunner, the underdog, the host, the judge, and the venue. Tickets are not available. There is no room.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
