import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  mapUrl: string;
  description: string;
  image: string;
}

export default function EventCard({ title, date, time, location, mapUrl, description, image }: EventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="frosted-card rounded-[40px] overflow-hidden flex flex-col md:flex-row h-full group relative"
    >
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none rotate-90 scale-x-[-1]">
        <img 
          src="https://images.unsplash.com/photo-1523759533935-e4b77039776d?q=80&w=1935&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/20 to-transparent" />
      </div>
      
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-brand-rose-light text-[10px] uppercase tracking-[0.4em] font-bold">
              The Itinerary
            </span>
            <span className="px-3 py-1 bg-rose-100/50 text-brand-rose rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/40">
              {date.split(',')[1]?.split(' ')[1]} {date.split(',')[1]?.split(' ')[2]?.replace('th', '')}
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif italic text-brand-ink mb-4">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed font-light">{description}</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 frosted-inner p-4 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-brand-rose-light">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700">{date}</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Date</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 frosted-inner p-4 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-brand-rose-light">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700">{time}</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Time</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 frosted-inner p-4 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-brand-rose-light">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700">{location}</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Location</p>
            </div>
          </div>
        </div>
        
        <motion.a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center justify-center px-10 py-3 bg-brand-rose-light text-white rounded-full text-[11px] uppercase tracking-[0.2em] font-bold shadow-lg shadow-rose-100 transition-colors hover:bg-brand-rose"
        >
          View on Maps
        </motion.a>
      </div>
    </motion.div>
  );
}
