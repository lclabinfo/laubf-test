export interface Sermon {
  id: string;
  videoId: string; // YouTube ID
  title: string;
  speaker: string;
  date: string;
  passage: string;
  series: string;
  description: string;
  tags: string[];
  transcript?: TranscriptSegment[];
  manuscript?: string; // Full text manuscript/prepared transcript
  studyId?: string; // ID of the related Bible study
  event: string;
}

export interface TranscriptSegment {
  time: number; // Seconds
  text: string;
}

const mockTranscript: TranscriptSegment[] = [
  { time: 0, text: "Good morning everyone. It is a joy to be with you today." },
  { time: 5, text: "Today we are going to dive into a passage that challenges us deeply." },
  { time: 12, text: "If you have your Bibles, please turn with me to the book of Acts." },
  { time: 18, text: "We often think about our own plans, our own desires..." },
  { time: 24, text: "But God has a bigger plan. A plan that involves you and me." },
  { time: 30, text: "Let's read verse 1 together." },
  { time: 35, text: "Notice the word 'power' here. It's the Greek word 'dunamis'." },
  { time: 42, text: "It's where we get our word 'dynamite'. The gospel is explosive." },
  { time: 50, text: "So when we face obstacles, we don't face them alone." },
  { time: 58, text: "I remember a time when I was struggling with this very concept." },
  { time: 65, text: "I felt weak. I felt unable to move forward." },
  { time: 72, text: "But then I remembered this promise." },
  { time: 80, text: "God doesn't just give us a map; He gives us the fuel." },
  { time: 90, text: "So today, ask yourself: Where do I need His power?" },
];

const mockManuscript = `
<p><strong>Introduction: A Call to Worship</strong><br/>
Good morning everyone. It is a profound joy and privilege to be gathered with you all today in the house of the Lord. As we come together, let us quiet our hearts and prepare our minds to receive His Word. Today, we are going to dive into a passage that challenges us deeply, yet offers us immense hope. If you have your Bibles, please turn with me to the book of Acts. While you are turning there, I want you to reflect on the week you’ve just had. The highs, the lows, the moments of victory, and the moments of defeat.</p>

<p>We often walk through life thinking about our own plans, our own desires, and our own timelines. We map out our careers, our relationships, and our futures with meticulous detail. But scripture reminds us time and time again that while "the heart of man plans his way, the Lord establishes his steps" (Proverbs 16:9). God has a bigger plan. A plan that is far more intricate and glorious than anything we could concoct on our own. A plan that involves you and me in ways we might never expect.</p>

<p><strong>Part 1: The Promise of Power</strong><br/>
Let's read verse 1 together. <em>"But you will receive power when the Holy Spirit has come upon you..."</em> Notice the word 'power' here. It is not just strength or ability. It's the Greek word 'dunamis'. It's the root word from which we get our modern word 'dynamite'. Think about that for a moment. The gospel is not a gentle suggestion; it is explosive power! It is the power to break chains, to transform hearts, and to renew minds.</p>

<p>This power is not reserved for the spiritual elite or for those who have it all together. It is a gift promised to all believers. So when we face obstacles—whether they be financial struggles, health issues, relational conflicts, or internal doubts—we do not face them alone. We face them equipped with the very power that raised Christ from the dead. That is a staggering reality if we truly let it sink in.</p>

<p>I remember a time when I was struggling with this very concept. It was a season of my life where everything seemed to be going wrong. I felt weak. I felt unable to move forward. The weight of my responsibilities felt like a crushing burden. I tried to rely on my own wisdom, my own strategies, and my own strength. And guess what? I failed. Miserably. I was exhausted and burnt out.</p>

<p>But then I remembered this promise. I remembered that I wasn't meant to carry this load in my own strength. I turned to prayer, not as a last resort, but as a lifeline. And in that place of surrender, I found a renewed sense of strength—a 'dunamis' power that enabled me to persevere not just with grit, but with joy.</p>

<p><strong>Part 2: Witnesses to the Ends of the Earth</strong><br/>
The verse continues, <em>"...and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth."</em> This power has a purpose. It is not just for our own comfort or personal breakthrough. It is for a mission. We are called to be witnesses. A witness simply tells the truth about what they have seen and heard. We are called to testify to the goodness of God in our lives.</p>

<p>Notice the progression: Jerusalem (your local city), Judea and Samaria (the surrounding region), and the ends of the earth (global mission). It starts right where you are. You don't have to go overseas to be a missionary. You are a missionary in your workplace, in your school, in your neighborhood, and in your home. Every interaction is an opportunity to display the love of Christ.</p>

<p>Consider the early church. They were a small, marginalized group in a hostile empire. They had no political power, no social standing, and no wealth. Yet, within a few centuries, they had turned the world upside down. How? By the power of the Holy Spirit and a relentless commitment to being witnesses of the resurrection.</p>

<p><strong>Part 3: Overcoming Fear</strong><br/>
One of the biggest barriers to stepping into this power and mission is fear. Fear of rejection. Fear of failure. Fear of the unknown. We ask, "What if I don't know what to say?" or "What if they think I'm weird?" These are valid feelings, but they are not valid excuses. God does not call the equipped; He equips the called.</p>

<p>When Moses was called to lead the Israelites out of Egypt, he had a laundry list of excuses. "I'm not a good speaker," "They won't listen to me." But God simply said, "I will be with you." That is the only qualification we need. The presence of God is our confidence. When we step out in faith, even when we are trembling, God meets us there.</p>

<p><strong>Conclusion: The Fuel for the Journey</strong><br/>
As we close today, I want to leave you with this thought: God doesn't just give us a map; He gives us the fuel. He doesn't just point the way; He powers the journey. The Holy Spirit is the engine of the Christian life. Without Him, we are stalling out on the side of the road. With Him, we are an unstoppable force for the Kingdom of God.</p>

<p>So today, ask yourself: Where do I need His power? Is it in a difficult relationship? Is it in a habit you can't seem to break? Is it in a boldness to share your faith? Bring that need to the foot of the cross today. Ask the Holy Spirit to fill you afresh. Let us not be a people who are content with a form of godliness but denying its power. Let us be a people who live in the explosive, transformative, life-giving power of the Living God.</p>

<p>Let us pray.</p>
`;

