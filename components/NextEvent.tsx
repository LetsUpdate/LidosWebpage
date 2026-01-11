'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function NextEvent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Next Event
        </motion.h2>
        
        <motion.div
          className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <div className="inline-block bg-accent-warm/10 border border-accent-warm/20 rounded-full px-4 py-2 mb-4">
              <span className="text-accent-warm font-semibold">UPCOMING</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Underground Sessions Vol. 3
            </h3>
            <p className="text-gray-400 text-lg">
              February 15, 2026 • 10 PM - 4 AM
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-300 mb-2">📍 The Basement Club, Downtown</p>
            <p className="text-gray-400 text-sm">
              Limited capacity. Dark vibes. Heavy bass.
            </p>
          </div>
          
          <motion.a
            href="https://www.eventbrite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-accent-warm to-accent-orange text-white font-semibold px-8 py-4 rounded-full text-lg transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Tickets
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
