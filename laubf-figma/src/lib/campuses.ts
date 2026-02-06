export interface CampusLeader {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  imageUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface MeetingSession {
  day: string;
  time: string;
  location: string;
  note?: string; // e.g., "Pizza after!"
  zoomUrl?: string; // Optional Zoom link
}

export interface Campus {
  id: string;
  name: string;
  slug: string; // for url
  shortName: string;
  description: string;
  longDescription: string;
  // Summary fields for cards
  meetingTime: string; 
  location: string;
  
  // Detailed sessions for the page
  meetingSessions: MeetingSession[];
  
  address: string;
  coordinates: { lat: number; lng: number }; 
  imageUrl: string;
  contactEmail: string;
  startBibleStudyUrl: string; // New field
  
  leaders: CampusLeader[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  galleryImages: string[];
  socials: {
    instagram?: string;
    website?: string;
    facebook?: string;
  };
}

const longDescPlaceholder = `
<p>We are a community of students dedicated to studying the Bible and growing in our faith together. We believe that college is a pivotal time to discover God's purpose for your life.</p>
<p>Our ministry focuses on one-to-one mentorship, small group Bible studies, and genuine fellowship. Whether you are a Christian looking for a community or just curious about the Bible, you are welcome here.</p>
<h3>Weekly Activities</h3>
<ul>
  <li><strong>Bible Study:</strong> Deep dive into scripture in small groups.</li>
  <li><strong>Friday Fellowship:</strong> Dinner, games, and sharing life.</li>
  <li><strong>Sunday Service:</strong> Joining the main church for worship.</li>
</ul>
`;

const sampleLeaders: CampusLeader[] = [
    {
        name: "P. Abraham Kim",
        role: "Campus Director",
        bio: "Serving campus ministry for over 20 years with a passion for discipleship.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Sarah Chen",
        role: "Student President",
        bio: "Junior majoring in Psychology. Loves coffee and deep conversations.",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
    }
];

const sampleTestimonials: Testimonial[] = [
    {
        id: "t1",
        quote: "This community has been my home away from home. I found true friendship and mentorship here.",
        author: "James Wilson",
        role: "Class of 2024",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: "t2",
        quote: "Bible study helped me understand who Jesus really is. It changed my life trajectory.",
        author: "Emily Davis",
        role: "Senior, Biology", 
    }
];

const sampleFAQs: FAQ[] = [
    {
        question: "Do I need to be a Christian to join?",
        answer: "Not at all! We welcome everyone, regardless of their background or beliefs. We are a place for questions and exploration."
    },
    {
        question: "What is a typical meeting like?",
        answer: "We usually start with some snacks and fellowship, followed by a Bible study discussion, and end with prayer. It's very casual and welcoming."
    },
    {
        question: "Is there a cost to join?",
        answer: "No, all our activities are free! Occasional retreats may have a fee, but we offer scholarships."
    }
];

const sampleGallery = [
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop"
];

// Helper to create leader object quickly
const createLeader = (name: string, role = "Campus Leader", imgId = "1507003211169-0a1dd7228f2d") => ({
    name,
    role,
    bio: `Serving at our campus ministry to help students grow in faith.`,
    imageUrl: `https://images.unsplash.com/photo-${imgId}?q=80&w=400&auto=format&fit=crop`
});

export const campuses: Campus[] = [
  {
    id: 'lbcc',
    name: "LBCC True Vine Club",
    slug: "lbcc",
    shortName: "LBCC",
    description: "Jesus is the true vine and we are his branches.",
    longDescription: `
      <p class="lead">"I am the true vine, and my Father is the gardener." (John 15:1)</p>
      <p>LBCC True Vine is our club at LBCC. Jesus is the true vine and we are his branches. We want to remain in Jesus together at LBCC through Bible study and other activities.</p>
      <p>You can join us any time!</p>
    `,
    meetingTime: "Thurs @ 12pm / Tues @ 5:30pm", 
    location: "LAC F101 / Student Library", 
    meetingSessions: [
        {
            day: "Thursdays",
            time: "12:00 PM - 1:00 PM",
            location: "LAC F101",
            note: "Pizza provided! 🍕"
        },
        {
            day: "Tuesdays",
            time: "5:00 PM - 6:00 PM",
            location: "Student Library",
            note: "Evening fellowship",
            zoomUrl: "https://zoom.us/j/123456789"
        }
    ],
    address: "4901 E Carson St, Long Beach, CA 90808",
    coordinates: { lat: 33.8306, lng: -118.1345 },
    imageUrl: "https://images.unsplash.com/photo-1724280984245-925754f36552?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "lbcc@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/lbcc",
    leaders: [
        createLeader("William Larsen", "Campus Director", "1560250097-0b93528c311a"),
        createLeader("Troy Segale", "Club Advisor", "1472099645785-5658abf4ff4e"),
        createLeader("Joey Fishman", "Student Leader", "1500648767791-00dcc994a43e")
    ],
    testimonials: [
        {
            id: "lbcc1",
            quote: "I never knew the Bible could be so interesting until I joined True Vine.",
            author: "Michael Brown",
            role: "Freshman",
        }
    ],
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: { 
        instagram: "LBCCTrueVineClub",
        website: "https://lbcctruevine.org/"
    }
  },
  {
    id: 'csulb',
    name: "Cal State Long Beach",
    slug: "csulb",
    shortName: "CSULB",
    description: "Building a family of believers at The Beach.",
    longDescription: longDescPlaceholder,
    meetingTime: "Tuesdays @ 12:00 PM",
    location: "University Student Union",
    meetingSessions: [
        {
            day: "Tuesdays",
            time: "12:00 PM",
            location: "University Student Union, Room 305"
        }
    ],
    address: "1250 Bellflower Blvd, Long Beach, CA 90840",
    coordinates: { lat: 33.7838, lng: -118.1141 },
    imageUrl: "https://images.unsplash.com/photo-1706982710023-7196f0d553a0?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "csulb@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/csulb",
    leaders: [
        createLeader("Robert Fishman", "Campus Minister", "1506794778202-cad84cf45f1d"),
        createLeader("Jorge Lau", "Co-Director", "1519085360753-af0119f7cbe7")
    ],
    testimonials: sampleTestimonials,
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: { instagram: "csulb_ubf" }
  },
  {
    id: 'csuf',
    name: "Cal State Fullerton",
    slug: "csuf",
    shortName: "CSUF",
    description: "Walking with Jesus at CSUF.",
    longDescription: longDescPlaceholder,
    meetingTime: "Wednesdays @ 5:00 PM",
    location: "Titan Student Union",
    meetingSessions: [
        {
            day: "Wednesdays",
            time: "5:00 PM",
            location: "Titan Student Union"
        }
    ],
    address: "800 N State College Blvd, Fullerton, CA 92831",
    coordinates: { lat: 33.8823, lng: -117.8851 },
    imageUrl: "https://images.unsplash.com/photo-1661563601560-69e2859d938b?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "csuf@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/csuf",
    leaders: [
        createLeader("Daniel Shim", "Campus Minister", "1500648767791-00dcc994a43e"),
        createLeader("Joseph Cho", "Leader", "1507003211169-0a1dd7228f2d")
    ],
    testimonials: [],
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: {}
  },
  {
    id: 'ucla',
    name: "University of California, Los Angeles",
    slug: "ucla",
    shortName: "UCLA",
    description: "Serving the Bruins with the gospel of Jesus Christ.",
    longDescription: longDescPlaceholder,
    meetingTime: "Thursdays @ 7:00 PM",
    location: "Ackerman Union",
    meetingSessions: [
        {
            day: "Thursdays",
            time: "7:00 PM",
            location: "Ackerman Union"
        }
    ],
    address: "308 Westwood Plaza, Los Angeles, CA 90095",
    coordinates: { lat: 34.0700, lng: -118.4441 },
    imageUrl: "https://images.unsplash.com/photo-1728970645747-7eb62c8f3ee6?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "ucla@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/ucla",
    leaders: [
        createLeader("Peace Oh", "Campus Shepherd", "1544005313-94ddf0286df2")
    ],
    testimonials: sampleTestimonials,
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: { instagram: "ucla_ubf" }
  },
  {
    id: 'usc',
    name: "University of Southern California",
    slug: "usc",
    shortName: "USC",
    description: "Fighting on for the faith at USC.",
    longDescription: longDescPlaceholder,
    meetingTime: "Wednesdays @ 6:30 PM",
    location: "TCC Building",
    meetingSessions: [
        {
            day: "Wednesdays",
            time: "6:30 PM",
            location: "TCC Building"
        }
    ],
    address: "3607 Trousdale Pkwy, Los Angeles, CA 90089",
    coordinates: { lat: 34.0224, lng: -118.2851 },
    imageUrl: "https://images.unsplash.com/photo-1674255499627-640d84485ecc?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "usc@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/usc",
    leaders: [
        createLeader("David Park", "Campus Director", "1507003211169-0a1dd7228f2d")
    ],
    testimonials: [],
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: { instagram: "usc_ubf" }
  },
  {
    id: 'csudh',
    name: "Cal State Dominguez Hills",
    slug: "csudh",
    shortName: "CSUDH",
    description: "Growing in faith at CSUDH.",
    longDescription: longDescPlaceholder,
    meetingTime: "Wednesdays @ 12:00 PM",
    location: "Loker Student Union",
    meetingSessions: [
        {
            day: "Wednesdays",
            time: "12:00 PM",
            location: "Loker Student Union"
        }
    ],
    address: "1000 E Victoria St, Carson, CA 90747",
    coordinates: { lat: 33.8623, lng: -118.2556 },
    imageUrl: "https://images.unsplash.com/photo-1750582251287-0ace1ab570a3?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "csudh@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/csudh",
    leaders: [
        createLeader("Augustine Kim", "Campus Director", "1507003211169-0a1dd7228f2d"),
        createLeader("Paul Lim", "Staff", "1506794778202-cad84cf45f1d"),
        createLeader("Moses Han", "Staff", "1472099645785-5658abf4ff4e")
    ],
    testimonials: [],
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: {}
  },
  {
    id: 'ccc',
    name: "CCC Ministry",
    slug: "ccc",
    shortName: "CCC",
    description: "Community and Christ at CCC.",
    longDescription: longDescPlaceholder,
    meetingTime: "Tuesdays @ 12:00 PM",
    location: "Student Center",
    meetingSessions: [
        {
            day: "Tuesdays",
            time: "12:00 PM",
            location: "Student Center"
        }
    ],
    address: "11110 Alondra Blvd, Norwalk, CA 90650", 
    coordinates: { lat: 33.8869, lng: -118.0986 },
    imageUrl: "https://images.unsplash.com/photo-1642287342121-8857cd9d1f5f?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "ccc@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/ccc",
    leaders: [
        createLeader("Paul Lim", "Campus Minister", "1506794778202-cad84cf45f1d")
    ],
    testimonials: [],
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: {}
  },
  {
    id: 'mt-sac',
    name: "Mt. San Antonio College",
    slug: "mt-sac",
    shortName: "Mt. Sac",
    description: "Climbing higher in faith at Mt. Sac.",
    longDescription: longDescPlaceholder,
    meetingTime: "Thursdays @ 1:00 PM",
    location: "Student Life Center",
    meetingSessions: [
        {
            day: "Thursdays",
            time: "1:00 PM",
            location: "Student Life Center"
        }
    ],
    address: "1100 N Grand Ave, Walnut, CA 91789",
    coordinates: { lat: 34.0476, lng: -117.8444 },
    imageUrl: "https://images.unsplash.com/photo-1668657152617-cb7750a36bc8?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "mtsac@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/mt-sac",
    leaders: [
        createLeader("Jason Koch", "Campus Shepherd", "1472099645785-5658abf4ff4e")
    ],
    testimonials: [],
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: {}
  },
  {
    id: 'golden-cc',
    name: "Golden State CC",
    slug: "golden-cc",
    shortName: "Golden State",
    description: "Shining the light of Christ.",
    longDescription: longDescPlaceholder,
    meetingTime: "Mondays @ 12:00 PM",
    location: "Campus Courtyard",
    meetingSessions: [
        {
            day: "Mondays",
            time: "12:00 PM",
            location: "Campus Courtyard"
        }
    ],
    address: "Los Angeles, CA",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    imageUrl: "https://images.unsplash.com/photo-1745162829464-c3487261f90d?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "golden@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/golden-cc",
    leaders: [
        createLeader("Frank Halman", "Campus Minister", "1519085360753-af0119f7cbe7")
    ],
    testimonials: [],
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: {}
  },
  {
    id: 'cypress',
    name: "Cypress College",
    slug: "cypress",
    shortName: "Cypress",
    description: "Growing together in Christ at Cypress.",
    longDescription: longDescPlaceholder,
    meetingTime: "Wednesdays @ 12:30 PM",
    location: "Student Center",
    meetingSessions: [
        {
            day: "Wednesdays",
            time: "12:30 PM",
            location: "Student Center"
        }
    ],
    address: "9200 Valley View St, Cypress, CA 90630",
    coordinates: { lat: 33.8291, lng: -118.0560 },
    imageUrl: "https://images.unsplash.com/photo-1661776724331-648bac1d2927?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "cypress@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/cypress",
    leaders: [
        createLeader("David Cho", "Campus Leader", "1500648767791-00dcc994a43e")
    ],
    testimonials: [],
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: {}
  },
  {
    id: 'cal-poly-pomona',
    name: "Cal Poly Pomona",
    slug: "cal-poly-pomona",
    shortName: "Cal Poly Pomona",
    description: "Learn by doing, grow by believing.",
    longDescription: longDescPlaceholder,
    meetingTime: "Thursdays @ 12:00 PM",
    location: "BSC Building",
    meetingSessions: [
        {
            day: "Thursdays",
            time: "12:00 PM",
            location: "BSC Building"
        }
    ],
    address: "3801 W Temple Ave, Pomona, CA 91768",
    coordinates: { lat: 34.0564, lng: -117.8217 },
    imageUrl: "https://images.unsplash.com/photo-1749649148105-22481c837cfc?q=80&w=2000&auto=format&fit=crop",
    contactEmail: "cpp@laubf.org",
    startBibleStudyUrl: "https://startbiblestudy.org/cal-poly-pomona",
    leaders: [
        createLeader("Andrew Cuevas", "Campus Leader", "1534528741775-53994a69daeb")
    ],
    testimonials: [],
    faqs: sampleFAQs,
    galleryImages: sampleGallery,
    socials: {}
  }
];
