import StudyDetailPage from './components/StudyDetailPage';
import { NotificationProvider } from './lib/NotificationContext';

export default function App() {
  // Mock navigation functions since we are isolating the study page
  const handleNavigate = (page: any, id?: string) => {
    console.log('Navigation requested:', page, id);
  };

  const handleBack = () => {
    console.log('Back requested');
  };

  return (
    <NotificationProvider>
      <div className="min-h-screen bg-white">
        <StudyDetailPage 
          studyId="john-21" 
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      </div>
    </NotificationProvider>
  );
}
