import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaLightbulb, FaHeart } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { number: 'Fresher', label: 'Experience Level', icon: FaLightbulb },
    { number: '5+', label: 'Personal Projects', icon: FaCode },
    { number: '100%', label: 'Passion & Dedication', icon: FaHeart },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
  <section id="about" className="section-padding bg-white dark:bg-gray-950">
  <div className="container-custom" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title dark:text-gray-50"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed"
            >
              Hi! I'm Kalpesh, a fresher full stack developer with a strong drive to learn and grow in the tech industry. I love building web applications and exploring new technologies.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed"
            >
              I enjoy collaborating on creative projects, solving real-world problems, and continuously improving my skills. My journey is just beginning, and I'm excited to contribute to impactful solutions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed"
            >
              Fun fact: I love learning new things, whether it's a new programming language or a unique hobby. I'm always up for a challenge and believe that curiosity fuels innovation!
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-2xl text-primary-600 dark:text-primary-200" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-80 h-80 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-950 dark:to-gray-900 rounded-2xl flex items-center justify-center shadow-xl"
              >
                {/* Replace this with your actual image */}
                <div className="w-72 h-72 bg-white dark:bg-gray-950 rounded-xl flex items-center justify-center">
                  <div className="text-8xl text-gray-400 dark:text-gray-700">🧑‍💻</div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500 rounded-full opacity-20"
              />
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-500 rounded-full opacity-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About