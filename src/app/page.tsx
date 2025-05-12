'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <SplashScreen onComplete={() => setShowMain(true)} />
      
      {showMain && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black"
        >
          <Navbar />
          {/* Hero Section with Animation */}
          <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: Math.random() * 1.5,
                  }}
                  animate={{
                    y: [null, Math.random() * window.innerHeight],
                    x: [null, Math.random() * window.innerWidth],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
                  Code Cubicle 4
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                  Back at it yet again by Geek Room
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"
              >
                <a
                  href="https://code-cubicle-2.devfolio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
                >
                  Register Now
                </a>
                <Link
                  href="/about"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Event Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 text-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-1">Online Round</h3>
                    <p className="text-gray-300">June 29th, 2024</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-1">Final Round</h3>
                    <p className="text-gray-300">July 5th, 2024</p>
                    <p className="text-sm text-gray-400">Microsoft Office, Hyderabad</p>
                  </div>
                </div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-white/50"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Quick Info Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-lg font-bold mb-1">Win Amazing Prizes</h3>
                  <p className="text-gray-600">
                    Cash prizes, Microsoft internships, and exclusive swag
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold mb-1">Build Something Amazing</h3>
                  <p className="text-gray-600">
                    Create innovative solutions with cutting-edge technologies
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-lg font-bold mb-1">Network & Learn</h3>
                  <p className="text-gray-600">
                    Connect with industry experts and fellow developers
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
}
