'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const photos = [
  { src: '/images/IMG_4789.jpg', span: 'row-span-2', category: 'celebrity' },
  { src: '/images/IMG_4774.jpg', span: 'row-span-1', category: 'lifestyle' },
  { src: '/images/IMG_4776.jpg', span: 'row-span-2', category: 'cars' },
  { src: '/images/IMG_4775.jpg', span: 'row-span-1', category: 'skyline' },
  { src: '/images/IMG_4777.jpg', span: 'row-span-2', category: 'lifestyle' },
  { src: '/images/IMG_4773.jpg', span: 'row-span-1', category: 'lifestyle' },
  { src: '/images/IMG_4772.jpg', span: 'row-span-2', category: 'cars' },
  { src: '/images/IMG_4770.jpg', span: 'row-span-1', category: 'lifestyle' },
  { src: '/images/IMG_4771.jpg', span: 'row-span-2', category: 'skyline' },
  { src: '/images/IMG_4783.jpg', span: 'row-span-1', category: 'lifestyle' },
  { src: '/images/IMG_4768.jpg', span: 'row-span-2', category: 'cars' },
  { src: '/images/IMG_4769.jpg', span: 'row-span-1', category: 'lifestyle' },
  { src: '/images/IMG_4782.jpg', span: 'row-span-2', category: 'lifestyle' },
  { src: '/images/IMG_4780.jpg', span: 'row-span-1', category: 'skyline' },
  { src: '/images/IMG_4794.jpg', span: 'row-span-2', category: 'lifestyle' },
  { src: '/images/IMG_4781.jpg', span: 'row-span-1', category: 'lifestyle' },
  { src: '/images/IMG_4785.jpg', span: 'row-span-2', category: 'cars' },
  { src: '/images/IMG_4791.jpg', span: 'row-span-1', category: 'lifestyle' },
  { src: '/images/IMG_4790.jpg', span: 'row-span-2', category: 'lifestyle' },
  { src: '/images/IMG_4788.jpg', span: 'row-span-1', category: 'skyline' },
  { src: '/images/IMG_4778.jpg', span: 'row-span-2', category: 'lifestyle' },
  { src: '/images/IMG_4779.jpg', span: 'row-span-1', category: 'lifestyle' },
  { src: '/images/IMG_4784.jpg', span: 'row-span-2', category: 'lifestyle' },
  { src: '/images/IMG_4786.jpg', span: 'row-span-1', category: 'lifestyle' },
  { src: '/images/IMG_4787.jpg', span: 'row-span-2', category: 'cars' },
  { src: '/images/IMG_4792.jpg', span: 'row-span-1', category: 'lifestyle' },
  { src: '/images/IMG_4793.jpg', span: 'row-span-2', category: 'lifestyle' },
];

export default function Home() {
  const [filter, setFilter] = useState('all');

  const filteredPhotos = filter === 'all'
    ? photos
    : photos.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="text-2xl sm:text-4xl font-black"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              EVAN PHOTOS
            </span>
          </motion.h1>

          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="flex gap-2 sm:gap-4 text-xs sm:text-sm"
          >
            {['all', 'celebrity', 'cars', 'lifestyle', 'skyline'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold uppercase transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CAPTURING THE CULTURE
            </span>
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            Gen Z Photographer | Celebrities · Lifestyle · Luxury Cars
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3 sm:gap-4"
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-lg ${photo.span} group cursor-pointer`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-full"
              >
                <Image
                  src={photo.src}
                  alt={`Evan Photos - ${photo.category}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </motion.div>

              {/* Gradient Overlay on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/40 to-transparent flex items-end p-4"
              >
                <span className="text-white font-bold uppercase tracking-wider text-sm">
                  {photo.category}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8 px-4">
        <div className="max-w-screen-2xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            © 2024 Evan Photos. All Rights Reserved.
          </p>
          <p className="text-white/60 mt-2 text-xs">
            Available for bookings and collaborations
          </p>
        </div>
      </footer>
    </div>
  );
}
