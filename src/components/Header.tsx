import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const navLinks = [
  { href: '#features', label: 'Funcionalidades' },
  { href: '#how-it-works', label: 'Cómo Funciona' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map(it => it.href.substring(1));
    const sections = sectionIds.map(id => document.getElementById(id));
    const headerHeight = 100; 

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY;
      let newActiveSection = '';

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop - headerHeight <= scrollPosition) {
          newActiveSection = `#${section.id}`;
          break;
        }
      }

      if (scrollPosition < 200) {
        newActiveSection = '';
      }

      if ((window.innerHeight + scrollPosition) >= document.body.offsetHeight - 50) {
        newActiveSection = `#${sectionIds[sectionIds.length - 1]}`;
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 35, 66, 0)', 'rgba(255, 255, 255, 0.98)']
  );

  const shadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 0 rgba(0, 0, 0, 0)', '0 4px 20px -2px rgba(0, 0, 0, 0.1)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
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
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 w-full z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <motion.img 
              src={isScrolled ? "assets/logo-fondo-transparente.png" : "assets/logo-fondo-azul.png"}
              alt="LawAI Logo" 
              className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-12' : 'h-14'}`}
              style={{ filter: isScrolled ? 'none' : 'drop-shadow(0 0 8px rgba(47, 128, 237, 0.3))' }}
            />
          </motion.div>

          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={navItemVariants}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                style={{ color: isScrolled ? 'hsl(216, 100%, 12%)' : 'white' }}
                className="font-medium relative group"
              >
                {item.label}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ${activeSection === item.href ? 'w-full' : 'w-0'}`}
                />
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
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(47, 128, 237, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300"
            >
              Comenzar
            </motion.button>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: isScrolled ? 'hsl(216, 100%, 12%)' : 'white' }}
            className="md:hidden transition-colors duration-300"
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
                  {navLinks.map((item) => (
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
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg"
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