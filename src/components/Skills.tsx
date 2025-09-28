import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaVuejs, 
  FaNodeJs, 
  FaPython, 
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma
} from 'react-icons/fa'
import { SiTypescript, SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: 90 },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', level: 85 },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500', level: 80 },
        { name: 'React', icon: FaReact, color: 'text-cyan-500', level: 88 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Django', icon: FaPython, color: 'text-blue-500', level: 75 },
        { name: 'Python', icon: FaPython, color: 'text-blue-500', level: 80 },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600', level: 70 },
        { name: 'PostgreSQL', icon: FaDatabase, color: 'text-blue-600', level: 65 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-red-500', level: 85 },
        { name: 'VS Code', icon: FaFigma, color: 'text-blue-500', level: 80 },
        { name: 'AWS', icon: FaAws, color: 'text-orange-500', level: 70 },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  }

  return (
  <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-950">
  <div className="container-custom" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title dark:text-gray-50"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-white dark:bg-gray-950 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className={`text-2xl ${skill.color}`} />
                        <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-900 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
            Favorite Technology
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1 }}
              className="px-4 py-2 bg-primary-500 text-white dark:bg-primary-950 dark:text-gray-50 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              React (I love building interactive UIs!)
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills