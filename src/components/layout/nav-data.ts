export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavDropdown {
  id: string;
  label: string;
  links: NavLink[];
  featuredCard?: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    href: string;
  };
}

export const dropdowns: NavDropdown[] = [
  {
    id: "our-church",
    label: "Our Church",
    links: [
      { label: "About Us", href: "/about" },
      { label: "What We Believe", href: "/beliefs" },
      { label: "Leadership", href: "/leadership" },
      { label: "Spiritual Direction", href: "/spiritual-direction" },
    ],
  },
  {
    id: "ministries",
    label: "Ministries",
    links: [
      { label: "Sunday Worship", href: "/sunday-worship" },
      { label: "Bible Study", href: "/bible-study" },
      { label: "Campus Ministries", href: "/campus-ministries" },
      { label: "Fellowship", href: "/fellowship" },
      { label: "Daily Bread", href: "/daily-bread" },
    ],
    featuredCard: {
      image: "/pics-temp/csulb/waving.JPG",
      imageAlt: "Students waving at campus ministry",
      title: "Ministries Overview",
      description:
        "Explore the different ways to connect, grow in faith, and serve at LA UBF.",
      href: "/campus-ministries",
    },
  },
  {
    id: "resources",
    label: "Resources",
    links: [
      { label: "Messages", href: "/messages" },
      { label: "Events", href: "/events" },
      { label: "Daily Bread YouTube", href: "https://youtube.com/@dailybread", external: true },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
];

export const directLinks: NavLink[] = [
  { label: "Giving", href: "/giving" },
];
