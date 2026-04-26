/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, Music, Camera, Gift, MapPin, ChevronDown } from 'lucide-react';
import Countdown from './components/Countdown';
import EventCard from './components/EventCard';
import deeksha from './assets/deekshashreeju.png';
import engagement from './assets/engagementimg.JPG';
import haldiimg from './assets/haldiimg.JPG';
import mehendiimg from './assets/mehendiimg.JPG';
import weddinggimg from './assets/weddingimg.JPG';
import bg from './assets/bg.jpg';
import Carousel from './components/Carousel';

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const weddingDate = "2026-06-25T18:00:00";

  const coupleImages = [
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
      caption: "Everlasting Moments",
      subcaption: "Captured in Love"
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      caption: "A New Chapter",
      subcaption: "Growing Together"
    },
    {
      url: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop",
      caption: "Pure Joy",
      subcaption: "Happiness Shared"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Background Blobs and Floral Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-rose-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-rose-50/30 rounded-full blur-[150px]" />

        {/* Floating Flowers */}
        <motion.img
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop"
          className="absolute top-20 right-[-50px] w-64 h-64 opacity-[0.07] grayscale brightness-150 rotate-12"
          alt=""
          referrerPolicy="no-referrer"
        />

        <motion.img
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop"
          className="absolute bottom-40 left-[-80px] w-80 h-80 opacity-[0.05] grayscale brightness-150 -rotate-12"
          alt=""
          referrerPolicy="no-referrer"
        />

        <motion.img
          animate={{
            x: [0, 15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          src="https://images.unsplash.com/photo-1523759533935-e4b77039776d?q=80&w=1935&auto=format&fit=crop"
          className="absolute top-[60%] right-10 w-48 h-48 opacity-[0.06] grayscale brightness-200"
          alt=""
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 frosted-glass py-3 px-8 md:px-12 flex justify-between items-center rounded-full w-[90%] max-w-4xl">
        <span className="font-serif text-xl tracking-tighter italic text-brand-rose">D & S</span>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
          <a href="#ceremony" className="hover:text-brand-rose transition-colors">Ceremony</a>
          <a href="#events" className="hover:text-brand-rose transition-colors">Events</a>
          {/* <a href="#registry" className="hover:text-brand-rose transition-colors">Registry</a> */}
          {/* <a href="#rsvp" className="text-brand-rose px-4 py-1.5 frosted-inner rounded-full hover:bg-white/80 transition-colors">RSVP</a> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative md:h-[900px] flex flex-col items-center justify-center px-4 overflow-hidden z-10">
        {/* <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={bg}
            alt="Wedding flowers"
            className="w-full h-full object-cover object-center opacity-50"
            referrerPolicy="no-referrer"
          />
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center w-full max-w-5xl mx-auto frosted-glass py-20 px-4 md:px-8 rounded-[40px] overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={bg}  
              className="w-full h-full object-cover opacity-15"
              alt="background"
            />
          </div>

          {/* Optional overlay (for better readability) */}
          {/* <div className="absolute inset-0 bg-white/40 z-0"></div> */}
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200 opacity-50" />

          <span className="text-brand-rose-light text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-bold mb-4 block">Save The Date</span>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif italic text-brand-ink mb-6 md:mb-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-12">
            <span>Deeksha</span>
            <span className="text-brand-rose-soft font-light text-3xl md:text-5xl italic">&</span>
            <span>Sreeju</span>
          </h1>

          <div className="flex items-center justify-center gap-4 md:gap-6 text-brand-rose-soft mb-6 md:mb-8">
            <div className="hidden sm:block h-[1px] w-8 md:w-24 bg-brand-rose-soft/50" />
            <p className="text-gray-500 font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold text-sm md:text-md whitespace-nowrap">
              June 25th, 2026 • Alappuzha
            </p>
            <div className="hidden sm:block h-[1px] w-8 md:w-24 bg-brand-rose-soft/50" />
          </div>

          <div className="flex justify-center">
            <img
              src={deeksha}
              className="w-42 object-cover"
              alt="Deeksha&Sreeju_wedding"
              referrerPolicy="no-referrer"
            />
          </div>

          <Countdown targetDate={weddingDate} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 text-brand-rose-light/50 cursor-pointer"
        >
          <a href="#ceremony"><ChevronDown size={32} /></a>
        </motion.div>
      </section>

      {/* Our Story Intro */}
      {/* <section id="ceremony" className="py-24 px-6 md:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="frosted-glass p-12 md:p-20 rounded-[40px]"
          >
            <Heart className="mx-auto text-brand-rose/40 mb-8" size={48} strokeWidth={1} />
            <h2 className="text-4xl md:text-6xl font-serif italic text-brand-ink mb-10">Our Everlasting Love</h2>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12">
              "Love is not just looking at each other, it's looking in the same direction."
              We invite you to join us as we begin our new journey together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 frosted-inner rounded-2xl flex items-center justify-center mb-4 text-brand-rose">
                  <Music size={24} />
                </div>
                <h4 className="font-serif italic text-xl mb-1">Ceremony</h4>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase font-bold">Live Orchestra</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 frosted-inner rounded-2xl flex items-center justify-center mb-4 text-brand-rose">
                  <Camera size={24} />
                </div>
                <h4 className="font-serif italic text-xl mb-1">Photos</h4>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase font-bold">Golden Hour Shots</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 frosted-inner rounded-2xl flex items-center justify-center mb-4 text-brand-rose">
                  <Gift size={24} />
                </div>
                <h4 className="font-serif italic text-xl mb-1">Reception</h4>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase font-bold">Dinner & Dance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Our Moments - Carousel Section */}
      {/* <section className="py-24 px-6 md:px-24 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="frosted-glass p-4 rounded-[50px] luxury-shadow overflow-hidden"
          >
            <Carousel images={coupleImages} />
          </motion.div>
        </div>
      </section> */}

      {/* Events Section */}
      <section id="events" className="py-24 px-6 md:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-brand-rose-light text-[12px] tracking-[0.4em] uppercase font-bold mb-4 block">The Itinerary</p>
            <h2 className="text-5xl md:text-7xl font-serif italic text-brand-ink mb-6">When & Where</h2>
            <div className="h-[1px] w-24 bg-brand-rose-soft/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 gap-16">
            <EventCard
              title="Mehendi"
              date="Tuesday, June 23rd, 2026"
              time="10:00 AM - 12:00 PM"
              location="Travancore Palace, Cherthala, Alappuzha"
              description="Join us for a vibrant Mehendi celebration filled with colorful henna, joyful music, laughter, and dancing that lights up the evening."
              image={mehendiimg}
              mapUrl="https://maps.app.goo.gl/93JdfkwarhwSkpgq8"
            />

            <EventCard
              title="Haldi Ceremony"
              date="Wednesday, June 24th, 2026"
              time="09:00 AM Onwards"
              location="Travancore Palace, Cherthala, Alappuzha"
              description="Join us for a joyful Haldi ceremony filled with turmeric hues, laughter, playful moments, and blessings that glow as bright as the couple. "
              image={haldiimg}
              mapUrl="https://maps.app.goo.gl/93JdfkwarhwSkpgq8"
            />

            <EventCard
              title="Engagement Ceremony"
              date="Wednesday, June 24th, 2026"
              time="04:30 PM - 06:00 PM"
              location="Travancore Palace, Cherthala, Alappuzha"
              description="Join us for a beautiful evening celebrating love and new beginnings, with elegant moments, heartfelt wishes, and joyful togetherness."
              image={engagement}
              mapUrl="https://maps.app.goo.gl/93JdfkwarhwSkpgq8"
            />

            <EventCard
              title="The Wedding"
              date="Thursday, June 25th, 2026"
              time="08:00 AM - 09:30 AM"
              location="Travancore Palace, Cherthala, Alappuzha"
              description="Join us as we celebrate the sacred union with love, traditions, blessings, and a night filled with unforgettable joy and togetherness"
              image={weddinggimg}
              mapUrl="https://maps.app.goo.gl/93JdfkwarhwSkpgq8"
            />
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      {/* <section id="rsvp" className="py-24 px-6 md:px-24 z-10 relative">
        <div className="max-w-2xl mx-auto frosted-glass p-10 md:p-16 rounded-[40px]">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-serif italic text-brand-ink mb-4">RSVP</h2>
            <p className="text-gray-500 font-light italic">Kindly respond by 10th June, 2026</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-gray-500 font-bold block ml-1">First Name</label>
                <input type="text" className="w-full bg-white/20 border border-white/40 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-rose-light transition-colors font-light" placeholder="Enter First Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-gray-500 font-bold block ml-1">Last Name</label>
                <input type="text" className="w-full bg-white/20 border border-white/40 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-rose-light transition-colors font-light" placeholder="Enter Last Name" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-gray-500 font-bold block ml-1">Total Guests</label>
              <select className="w-full bg-white/20 border border-white/40 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-rose-light transition-colors font-light appearance-none">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-gray-500 font-bold block ml-1">Dietary Requirements</label>
              <textarea className="w-full bg-white/20 border border-white/40 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-rose-light transition-colors font-light h-32 resize-none" placeholder="Any allergies or preferences..." />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-brand-rose-light text-white font-bold h-16 rounded-full text-sm uppercase tracking-widest shadow-xl shadow-rose-100 transition-colors hover:bg-brand-rose"
            >
              Confirm Attendance
            </motion.button>
          </form>
        </div>
      </section> */}

      {/* Registry Section */}
      {/* <section id="registry" className="py-24 px-6 md:px-24 z-10 relative">
         <div className="max-w-4xl mx-auto text-center frosted-glass p-12 md:p-20 rounded-[40px]">
            <h2 className="text-4xl md:text-5xl font-serif italic text-brand-ink mb-10">Gift Registry</h2>
            <p className="text-gray-500 mb-16 max-w-xl mx-auto italic font-light text-lg">
              Your presence is our greatest gift. Should you wish to honor us with a gift, we have selected a few keepsakes to help us start our home together.
            </p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
               <span className="text-3xl font-serif italic text-brand-rose-soft">Tiffany & Co.</span>
               <span className="text-3xl font-serif italic text-brand-rose-soft">Bloomingdale's</span>
               <span className="text-3xl font-serif italic text-brand-rose-soft">Williams Sonoma</span>
            </div>
         </div>
      </section> */}

      {/* Footer */}
      <footer className="py-24 z-10 relative flex flex-col items-center">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <span className="font-script text-5xl text-brand-rose mb-4 relative z-10">D & S</span>
        <p className="font-serif italic text-gray-400 text-xl mb-10">Made with love for eternity</p>
        <div className="h-[1px] w-48 bg-brand-rose-soft/30 mb-10" />
        <p className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-bold">© 2026 Deeksha and Sreeju</p>

        <div className="mt-12 w-full h-1 bg-gradient-to-r from-pink-100 via-rose-200 to-pink-100 opacity-30" />
      </footer>
    </div>
  );
}