// Base real data
const baseSermons: Sermon[] = [
  {
    id: '1',
    videoId: 'O1oAoyIH_qQ',
    title: 'The Cost of Discipleship',
    speaker: 'P. Abraham Kim',
    date: 'Oct 15, 2023',
    passage: 'Luke 14:25-33',
    series: 'Gospel of Luke',
    description: 'What does it truly mean to follow Jesus? We explore the radical call to prioritize Christ above all else.',
    tags: ['Discipleship', 'Commitment', 'Faith'],
    event: 'Sunday Service',
    transcript: mockTranscript,
    manuscript: mockManuscript,
    studyId: 'his-steadfast-love' // Linked for demo
  },
  {
    id: '2',
    videoId: 'O1oAoyIH_qQ',
    title: 'Faith That Moves Mountains',
    speaker: 'Sarah Lee',
    date: 'Oct 08, 2023',
    passage: 'Mark 11:20-25',
    series: 'Faith Series',
    description: 'Understanding the power of prayer and the necessity of forgiveness.',
    tags: ['Prayer', 'Forgiveness', 'Miracles'],
    event: 'Sunday Service',
    transcript: mockTranscript,
    manuscript: mockManuscript,
    studyId: 'advent-3'
  },
  {
    id: '3',
    videoId: 'O1oAoyIH_qQ',
    title: 'A New Creation',
    speaker: 'John Doe',
    date: 'Oct 01, 2023',
    passage: '2 Corinthians 5:17',
    series: 'Identity',
    description: 'When we are in Christ, the old has gone and the new is here.',
    tags: ['Identity', 'New Beginnings'],
    event: 'Discipleship Meeting',
    transcript: mockTranscript,
    manuscript: mockManuscript,
    studyId: 'advent-2'
  },
  {
    id: '4',
    videoId: 'O1oAoyIH_qQ',
    title: 'Living by the Spirit',
    speaker: 'P. Abraham Kim',
    date: 'Sep 24, 2023',
    passage: 'Galatians 5:16-26',
    series: 'Spirit Lead',
    description: 'The battle between the flesh and the Spirit.',
    tags: ['Holy Spirit', 'Growth'],
    event: 'Sunday Service',
    transcript: mockTranscript,
    manuscript: mockManuscript,
  },
  {
    id: '5',
    videoId: 'O1oAoyIH_qQ',
    title: 'The Prodigal God',
    speaker: 'Michael Chang',
    date: 'Sep 17, 2023',
    passage: 'Luke 15:11-32',
    series: 'Gospel of Luke',
    description: 'A look at the famous parable, focusing on the extravagant love of the Father.',
    tags: ['Grace', 'Love'],
    event: 'Discipleship Meeting',
    transcript: mockTranscript,
    manuscript: mockManuscript,
  },
   {
    id: '6',
    videoId: 'O1oAoyIH_qQ',
    title: 'Serve One Another',
    speaker: 'Sarah Lee',
    date: 'Sep 10, 2023',
    passage: 'Galatians 5:13',
    series: 'Community',
    description: 'We were called to be free, but not to use our freedom to indulge the flesh.',
    tags: ['Service', 'Community'],
    event: 'Sunday Service',
    transcript: mockTranscript,
    manuscript: mockManuscript,
  }
];

