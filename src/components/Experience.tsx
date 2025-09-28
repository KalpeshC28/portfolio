import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance optimization.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'GraphQL'],
      current: true
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Agency Ltd.',
      period: '2020 - 2022',
      description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to create pixel-perfect user interfaces and improved site performance by 40%.',
      technologies: ['Vue.js', 'React', 'SCSS', 'JavaScript', 'Webpack'],
      current: false
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Built and maintained company website using HTML, CSS, and JavaScript. Assisted in developing internal tools and gained experience with version control and agile methodologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      current: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-50 mb-8">
          I'm a final year student<br />and a fresher.
        </h1>
      </motion.div>
    </section>
  );
}

export default Experience