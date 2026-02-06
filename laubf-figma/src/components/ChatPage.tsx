import { useState, useRef, useEffect } from 'react';
import { 
  Search, Plus, Send, MoreVertical, Phone, Video, 
  Image as ImageIcon, Smile, Paperclip, ArrowLeft, Check, Users, User, MessageCircle 
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { MOCK_CONVERSATIONS, MOCK_USERS, ChatConversation, ChatMessage } from '../data/mockChat';
import { format } from 'date-fns';
import { cn } from './ui/utils';

interface ChatPageProps {
  onNavigate: (page: any) => void;
}

export default function ChatPage({ onNavigate }: ChatPageProps) {
  const [conversations, setConversations] = useState<ChatConversation[]>(MOCK_CONVERSATIONS);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Group Creation State
  const [groupName, setGroupName] = useState('');
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Derived state
  const selectedChat = conversations.find(c => c.id === selectedChatId);
  
  const filteredConversations = conversations.filter(c => {
    if (c.type === 'group') {
      return c.name?.toLowerCase().includes(searchQuery.toLowerCase());
    }
    const partnerId = c.participants[0];
    const partner = MOCK_USERS[partnerId];
    return partner?.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [selectedChat?.messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || !selectedChatId) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      senderId: 'me',
      content: inputText,
      timestamp: new Date().toISOString(),
      type: 'text'
    };

    setConversations(prev => prev.map(c => {
      if (c.id === selectedChatId) {
        return {
          ...c,
          messages: [...c.messages, newMessage],
          lastMessageAt: newMessage.timestamp
        };
      }
      return c;
    }));

    setInputText('');
  };

  const handleCreateGroup = () => {
    if (!groupName || selectedParticipants.length === 0) return;

    const newChat: ChatConversation = {
      id: Date.now().toString(),
      type: 'group',
      name: groupName,
      participants: selectedParticipants,
      unreadCount: 0,
      lastMessageAt: new Date().toISOString(),
      messages: []
    };

    setConversations([newChat, ...conversations]);
    setSelectedChatId(newChat.id);
    setIsDialogOpen(false);
    setGroupName('');
    setSelectedParticipants([]);
  };

  const handleStartDirectChat = (userId: string) => {
    // Check if chat already exists
    const existing = conversations.find(c => c.type === 'direct' && c.participants.includes(userId));
    if (existing) {
        setSelectedChatId(existing.id);
    } else {
        const newChat: ChatConversation = {
            id: Date.now().toString(),
            type: 'direct',
            participants: [userId],
            unreadCount: 0,
            lastMessageAt: new Date().toISOString(),
            messages: []
        };
        setConversations([newChat, ...conversations]);
        setSelectedChatId(newChat.id);
    }
    setIsDialogOpen(false);
  };

  const toggleParticipant = (userId: string) => {
    if (selectedParticipants.includes(userId)) {
        setSelectedParticipants(prev => prev.filter(id => id !== userId));
    } else {
        setSelectedParticipants(prev => [...prev, userId]);
    }
  };

  const getChatName = (chat: ChatConversation) => {
    if (chat.type === 'group') return chat.name || 'Group Chat';
    const partnerId = chat.participants[0];
    return MOCK_USERS[partnerId]?.name || 'Unknown User';
  };

  const getChatAvatar = (chat: ChatConversation) => {
    if (chat.type === 'group') return null; // We'll render a group icon or stack
    const partnerId = chat.participants[0];
    return MOCK_USERS[partnerId]?.avatar;
  };

  const getChatStatus = (chat: ChatConversation) => {
    if (chat.type === 'group') return null;
    const partnerId = chat.participants[0];
    return MOCK_USERS[partnerId]?.status;
  };

  return (
    <div className="h-[calc(100vh-80px)] bg-white flex overflow-hidden">
      
      {/* SIDEBAR - Chat List */}
      <div className={cn(
        "w-full md:w-80 lg:w-96 bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        selectedChatId ? "hidden md:flex" : "flex"
      )}>
        
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-black tracking-tighter">Chats</h1>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="icon" className="bg-[#3667B1] hover:bg-[#2a5291] text-white rounded-full shadow-lg shadow-blue-500/20">
                  <Plus className="w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>New Message</DialogTitle>
                </DialogHeader>
                
                <Tabs defaultValue="direct" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="direct">Direct Message</TabsTrigger>
                        <TabsTrigger value="group">Group Chat</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="direct" className="space-y-4">
                        <div className="h-[300px] overflow-y-auto pr-2 space-y-1">
                             {Object.values(MOCK_USERS).filter(u => u.id !== 'me').map(user => (
                                <div 
                                    key={user.id} 
                                    onClick={() => handleStartDirectChat(user.id)}
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors group"
                                >
                                    <div className="relative">
                                        <Avatar>
                                            <AvatarImage src={user.avatar} />
                                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                                        </Avatar>
                                        {user.status === 'online' && (
                                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-gray-900 group-hover:text-[#3667B1] transition-colors">{user.name}</div>
                                        <div className="text-xs text-gray-500 capitalize">{user.status}</div>
                                    </div>
                                </div>
                             ))}
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="group" className="space-y-4">
                        <div className="space-y-2">
                            <Label>Group Name</Label>
                            <Input 
                                placeholder="e.g. Worship Team" 
                                value={groupName}
                                onChange={(e) => setGroupName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Select Participants</Label>
                            <div className="h-[200px] overflow-y-auto pr-2 space-y-1 border border-gray-100 rounded-lg p-2">
                                {Object.values(MOCK_USERS).filter(u => u.id !== 'me').map(user => {
                                    const isSelected = selectedParticipants.includes(user.id);
                                    return (
                                        <div 
                                            key={user.id} 
                                            onClick={() => toggleParticipant(user.id)}
                                            className={cn(
                                                "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors",
                                                isSelected ? "bg-blue-50" : "hover:bg-gray-50"
                                            )}
                                        >
                                            <div className="relative">
                                                <Avatar className="w-8 h-8">
                                                    <AvatarImage src={user.avatar} />
                                                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                                                </Avatar>
                                                {isSelected && (
                                                    <div className="absolute -top-1 -right-1 bg-[#3667B1] rounded-full p-0.5 border-2 border-white">
                                                        <Check className="w-2 h-2 text-white" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="font-medium text-sm flex-1">{user.name}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <Button 
                            className="w-full bg-[#3667B1] hover:bg-[#2a5291]"
                            disabled={!groupName || selectedParticipants.length === 0}
                            onClick={handleCreateGroup}
                        >
                            Create Group
                        </Button>
                    </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search chats..." 
              className="pl-9 bg-gray-100 border-0 rounded-full h-10 focus-visible:ring-1 focus-visible:ring-[#3667B1]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Conversations List */}
        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            {filteredConversations.map(chat => {
              const isActive = chat.id === selectedChatId;
              const name = getChatName(chat);
              const avatar = getChatAvatar(chat);
              const lastMsg = chat.messages[chat.messages.length - 1];
              const status = getChatStatus(chat);
              const isGroup = chat.type === 'group';

              return (
                <div 
                  key={chat.id}
                  onClick={() => setSelectedChatId(chat.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all relative group",
                    isActive ? "bg-blue-50/50" : "hover:bg-gray-50"
                  )}
                >
                  <div className="relative">
                    {isGroup ? (
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#3667B1]">
                            <Users className="w-6 h-6" />
                        </div>
                    ) : (
                        <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                            <AvatarImage src={avatar || ''} />
                            <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                    )}
                    {status === 'online' && !isGroup && (
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className={cn("font-bold truncate text-base", isActive ? "text-[#3667B1]" : "text-gray-900")}>
                        {name}
                      </span>
                      {lastMsg && (
                         <span className={cn("text-[10px] font-bold shrink-0", chat.unreadCount > 0 ? "text-[#3667B1]" : "text-gray-400")}>
                           {format(new Date(lastMsg.timestamp), 'h:mm a')}
                         </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                        <p className={cn("text-sm truncate pr-2 leading-snug", chat.unreadCount > 0 ? "text-gray-900 font-bold" : "text-gray-500")}>
                          {lastMsg?.senderId === 'me' ? 'You: ' : ''}{lastMsg?.content || 'No messages'}
                        </p>
                        {chat.unreadCount > 0 && (
                            <Badge className="bg-[#3667B1] hover:bg-[#3667B1] h-5 min-w-[20px] px-1.5 flex items-center justify-center rounded-full">
                                {chat.unreadCount}
                            </Badge>
                        )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* MAIN CHAT AREA */}
      <div className={cn(
        "flex-1 flex flex-col bg-white transition-all duration-300",
        selectedChatId ? "flex" : "hidden md:flex"
      )}>
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="h-24 border-b border-gray-100 flex items-center justify-between px-8 shrink-0 bg-white z-10">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="md:hidden -ml-2" onClick={() => setSelectedChatId(null)}>
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <div className="relative">
                    {selectedChat.type === 'group' ? (
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#3667B1]">
                            <Users className="w-6 h-6" />
                        </div>
                    ) : (
                        <>
                            <Avatar className="w-12 h-12 border border-gray-100">
                                <AvatarImage src={getChatAvatar(selectedChat) || ''} />
                                <AvatarFallback>{getChatName(selectedChat)[0]}</AvatarFallback>
                            </Avatar>
                            {getChatStatus(selectedChat) === 'online' && (
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                            )}
                        </>
                    )}
                </div>
                <div>
                  <h2 className="font-black text-xl text-gray-900 leading-tight">{getChatName(selectedChat)}</h2>
                  <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    {selectedChat.type === 'group' 
                        ? `${selectedChat.participants.length} participants`
                        : (getChatStatus(selectedChat) === 'online' ? 'Active now' : 'Offline')
                    }
                  </p>
                </div>
              </div>
              <div className="flex gap-2 text-gray-400">
                <Button variant="ghost" size="icon" className="hover:text-[#3667B1] hover:bg-blue-50 rounded-full">
                    <Phone className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-[#3667B1] hover:bg-blue-50 rounded-full">
                    <Video className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-[#3667B1] hover:bg-blue-50 rounded-full">
                    <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-white" ref={scrollRef}>
              {selectedChat.messages.map((msg, idx) => {
                const isMe = msg.senderId === 'me';
                const showAvatar = !isMe && (idx === 0 || selectedChat.messages[idx - 1].senderId !== msg.senderId);
                const sender = MOCK_USERS[msg.senderId];

                return (
                  <div key={msg.id} className={cn("flex gap-4 max-w-[75%]", isMe ? "ml-auto flex-row-reverse" : "")}>
                    {!isMe && (
                        <div className="w-8 shrink-0 flex flex-col justify-end">
                            {showAvatar ? (
                                <Avatar className="w-8 h-8">
                                    <AvatarImage src={sender?.avatar} />
                                    <AvatarFallback>{sender?.name[0]}</AvatarFallback>
                                </Avatar>
                            ) : <div className="w-8" />}
                        </div>
                    )}
                    
                    <div className={cn(
                        "group relative px-6 py-4 rounded-3xl text-[15px] leading-relaxed",
                        isMe 
                            ? "bg-[#3667B1] text-white rounded-br-sm" 
                            : "bg-gray-100 text-gray-900 rounded-bl-sm"
                    )}>
                        {!isMe && showAvatar && selectedChat.type === 'group' && (
                            <div className="text-[10px] font-bold text-gray-500 mb-1 opacity-60 uppercase tracking-wider">{sender?.name}</div>
                        )}
                        <p>{msg.content}</p>
                        <span className={cn(
                            "text-[10px] absolute -bottom-5 w-max font-bold opacity-0 group-hover:opacity-100 transition-opacity text-gray-300",
                            isMe ? "right-0" : "left-0"
                        )}>
                            {format(new Date(msg.timestamp), 'h:mm a')}
                        </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white shrink-0">
                <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                    <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-[#3667B1] hover:bg-blue-50 rounded-full">
                        <ImageIcon className="w-5 h-5" />
                    </Button>
                    <div className="flex-1 relative">
                        <Input 
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Type a message..." 
                            className="bg-gray-100 border-0 rounded-full h-12 pl-6 pr-12 text-base focus-visible:ring-1 focus-visible:ring-[#3667B1] transition-all"
                        />
                        <Button 
                            type="button"
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-[#3667B1] rounded-full"
                        >
                            <Smile className="w-5 h-5" />
                        </Button>
                    </div>
                    <Button 
                        type="submit" 
                        disabled={!inputText.trim()}
                        size="icon"
                        className={cn(
                            "rounded-full h-12 w-12 transition-all duration-200 shrink-0",
                            inputText.trim() 
                                ? "bg-[#3667B1] hover:bg-[#2a5291] text-white shadow-lg shadow-blue-500/20" 
                                : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                        )}
                    >
                        <Send className="w-5 h-5 ml-0.5" />
                    </Button>
                </form>
            </div>

          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-300 p-8 text-center bg-gray-50/30">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm animate-in zoom-in duration-500">
                <div className="relative">
                    <div className="w-16 h-16 bg-[#3667B1]/10 rounded-full flex items-center justify-center">
                         <MessageCircle className="w-8 h-8 text-[#3667B1]" />
                    </div>
                    <div className="absolute top-0 right-0 w-5 h-5 bg-green-400 rounded-full border-4 border-white" />
                </div>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Your Messages</h3>
            <p className="text-gray-500 max-w-sm font-medium">Connect with your community. Select a conversation to start chatting.</p>
            <Button 
                onClick={() => setIsDialogOpen(true)}
                className="mt-8 rounded-full bg-[#3667B1] hover:bg-[#2a5291] px-8 py-6 text-base font-bold shadow-xl shadow-blue-900/10"
            >
                Start New Chat
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}