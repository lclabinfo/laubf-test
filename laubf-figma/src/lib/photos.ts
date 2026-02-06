export interface Photo {
  id: string;
  url: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Album {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  photoCount: number;
  photos: Photo[];
  stickers?: string[]; // For that "folder" look with stickers
}

// Helper to generate mock photos
const generatePhotos = (count: number, topic: string): Photo[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${topic}-${i}`,
    url: `https://source.unsplash.com/random/800x600?${topic}&sig=${i}`, // Using older Unsplash source for mock, or I should use specific URLs to avoid broken links
    // Better to use specific URLs if possible, but for 80 photos... I'll use a set of reliable Unsplash IDs
    width: 800,
    height: 600,
  }));
};

// We will use a smaller set of reliable images repeated for demo purposes
const reliableImages = [
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1724280984245-925754f36552?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1706982710023-7196f0d553a0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1661563601560-69e2859d938b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1728970645747-7eb62c8f3ee6?q=80&w=800&auto=format&fit=crop",
];

const getMockPhotos = (count: number, prefix: string): Photo[] => {
    return Array.from({ length: count }).map((_, i) => ({
        id: `${prefix}-photo-${i}`,
        url: reliableImages[i % reliableImages.length],
        width: 800,
        height: 600,
        caption: "Community moment"
    }));
};

export const albums: Album[] = [
  {
    id: 'retreat-2025',
    title: "Summer Retreat 2025",
    date: "Aug 2025",
    coverImage: reliableImages[0],
    photoCount: 84,
    photos: getMockPhotos(84, 'retreat-2025'),
    stickers: ["🏕️", "🔥"]
  },
  {
    id: 'easter-2025',
    title: "Easter Service",
    date: "Apr 2025",
    coverImage: reliableImages[1],
    photoCount: 42,
    photos: getMockPhotos(42, 'easter-2025'),
    stickers: ["✝️", "🥚"]
  },
  {
    id: 'christmas-2024',
    title: "Christmas Celebration",
    date: "Dec 2024",
    coverImage: reliableImages[2],
    photoCount: 120,
    photos: getMockPhotos(120, 'christmas-2024'),
    stickers: ["🎄", "⭐"]
  },
  {
    id: 'picnic-2024',
    title: "All Church Picnic",
    date: "Sep 2024",
    coverImage: reliableImages[3],
    photoCount: 56,
    photos: getMockPhotos(56, 'picnic-2024'),
    stickers: ["🧺", "🥪"]
  },
  {
    id: 'thanksgiving-2024',
    title: "Thanksgiving Dinner",
    date: "Nov 2024",
    coverImage: reliableImages[4],
    photoCount: 35,
    photos: getMockPhotos(35, 'thanksgiving-2024'),
    stickers: ["🦃"]
  },
  {
    id: 'campus-outreach',
    title: "Campus Outreach",
    date: "Oct 2024",
    coverImage: reliableImages[5],
    photoCount: 60,
    photos: getMockPhotos(60, 'campus-outreach'),
    stickers: ["🎓", "📚"]
  }
];
