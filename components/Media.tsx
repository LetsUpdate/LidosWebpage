'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Media() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience the Sound
        </motion.h2>
        
        <motion.div
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-zinc-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/jNQXAC9IVRw"
            title="Lindos Mix"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
        
        <motion.p
          className="text-center text-gray-400 mt-6 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Live set from our latest underground session
        </motion.p>
      </div>
    </section>
  );
}
