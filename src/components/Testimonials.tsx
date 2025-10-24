import { Star, Quote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Socia Senior',
    firm: 'Mitchell & Asociados',
    content: 'LawAI ha revolucionado nuestro proceso de revisión de documentos. Lo que antes tomaba días, ahora toma horas. La precisión es notable.',
    rating: 5,
    avatar: 'SM',
    color: 'from-primary to-primary-light'
  },
  {
    name: 'David Chen',
    role: 'Abogado Corporativo',
    firm: 'TechCorp Legal',
    content: 'La función de análisis de contratos es un cambio de juego. Ahora podemos manejar 3 veces más contratos con el mismo tamaño de equipo.',
    rating: 5,
    avatar: 'DC',
    color: 'from-primary to-primary-light'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Abogada Gerente',
    firm: 'Grupo Legal Rodriguez',
    content: 'Excelente asistente legal de IA. Solo las capacidades de investigación nos han ahorrado innumerables horas y mejorado los resultados de nuestros casos.',
    rating: 5,
    avatar: 'ER',
    color: 'from-primary to-primary-light'
  }
];

const trustedBy = [
  'Wilson & Socios LLP',
  'Soluciones Legales Globales',
  'Asociados Legales Metro',
  'Grupo de Defensa Corporativa',
  'Asesores Legales Estratégicos',
  'Colectivo Legal Premier'
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
      }
    }
  };

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
          >
            <Star className="w-4 h-4 inline-block mr-2" />
            Testimonios
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Con la Confianza de las
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Principales Firmas de Abogados
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Únase a miles de profesionales del derecho que confían en LawAI para su práctica
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative group perspective-1000"
            >
              {/* Gradient Glow */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:border-primary/30 transition-all duration-300 h-full">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.firm}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-200 pt-16"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Con la Confianza de Firmas Líderes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {trustedBy.map((firm, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  color: 'hsl(var(--primary))',
                  transition: { duration: 0.2 }
                }}
                className="text-center text-muted-foreground font-semibold text-sm cursor-default transform transition-all duration-300"
              >
                <div className="p-4 rounded-lg hover:bg-primary/5 transition-colors">
                  {firm}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}