import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub, FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      id: 1,
      title: 'FoodMood',
      description: 'FoodMood is a full-stack recipe management app built with React and Django. It allows users to discover, save, and review recipes, manage favorites, and generate shopping lists. The app features a modern, responsive UI and stores recipe images on AWS S3 for scalability. Spoonacular API integration included.',
      icon: FaLaptopCode,
      image: '🍲',
      technologies: ['Django', 'React', 'Postgres', 'AWS S3', 'CSS', 'Spoonacular API'],
      liveUrl: 'https://foodmood-six.vercel.app',
      githubUrl: 'https://github.com/KalpeshC28/foodmood',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      icon: FaMobileAlt,
      image: '📱',
      technologies: ['Vue.js', 'Firebase', 'CSS3', 'Vuex'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex data sets with custom charts, filtering options, and export functionality.',
      icon: FaChartLine,
      image: '📊',
      technologies: ['D3.js', 'Python', 'Flask', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.',
      icon: FaLaptopCode,
      image: '🌤️',
      technologies: ['React', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, file sharing, and user authentication.',
      icon: FaMobileAlt,
      image: '💬',
      technologies: ['Socket.io', 'Express', 'React', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This site showcases my skills, projects, and experience, and features interactive animations and a contact form.',
      icon: FaLaptopCode,
      image: '🎨',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'http://localhost:3002',
      githubUrl: 'https://github.com/KalpeshC28/portfolio',
      featured: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
  <section id="projects" className="section-padding bg-white dark:bg-gray-950">
  <div className="container-custom" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title dark:text-gray-50"
        >
          Featured Projects
        </motion.h2>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.filter(project => project.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.04, boxShadow: '0 8px 32px rgba(80,0,120,0.15)' }}
              whileTap={{ scale: 0.98 }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="card group overflow-hidden dark:bg-gray-950"
            >
              {/* Project Image/Icon */}
              <motion.div
                className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 flex items-center justify-center relative overflow-hidden"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.7, type: 'spring' }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <motion.div className="text-6xl mb-4" initial={{ y: 30, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
                  {project.image}
                </motion.div>
                <motion.div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 dark:group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-700 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-100 mb-4 line-clamp-3">
                  {project.description}
                </p>
                {/* Extra details for FoodMood */}
                {project.title === 'FoodMood' && (
                  <ul className="text-gray-700 dark:text-gray-100 text-sm mb-4 list-disc pl-5 space-y-1">
                    <li>Discover, save, and review recipes</li>
                    <li>Manage favorites and generate shopping lists</li>
                    <li>Modern, responsive UI</li>
                    <li>Recipe images stored on AWS S3</li>
                    <li>Powered by Spoonacular API for rich recipe data</li>
                    <li>Built with Django, React, Postgres, AWS S3, CSS</li>
                  </ul>
                )}
                {/* Extra details for Portfolio Website */}
                {project.title === 'Portfolio Website' && (
                  <ul className="text-gray-700 dark:text-gray-100 text-sm mb-4 list-disc pl-5 space-y-1">
                    <li>Built with React, TypeScript, Tailwind CSS, Framer Motion</li>
                    <li>Showcases my skills, projects, and experience</li>
                    <li>Modern UI/UX with smooth animations</li>
                    <li>Fully responsive and mobile-friendly</li>
                    <li>Includes contact form and social links</li>
                    <li>Deployed locally and on GitHub</li>
                  </ul>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-950 text-black-900 dark:text-black font-extrabold text-base rounded-full tracking-wide shadow-sm dark:shadow-black"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-4 py-2 bg-gray-100 dark:bg-gray-950 text-white-900 dark:text-white font-extrabold text-base rounded-full tracking-wide shadow-sm dark:shadow-black">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-primary-600 dark:text-primary-200 hover:text-primary-700 dark:hover:text-primary-100 font-medium"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-300 font-medium"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white dark:text-gray-50 mb-8 text-center">Other Upcoming Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-2xl">{project.image}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-50">{project.title}</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-100 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-primary-100 dark:bg-primary-950 text-gray-900 dark:text-black font-extrabold text-base rounded-full tracking-wide shadow-sm dark:shadow-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="text-primary-600 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-200 text-sm font-medium"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-300 text-sm font-medium"
                  >
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12 dark:text-gray-50"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary px-8 py-3"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects