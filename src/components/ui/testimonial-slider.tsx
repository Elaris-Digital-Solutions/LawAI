"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  username: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { 
    id: 1, 
    quote: "Law AI nos permitió reducir en más del 60% el tiempo dedicado a revisar contratos. Ahora enfocamos nuestros esfuerzos en la estrategia.", 
    name: "Sofía Torres", 
    username: "Torres & Asociados", 
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    id: 2, 
    quote: "Con ELARIS logramos digitalizar toda nuestra biblioteca interna y transformarla en un repositorio inteligente de acceso inmediato.", 
    name: "Juan García", 
    username: "NovaLex", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    id: 3, 
    quote: "La integración fue rápida y el soporte impecable. Law AI entiende el flujo real de trabajo en un estudio jurídico.", 
    name: "Mariana Campos", 
    username: "Grupo ALV", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    id: 4, 
    quote: "Pasamos de depender de archivos dispersos a tener plantillas estandarizadas y entrenadas con IA. Es como tener un asistente 24/7.", 
    name: "Rodrigo Mendoza", 
    username: "LexPrime", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    id: 5, 
    quote: "Law AI cambió por completo la forma en que capacito a mis practicantes. Reciben feedback automático y mejoran más rápido.", 
    name: "Diego Alarcón", 
    username: "Practicante Legal", 
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    id: 6, 
    quote: "Nuestra gestión de conocimiento se transformó. La precisión de las respuestas y la organización son impresionantes.", 
    name: "Valeria Salazar", 
    username: "Gerente Legal Corporativa", 
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    id: 7, 
    quote: "Aprender de casos reales dentro del sistema me ayudó a entender los criterios de mis superiores. Es una capacitación continua.", 
    name: "Lucía Ramírez", 
    username: "Asistente Legal Junior", 
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    id: 8, 
    quote: "Implementar Law AI fue clave en nuestra transformación digital. Es una herramienta que crece junto con el estudio.", 
    name: "Ana Roca", 
    username: "LegalTech Partners", 
    avatar: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    id: 9, 
    quote: "Con ELARIS, centralizamos todos nuestros documentos y procesos. La IA entiende perfectamente el contexto legal.", 
    name: "Carlos Paredes", 
    username: "Civitas Legal", 
    avatar: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    id: 10, 
    quote: "ELARIS combina tecnología e inteligencia jurídica de una forma única. Es el puente entre el conocimiento y la eficiencia.", 
    name: "Tomás Villanueva", 
    username: "Consultor en Automatización Legal", 
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60" 
  },
];


const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
};

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  // direction state not currently used; removed to satisfy typecheck
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      
      const oldVisibleCount = getVisibleCount(windowWidth);
      const newVisibleCount = getVisibleCount(newWidth);
      
      if (oldVisibleCount !== newVisibleCount) {
        const maxIndexForNewWidth = testimonials.length - newVisibleCount;
        if (currentIndex > maxIndexForNewWidth) {
          setCurrentIndex(Math.max(0, maxIndexForNewWidth));
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const visibleCount = getVisibleCount(windowWidth);
        const maxIndex = testimonials.length - visibleCount;

        setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
      }, 4000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, windowWidth]);

  const visibleCount = getVisibleCount(windowWidth);
  const maxIndex = testimonials.length - visibleCount;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
    pauseAutoPlay();
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex + 1) % (maxIndex + 1));
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleDragEnd = (_event: any, info: any) => {
    const { offset } = info;
    const swipeThreshold = 30;

    if (offset.x < -swipeThreshold) {
      goNext();
    } else if (offset.x > swipeThreshold) {
      goPrev();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  return (
    <div className="px-4 py-8 sm:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light font-medium text-xs sm:text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 dark:from-primary-light dark:to-primary bg-clip-text text-transparent mt-3 sm:mt-4 px-4">
            Construido con confianza, probado por resultados
          </h3>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/70 dark:from-primary-light dark:to-primary mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div className="flex justify-center sm:justify-end sm:absolute sm:-top-16 right-0 space-x-2 mb-4 sm:mb-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              className={`p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 text-primary dark:text-primary-light transition-all duration-300`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              className={`p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 text-primary dark:text-primary-light transition-all duration-300`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          <div className="overflow-hidden relative px-2 sm:px-0">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{ 
                type: 'spring', 
                stiffness: 70, 
                damping: 20 
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full ${
                    visibleCount === 3 ? 'md:w-1/3' : 
                    visibleCount === 2 ? 'md:w-1/2' : 'w-full'
                  } p-2`}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98, cursor: 'grabbing' }}
                  style={{ cursor: 'grab' }}
                >
                  <motion.div 
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg shadow-primary/5 dark:shadow-primary-light/5"
                    whileHover={{
                      boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.1), 0 4px 6px -2px rgba(79, 70, 229, 0.05)"
                    }}
                  >
                    <div className="absolute -top-4 -left-4 opacity-10 dark:opacity-20">
                      <Quote size={windowWidth < 640 ? 40 : 60} className="text-primary dark:text-primary-light" />
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium mb-4 sm:mb-6 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      
                      <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              width={48}
                              height={48}
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/api/placeholder/48/48';
                              }}
                            />
                            <motion.div 
                              className="absolute inset-0 rounded-full bg-primary/20 dark:bg-primary-light/20"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0, 0.3, 0] 
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                            />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">{testimonial.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{testimonial.username}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
              
          <div className="flex justify-center mt-6 sm:mt-8">
            {Array.from({ length: testimonials.length - visibleCount + 1 }, (_: any, index: any) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative mx-1 focus:outline-none"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex 
                      ? 'bg-primary dark:bg-primary-light' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  animate={{ 
                    scale: index === currentIndex ? [1, 1.2, 1] : 1
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: index === currentIndex ? Infinity : 0,
                    repeatDelay: 1
                  }}
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30 dark:bg-primary-light/30"
                    animate={{ 
                      scale: [1, 1.8],
                      opacity: [1, 0] 
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
