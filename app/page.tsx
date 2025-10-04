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
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-2xl sm:text-4xl font-black"
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #c084fc, #ec4899, #fb923c, #ec4899, #c084fc)',
                backgroundSize: '200% 200%',
              }}
              className="bg-clip-text text-transparent"
            >
              EVAN PHOTOS
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 sm:gap-4 text-xs sm:text-sm"
          >
            <a
              href="https://www.instagram.com/evanburger_photography/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/evan__photos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
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
          <motion.h2
            className="text-4xl sm:text-6xl md:text-7xl font-black mb-4"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899, #a78bfa, #60a5fa)',
                backgroundSize: '200% 200%',
              }}
              className="bg-clip-text text-transparent"
            >
              CAPTURING THE LIFE
            </motion.span>
          </motion.h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            Celebrities · Lifestyle · Luxury
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -3, 0],
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.05 },
                scale: { duration: 0.5, delay: index * 0.05 },
                y: {
                  duration: 3 + (index % 5),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }
              }}
              className={`relative overflow-hidden rounded-lg ${photo.span} group cursor-pointer`}
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
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
