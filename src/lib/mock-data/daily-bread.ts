import type { DailyBread } from "@/lib/types/daily-bread";

/* ── Helper ── */

function slugify(title: string, date: string): string {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${date}`;
}

function formatBibleText(passage: string, verses: string[]): string {
  const lines = verses
    .map(
      (v, i) =>
        `<sup class="text-xs text-black-3 font-bold mr-1">${i + 1}</sup>${v}`
    )
    .join("<br/><br/>");
  return `<h4 class="text-lg font-medium mb-4">${passage} (ESV)</h4><p class="leading-relaxed">${lines}</p>`;
}

/* ── Hardcoded entries ── */

const ENTRIES: DailyBread[] = [
  {
    id: "1",
    slug: "kiss-the-son-2026-02-09",
    title: "Kiss The Son",
    date: "2026-02-09",
    passage: "Psalm 2:1\u201312",
    keyVerse: "12",
    author: "P. Abraham Kim",
    tags: ["Salvation", "Mission"],
    body: `<p>The kings of this world rule as if they could control the world. But in reality, the One enthroned in heaven has power over all things. Jesus destroyed death and is exalted above every name (Ph 2:9).</p>
<p>The author advises us to \u201ckiss the Son\u201d (12). Jesus is our Friend and a personal God who delights in our humble and intimate expressions of thanks and praise (Lk 7:38). At the same time, he is a Mighty God who saves us from our sin and will come in power to judge this world.</p>
<p>As we serve the Lord, let us fear his greatness and rejoice in his victory over death. Let us enjoy the loving kindness and friendship in our relationship with Christ, for, \u201cBlessed are all who take refuge in him\u201d (12).</p>
<p><strong>Prayer:</strong> Father, thank you for giving us your Son Jesus to be our Savior and King. Please help me to devote myself to Jesus as my King.</p>
<p><strong>One Word:</strong> Kiss the Son, Jesus</p>`,
    bibleText: formatBibleText("Psalm 2:1\u201312", [
      "Why do the nations rage and the peoples plot in vain?",
      "The kings of the earth set themselves, and the rulers take counsel together, against the Lord and against his Anointed, saying,",
      "\u201cLet us burst their bonds apart and cast away their cords from us.\u201d",
      "He who sits in the heavens laughs; the Lord holds them in derision.",
      "Then he will speak to them in his wrath, and terrify them in his fury, saying,",
      "\u201cAs for me, I have set my King on Zion, my holy hill.\u201d",
      "I will tell of the decree: The Lord said to me, \u201cYou are my Son; today I have begotten you.",
      "Ask of me, and I will make the nations your heritage, and the ends of the earth your possession.",
      "You shall break them with a rod of iron and dash them in pieces like a potter\u2019s vessel.\u201d",
      "Now therefore, O kings, be wise; be warned, O rulers of the earth.",
      "Serve the Lord with fear, and rejoice with trembling.",
      "Kiss the Son, lest he be angry, and you perish in the way, for his wrath is quickly kindled. Blessed are all who take refuge in him.",
    ]),
  },
  {
    id: "2",
    slug: "be-courageous-2026-02-08",
    title: "Be Courageous!",
    date: "2026-02-08",
    passage: "Acts 23:1\u201311",
    keyVerse: "11",
    author: "Sarah Lee",
    tags: ["Courage", "Faith"],
    body: `<p>Paul stood before the Sanhedrin with a clear conscience. He had lived his life in full devotion to God, first as a Pharisee and now as an apostle of Christ. His boldness was not reckless\u2014it was rooted in faith.</p>
<p>That night, the Lord stood by Paul and said, \u201cTake courage, for as you have testified to the facts about me in Jerusalem, so you must testify also in Rome\u201d (11). God did not remove Paul\u2019s trials but gave him the assurance that his suffering had purpose.</p>
<p>We too may face opposition when we stand for truth. But God is faithful to stand beside us and encourage us. He gives us a mission that extends beyond our present circumstances.</p>
<p><strong>Prayer:</strong> Lord, give me the courage to testify about you no matter the cost. Help me trust your plan for my life.</p>
<p><strong>One Word:</strong> Take courage\u2014God stands with you</p>`,
    bibleText: formatBibleText("Acts 23:1\u201311", [
      "And looking intently at the council, Paul said, \u201cBrothers, I have lived my life before God in all good conscience up to this day.\u201d",
      "And the high priest Ananias commanded those who stood by him to strike him on the mouth.",
      "Then Paul said to him, \u201cGod is going to strike you, you whitewashed wall! Are you sitting to judge me according to the law, and yet contrary to the law you order me to be struck?\u201d",
      "Those who stood by said, \u201cWould you revile God\u2019s high priest?\u201d",
      "And Paul said, \u201cI did not know, brothers, that he was the high priest, for it is written, \u2018You shall not speak evil of a ruler of your people.\u2019\u201d",
      "Now when Paul perceived that one part were Sadducees and the other Pharisees, he cried out in the council, \u201cBrothers, I am a Pharisee, a son of Pharisees. It is with respect to the hope and the resurrection of the dead that I am on trial.\u201d",
      "And when he had said this, a dissension arose between the Pharisees and the Sadducees, and the assembly was divided.",
      "For the Sadducees say that there is no resurrection, nor angel, nor spirit, but the Pharisees acknowledge them all.",
      "Then a great clamor arose, and some of the scribes of the Pharisees\u2019 party stood up and contended sharply, \u201cWe find nothing wrong in this man. What if a spirit or an angel spoke to him?\u201d",
      "And when the dissension became violent, the tribune, afraid that Paul would be torn to pieces by them, commanded the soldiers to go down and take him away from among them by force and bring him into the barracks.",
      "The following night the Lord stood by him and said, \u201cTake courage, for as you have testified to the facts about me in Jerusalem, so you must testify also in Rome.\u201d",
    ]),
  },
  {
    id: "3",
    slug: "the-lord-is-my-shepherd-2026-02-07",
    title: "The Lord Is My Shepherd",
    date: "2026-02-07",
    passage: "Psalm 23:1\u20136",
    keyVerse: "1",
    author: "P. Abraham Kim",
    tags: ["Trust", "Provision"],
    body: `<p>David, once a humble shepherd boy, knew firsthand what it meant to care for sheep. He protected them from lions and bears, led them to green pastures and still waters. Now he confesses that God is his Shepherd.</p>
<p>\u201cThe Lord is my shepherd; I shall not want\u201d (1). This is more than a poetic line\u2014it is a declaration of total trust. When we accept God as our Shepherd, we acknowledge that he provides, protects, and guides us.</p>
<p>Even in the valley of the shadow of death, we need not fear, for God\u2019s rod and staff comfort us. He prepares a table for us in the presence of our enemies. His goodness and mercy follow us all the days of our lives.</p>
<p><strong>Prayer:</strong> Lord, you are my Shepherd. Help me to trust you completely and follow where you lead.</p>
<p><strong>One Word:</strong> The Lord is my Shepherd</p>`,
    bibleText: formatBibleText("Psalm 23:1\u20136", [
      "The Lord is my shepherd; I shall not want.",
      "He makes me lie down in green pastures. He leads me beside still waters.",
      "He restores my soul. He leads me in paths of righteousness for his name\u2019s sake.",
      "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
      "You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.",
      "Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.",
    ]),
  },
  {
    id: "4",
    slug: "faith-that-moves-mountains-2026-02-06",
    title: "Faith That Moves Mountains",
    date: "2026-02-06",
    passage: "Mark 11:22\u201324",
    keyVerse: "22",
    author: "Sarah Lee",
    tags: ["Faith", "Prayer"],
    body: `<p>After cursing the fig tree that had withered overnight, Jesus taught his disciples a powerful lesson on faith. \u201cHave faith in God,\u201d he said (22). This is the foundation of all spiritual life.</p>
<p>Jesus tells us that with faith, we can say to a mountain, \u201cBe taken up and thrown into the sea,\u201d and it will be done. This is not about magical thinking\u2014it is about trusting in the sovereign God who can do all things.</p>
<p>The key is not the size of our faith but the greatness of our God. When we pray believing, we align our hearts with God\u2019s will, and he moves in ways beyond our imagination.</p>
<p><strong>Prayer:</strong> God, increase my faith. Help me to trust you with the mountains in my life and believe in your power to move them.</p>
<p><strong>One Word:</strong> Have faith in God</p>`,
    bibleText: formatBibleText("Mark 11:22\u201324", [
      "And Jesus answered them, \u201cHave faith in God.",
      "Truly, I say to you, whoever says to this mountain, \u2018Be taken up and thrown into the sea,\u2019 and does not doubt in his heart, but believes that what he says will come to pass, it will be done for him.",
      "Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.",
    ]),
  },
  {
    id: "5",
    slug: "the-power-of-prayer-2026-02-05",
    title: "The Power Of Prayer",
    date: "2026-02-05",
    passage: "James 5:13\u201316",
    keyVerse: "16",
    author: "P. Abraham Kim",
    tags: ["Prayer", "Community"],
    body: `<p>James encourages believers to pray in every circumstance\u2014whether suffering, cheerful, or sick. Prayer is not a last resort but a first response. It connects us to the living God who hears and acts.</p>
<p>\u201cThe prayer of a righteous person has great power as it is working\u201d (16b). This does not mean only \u201cperfect\u201d people can pray effectively. It means those who humbly seek God and live in obedience to his word will see the power of prayer in their lives.</p>
<p>James also calls us to confess our sins to one another and pray for each other. Christian community is built on vulnerability, honesty, and mutual intercession.</p>
<p><strong>Prayer:</strong> Lord, teach me to pray in all circumstances. Help me to be honest before you and before my brothers and sisters in Christ.</p>
<p><strong>One Word:</strong> Pray with power and honesty</p>`,
    bibleText: formatBibleText("James 5:13\u201316", [
      "Is anyone among you suffering? Let him pray. Is anyone cheerful? Let him sing praise.",
      "Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord.",
      "And the prayer of faith will save the one who is sick, and the Lord will raise him up. And if he has committed sins, he will be forgiven.",
      "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.",
    ]),
  },
];

/* ── Generate additional mock entries going back in time ── */

const MOCK_TITLES = [
  { title: "Walking In The Spirit", passage: "Galatians 5:16\u201326", tag: "Spiritual Growth" },
  { title: "A New Creation", passage: "2 Corinthians 5:17", tag: "Transformation" },
  { title: "Love One Another", passage: "John 13:34\u201335", tag: "Love" },
  { title: "The Joy Of The Lord", passage: "Nehemiah 8:10", tag: "Joy" },
  { title: "Peace Beyond Understanding", passage: "Philippians 4:6\u20137", tag: "Peace" },
  { title: "Run With Endurance", passage: "Hebrews 12:1\u20132", tag: "Perseverance" },
  { title: "The Good Shepherd", passage: "John 10:11\u201318", tag: "Trust" },
  { title: "Be Strong In The Lord", passage: "Ephesians 6:10\u201318", tag: "Strength" },
];

const MOCK_BODY = `<p>God\u2019s word speaks to us today with fresh power and meaning. As we meditate on this passage, we discover truths that challenge and comfort us in equal measure.</p>
<p>The Scripture reminds us that God is faithful in all circumstances. Whether we face trials or blessings, his character remains unchanged. He calls us to trust him fully and walk in obedience.</p>
<p>Let us respond to God\u2019s word with hearts of gratitude and hands ready to serve. May this daily bread nourish our souls and equip us for the day ahead.</p>
<p><strong>Prayer:</strong> Father, thank you for your living word. Open my eyes to see wonderful things in your law today.</p>
<p><strong>One Word:</strong> Trust and obey</p>`;

const MOCK_BIBLE = `<h4 class="text-lg font-medium mb-4">Scripture (ESV)</h4><p class="leading-relaxed"><sup class="text-xs text-black-3 font-bold mr-1">1</sup>Scripture text placeholder for mock entries. In production, this will be populated from a Bible API or database.</p>`;

function generateEntries(): DailyBread[] {
  const generated: DailyBread[] = [];
  const authors = ["P. Abraham Kim", "Sarah Lee", "Staff"];

  for (let i = 0; i < 55; i++) {
    const date = new Date("2026-02-04");
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];
    const mock = MOCK_TITLES[i % MOCK_TITLES.length];

    generated.push({
      id: String(ENTRIES.length + i + 1),
      slug: slugify(mock.title, dateStr),
      title: mock.title,
      date: dateStr,
      passage: mock.passage,
      keyVerse: String((i % 10) + 1),
      author: authors[i % authors.length],
      tags: [mock.tag],
      body: MOCK_BODY,
      bibleText: MOCK_BIBLE,
    });
  }

  return generated;
}

export const MOCK_DAILY_BREADS: DailyBread[] = [
  ...ENTRIES,
  ...generateEntries(),
];
