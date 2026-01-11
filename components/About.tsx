'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Vibe
        </motion.h2>
        
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-accent-warm to-accent-yellow mx-auto mb-12"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Deep in the underground, where rhythm meets soul. 
          We blend the raw energy of Afro beats, the passion of Latin grooves, 
          and the hypnotic pulse of Tech House.
        </motion.p>
        
        <motion.p
          className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          This is Lindos. Where the dance floor becomes a ritual, 
          and every beat tells a story.
        </motion.p>
      </div>
    </section>
  );
}
