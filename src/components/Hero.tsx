import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import LaserFlow from './LaserFlow'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Typed from 'typed.js'

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Full Stack Developer',
          'React Specialist',
          'UI/UX Enthusiast',
          'Problem Solver',
          'Tech Innovator'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
      })

      return () => typed.destroy()
    }
  }, [])

  // Removed unused scroll functions

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/KalpeshC28', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kalpesh-chabukswar-856893350', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/kalpeshh.c', label: 'Instagram' },
  ]

  return (
  <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 pt-20 relative overflow-hidden">
        {/* LaserFlow Animated Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <LaserFlow
            className="w-full h-full"
            style={{ position: 'absolute', inset: 0 }}
            color={typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? '#FF79C6' : '#6C63FF'}
            wispDensity={1.2}
            flowSpeed={0.45}
            fogIntensity={0.5}
            wispIntensity={6.5}
            flowStrength={0.32}
            verticalSizing={2.2}
            horizontalSizing={0.6}
          />
        </div>
        {/* Morphing Glass Blob Background */}
        <div className="glass-blob-bg z-10">
          <div className="glass-blob" style={{ width: '420px', height: '420px', top: '8%', left: '5%' }}></div>
          <div className="glass-blob" style={{ width: '320px', height: '320px', top: '60%', left: '60%' }}></div>
        </div>
        <div className="container-custom px-4 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-50 mb-6 text-center flex justify-center w-full"
            >
              <div className="flex flex-col items-center w-full py-8">
                <span className="text-base sm:text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400 mb-2 text-center tracking-wide">
                  Hello, I'm
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg">
                  Kalpesh Ketan Chabukswar
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-2 text-center tracking-wide">
                  Code. Create. Inspire.
                </span>
              </div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-200 mb-6 h-12"
            >
              <span ref={typedRef}></span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Crafting digital experiences that blend creativity, technology, and purpose.<br />
              I build scalable web apps, design beautiful interfaces, and solve real-world problems with code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                to="/projects"
                className="btn btn-primary px-8 py-4 text-lg"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary px-8 py-4 text-lg"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-primary-400 hover:text-primary-600 dark:hover:text-pink-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-secondary-400 dark:from-gray-950 dark:to-gray-900 rounded-full flex items-center justify-center shadow-2xl">
                {/* Replace this with your actual image */}
                <div className="w-72 h-72 bg-white dark:bg-gray-950 rounded-full flex items-center justify-center">
                  <div className="text-8xl text-gray-400 dark:text-gray-700">👨‍💻</div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center"
              >
                <span className="text-xl">🚀</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero