import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAreStrip from './components/WhoWeAreStrip';
import UpcomingEvents from './components/UpcomingEvents';
import WelcomeSection from './components/WelcomeSection';
import WhatWeDo from './components/WhatWeDo';
import MediaSection from './components/MediaSection';
import PhotoGallery from './components/PhotoGallery';
import ContactSection from './components/ContactSection';
import ImNewSection from './components/ImNewSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import SermonsPage from './components/SermonsPage';
import SermonDetailPage from './components/SermonDetailPage';
import DailyBreadPage from './components/DailyBreadPage';
import VideosPage from './components/VideosPage';
import EventsPage from './components/EventsPage';
import EventDetailPage from './components/EventDetailPage';
import ImNewPage from './components/ImNewPage';
import CampusesPage from './components/CampusesPage';
import CampusDetailPage from './components/CampusDetailPage';
import KidsMinistryPage from './components/KidsMinistryPage';
import StudiesPage from './components/StudiesPage';
import StudyDetailPage from './components/StudyDetailPage';
import LoginPage from './components/LoginPage';
import MemberHub from './components/MemberHub';
import AnnouncementsPage from './components/AnnouncementsPage';
import AnnouncementDetailPage from './components/AnnouncementDetailPage';
import MeetingsPage from './components/MeetingsPage';
import ProgramsPage from './components/ProgramsPage';
import ConsolidatedEventsPage from './components/ConsolidatedEventsPage';
import ProgramDetailPage from './components/ProgramDetailPage';
import GivingPage from './components/GivingPage';
import LandingPage from './components/figma/LandingPage';
import MinistriesPage from './components/MinistriesPage';
import CollegeMinistryPage from './components/CollegeMinistryPage';
import HighSchoolMinistryPage from './components/HighSchoolMinistryPage';
import JuniorHighMinistryPage from './components/JuniorHighMinistryPage';
import AdultsMinistryPage from './components/AdultsMinistryPage';

import PhotosPage from './components/PhotosPage';

import MeetingDetailPage from './components/MeetingDetailPage';
import PrayerTopicsPage from './components/PrayerTopicsPage';
import ChatPage from './components/ChatPage';
import AccountSettingsPage from './components/AccountSettingsPage';

type PageState = 'home' | 'about' | 'events' | 'event-detail' | 'sermons' | 'sermon-detail' | 'daily-bread' | 'videos' | 'im-new' | 'campuses' | 'campus-detail' | 'bbf-cbf' | 'studies' | 'study-detail' | 'login' | 'member-hub' | 'announcements' | 'announcement-detail' | 'ministries' | 'groups' | 'give' | 'yam-college' | 'hbf' | 'jbf' | 'adults' | 'meetings' | 'meeting-detail' | 'programs' | 'program-detail' | 'photos' | 'prayer-topics' | 'account-settings' | 'chat';

