'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F0EBD8]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo.jpg"
              alt="Cafe Consume"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className={`text-2xl font-bold ${scrolled ? 'text-[#F0EBD8]' : 'text-black'}`}>
              CAFÉ CONSUME
            </span>
          </motion.div>
          <div className={`hidden md:flex gap-8 font-medium ${scrolled ? 'text-[#F0EBD8]' : 'text-black'}`}>
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#owners" className="hover:opacity-70 transition-opacity">Our Story</a>
            <a href="#gallery" className="hover:opacity-70 transition-opacity">Gallery</a>
            <a href="#visit" className="hover:opacity-70 transition-opacity">Visit</a>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#visit"
            className="bg-black text-[#F0EBD8] px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Visit Us
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 2, -2, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(240, 235, 216, 0.3))',
              }}
            >
              <motion.div
                animate={{
                  filter: [
                    'hue-rotate(0deg) brightness(1)',
                    'hue-rotate(15deg) brightness(1.1)',
                    'hue-rotate(-15deg) brightness(1.05)',
                    'hue-rotate(0deg) brightness(1)',
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/logo.jpg"
                  alt="Cafe Consume"
                  width={300}
                  height={150}
                  className="mx-auto mb-8 rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-3xl md:text-4xl text-black mb-8 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Your neighborhood spot for exceptional coffee, warm conversations, and unforgettable mornings
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="bg-black text-[#F0EBD8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all"
            >
              Discover Our Story
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#visit"
              className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-[#F0EBD8] transition-all"
            >
              Come Visit
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-black"
          >
            A Place That Feels Like Home
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-black mx-auto mb-12"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <Image
                src="/images/use.jpg"
                alt="Cafe Interior"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Café Consume isn't just a coffee shop—it's a sanctuary in the heart of Chicago where
                every cup is crafted with intention and every guest is welcomed like family.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                From the moment you walk through our doors, you'll feel the warmth of our community,
                the passion in every brew, and the soul we pour into creating a space where memories are made.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Whether you're starting your morning with us, catching up with friends, or finding a
                quiet corner to work, Café Consume is here to make your day a little brighter.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vibe Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-[#F0EBD8]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-black"
          >
            The Vibe
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/use1.jpg",
                title: "Authentic Atmosphere",
                desc: "Where industrial charm meets cozy comfort"
              },
              {
                image: "/images/use2.jpg",
                title: "Crafted With Care",
                desc: "Every detail designed for your experience"
              },
              {
                image: "/images/use3.jpg",
                title: "Community Connection",
                desc: "More than coffee—it's about bringing people together"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-black">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Owners Section */}
      <motion.section
        id="owners"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-black text-[#F0EBD8]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            Meet The Heart Behind The Café
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#F0EBD8] mx-auto mb-12"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <Image
                src="/images/owners.jpg"
                alt="Cafe Owners"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-xl leading-relaxed">
                Behind every perfectly pulled espresso and every warm smile is a team that truly cares.
                Our owners didn't just open a café—they built a home away from home.
              </p>
              <p className="text-xl leading-relaxed">
                With a deep love for coffee culture and an even deeper commitment to community,
                they've poured their hearts into creating a space where everyone belongs.
              </p>
              <p className="text-xl leading-relaxed">
                From sourcing the finest beans to curating the perfect ambiance, every decision
                is made with you in mind. This is more than their business—it's their passion,
                their pride, and their gift to Chicago.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        id="gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-black"
          >
            Moments At Café Consume
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-black mx-auto mb-16"
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/images/use5.jpg",
              "/images/use6.jpg",
              "/images/use7.jpg",
              "/images/use1.jpg",
              "/images/use2.jpg",
              "/images/use3.jpg",
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Visit Section */}
      <motion.section
        id="visit"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-[#F0EBD8]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-black"
          >
            Come Say Hello
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-black mx-auto mb-16"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-black flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Find Us
                </h3>
                <p className="text-xl text-gray-700">
                  3452 S Western Ave<br />
                  Chicago, Illinois 60608
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-black flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hours
                </h3>
                <div className="text-lg text-gray-700 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 3:00 PM</p>
                  <p>Saturday - Sunday: 9:00 AM - 3:00 PM</p>
                </div>
              </div>

              <div className="bg-black text-[#F0EBD8] p-8 rounded-2xl">
                <p className="text-2xl font-bold mb-4">We can't wait to serve you.</p>
                <p className="text-lg">
                  Whether it's your first visit or you're a regular, you're always welcome here.
                  Pull up a chair, grab a cup, and become part of our story.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden shadow-2xl h-[600px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.5!2d-87.6854!3d41.8308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d123456789a%3A0x1234567890abcdef!2s3452%20S%20Western%20Ave%2C%20Chicago%2C%20IL%2060608!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-[#F0EBD8] py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/images/logo.jpg"
            alt="Cafe Consume"
            width={120}
            height={60}
            className="mx-auto mb-6 rounded-lg"
          />
          <h3 className="text-3xl font-bold mb-4">CAFÉ CONSUME</h3>
          <p className="text-gray-400 mb-6">Where every cup tells a story</p>
          <div className="border-t border-gray-800 pt-6 mt-6">
            <p className="text-gray-500">© 2024 Café Consume. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}