import { MapPin, Clock, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-t border-gray-200">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-0 border border-black">
          
          {/* Info Side - "The Directory" Style */}
          <div className="flex flex-col p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black">
            <div className="flex items-center gap-4 mb-12">
               <span className="font-serif italic text-2xl text-gray-400">07</span>
               <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#3667B1]">
                 Directory
               </p>
            </div>

            <h2 className="font-serif italic text-black text-6xl md:text-7xl leading-none mb-16">
              Visit Us
            </h2>

            <div className="space-y-12">
              <div className="group">
                <div className="flex items-baseline justify-between border-b border-black pb-4 mb-4">
                  <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-gray-500">Service Time</h3>
                  <span className="font-serif italic text-2xl text-black">Sunday 10:00 AM</span>
                </div>
                <p className="font-sans text-xs text-gray-500 uppercase tracking-wide pl-4 border-l border-gray-200">Main Service • Fellowship to follow</p>
              </div>

              <div className="group">
                <div className="flex items-baseline justify-between border-b border-black pb-4 mb-4">
                  <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-gray-500">Location</h3>
                  <div className="text-right">
                    <span className="font-serif italic text-2xl text-black block">123 Main Street</span>
                    <span className="font-serif italic text-xl text-gray-400 block">Los Angeles, CA</span>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-black hover:text-[#3667B1] pl-4 border-l-2 border-transparent hover:border-[#3667B1] transition-all">
                  Get Directions <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                 <div>
                   <h4 className="font-sans font-bold text-gray-400 uppercase tracking-widest text-[10px] mb-2">Email</h4>
                   <a href="mailto:info@laubf.org" className="font-serif text-xl hover:text-[#3667B1] italic block border-b border-gray-200 pb-1">info@laubf.org</a>
                 </div>
                 <div>
                   <h4 className="font-sans font-bold text-gray-400 uppercase tracking-widest text-[10px] mb-2">Phone</h4>
                   <a href="tel:3105551234" className="font-serif text-xl hover:text-[#3667B1] italic block border-b border-gray-200 pb-1">(310) 555-1234</a>
                 </div>
              </div>

            </div>
          </div>

          {/* Map Side - "Printed Map" Style */}
          <div className="relative min-h-[400px] bg-gray-100 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211846.34023034456!2d-118.41173159999999!3d34.020161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LA UBF Location"
              className="w-full h-full opacity-80 mix-blend-multiply"
            />
            {/* Stamp Overlay */}
            <div className="absolute top-8 right-8 bg-white border border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
               <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Parking Info</span>
               <span className="block text-lg font-serif italic text-black">Free on-site</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