import { NotificationProvider } from './lib/NotificationContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentSermonId, setCurrentSermonId] = useState<string | undefined>(undefined);
  const [currentEventId, setCurrentEventId] = useState<string | undefined>(undefined);
  const [currentCampusId, setCurrentCampusId] = useState<string | undefined>(undefined);
  const [currentStudyId, setCurrentStudyId] = useState<string | undefined>(undefined);
  const [currentAnnouncementId, setCurrentAnnouncementId] = useState<string | undefined>(undefined);
  const [currentProgramId, setCurrentProgramId] = useState<string | undefined>(undefined);
  const [currentMeetingId, setCurrentMeetingId] = useState<string | undefined>(undefined);
  const [eventsFilter, setEventsFilter] = useState<string | undefined>(undefined);

  // Load login state from localStorage on mount
  useEffect(() => {
    const savedLoginState = localStorage.getItem('isLoggedIn');
    if (savedLoginState === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleNavigate = (page: PageState, id?: string) => {
    // Auth protection for Member Hub
    if ((page === 'member-hub' || page === 'announcements' || page === 'announcement-detail' || page === 'prayer-topics' || page === 'account-settings' || page === 'chat') && !isLoggedIn) {
      setCurrentPage('login');
      window.scrollTo(0, 0);
      return;
    }

    setCurrentPage(page);
    if (page === 'sermon-detail' && id) {
      setCurrentSermonId(id);
    }
    if (page === 'event-detail' && id) {
      setCurrentEventId(id);
    }
    if (page === 'campus-detail' && id) {
      setCurrentCampusId(id);
    }
    if (page === 'study-detail' && id) {
      setCurrentStudyId(id);
    }
    if (page === 'announcement-detail' && id) {
      setCurrentAnnouncementId(id);
    }
    if (page === 'program-detail' && id) {
      setCurrentProgramId(id);
    }
    if (page === 'meeting-detail' && id) {
      setCurrentMeetingId(id);
    }
    if (page === 'events') {
        setEventsFilter(id);
    }
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    setCurrentPage('home'); 
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={handleNavigate} className="px-[0px] py-[19px] mt-[0px] mr-[0px] mb-[16px] ml-[0px]" />;
      case 'about':
        return (
          <main>
            <AboutPage />
          </main>
        );
      case 'im-new':
        return (
          <main>
            <ImNewPage onNavigate={handleNavigate} />
          </main>
        );
      case 'campuses':
        return (
          <main>
            <CampusesPage onNavigate={handleNavigate} />
          </main>
        );
      case 'campus-detail':
        return (
          <main>
            <CampusDetailPage campusId={currentCampusId!} onNavigate={handleNavigate} />
          </main>
        );
      case 'bbf-cbf':
        return (
          <main>
            <KidsMinistryPage onNavigate={handleNavigate} />
          </main>
        );
      case 'events':
        return (
          <main>
            <ConsolidatedEventsPage onNavigate={handleNavigate} initialType="All" />
          </main>
        );
      case 'event-detail':
        return (
          <main>
            <EventDetailPage eventId={currentEventId!} onNavigate={handleNavigate} />
          </main>
        );
      case 'sermons':
        return (
          <main>
            <SermonsPage onNavigate={handleNavigate} />
          </main>
        );
      case 'sermon-detail':
        return (
          <main>
            <SermonDetailPage 
              sermonId={currentSermonId!} 
              onNavigate={handleNavigate} 
            />
          </main>
        );
      case 'daily-bread':
        return (
          <main>
            <DailyBreadPage onNavigate={handleNavigate} />
          </main>
        );
      case 'videos':
        return (
          <main>
            <VideosPage onNavigate={handleNavigate} />
          </main>
        );
      case 'studies':
        return (
          <main>
            <StudiesPage onNavigate={handleNavigate} />
          </main>
        );
      case 'study-detail':
        return (
          <main>
            <StudyDetailPage 
              studyId={currentStudyId!} 
              onNavigate={handleNavigate}
              onBack={() => handleNavigate('studies')}
            />
          </main>
        );
      case 'login':
        return (
          <main>
            <LoginPage onLogin={handleLogin} />
          </main>
        );
      case 'member-hub':
        return (
          <main>
            <MemberHub onNavigate={handleNavigate} onLogout={handleLogout} />
          </main>
        );
      case 'announcements':
        return (
          <main>
            <AnnouncementsPage 
              onNavigate={handleNavigate} 
              onBack={() => handleNavigate('home')} 
            />
          </main>
        );
      case 'announcement-detail':
        return (
          <main>
            <AnnouncementDetailPage 
              announcementId={currentAnnouncementId!} 
              onNavigate={handleNavigate}
              onBack={() => handleNavigate('announcements')}
            />
          </main>
        );
      case 'ministries':
         return (
             <main>
                 <MinistriesPage onNavigate={handleNavigate} />
             </main>
         );
      case 'yam-college':
         return (
             <main>
                 <CollegeMinistryPage onNavigate={handleNavigate} />
             </main>
         );
      case 'hbf':
         return (
             <main>
                 <HighSchoolMinistryPage onNavigate={handleNavigate} />
             </main>
         );
      case 'jbf':
         return (
             <main>
                 <JuniorHighMinistryPage onNavigate={handleNavigate} />
             </main>
         );
      case 'adults':
         return (
             <main>
                 <AdultsMinistryPage onNavigate={handleNavigate} />
             </main>
         );
      case 'groups':
         return (
             <main>
                 <StudiesPage onNavigate={handleNavigate} />
             </main>
         );
      case 'give':
         return (
             <main>
                 <GivingPage onNavigate={handleNavigate} />
             </main>
         );
      case 'meetings':
         return (
             <main>
                 <ConsolidatedEventsPage onNavigate={handleNavigate} initialType="Meeting" />
             </main>
         );
      case 'meeting-detail':
         return (
             <main>
                 <MeetingDetailPage 
                    meetingId={currentMeetingId!} 
                    onNavigate={handleNavigate} 
                 />
             </main>
         );
      case 'programs':
         return (
             <main>
                 <ConsolidatedEventsPage onNavigate={handleNavigate} initialType="Program" />
             </main>
         );
      case 'program-detail':
         return (
             <main>
                 <ProgramDetailPage 
                   programId={currentProgramId!} 
                   onNavigate={handleNavigate}
                   onBack={() => handleNavigate('programs')}
                 />
             </main>
         );
      case 'photos':
         return (
             <main>
                 <PhotosPage onNavigate={handleNavigate} />
             </main>
         );
      case 'prayer-topics':
         return (
             <main>
                 <PrayerTopicsPage onNavigate={handleNavigate} />
             </main>
         );
      case 'account-settings':
         return (
             <main>
                 <AccountSettingsPage onNavigate={handleNavigate} />
             </main>
         );
      case 'chat':
         return (
             <main>
                 <ChatPage onNavigate={handleNavigate} />
             </main>
         );
      default:
        return null;
    }
  };

  return (
    <NotificationProvider>
      <div className="min-h-screen bg-white">
        <Navbar 
            onNavigate={handleNavigate} 
            currentPage={currentPage} 
            isLoggedIn={isLoggedIn} 
            variant={currentPage === 'home' ? 'transparent' : 'default'}
            onLogout={handleLogout}
        />
        {renderContent()}
        {currentPage !== 'home' && <Footer />}
      </div>
    </NotificationProvider>
  );
}
