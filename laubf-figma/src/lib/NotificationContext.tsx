import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NotificationState {
  announcements: number;
  meetings: number;
}

interface NotificationContextType {
  notifications: NotificationState;
  totalNotifications: number;
  clearNotifications: () => void;
  markAnnouncementsRead: () => void;
  markMeetingsRead: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  // Mock initial state - simulating new updates when user logs in
  const [notifications, setNotifications] = useState<NotificationState>({
    announcements: 2,
    meetings: 1
  });

  const totalNotifications = notifications.announcements + notifications.meetings;

  const clearNotifications = () => {
    setNotifications({ announcements: 0, meetings: 0 });
  };

  const markAnnouncementsRead = () => {
    setNotifications(prev => ({ ...prev, announcements: 0 }));
  };

  const markMeetingsRead = () => {
    setNotifications(prev => ({ ...prev, meetings: 0 }));
  };

  return (
    <NotificationContext.Provider value={{ 
      notifications, 
      totalNotifications, 
      clearNotifications,
      markAnnouncementsRead,
      markMeetingsRead
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}
