import { ArrowRight, BookOpen, Heart, Globe, Users, Flame, Anchor } from 'lucide-react';
import StatementOfFaithSection from './figma/StatementOfFaithSection';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <span className="inline-block px-4 py-1 rounded-full border border-black/20 text-sm font-bold uppercase tracking-wider mb-8">
            Who We Are
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
            Dedicated to<br />
            <span className="text-[#3667B1]">Christ & His Kingdom</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-end">
             <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-xl">
               University Bible Fellowship (UBF) is an international evangelical church dedicated to helping college students grow as lifelong disciples of Jesus.
             </p>
             <div className="h-px bg-black/10 w-full mb-4" />
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="w-[95%] max-w-[1600px] mx-auto mb-32">
        <div className="aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden relative">
           <img 
             src="https://images.unsplash.com/photo-1557240503-5ef8ff7a34c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000" 
             alt="Worship and Community" 
             className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
           />
           <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>

      {/* Value Proposition / Mission */}
      <section className="py-20 px-6">
        <div className="w-[90%] max-w-[1400px] mx-auto">
           <div className="grid lg:grid-cols-12 gap-12">
             <div className="lg:col-span-4">
               <h2 className="text-4xl font-black uppercase tracking-tight sticky top-32">Our Mission</h2>
             </div>
             <div className="lg:col-span-8 space-y-12">
               <p className="text-3xl md:text-5xl font-bold leading-tight">
                 Our main focus is to <span className="text-[#3667B1]">study the Bible</span>, grow in the grace and knowledge of our Lord Jesus Christ, and live according to his teachings as his disciples.
               </p>
               <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-600 leading-relaxed">
                 <p>
                   We especially pray to reach college students and help them grow as his lifelong disciples. Our goal is to obey our Lord’s commands to love one another and to go and make disciples of all nations (Jn 13:34; Mt 28:18-20).
                 </p>
                 <p>
                   We pray that God may continue to call and raise lay missionaries through us and send them to the ends of the earth (Ac 1:8).
                 </p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-32 bg-black text-white">
        <div className="w-[90%] max-w-[1400px] mx-auto px-6">
          <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase mb-20">
            How We Grow
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group hover:bg-[#3667B1] transition-colors duration-500 min-h-[400px]">
               <div>
                 <BookOpen className="w-12 h-12 mb-8 text-zinc-500 group-hover:text-white transition-colors" />
                 <h3 className="text-3xl font-bold uppercase mb-4">Bible Study</h3>
                 <p className="text-zinc-400 group-hover:text-white/90 leading-relaxed">
                   Through One-to-One Bible studies, individuals explore the truth with a mentor personally. We also have group studies centered around different campuses and interests.
                 </p>
               </div>
               <span className="text-8xl font-black text-zinc-800 group-hover:text-white/20 self-end -mb-4 -mr-4">01</span>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group hover:bg-[#3667B1] transition-colors duration-500 min-h-[400px]">
               <div>
                 <Flame className="w-12 h-12 mb-8 text-zinc-500 group-hover:text-white transition-colors" />
                 <h3 className="text-3xl font-bold uppercase mb-4">Discipleship</h3>
                 <p className="text-zinc-400 group-hover:text-white/90 leading-relaxed">
                   We encourage students to grow as disciples of Jesus, adopting His image and following His footsteps through lifelong commitment and sharing life together.
                 </p>
               </div>
               <span className="text-8xl font-black text-zinc-800 group-hover:text-white/20 self-end -mb-4 -mr-4">02</span>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group hover:bg-[#3667B1] transition-colors duration-500 min-h-[400px]">
               <div>
                 <Users className="w-12 h-12 mb-8 text-zinc-500 group-hover:text-white transition-colors" />
                 <h3 className="text-3xl font-bold uppercase mb-4">Fellowship</h3>
                 <p className="text-zinc-400 group-hover:text-white/90 leading-relaxed">
                   Coming together to support one another allows us to learn, gain strength, and show the world who God is through worship, sports, and retreats.
                 </p>
               </div>
               <span className="text-8xl font-black text-zinc-800 group-hover:text-white/20 self-end -mb-4 -mr-4">03</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <StatementOfFaithSection />

      {/* Global Mission / Bottom */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="w-[90%] max-w-[1400px] mx-auto text-center">
           <Globe className="w-16 h-16 mx-auto mb-8 text-[#3667B1]" />
           <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">A Global Movement</h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
             We minister in a variety of ways: Bible studies on campus, worship, fellowship, evangelism, discipleship training, and sending missionaries to global mission fields.
           </p>
           
           <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black uppercase mb-6">Want to learn more?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <a href="#" className="px-8 py-4 bg-[#3667B1] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">
                     Contact Us
                   </a>
                   <a href="#" className="px-8 py-4 bg-white border border-gray-200 text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                     View Ministries
                   </a>
                </div>
              </div>
              
              {/* Abstract decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#3667B1]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3667B1]/5 rounded-full translate-x-1/2 translate-y-1/2" />
           </div>
        </div>
      </section>
    </div>
  );
}