// Generators for mock data
const speakers = ['P. Abraham Kim', 'Sarah Lee', 'John Doe', 'Michael Chang', 'David Park', 'Grace Cho'];
const seriesList = ['Gospel of Luke', 'Faith Series', 'Identity', 'Spirit Lead', 'Community', 'Exodus', 'Romans'];
const events = ['Sunday Service', 'Discipleship Meeting', 'Friday Service', 'Special Event'];
const tagsList = ['Faith', 'Love', 'Hope', 'Grace', 'Salvation', 'Prayer', 'Community', 'Service', 'Mission', 'Discipleship'];
const passages = ['John 3:16', 'Romans 8:28', 'Psalm 23', 'Genesis 1:1', 'Matthew 28:19', 'Philippians 4:13', 'Jeremiah 29:11', 'Proverbs 3:5'];

function generateMockSermons(count: number): Sermon[] {
  const generated: Sermon[] = [];
  const startDate = new Date('2023-09-01');

  for (let i = 0; i < count; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() - (i * 7)); // Go back one week at a time roughly
    
    const id = (baseSermons.length + i + 1).toString();
    const speaker = speakers[Math.floor(Math.random() * speakers.length)];
    const series = seriesList[Math.floor(Math.random() * seriesList.length)];
    const event = events[Math.floor(Math.random() * events.length)];
    const passage = passages[Math.floor(Math.random() * passages.length)];
    
    // Pick 2 random tags
    const t1 = tagsList[Math.floor(Math.random() * tagsList.length)];
    const t2 = tagsList[Math.floor(Math.random() * tagsList.length)];
    const tags = Array.from(new Set([t1, t2]));

    generated.push({
      id,
      videoId: 'O1oAoyIH_qQ', // Placeholder ID
      title: `Sermon Title ${id}: ${series} Part ${Math.floor(Math.random() * 10) + 1}`,
      speaker,
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      passage,
      series,
      description: `This is a generated description for sermon ${id}. It covers the key themes of ${tags.join(' and ')} found in ${passage}.`,
      tags,
      event,
      transcript: mockTranscript,
      manuscript: mockManuscript,
      studyId: i % 3 === 0 ? 'his-steadfast-love' : undefined // Link every 3rd one mockingly
    });
  }
  return generated;
}

// Export combined data (Base + 120 generated items)
export const sermons: Sermon[] = [...baseSermons, ...generateMockSermons(120)];
