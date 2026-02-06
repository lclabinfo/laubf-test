import Slider from "react-slick";
// Removing direct CSS imports that cause build errors with asset loading
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Heart, Baby, Users, Music, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';
import { campuses } from '../lib/campuses';

// Minimal Slick CSS to make the carousel function without external files
const slickStyles = `
.slick-slider { position: relative; display: block; box-sizing: border-box; user-select: none; touch-action: pan-y; -webkit-tap-highlight-color: transparent; }
.slick-list { position: relative; display: block; overflow: hidden; margin: 0; padding: 0; }
.slick-list:focus { outline: none; }
.slick-list.dragging { cursor: pointer; cursor: hand; }
.slick-slider .slick-track, .slick-slider .slick-list { transform: translate3d(0, 0, 0); }
.slick-track { position: relative; top: 0; left: 0; display: block; margin-left: auto; margin-right: auto; }
.slick-track:before, .slick-track:after { display: table; content: ''; }
.slick-track:after { clear: both; }
.slick-loading .slick-track { visibility: hidden; }
.slick-slide { display: none; float: left; height: 100%; min-height: 1px; }
.slick-slide > div { height: 100%; }
.slick-initialized .slick-slide { display: block; }
.slick-loading .slick-slide { visibility: hidden; }
.slick-vertical .slick-slide { display: block; height: auto; border: 1px solid transparent; }
.slick-arrow.slick-hidden { display: none; }

/* Custom Dots & Arrows */
.slick-dots { bottom: -40px; position: absolute; width: 100%; text-align: center; padding: 0; margin: 0; list-style: none; }
.slick-dots li { position: relative; display: inline-block; width: 10px; height: 10px; margin: 0 5px; padding: 0; cursor: pointer; }
.slick-dots li button { font-size: 0; line-height: 0; display: block; width: 10px; height: 10px; padding: 5px; cursor: pointer; color: transparent; border: 0; outline: none; background: #e5e7eb; border-radius: 50%; transition: all 0.3s; }
.slick-dots li.slick-active button { background: #3667B1; transform: scale(1.2); }
`;

// Custom Arrows
function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors hidden md:block"
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-gray-400 hover:text-[#3667B1]" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors hidden md:block"
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-gray-400 hover:text-[#3667B1]" />
    </div>
  );
}

interface MinistriesPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function MinistriesPage({ onNavigate }: MinistriesPageProps) {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  const nextGenMinistries = [
    {
      id: 'hbf',
      title: 'High School (HBF)',
      description: 'High School Bible Fellowship challenges students to own their faith, ask deep questions, and build lasting friendships centered on the Gospel.',
      age: '9th to 12th Grade',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'jbf',
      title: 'Junior High (JBF)',
      description: 'Junior Bible Fellowship helps middle schoolers navigate their faith during these formative years with engaging bible study, mentorship, and fun activities.',
      age: '6th to 8th Grade',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'bbf-cbf',
      title: 'Children (BBF/CBF)',
      description: 'Bright Blossom Fellowship (BBF) and Children\'s Bible Fellowship (CBF) provide a nurturing environment for kids to learn about Jesus through Bible stories, crafts, and play.',
      age: 'Pre-K to 5th Grade',
      icon: Baby,
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <style>{slickStyles}</style>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0d0d0d] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
            alt="Community gathering" 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-['Helvetica_Neue',sans-serif] font-medium text-[60px] md:text-[100px] lg:text-[140px] tracking-tighter leading-none mb-6">
              MINISTRIES
            </h1>
            <p className="font-['DM_Serif_Text',serif] italic text-2xl md:text-4xl text-gray-300 max-w-2xl mx-auto">
              "Equipping the saints for the work of ministry, for building up the body of Christ."
            </p>
            <p className="text-sm md:text-base uppercase tracking-widest mt-4 text-gray-500 font-bold">
              Ephesians 4:12
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-['DM_Serif_Text',serif] italic mb-8 text-gray-900">
             One Church, Many Communities
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-['Inter',sans-serif]">
             At LA UBF, we believe that spiritual growth happens best in community. Whether you are a college student, a working professional, or a parent, there is a place for you here. Our ministries are designed to help you know God deeply, find authentic community, and serve the world with the love of Christ.
          </p>
        </div>
      </section>

      {/* College & Campus Ministry */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
             <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3667B1] mb-4">
                    <GraduationCap className="w-4 h-4" />
                    Campus Mission
                </div>
                <h2 className="text-4xl md:text-5xl font-['DM_Serif_Text',serif] italic mb-6 text-gray-900">
                   College Ministries
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                   We are passionate about reaching college students with the Gospel. Our campus ministries provide bible study, mentorship, and a "home away from home" for students at universities across Los Angeles.
                </p>
             </div>
             <button 
               onClick={() => onNavigate('yam-college')}
               className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#3667B1] hover:border-[#3667B1] transition-all shrink-0"
             >
                View Ministry Page <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campuses.map((campus) => (
                <div 
                  key={campus.id}
                  onClick={() => onNavigate('campus-detail', campus.id)}
                  className="group bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-gray-200 relative">
                      <img 
                        src={campus.imageUrl} 
                        alt={campus.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[#3667B1] transition-colors">{campus.name}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed flex-1">
                        {campus.description}
                      </p>
                      <div className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#3667B1] transition-colors mt-auto">
                        View Campus <ChevronRight className="w-3 h-3 ml-1" />
                      </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adults & Small Groups (Moved up) */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
         <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl md:text-5xl font-['DM_Serif_Text',serif] italic mb-6">
                     Adults & Small Groups
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed mb-8">
                     Life is better together. Our small groups and adult ministries provide a space for deep fellowship, prayer, and bible study. Whether you are single, married, or a senior, there is a community waiting for you.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                           <Users className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-2">Group Bible Studies</h4>
                           <p className="text-gray-500 text-sm">Weekly gatherings to study God's word and share life together.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                           <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-2">Discipleship</h4>
                           <p className="text-gray-500 text-sm">One-on-one mentorship to help you grow in your walk with Christ.</p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-10">
                     <button 
                        onClick={() => onNavigate('adults')}
                        className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
                     >
                        View Adults Ministry
                     </button>
                  </div>
               </div>
               
               <div className="relative">
                  <div className="aspect-square rounded-full overflow-hidden border-8 border-white/5 bg-gray-800">
                      <img 
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000"
                        alt="Adult fellowship"
                        className="w-full h-full object-cover opacity-80"
                      />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Next Gen Ministry (Includes High School) */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">
                <Heart className="w-4 h-4" />
                Next Generation
             </div>
             <h2 className="text-4xl md:text-5xl font-['DM_Serif_Text',serif] italic mb-6 text-gray-900">
                Youth & Children
             </h2>
             <p className="text-lg text-gray-600 leading-relaxed">
                We believe in investing in the next generation. Our youth ministries provide age-appropriate teaching, fun activities, and mentorship to help young people grow in their faith.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {nextGenMinistries.map((ministry) => (
                <div key={ministry.id} className="relative group cursor-pointer" onClick={() => onNavigate(ministry.id)}>
                   <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-gray-100">
                      <img 
                        src={ministry.image}
                        alt={ministry.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute bottom-0 left-0 p-8 w-full">
                         <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-white">
                            <ministry.icon className="w-5 h-5" />
                         </div>
                         <h3 className="text-2xl font-bold text-white mb-2">{ministry.title}</h3>
                         <div className="text-xs font-bold uppercase tracking-widest text-white/80 mb-4">{ministry.age}</div>
                         <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                            {ministry.description}
                         </p>
                         <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                            Learn More <ArrowRight className="w-4 h-4" />
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}