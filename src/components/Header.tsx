import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(249, 250, 251, 0.98)']
  );

  const shadow = useTransform(
    scrollY,
    [0, 50],
    ['0 1px 2px 0 rgba(0, 0, 0, 0.05)', '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)']
  );

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      style={{
        backgroundColor,
        boxShadow: shadow,
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-gray-800 shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img src="assets/logo-fondo-transparente.png" alt="LawAI Logo" className="h-12 w-auto object-contain" />
          </motion.div>

          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="hidden md:flex items-center gap-8"
          >
            {[
              { href: '#features', label: 'Funcionalidades' },
              { href: '#how-it-works', label: 'Cómo Funciona' },
              { href: '#testimonios', label: 'Testimonios' },
              { href: '#nosotros', label: 'Nosotros' },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={navItemVariants}
                whileHover={{ y: -2, color: '#2F80ED' }}
                transition={{ duration: 0.2 }}
                className="font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } } }}
            className="hidden md:flex items-center gap-4"
          >
            <motion.button
              variants={navItemVariants}
              whileHover={{ scale: 1.05, color: '#2F80ED' }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 font-medium px-4 py-2"
            >
              Iniciar Sesión
            </motion.button>
            <motion.button
              variants={navItemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2F80ED] text-white px-6 py-2 rounded-lg font-semibold shadow-md"
            >
              Comenzar
            </motion.button>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 border-t border-gray-200 pt-4">
                <nav className="flex flex-col gap-4">
                  {[
                    { href: '#features', label: 'Funcionalidades' },
                    { href: '#how-it-works', label: 'Cómo Funciona' },
                    { href: '#testimonios', label: 'Testimonios' },
                    { href: '#nosotros', label: 'Nosotros' },
                  ].map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-600 hover:text-[#2F80ED] transition-colors font-medium"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className={`font-medium px-4 py-2 transition-colors duration-300 ${
                      isScrolled ? "text-gray-600" : "text-white"
                    }`}
                  >
                    Iniciar Sesión
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="bg-[#2F80ED] hover:bg-[#2570d9] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                  >
                    Comenzar
                  </motion.button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
