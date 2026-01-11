'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #FF6B35 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #F7931E 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, #FDC830 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #FF6B35 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-accent-warm via-accent-orange to-accent-yellow bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LINDOS
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Afro / Latin / Tech House
        </motion.p>
        
        <motion.div
          className="w-16 h-1 bg-gradient-to-r from-accent-warm to-accent-yellow mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent-warm rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-accent-warm rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
