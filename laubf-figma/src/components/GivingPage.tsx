import { useState } from 'react';
import { motion } from "motion/react";
import { ArrowRight, Copy, Check, ChevronDown, Heart, ShieldCheck, Mail, Send, MapPin } from 'lucide-react';
import { cn } from "./ui/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface GivingPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function GivingPage({ onNavigate }: GivingPageProps) {
  const [giveAmount, setGiveAmount] = useState<string>('100');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  const handleAmountClick = (amount: string) => {
    setGiveAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setGiveAmount('custom');
  };

  const handleGive = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 1500);
  };

  const currentAmount = giveAmount === 'custom' ? customAmount : giveAmount;

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0d0d0d] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1714746643386-b0b145e9cdd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xkaW5nJTIwaGFuZHMlMjBwcmF5aW5nJTIwY2luZW1hdGljfGVufDF8fHx8MTc2NzY4NDYzOXww&ixlib=rb-4.1.0&q=80&w=1920" 
            alt="Hands praying" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-['Helvetica_Neue',sans-serif] font-medium text-[60px] md:text-[100px] lg:text-[140px] tracking-tighter leading-none mb-6">
              GIVING
            </h1>
            <p className="font-['DM_Serif_Text',serif] italic text-2xl md:text-4xl text-gray-300 max-w-2xl mx-auto">
              "For where your treasure is, there your heart will be also."
            </p>
            <p className="text-sm md:text-base uppercase tracking-widest mt-4 text-gray-500 font-bold">
              Matthew 6:21
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section - Editorial Style (Moved to Top) */}
      <section className="py-24 px-6 bg-white relative z-20 -mt-20 rounded-t-[40px]">
        <div className="container mx-auto">
           <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-2 lg:order-1">
                 <h2 className="text-4xl md:text-5xl font-['DM_Serif_Text',serif] italic mb-6">Global Missions</h2>
                 <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    We are committed to the Great Commission, supporting missionaries and local chapters across Africa, Europe, and Asia. Your giving helps build infrastructure, provide medical aid, and resource bible teachers in developing nations.
                 </p>
                 <a href="#" className="inline-flex items-center text-black font-bold uppercase tracking-widest text-sm hover:text-[#3667B1] transition-colors border-b border-black pb-1 hover:border-[#3667B1]">
                    Read Mission Reports <ArrowRight className="w-4 h-4 ml-2" />
                 </a>
              </div>
              <div className="order-1 lg:order-2">
                 <div className="aspect-[4/3] overflow-hidden rounded-none bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1591242306913-bc3c311bb272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRoZW50aWMlMjBjb21tdW5pdHklMjBnYXRoZXJpbmclMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc2NzY4NDYzOXww&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Mission work" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
              </div>
           </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div>
                 <div className="aspect-[4/3] overflow-hidden rounded-none bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1644046267530-a4332e5f9f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwZGFyayUyMG1vb2R5JTIwYWVzdGhldGljJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3Njc2ODQ2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Local community" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
              </div>
              <div>
                 <h2 className="text-4xl md:text-5xl font-['DM_Serif_Text',serif] italic mb-6">Local Community</h2>
                 <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    From food drives to youth mentorship programs, we invest deeply in Downey and Los Angeles County. We believe the church should be a beacon of hope and practical help to our neighbors.
                 </p>
                 <a href="#" className="inline-flex items-center text-black font-bold uppercase tracking-widest text-sm hover:text-[#3667B1] transition-colors border-b border-black pb-1 hover:border-[#3667B1]">
                    See Local Outreach <ArrowRight className="w-4 h-4 ml-2" />
                 </a>
              </div>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                 <h2 className="text-4xl md:text-5xl font-['DM_Serif_Text',serif] italic mb-6">Next Gen Ministry</h2>
                 <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Our campus ministries at CSULA, Cal Poly, and surrounding universities provide students with spiritual guidance, community, and leadership training during their formative years.
                 </p>
                 <a href="#" className="inline-flex items-center text-black font-bold uppercase tracking-widest text-sm hover:text-[#3667B1] transition-colors border-b border-black pb-1 hover:border-[#3667B1]">
                    Support Students <ArrowRight className="w-4 h-4 ml-2" />
                 </a>
              </div>
              <div className="order-1 lg:order-2">
                 <div className="aspect-[4/3] overflow-hidden rounded-none bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1610617708800-33cccf7e6b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxfHxzdHVkZW50JTIwcmVhZGluZyUyMGJpYmxlJTIwbW9vZHl8ZW58MXx8fHwxNzY3Njg0NjM5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Student ministry" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Main Donation Section (Moved below Impact) */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-['DM_Serif_Text',serif] italic mb-6">Ready to Give?</h2>
            <p className="text-lg text-gray-600 font-['Inter',sans-serif] max-w-2xl mx-auto leading-relaxed">
              Your generosity fuels our mission to raise disciples and serve our community. 
              Choose a method below to contribute.
            </p>
          </div>

          <Tabs defaultValue="online" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-transparent border-b border-gray-200 w-full max-w-md h-auto p-0 gap-8 justify-center rounded-none">
                <TabsTrigger 
                  value="online" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black text-gray-400 pb-4 rounded-none text-lg font-bold tracking-tight px-0 transition-all hover:text-gray-600"
                >
                  Give Online
                </TabsTrigger>
                <TabsTrigger 
                  value="zelle" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black text-gray-400 pb-4 rounded-none text-lg font-bold tracking-tight px-0 transition-all hover:text-gray-600"
                >
                  Zelle
                </TabsTrigger>
                <TabsTrigger 
                  value="in-person" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black text-gray-400 pb-4 rounded-none text-lg font-bold tracking-tight px-0 transition-all hover:text-gray-600"
                >
                  In-Person
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="online" className="focus-visible:outline-none">
              <div className="max-w-xl mx-auto">
                {step === 1 ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    {/* Amount Selection */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-end mb-2">
                         <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Select Amount</span>
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        {['50', '100', '250', '500'].map((amount) => (
                          <button
                            key={amount}
                            onClick={() => handleAmountClick(amount)}
                            className={cn(
                              "py-4 rounded-xl text-lg font-bold transition-all duration-200 border",
                              giveAmount === amount
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-900 border-gray-200 hover:border-gray-400"
                            )}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div className="relative mt-4">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-serif italic text-xl">$</span>
                        <input
                          type="number"
                          placeholder="Other Amount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className={cn(
                            "w-full pl-8 pr-4 py-4 rounded-xl border font-bold text-lg outline-none transition-all",
                            giveAmount === 'custom' 
                              ? "border-black ring-1 ring-black" 
                              : "border-gray-200 focus:border-gray-400"
                          )}
                        />
                      </div>
                    </div>

                    {/* Frequency */}
                    <div className="space-y-4">
                       <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Frequency</span>
                       <div className="flex p-1 bg-white border border-gray-200 rounded-full">
                          <button
                            onClick={() => setFrequency('one-time')}
                            className={cn(
                              "flex-1 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all",
                              frequency === 'one-time'
                                ? "bg-black text-white shadow-sm"
                                : "text-gray-500 hover:text-gray-900"
                            )}
                          >
                            One-Time
                          </button>
                          <button
                            onClick={() => setFrequency('monthly')}
                            className={cn(
                              "flex-1 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all",
                              frequency === 'monthly'
                                ? "bg-black text-white shadow-sm"
                                : "text-gray-500 hover:text-gray-900"
                            )}
                          >
                            Monthly
                          </button>
                       </div>
                    </div>

                    <button 
                      onClick={handleGive}
                      disabled={(!currentAmount || parseInt(currentAmount) <= 0) || isProcessing}
                      className="w-full py-5 bg-[#3667B1] hover:bg-[#2a5291] text-white rounded-full text-lg font-bold transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                       {isProcessing ? "Processing..." : `Give $${currentAmount || '0'} Now`}
                       {!isProcessing && <ArrowRight className="w-5 h-5" />}
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4" />
                      Secure 256-bit Encryption
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 border border-gray-100 rounded-2xl bg-white"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-['DM_Serif_Text',serif] italic text-gray-900 mb-4">Thank You</h3>
                    <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                      Your generosity supports the mission and community of LA UBF. A receipt has been sent to your email.
                    </p>
                    <button 
                      onClick={() => setStep(1)}
                      className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1 hover:text-[#3667B1] hover:border-[#3667B1] transition-colors"
                    >
                      Give Again
                    </button>
                  </motion.div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="zelle" className="focus-visible:outline-none">
               <div className="max-w-2xl mx-auto bg-white rounded-2xl p-10 text-center border border-gray-200">
                  <div className="w-16 h-16 bg-[#6d1ed4]/10 text-[#6d1ed4] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Zelle Transfer</h3>
                  <p className="text-gray-600 mb-8">Send donations directly with zero fees.</p>
                  
                  <div 
                    className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 group cursor-pointer hover:border-[#6d1ed4] transition-all shadow-sm hover:shadow-md"
                    onClick={() => navigator.clipboard.writeText('giving@laubf.org')}
                  >
                      <div className="text-left">
                        <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Recipient Email</div>
                        <div className="font-mono font-bold text-xl text-gray-900">giving@laubf.org</div>
                      </div>
                      <div className="flex items-center gap-2 text-[#6d1ed4] font-bold text-sm bg-[#6d1ed4]/5 px-4 py-2 rounded-lg">
                        <Copy className="w-4 h-4" /> Copy
                      </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                     *Please include your name and fund designation in the memo line.
                  </p>
               </div>
            </TabsContent>

            <TabsContent value="in-person" className="focus-visible:outline-none">
               <div className="max-w-2xl mx-auto bg-white rounded-2xl p-10 text-center border border-gray-200">
                  <div className="w-16 h-16 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Give In Person</h3>
                  <p className="text-gray-600 mb-8">Join us for Sunday Service at 11:00 AM and give your offering.</p>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-lg leading-relaxed font-medium text-gray-800 shadow-sm inline-block min-w-[300px]">
                      LA UBF Church<br/>
                      9132 Firestone Blvd.<br/>
                      Downey, CA 90241
                  </div>
               </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0d0d0d] text-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-['DM_Serif_Text',serif] italic text-center mb-16">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-b border-white/20 px-0">
              <AccordionTrigger className="hover:no-underline font-bold text-lg py-6">
                Is my donation tax-deductible?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pb-6 text-base">
                Yes. LA UBF is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent of the law. You will receive an annual giving statement for your tax records.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-white/20 px-0">
              <AccordionTrigger className="hover:no-underline font-bold text-lg py-6">
                Can I designate my offering?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pb-6 text-base">
                Absolutely. While general offerings go towards the operating expenses and ministries of the church, you can designate your gift to specific funds like "Missions," "Relief Fund," or "Building Fund" by adding a note in the memo line or selecting the fund in the dropdown menu online.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-white/20 px-0">
              <AccordionTrigger className="hover:no-underline font-bold text-lg py-6">
                Who do I contact for help?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pb-6 text-base">
                For any questions regarding your donation history, statements, or technical issues, please contact our finance team at <a href="mailto:finance@laubf.org" className="text-white font-bold hover:underline">finance@laubf.org</a>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

    </div>
  );
}
