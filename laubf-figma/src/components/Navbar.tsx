import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Calendar,
  Users,
  MapPin,
  BookOpen,
  Video,
  Image,
  Clock,
  Info,
  Church,
  History,
  GraduationCap,
  Baby,
  Heart,
  Music,
  FileText,
  Youtube,
  ExternalLink,
  LogOut,
  Settings,
  Bell,
  MessageCircle,
  Megaphone,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { useNotifications } from "../lib/NotificationContext";
import LaubfLogo from "./LaubfLogo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { campuses } from "../lib/campuses";

// Extended types to include new placeholder pages
type PageType =
  | "home"
  | "about"
  | "events"
  | "event-detail"
  | "sermons"
  | "sermon-detail"
  | "daily-bread"
  | "videos"
  | "im-new"
  | "campuses"
  | "campus-detail"
  | "bbf-cbf"
  | "studies"
  | "study-detail"
  | "login"
  | "member-hub"
  // New pages
  | "history"
  | "visit"
  | "meetings"
  | "programs"
  | "photos"
  | "yam-college"
  | "jbf"
  | "hbf"
  | "adults"
  | "give"
  | "ministries"
  | "prayer-topics"
  | "announcements"
  | "account-settings"
  | "announcement-detail"
  | "chat";

interface NavbarProps {
  onNavigate?: (page: PageType, id?: string) => void;
  currentPage?: PageType;
  isLoggedIn?: boolean;
  variant?: "default" | "transparent";
  onLogout?: () => void;
}

