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
<p>There are times in our lives when we feel like we've hit a dead end. We look around and see no way out, no solution to our problems, and no hope for the future. It's in these moments that our faith is truly tested.</p>
<p>But scripture reminds us that God's ways are not our ways. When we see a wall, God sees a door. When we see an ending, God sees a new beginning. The passage today speaks directly to this reality.</p>
<p>Consider the Israelites standing before the Red Sea. Behind them, the Egyptian army; before them, impassable waters. They were trapped. But God didn't call them to fight the army or swim the sea. He called them to trust.</p>
<p><strong>Trusting is often harder than doing.</strong> Doing gives us a sense of control, while trusting requires surrender. Yet, it is in surrender that we find God's power most active.</p>
<p>Today, whatever "Red Sea" you are facing, take a moment to be still. Stop striving and start trusting. God has not brought you this far to leave you now. His salvation is not just for the distant future; it is for your present reality.</p>
`;

const mockBibleText = `
<h4>Acts 28:23-31 (NIV)</h4>
<p>
  <sup class="text-xs text-gray-400 font-bold mr-1">23</sup>They arranged to meet Paul on a certain day, and came in even larger numbers to the place where he was staying. He witnessed to them from morning till evening, explaining about the kingdom of God, and from the Law of Moses and from the Prophets he tried to persuade them about Jesus.
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">24</sup>Some were convinced by what he said, but others would not believe.
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">25</sup>They disagreed among themselves and began to leave after Paul had made this final statement: "The Holy Spirit spoke the truth to your ancestors when he said through Isaiah the prophet:
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">26</sup>"'Go to this people and say, "You will be ever hearing but never understanding; you will be ever seeing but never perceiving."
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">27</sup>For this people's heart has become calloused; they hardly hear with their ears, and they have closed their eyes. Otherwise they might see with their eyes, hear with their ears, understand with their hearts and turn, and I would heal them.'
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">28</sup>"Therefore I want you to know that God's salvation has been sent to the Gentiles, and they will listen!"
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">30</sup>For two whole years Paul stayed there in his own rented house and welcomed all who came to see him.
  <br/><br/>
  <sup class="text-xs text-gray-400 font-bold mr-1">31</sup>He proclaimed the kingdom of God and taught about the Lord Jesus Christ—with all boldness and without hindrance!
</p>
`;

const baseDailyBreads: DailyBread[] = [
  {
    id: '1',
    title: "GOD'S SALVATION SENT TO THE GENTILES",
    date: new Date().toISOString().split('T')[0], // Today
    displayDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    passage: "Acts 28:23~31",
    keyVerse: "28",
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
