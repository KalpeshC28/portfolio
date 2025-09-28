
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: FaEnvelope, title: 'Email', value: 'kalpeshchabukswar@gmail.com', href: 'mailto:kalpeshchabukswar@gmail.com' },
    { icon: FaMapMarkerAlt, title: 'Location', value: 'Navi Mumbai, Maharashtra, India', href: '#' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kalpesh-chabukswar-856893350', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaGithub, href: 'https://github.com/KalpeshC28', label: 'GitHub', color: 'hover:text-gray-800' },
    { icon: FaInstagram, href: 'https://www.instagram.com/kalpeshh.c', label: 'Instagram', color: 'hover:text-pink-600' },
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-950">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container-custom"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="section-title dark:text-gray-50"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Get in touch</h3>
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed"
                >Let’s build something great together!</motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >I’m open to freelance, full-time, or collaboration opportunities.</motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >Feel free to drop me a message about projects, jobs, or just to say hi!</motion.p>
              </div>
            </motion.div>
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200 group"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-full flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900 transition-colors duration-200"
                  >
                    <info.icon className="text-xl text-primary-600 dark:text-primary-200" />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-50">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-200">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h4 className="font-medium text-gray-900 dark:text-gray-50 mb-4">Follow me on</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-950 flex items-center justify-center text-gray-600 dark:text-primary-200 ${social.color} transition-all duration-200`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="bg-gray-50 dark:bg-gray-950 rounded-2xl p-8"
          >
            {!submitted ? (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  const res = await fetch('https://formspree.io/f/xkgqoakq', {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                  });
                  if (res.ok) setSubmitted(true);
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Name *</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-900 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-900 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50" placeholder="your.email@example.com" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Subject *</label>
                  <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-900 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50" placeholder="Project Discussion" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Message *</label>
                  <textarea id="message" name="message" required rows={6} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-900 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-vertical bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50" placeholder="Tell me about your project..." />
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="w-full btn btn-primary py-4 text-lg font-medium dark:text-gray-950"
                  disabled={submitted}
                >
                  {submitted ? 'Thank you!' : 'Send Message'}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mt-6 text-center text-lg text-primary-200 font-semibold"
              >
                {`Thank you for your message! I'll get back to you soon.`}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;