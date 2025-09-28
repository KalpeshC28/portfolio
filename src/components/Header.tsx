import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
// ...existing code...

const Header = ({ theme, setTheme }: { theme: 'light' | 'dark', setTheme: (t: 'light' | 'dark') => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ]

  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-extrabold bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move"
          >
            <span className="tracking-tight">My Portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`px-2 py-1 text-gray-700 dark:text-gray-200 font-medium transition-colors duration-200 overflow-hidden group ${location.pathname === item.path ? 'text-primary-600 dark:text-primary-400 font-bold' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="z-10 relative">{item.label}</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.div>
            ))}
            {/* Light/Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-lg border-none transition-all duration-200 flex items-center gap-2 hover:scale-105 focus:outline-none"
              aria-label="Toggle light/dark mode"
            >
              {theme === 'light' ? (
                <span className="flex items-center"><span className="mr-1">🌞</span> Light</span>
              ) : (
                <span className="flex items-center"><span className="mr-1">🌙</span> Dark</span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header