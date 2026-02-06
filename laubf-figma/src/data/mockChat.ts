export interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
}

export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  type: 'text' | 'image';
}

export interface ChatConversation {
  id: string;
  type: 'direct' | 'group';
  name?: string; // For groups, or computed from participants for direct
  participants: string[]; // User IDs
  messages: ChatMessage[];
  unreadCount: number;
  lastMessageAt: string;
}

export const MOCK_USERS: Record<string, ChatUser> = {
  'me': { id: 'me', name: 'You', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100', status: 'online' },
  'u1': { id: 'u1', name: 'Sarah Lee', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100', status: 'online' },
  'u2': { id: 'u2', name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100', status: 'offline' },
  'u3': { id: 'u3', name: 'Pastor John', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', status: 'away' },
  'u4': { id: 'u4', name: 'Grace Chen', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100', status: 'online' },
  'u5': { id: 'u5', name: 'Mike Ross', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100', status: 'online' },
};

export const MOCK_CONVERSATIONS: ChatConversation[] = [
  {
    id: 'c1',
    type: 'direct',
    participants: ['u1'],
    unreadCount: 2,
    lastMessageAt: '2023-10-25T10:30:00Z',
    messages: [
      { id: 'm1', senderId: 'u1', content: 'Hey! Are you coming to the prayer meeting tonight?', timestamp: '2023-10-25T10:28:00Z', type: 'text' },
      { id: 'm2', senderId: 'u1', content: 'We need someone to lead the opening prayer.', timestamp: '2023-10-25T10:30:00Z', type: 'text' },
    ]
  },
  {
    id: 'c2',
    type: 'group',
    name: 'Worship Team 🎸',
    participants: ['u2', 'u4', 'u5'],
    unreadCount: 0,
    lastMessageAt: '2023-10-24T18:15:00Z',
    messages: [
      { id: 'm3', senderId: 'u2', content: 'Setlist for Sunday is up on the drive.', timestamp: '2023-10-24T18:00:00Z', type: 'text' },
      { id: 'm4', senderId: 'me', content: 'Awesome, thanks David. I will check it out.', timestamp: '2023-10-24T18:10:00Z', type: 'text' },
      { id: 'm5', senderId: 'u4', content: 'Can we add "Way Maker" to the list?', timestamp: '2023-10-24T18:15:00Z', type: 'text' },
    ]
  },
  {
    id: 'c3',
    type: 'direct',
    participants: ['u3'],
    unreadCount: 0,
    lastMessageAt: '2023-10-20T09:00:00Z',
    messages: [
      { id: 'm6', senderId: 'u3', content: 'God bless you brother. See you on Sunday.', timestamp: '2023-10-20T09:00:00Z', type: 'text' },
    ]
  }
];