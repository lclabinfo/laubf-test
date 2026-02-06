export interface VideoResource {
  id: string;
  videoId: string; // YouTube ID
  title: string;
  category: 'Testimony' | 'Worship' | 'Event Recap' | 'Special Feature' | 'Short';
  date: string;
  description: string;
  duration: string;
  featured?: boolean;
}

const baseVideos: VideoResource[] = [
  {
    id: '1',
    videoId: 'LXb3EKWsInQ', // 4K Nature
    title: 'Summer Retreat 2023: Renewed',
    category: 'Event Recap',
    date: 'Aug 15, 2023',
    description: 'A look back at our amazing time in the mountains seeking God together.',
    duration: '3:45',
    featured: true
  },
  {
    id: '2',
    videoId: 'ysz5S6PUM-U', // Foo Fighters (placeholder) -> Worship vibes
    title: 'Night of Worship: Holy Forever',
    category: 'Worship',
    date: 'Sep 01, 2023',
    description: 'Live recording from our monthly praise and prayer night.',
    duration: '8:12',
    featured: true
  },
  {
    id: '3',
    videoId: 'ScMzIvxBSi4',
    title: 'My Journey to Faith: Sarah\'s Story',
    category: 'Testimony',
    date: 'Oct 05, 2023',
    description: 'Sarah shares how she found hope in the midst of depression.',
    duration: '5:30',
    featured: true
  },
  {
    id: '4',
    videoId: 'jNQXAC9IVRw',
    title: 'Easter Service Highlights',
    category: 'Event Recap',
    date: 'Apr 12, 2023',
    description: 'Celebrating the resurrection of our King!',
    duration: '2:15',
    featured: false
  },
  {
    id: '5',
    videoId: 'lJIrF4YjHfQ',
    title: 'Fall Welcome Night',
    category: 'Event Recap',
    date: 'Sep 28, 2023',
    description: 'Welcoming the new class of 2027!',
    duration: '1:50',
    featured: false
  }
];

const categories = ['Testimony', 'Worship', 'Event Recap', 'Special Feature', 'Short'] as const;

function generateMockVideos(count: number): VideoResource[] {
  const generated: VideoResource[] = [];
  const startDate = new Date('2023-01-01');

  for (let i = 0; i < count; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + (i * 3)); // Spread dates out
    
    const id = (baseVideos.length + i + 1).toString();
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    generated.push({
      id,
      videoId: 'dQw4w9WgXcQ', // Placeholder
      title: `${category} Highlight #${Math.floor(Math.random() * 100)}`,
      category,
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      description: `This is a generated description for video ${id}. It captures the essence of our community and faith.`,
      duration: `${Math.floor(Math.random() * 10) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      featured: Math.random() > 0.9 // 10% chance of being featured
    });
  }
  return generated.reverse(); // Newest first
}

export const videos: VideoResource[] = [...baseVideos, ...generateMockVideos(80)];
