'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/lindosmusic',
    icon: '📸',
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/lindosmusic',
    icon: '🎵',
  },
  {
    name: 'Spotify',
    url: 'https://spotify.com',
    icon: '🎧',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: '📺',
  },
];

export default function Social() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Connect
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-accent-warm transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl mb-3">{link.icon}</div>
              <div className="text-white font-semibold group-hover:text-accent-warm transition-colors">
                {link.name}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
