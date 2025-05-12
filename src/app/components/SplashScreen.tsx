'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

interface ParticleProps {
  x: number;
  y: number;
  scale: number;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [show, setShow] = useState(true);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [retryCount, setRetryCount] = useState(0);
  const [textReveal, setTextReveal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const maxRetries = 3;

  // Initialize particles on the client side
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 1.5,
    }));
    setParticles(newParticles);

    // Start text reveal animation after a delay
    setTimeout(() => setTextReveal(true), 500);
  }, []);

  // Video initialization and playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let playAttemptInterval: NodeJS.Timeout;
    let cleanup = false;

    const initVideo = async () => {
      if (cleanup) return;

      try {
        // Reset video state
        video.currentTime = 0;
        video.volume = 1;
        video.muted = false;
        
        // First try with sound
        try {
          await video.play();
          console.log('Video playing with sound');
          clearInterval(playAttemptInterval);
          setVideoError(null);
        } catch (soundError) {
          console.log('Failed to play with sound, trying muted first:', soundError);
          
          // Try muted first, then unmute
          video.muted = true;
          await video.play();
          
          // Try to unmute after a short delay
          setTimeout(async () => {
            if (cleanup) return;
            try {
              video.muted = false;
              video.volume = 1;
              console.log('Successfully unmuted video');
            } catch (unmuteError) {
              console.error('Failed to unmute:', unmuteError);
            }
          }, 500);
        }

        // Add ended event listener
        const handleEnded = () => {
          if (!cleanup) {
            setShow(false);
            setTimeout(onComplete, 1000);
          }
        };
        
        video.addEventListener('ended', handleEnded);
        
        // Add error event listener
        const handleError = async () => {
          if (cleanup) return;
          
          console.error('Video error occurred:', video.error);
          if (retryCount < maxRetries) {
            setRetryCount(prev => prev + 1);
            await initVideo();
          } else {
            setVideoError('Video playback failed. Please refresh the page.');
          }
        };
        
        video.addEventListener('error', handleError);

        return () => {
          video.removeEventListener('ended', handleEnded);
          video.removeEventListener('error', handleError);
        };

      } catch (error) {
        console.error('Video initialization error:', error);
        if (retryCount < maxRetries) {
          setRetryCount(prev => prev + 1);
          // Retry after a short delay
          setTimeout(initVideo, 1000);
        } else {
          setVideoError('Failed to play video. Please refresh the page.');
        }
      }
    };

    // Start playback attempts
    initVideo();

    // Keep trying to play if initial attempt fails
    playAttemptInterval = setInterval(() => {
      if (video.paused && retryCount < maxRetries) {
        console.log('Retrying video playback...');
        initVideo();
      }
    }, 1000);

    // Cleanup function
    return () => {
      cleanup = true;
      clearInterval(playAttemptInterval);
      video.pause();
      video.src = '';
      video.load();
    };
  }, [retryCount, onComplete]); // Added retryCount to dependencies

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -50,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const byLineVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotate: -20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotate: 0,
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    }
  };

  // Add click handler for manual playback if needed
  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = false;
      video.volume = 1;
      await video.play();
      setVideoError(null);
    } catch (error) {
      console.error('Manual play failed:', error);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          onClick={handleVideoClick}
        >
          {/* Video Background */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            preload="auto"
            playsInline
            autoPlay
            muted={false}
            loop={false}
            controls={false}
          >
            <source src="/logos/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Debug info */}
          {videoError && (
            <div className="absolute top-4 left-4 bg-black/80 text-white p-4 rounded">
              {videoError} (Attempt {retryCount + 1}/{maxRetries + 1})
            </div>
          )}

          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Animated particles in background */}
          <div className="absolute inset-0">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                initial={{
                  x: particle.x,
                  y: particle.y,
                  scale: particle.scale,
                }}
                animate={{
                  y: [particle.y, Math.random() * window.innerHeight],
                  x: [particle.x, Math.random() * window.innerWidth],
                }}
                transition={{
                  duration: Math.random() * 8 + 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Main Text Content */}
          <div className="relative text-center z-10 space-y-8">
            <motion.div
              variants={container}
              initial="hidden"
              animate={textReveal ? "visible" : "hidden"}
              className="relative"
            >
              {/* Main Title */}
              <motion.div className="flex justify-center items-center space-x-2 mb-6">
                {"Code Cubicle".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="text-7xl md:text-9xl font-bold text-white inline-block"
                    style={{
                      textShadow: "0 0 20px rgba(255,255,255,0.3)",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>

              {/* By Line */}
              <motion.div
                variants={byLineVariants}
                className="relative"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-[1px] w-12 bg-white/50" />
                  <p className="text-2xl md:text-3xl text-white/90 tracking-wider font-light">
                    by
                  </p>
                  <div className="h-[1px] w-12 bg-white/50" />
                </div>
              </motion.div>

              {/* Geek Room */}
              <motion.div
                variants={titleVariants}
                className="mt-4"
              >
                <p className="text-4xl md:text-5xl font-bold text-white tracking-widest"
                   style={{
                     textShadow: "0 0 15px rgba(255,255,255,0.2)",
                   }}>
                  GEEK ROOM
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 