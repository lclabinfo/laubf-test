import { useState } from 'react';
import { ArrowLeft, User, Lock, Bell, Shield, Camera, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

interface AccountSettingsPageProps {
  onNavigate: (page: any) => void;
}

export default function AccountSettingsPage({ onNavigate }: AccountSettingsPageProps) {
  const [requestStatus, setRequestStatus] = useState<'idle' | 'pending'>('idle');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => onNavigate('home')} className="mr-2 -ml-3">
                <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Account Settings</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Tabs defaultValue="profile" className="flex flex-col md:flex-row gap-8">
            
            {/* Sidebar */}
            <aside className="md:w-64 shrink-0">
                <TabsList className="flex flex-col h-auto bg-transparent p-0 space-y-1 w-full">
                    <TabsTrigger value="profile" className="justify-start w-full px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-gray-200 rounded-lg text-gray-600 data-[state=active]:text-black font-bold text-sm">
                        <User className="w-4 h-4 mr-3" /> Profile Info
                    </TabsTrigger>
                    <TabsTrigger value="roles" className="justify-start w-full px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-gray-200 rounded-lg text-gray-600 data-[state=active]:text-black font-bold text-sm">
                        <Shield className="w-4 h-4 mr-3" /> Roles & Permissions
                    </TabsTrigger>
                    <TabsTrigger value="security" className="justify-start w-full px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-gray-200 rounded-lg text-gray-600 data-[state=active]:text-black font-bold text-sm">
                        <Lock className="w-4 h-4 mr-3" /> Security
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="justify-start w-full px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-gray-200 rounded-lg text-gray-600 data-[state=active]:text-black font-bold text-sm">
                        <Bell className="w-4 h-4 mr-3" /> Notifications
                    </TabsTrigger>
                </TabsList>
            </aside>

            {/* Content */}
            <div className="flex-1 space-y-6">
                
                {/* Profile Tab */}
                <TabsContent value="profile" className="mt-0 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Details</CardTitle>
                            <CardDescription>Update your photo and personal information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-6">
                                <Avatar className="w-24 h-24 border-4 border-gray-100">
                                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <Button variant="outline" className="gap-2">
                                    <Camera className="w-4 h-4" /> Change Photo
                                </Button>
                            </div>
                            
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First name</Label>
                                    <Input id="firstName" defaultValue="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input id="lastName" defaultValue="Doe" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue="john.doe@example.com" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Input id="bio" placeholder="Tell us a little about yourself" />
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <Button className="bg-black text-white hover:bg-gray-800">Save Changes</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Roles Tab - NEW */}
                <TabsContent value="roles" className="mt-0 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Role & Permissions</CardTitle>
                            <CardDescription>Manage your access level within the community.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <div>
                                    <div className="text-sm font-medium text-gray-500 mb-1">Current Role</div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="bg-white border-gray-200 text-gray-700 font-bold uppercase tracking-wider">
                                            General Member
                                        </Badge>
                                        <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full">
                                            <CheckCircle2 className="w-3 h-3" /> Verified
                                        </div>
                                    </div>
                                </div>
                                <Shield className="w-8 h-8 text-gray-300" />
                            </div>

                            <div className="space-y-4">
                                <div className="text-sm text-gray-600">
                                    <p className="font-medium mb-2">Your permissions:</p>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-500">
                                        <li>View internal announcements</li>
                                        <li>Post and view prayer topics</li>
                                        <li>Update personal profile</li>
                                    </ul>
                                </div>
                                
                                <div className="pt-4 border-t border-gray-100">
                                    <h4 className="text-sm font-bold text-gray-900 mb-2">Admin Access</h4>
                                    <p className="text-sm text-gray-500 mb-4">
                                        Need to manage events, programs, or other members? Request admin access below.
                                    </p>
                                    <Button 
                                        variant="outline" 
                                        className="w-full sm:w-auto border-gray-300 hover:bg-black hover:text-white transition-colors"
                                        disabled={requestStatus === 'pending'}
                                        onClick={() => setRequestStatus('pending')}
                                    >
                                        {requestStatus === 'pending' ? 'Request Sent' : 'Request Admin Access'}
                                    </Button>
                                    {requestStatus === 'pending' && (
                                        <p className="text-xs text-emerald-600 font-medium mt-2">
                                            Your request has been sent to the administrators for review.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security" className="mt-0 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>Change your password to keep your account secure.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current">Current Password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new">New Password</Label>
                                <Input id="new" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm">Confirm New Password</Label>
                                <Input id="confirm" type="password" />
                            </div>
                            <div className="pt-4 border-t border-gray-100">
                                <Button className="bg-black text-white hover:bg-gray-800">Update Password</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

            </div>
        </Tabs>
      </div>
    </div>
  );
}