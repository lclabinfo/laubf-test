export interface DailyBread {
  id: string;
  title: string;
  date: string; // ISO string YYYY-MM-DD for sorting
  displayDate: string; // Formatted string
  passage: string;
  keyVerse: string;
  body: string;
  bibleText?: string; // HTML content for embedded scripture
  author: string;
  tags: string[];
  videoUrl?: string; // YouTube video URL
  audioUrl?: string; // Audio file URL
}

const bodyText = `
<p>The kings of this world rule as if they could control the world. But in reality, the One enthroned in heaven has power over all things. Jesus destroyed death and is exalted above every name (Ph 2:9).</p>

<p>The author advises us to "kiss the Son" (12). Jesus is our Friend and a personal God who delights in our humble and intimate expressions of thanks and praise (Lk 7:38). At the same time, he is a Mighty God who saves us from our sin and will come in power to judge this world.</p>

<p>As we serve the Lord, let us fear his greatness and rejoice in his victory over death. Let us enjoy the loving kindness and friendship in our relationship with Christ, for, "Blessed are all who take refuge in him" (12).</p>

<p><strong>Prayer:</strong> Father, thank you for giving us your Son Jesus to be our Savior and King. Please help me to devote myself to Jesus as my King.</p>

<p><strong>One Word:</strong> Kiss the Son, Jesus</p>
`;

const mockBibleText = `
<h4>Psalm 2:1-12 (ESV)</h4>
<p>
  <sup class="text-xs text-gray-400 font-bold mr-1">1</sup>Why do the nations rage and the peoples plot in vain?
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">2</sup>The kings of the earth set themselves, and the rulers take counsel together, against the Lord and against his Anointed, saying,
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">3</sup>"Let us burst their bonds apart and cast away their cords from us."
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">4</sup>He who sits in the heavens laughs; the Lord holds them in derision.
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">5</sup>Then he will speak to them in his wrath, and terrify them in his fury, saying,
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">6</sup>"As for me, I have set my King on Zion, my holy hill."
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">7</sup>I will tell of the decree: The Lord said to me, "You are my Son; today I have begotten you.
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">8</sup>Ask of me, and I will make the nations your heritage, and the ends of the earth your possession.
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">9</sup>You shall break them with a rod of iron and dash them in pieces like a potter's vessel."
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">10</sup>Now therefore, O kings, be wise; be warned, O rulers of the earth.
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">11</sup>Serve the Lord with fear, and rejoice with trembling.
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">12</sup>Kiss the Son, lest he be angry, and you perish in the way, for his wrath is quickly kindled. Blessed are all who take refuge in him.
</p>
`;

const baseDailyBreads: DailyBread[] = [
  {
    id: '1',
    title: "KISS THE SON",
    date: new Date().toISOString().split('T')[0], // Today
    displayDate: "02/07/2026",
    passage: "Psalm 2:1~12",
    keyVerse: "12",
    body: bodyText,
    bibleText: mockBibleText,
    author: "P. Abraham Kim",
    tags: ["Salvation", "Mission"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Mock URL
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Mock Audio
  },
  {
    id: '2',
    title: "BE COURAGEOUS!",
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0], // Yesterday
    displayDate: new Date(Date.now() - 86400000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    passage: "Acts 23:1~11",
    keyVerse: "11",
    body: bodyText,
    bibleText: mockBibleText,
    author: "Sarah Lee",
    tags: ["Courage", "Faith"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  }
];

// Generator
const titles = [
  "THE LORD IS MY SHEPHERD",
  "FAITH THAT MOVES MOUNTAINS",
  "THE POWER OF PRAYER",
  "WALKING IN THE SPIRIT",
  "A NEW CREATION",
  "LOVE ONE ANOTHER",
  "THE JOY OF THE LORD",
  "PEACE BEYOND UNDERSTANDING"
];

const passages = [
  "Psalm 23:1-6",
  "Mark 11:22-24",
  "James 5:13-16",
  "Galatians 5:16-26",
  "2 Corinthians 5:17",
  "John 13:34-35",
  "Nehemiah 8:10",
  "Philippians 4:6-7"
];

function generateMockDailyBreads(count: number): DailyBread[] {
  const generated: DailyBread[] = [];
  const startDate = new Date();

  for (let i = 2; i < count; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() - i); 
    
    const id = (baseDailyBreads.length + i + 1).toString();
    const titleIndex = Math.floor(Math.random() * titles.length);
    
    generated.push({
      id,
      title: titles[titleIndex],
      date: date.toISOString().split('T')[0],
      displayDate: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      passage: passages[titleIndex],
      keyVerse: (Math.floor(Math.random() * 10) + 1).toString(),
      body: bodyText,
      bibleText: mockBibleText,
      author: "Staff",
      tags: ["Devotional"],
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    });
  }
  return generated;
}

export const dailyBreads: DailyBread[] = [...baseDailyBreads, ...generateMockDailyBreads(60)];