export default function Navbar({
  onNavigate,
  currentPage = "home",
  isLoggedIn = false,
  variant = "default",
  onLogout,
}: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalNotifications } = useNotifications();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine styles based on variant and scroll state
  const isTransparent =
    variant === "transparent" && !isScrolled && !isMobileMenuOpen;

  const navClasses = isTransparent
    ? "bg-transparent border-transparent absolute top-0 left-0 right-0"
    : `bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm ${variant === "transparent" ? "fixed top-0 w-full" : "sticky top-0"}`;

  const textClasses = isTransparent
    ? "text-white hover:text-white/80"
    : "text-gray-900 hover:text-[#3667B1]";

  const logoClasses = isTransparent ? "text-white" : "text-[#3667B1]";

  const buttonClasses = isTransparent
    ? "bg-white text-[#3667B1] hover:bg-white/90"
    : "bg-[#3667B1] text-white hover:bg-[#2d5491]";

  const linkFontClass = "font-['Helvetica_Neue',sans-serif]";

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Helper to handle navigation clicks
  const handleNavClick = (e: React.MouseEvent, page: PageType, id?: string) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent bubbling if nested
    if (onNavigate) {
      if (id && page === "campus-detail") {
        onNavigate("campus-detail", id);
      } else {
        onNavigate(page);
      }
      window.scrollTo(0, 0);
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`${navClasses} z-50 transition-all duration-300 cursor-auto`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className={`${logoClasses} block w-[58px] h-[48px] hover:opacity-80 transition-opacity`}
            >
              <LaubfLogo />
            </a>
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* OUR CHURCH (Consolidated About & Events) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("church")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 ${linkFontClass} font-medium transition-colors py-4 text-[18px] ${isTransparent ? "text-white/90 hover:text-white" : ["about", "events", "history", "visit", "meetings", "programs"].includes(currentPage!) ? "text-[#3667B1]" : "text-gray-900 hover:text-[#3667B1]"}`}
              >
                Our Church
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "church" && (
                <div className="absolute top-[80%] left-0 pt-4 w-[500px] animate-in fade-in zoom-in-95 duration-200">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-8 relative overflow-hidden">
                    {/* Decorative background accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10" />

                    {/* Column 1: About */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest pb-2 border-b border-gray-100">
                        About
                      </div>
                      <div className="flex flex-col gap-1">
                        <a
                          href="#about"
                          onClick={(e) => handleNavClick(e, "about")}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-[#3667B1] flex items-center justify-center group-hover:bg-[#3667B1] group-hover:text-white transition-colors">
                            <Info className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              Who We Are
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Our mission & vision
                            </div>
                          </div>
                        </a>
                        <a
                          href="#im-new"
                          onClick={(e) => handleNavClick(e, "im-new")}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-[#3667B1] flex items-center justify-center group-hover:bg-[#3667B1] group-hover:text-white transition-colors">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              I'm New
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Plan your visit
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UC1SRAeGrnVlvoEEMZ-htVlA/live"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-[#3667B1] flex items-center justify-center group-hover:bg-[#3667B1] group-hover:text-white transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 flex items-center gap-1">
                              Livestream
                              <ExternalLink className="w-3 h-3 text-gray-400" />
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Watch live services
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Column 2: Connect */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest pb-2 border-b border-gray-100">
                        Connect
                      </div>
                      <div className="flex flex-col gap-1">
                        <a
                          href="#events"
                          onClick={(e) => handleNavClick(e, "events")}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              Events
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Upcoming events
                            </div>
                          </div>
                        </a>
                        <a
                          href="#announcements"
                          onClick={(e) => handleNavClick(e, "announcements")}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Megaphone className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              Announcements
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Church news
                            </div>
                          </div>
                        </a>
                        <a
                          href="#prayer-topics"
                          onClick={(e) => handleNavClick(e, "prayer-topics")}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              Prayer Topics
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Share requests
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* MINISTRIES (Consolidated Ministries & Campuses) - The "Stripe" Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("ministries")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 ${linkFontClass} font-medium transition-colors py-4 cursor-pointer text-[18px] ${isTransparent ? "text-white/90 hover:text-white" : ["ministries", "campuses", "campus-detail", "bbf-cbf", "yam-college", "jbf", "hbf", "adults"].includes(currentPage!) ? "text-[#3667B1]" : "text-gray-900 hover:text-[#3667B1]"}`}
                onClick={(e) => handleNavClick(e, "ministries")}
              >
                Ministries
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "ministries" && (
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 z-50">
                  <div className="w-[850px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-0 overflow-hidden flex animate-in fade-in zoom-in-95 duration-200">
                    {/* Left Panel: Ministry Groups */}
                    <div className="w-[280px] bg-gray-50 p-6 flex flex-col gap-6 border-r border-gray-100">
                      <div>
                        <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
                          Ministry Groups
                        </div>
                        <div className="space-y-2">
                          <a
                            href="#yam-college"
                            onClick={(e) => handleNavClick(e, "yam-college")}
                            className="group block"
                          >
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                              <div className="w-8 h-8 rounded-full bg-blue-100 text-[#3667B1] flex items-center justify-center">
                                <GraduationCap className="w-4 h-4" />
                              </div>
                              <div className="text-sm font-bold text-gray-700 group-hover:text-[#3667B1]">
                                College & YAM
                              </div>
                            </div>
                          </a>
                          <a
                            href="#adults"
                            onClick={(e) => handleNavClick(e, "adults")}
                            className="group block"
                          >
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                <Users className="w-4 h-4" />
                              </div>
                              <div className="text-sm font-bold text-gray-700 group-hover:text-[#3667B1]">
                                Adults
                              </div>
                            </div>
                          </a>
                          <a
                            href="#hbf"
                            onClick={(e) => handleNavClick(e, "hbf")}
                            className="group block"
                          >
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                                <Music className="w-4 h-4" />
                              </div>
                              <div className="text-sm font-bold text-gray-700 group-hover:text-[#3667B1]">
                                High School (HBF)
                              </div>
                            </div>
                          </a>
                          <a
                            href="#jbf"
                            onClick={(e) => handleNavClick(e, "jbf")}
                            className="group block"
                          >
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                <Heart className="w-4 h-4" />
                              </div>
                              <div className="text-sm font-bold text-gray-700 group-hover:text-[#3667B1]">
                                Junior High (JBF)
                              </div>
                            </div>
                          </a>
                          <a
                            href="#bbf-cbf"
                            onClick={(e) => handleNavClick(e, "bbf-cbf")}
                            className="group block"
                          >
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                              <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                                <Baby className="w-4 h-4" />
                              </div>
                              <div className="text-sm font-bold text-gray-700 group-hover:text-[#3667B1]">
                                Children (BBF/CBF)
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Banner at bottom of left panel */}
                      <div
                        className="mt-auto bg-[#3667B1] rounded-xl p-4 text-white relative overflow-hidden group cursor-pointer"
                        onClick={(e) => handleNavClick(e as any, "ministries")}
                      >
                        <div className="relative z-10">
                          <div className="font-bold text-sm mb-1">
                            Ministries Overview
                          </div>
                          <div className="text-xs text-white/80 mb-3">
                            See all our community groups.
                          </div>
                          <div className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                            View Hub{" "}
                            <ChevronDown className="w-3 h-3 -rotate-90" />
                          </div>
                        </div>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500" />
                      </div>
                    </div>

                    {/* Right Panel: Campuses Grid */}
                    <div className="flex-1 p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-xs font-black text-gray-400 uppercase tracking-widest">
                          College Ministries
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {campuses.map((campus) => (
                          <a
                            key={campus.id}
                            href={`#${campus.slug}`}
                            onClick={(e) =>
                              handleNavClick(e, "campus-detail", campus.id)
                            }
                            className="group flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="mt-1 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#3667B1] transition-colors" />
                            <div>
                              <div className="font-bold text-sm text-gray-900 group-hover:text-[#3667B1] transition-colors">
                                {campus.shortName}
                              </div>
                              <div className="text-xs text-gray-500 line-clamp-1">
                                {campus.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RESOURCES (Consolidated Study & Media) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 ${linkFontClass} font-medium transition-colors py-4 text-[18px] ${isTransparent ? "text-white/90 hover:text-white" : ["sermons", "daily-bread", "videos", "studies", "study-detail", "photos"].includes(currentPage!) ? "text-[#3667B1]" : "text-gray-900 hover:text-[#3667B1]"}`}
              >
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "resources" && (
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 w-[600px] animate-in fade-in zoom-in-95 duration-200">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-8">
                    {/* Column 1: The Word */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest pb-2 border-b border-gray-100">
                        The Word
                      </div>
                      <div className="flex flex-col gap-1">
                        <a
                          href="#sermons"
                          onClick={(e) => handleNavClick(e, "sermons")}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              Sunday Messages
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Weekly sermons
                            </div>
                          </div>
                        </a>
                        <a
                          href="#studies"
                          onClick={(e) => handleNavClick(e, "studies")}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              Bible Studies
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Study guides & notes
                            </div>
                          </div>
                        </a>
                        <a
                          href="#daily-bread"
                          onClick={(e) => handleNavClick(e, "daily-bread")}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                            <Church className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              Daily Bread
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Daily devotionals
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Column 2: Media */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest pb-2 border-b border-gray-100">
                        Media Library
                      </div>
                      <div className="flex flex-col gap-1">
                        <a
                          href="#videos"
                          onClick={(e) => handleNavClick(e, "videos")}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-colors">
                            <Youtube className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              Videos
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Recaps & specials
                            </div>
                          </div>
                        </a>
                        <a
                          href="#photos"
                          onClick={(e) => handleNavClick(e, "photos")}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-colors">
                            <Image className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              Photos
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Gallery
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Giving - Kept as a direct link for importance */}
            <a
              href="#give"
              onClick={(e) => handleNavClick(e, "give")}
              className={`${linkFontClass} font-medium transition-colors text-[18px] ${isTransparent ? "text-white/90 hover:text-white" : currentPage === "give" ? "text-[#3667B1]" : "text-gray-900 hover:text-[#3667B1]"}`}
            >
              Giving
            </a>
          </div>

          {/* Right side - CTA */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full ${isTransparent ? "text-white hover:bg-white/20" : "text-gray-600 hover:bg-gray-100 hover:text-[#3667B1]"}`}
                  onClick={() => onNavigate?.("chat")}
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>

                <div className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "profile" ? null : "profile",
                      )
                    }
                    className={`hidden lg:flex items-center gap-3 font-medium transition-colors p-1 pr-3 rounded-full hover:bg-gray-100 ${isTransparent ? "text-white hover:text-black hover:bg-white" : "text-gray-900"}`}
                  >
                    <Avatar className="w-8 h-8 border border-gray-200">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-bold">John Doe</span>
                    <ChevronDown className="w-4 h-4 opacity-50" />
                  </button>

                  {activeDropdown === "profile" && (
                    <div className="absolute top-[120%] right-0 w-56 animate-in fade-in zoom-in-95 duration-200 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                        <div className="px-3 py-2 border-b border-gray-100 mb-1">
                          <p className="text-xs font-medium text-gray-500">
                            Signed in as
                          </p>
                          <p className="text-sm font-bold text-gray-900 truncate">
                            john.doe@example.com
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            onNavigate?.("account-settings");
                            setActiveDropdown(null);
                          }}
                          className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Settings className="w-4 h-4" />
                          Account Settings
                        </button>
                        <button
                          onClick={() => {
                            onLogout?.();
                            setActiveDropdown(null);
                          }}
                          className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <a
                href="#login"
                onClick={(e) => handleNavClick(e, "login")}
                className={`hidden lg:flex items-center gap-2 font-medium transition-colors text-xs lg:text-sm ${isTransparent ? "text-white/90 hover:text-white" : currentPage === "login" ? "text-[#3667B1]" : "text-gray-500 hover:text-[#3667B1]"}`}
              >
                Member Login
              </a>
            )}

            <a
              href="#im-new"
              onClick={(e) => handleNavClick(e, "im-new")}
              className={`hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full ${linkFontClass} font-medium transition-all hover:scale-105 shadow-lg cursor-pointer text-[18px] ${buttonClasses}`}
            >
              I'm New
            </a>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden ${isTransparent ? "text-white hover:bg-white/20" : "text-gray-900"}`}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-sm p-0 flex flex-col bg-white overflow-hidden">
                <SheetHeader className="px-6 py-4 border-b border-gray-100 flex flex-row items-center justify-between text-left space-y-0">
                  <SheetTitle className="text-[#3667B1] font-black text-2xl tracking-tighter">
                    LA UBF
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Main Navigation
                  </SheetDescription>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-6 py-6">
                  <nav className="flex flex-col gap-6">
                    {/* Our Church Section */}
                    <div className="space-y-3">
                      <div className="text-xs font-black text-gray-400 uppercase tracking-widest">
                        Our Church
                      </div>
                      <div className="flex flex-col gap-3 pl-2 border-l-2 border-gray-100">
                        <a
                          href="#about"
                          onClick={(e) => handleNavClick(e, "about")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          About Us
                        </a>
                        <a
                          href="#events"
                          onClick={(e) => handleNavClick(e, "events")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          Calendar
                        </a>
                        <a
                          href="#history"
                          onClick={(e) => handleNavClick(e, "history")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          History
                        </a>
                        <a
                          href="#visit"
                          onClick={(e) => handleNavClick(e, "im-new")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          Visit Us
                        </a>
                      </div>
                    </div>

                    {/* Ministries Section */}
                    <div className="space-y-3">
                      <div className="text-xs font-black text-gray-400 uppercase tracking-widest">
                        Ministries
                      </div>
                      <div className="flex flex-col gap-3 pl-2 border-l-2 border-gray-100">
                        <a
                          href="#campuses"
                          onClick={(e) => handleNavClick(e, "campuses")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          All Campuses
                        </a>
                        <a
                          href="#yam-college"
                          onClick={(e) => handleNavClick(e, "yam-college")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          College & YAM
                        </a>
                        <a
                          href="#hbf"
                          onClick={(e) => handleNavClick(e, "hbf")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          High School
                        </a>
                        <a
                          href="#jbf"
                          onClick={(e) => handleNavClick(e, "jbf")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          Junior High
                        </a>
                        <a
                          href="#bbf-cbf"
                          onClick={(e) => handleNavClick(e, "bbf-cbf")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          Kids
                        </a>
                      </div>
                    </div>

                    {/* Resources Section */}
                    <div className="space-y-3">
                      <div className="text-xs font-black text-gray-400 uppercase tracking-widest">
                        Resources
                      </div>
                      <div className="flex flex-col gap-3 pl-2 border-l-2 border-gray-100">
                        <a
                          href="#sermons"
                          onClick={(e) => handleNavClick(e, "sermons")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          Sermons
                        </a>
                        <a
                          href="#studies"
                          onClick={(e) => handleNavClick(e, "studies")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          Bible Studies
                        </a>
                        <a
                          href="#videos"
                          onClick={(e) => handleNavClick(e, "videos")}
                          className="text-lg font-bold text-gray-900 hover:text-[#3667B1]"
                        >
                          Videos
                        </a>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <a
                        href="#give"
                        onClick={(e) => handleNavClick(e, "give")}
                        className="text-lg font-bold text-gray-900 hover:text-[#3667B1] flex items-center gap-2"
                      >
                        Giving <Heart className="w-4 h-4" />
                      </a>
                    </div>
                  </nav>
                </div>

                {/* Footer Action Area */}
                <div className="p-6 bg-gray-50 border-t border-gray-200 mt-auto">
                  <div className="flex flex-col gap-4">
                    <a
                      href="#member-hub"
                      onClick={(e) => handleNavClick(e, "member-hub")}
                      className="flex items-center justify-between text-sm font-bold text-gray-500 hover:text-[#3667B1] transition-colors"
                    >
                      <span>{isLoggedIn ? "Member Hub" : "Member Login"}</span>
                      {isLoggedIn && totalNotifications > 0 && (
                        <span className="flex items-center justify-center h-5 w-5 rounded-full bg-[#ff5722] text-[10px] font-bold text-white shadow-sm">
                          {totalNotifications}
                        </span>
                      )}
                    </a>
                    <a
                      href="#im-new"
                      onClick={(e) => handleNavClick(e, "im-new")}
                      className="w-full py-4 bg-[#3667B1] text-white rounded-xl font-black text-center uppercase tracking-wide shadow-lg shadow-blue-900/10 hover:bg-[#2d5491] hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      I'm New
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
