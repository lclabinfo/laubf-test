import { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { cn } from './ui/utils';

type Variant = 'blue' | 'orange' | 'green' | 'emerald' | 'yellow';

interface PlanVisitFormProps {
  variant?: Variant;
}

const variantStyles = {
  blue: {
    overlay: 'bg-[#3667B1]/90',
    text: 'text-white',
    subText: 'text-blue-100',
    icon: 'text-blue-200',
    button: 'bg-[#3667B1] hover:bg-[#2d5491]',
    focus: 'focus:border-[#3667B1]',
    selectTrigger: 'focus:ring-[#3667B1]',
  },
  orange: {
    overlay: 'bg-orange-600/90',
    text: 'text-white',
    subText: 'text-orange-100',
    icon: 'text-orange-200',
    button: 'bg-orange-600 hover:bg-orange-700',
    focus: 'focus:border-orange-600',
    selectTrigger: 'focus:ring-orange-600',
  },
  green: {
    overlay: 'bg-green-600/90',
    text: 'text-white',
    subText: 'text-green-100',
    icon: 'text-green-200',
    button: 'bg-green-600 hover:bg-green-700',
    focus: 'focus:border-green-600',
    selectTrigger: 'focus:ring-green-600',
  },
  emerald: {
    overlay: 'bg-emerald-600/90',
    text: 'text-white',
    subText: 'text-emerald-100',
    icon: 'text-emerald-200',
    button: 'bg-emerald-600 hover:bg-emerald-700',
    focus: 'focus:border-emerald-600',
    selectTrigger: 'focus:ring-emerald-600',
  },
  yellow: {
    overlay: 'bg-yellow-400/95',
    text: 'text-yellow-950',
    subText: 'text-yellow-900/80',
    icon: 'text-yellow-900',
    button: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    focus: 'focus:border-yellow-500',
    selectTrigger: 'focus:ring-yellow-500',
  },
};

export default function PlanVisitForm({ variant = 'blue' }: PlanVisitFormProps) {
  const styles = variantStyles[variant];
  const [interest, setInterest] = useState<string>('');
  const [campus, setCampus] = useState<string>('');

  const campuses = [
    "LBCC True Vine Club",
    "Cal State Long Beach",
    "Cal State Fullerton",
    "UCLA",
    "USC",
    "Cal State Dominguez Hills",
    "CCC Ministry",
    "Mt. San Antonio College",
    "Golden State CC",
    "Cypress College",
    "Cal Poly Pomona"
  ];
  
  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow-xl flex flex-col md:flex-row border border-gray-100">
      
      {/* Left Panel - Cinematic Info */}
      <div className="relative md:w-2/5 min-h-[300px] md:min-h-auto flex flex-col justify-between p-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1704254079731-ff036f130120?q=80&w=1000&auto=format&fit=crop" 
                alt="Welcome to Church" 
                className="w-full h-full object-cover"
            />
            <div className={cn("absolute inset-0 transition-colors", styles.overlay)} />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
                <h2 className={cn("text-3xl md:text-4xl font-black uppercase leading-none mb-6 font-['Helvetica_Neue',sans-serif] tracking-tight", styles.text)}>
                    Plan Your<br/>Visit
                </h2>
                <p className={cn("font-medium text-lg leading-relaxed", styles.subText)}>
                    Let us know you're coming and we'll save a seat for you! We can also help match you with a Bible teacher or answer any specific questions.
                </p>
            </div>
            
            <div className="space-y-6 mt-8">
                <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm", styles.icon)}>
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <div className={cn("font-bold text-xs uppercase tracking-widest opacity-70 mb-1", styles.text)}>Address</div>
                        <div className={cn("font-bold text-base", styles.text)}>11625 Paramount Blvd, Downey</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm", styles.icon)}>
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                         <div className={cn("font-bold text-xs uppercase tracking-widest opacity-70 mb-1", styles.text)}>Service Time</div>
                         <div className={cn("font-bold text-base", styles.text)}>Sundays @ 11:00 AM</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 p-8 md:p-12 bg-white">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">First Name</label>
                    <input 
                        type="text" 
                        required 
                        className={cn("w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 font-medium transition-all outline-none", styles.focus)} 
                        placeholder="Jane" 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Last Name</label>
                    <input 
                        type="text" 
                        required 
                        className={cn("w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 font-medium transition-all outline-none", styles.focus)} 
                        placeholder="Doe" 
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Email Address</label>
                    <input 
                        type="email" 
                        required 
                        className={cn("w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 font-medium transition-all outline-none", styles.focus)} 
                        placeholder="jane@example.com" 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Phone (Optional)</label>
                    <input 
                        type="tel" 
                        className={cn("w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 font-medium transition-all outline-none", styles.focus)} 
                        placeholder="(555) 123-4567" 
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">I'm Interested In...</label>
                <Select onValueChange={setInterest}>
                    <SelectTrigger className={cn("w-full h-[50px] bg-gray-50 border-gray-100 font-medium", styles.selectTrigger)}>
                        <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="sunday-service">Sunday Service</SelectItem>
                        <SelectItem value="bible-study">Personal Bible Study</SelectItem>
                        <SelectItem value="college-group">College Campus Group</SelectItem>
                        <SelectItem value="giving">Giving</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {interest === 'college-group' && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Which Campus?</label>
                    <Select onValueChange={setCampus}>
                        <SelectTrigger className={cn("w-full h-[50px] bg-gray-50 border-gray-100 font-medium", styles.selectTrigger)}>
                            <SelectValue placeholder="Select your campus" />
                        </SelectTrigger>
                        <SelectContent>
                            {campuses.map(c => (
                                <SelectItem key={c} value={c}>{c}</SelectItem>
                            ))}
                            <SelectItem value="other">Other Campus</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            )}

            {(interest === 'other' || campus === 'other') && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Please Specify</label>
                    <input 
                        type="text" 
                        className={cn("w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 font-medium transition-all outline-none", styles.focus)} 
                        placeholder={campus === 'other' ? "Enter your campus name..." : "Tell us more..."} 
                    />
                </div>
            )}

            <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Questions or Comments</label>
                <textarea 
                    className={cn("w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 font-medium transition-all outline-none min-h-[120px] resize-none", styles.focus)} 
                    placeholder="How can we help you?" 
                />
            </div>

            <button 
                type="submit"
                className={cn("w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] text-white", styles.button)}
            >
                Send Message
            </button>
        </form>
      </div>

    </div>
  );
}