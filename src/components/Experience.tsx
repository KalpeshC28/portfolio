
import { motion } from 'framer-motion'

const Experience = () => {
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