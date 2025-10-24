import { FileText, Search, FileUp, BrainCircuit } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: FileUp,
    title: 'Digitalización y Repositorio Centralizado',
    description: 'Transforme sus archivos físicos en documentos digitales con nuestro servicio de digitalización y gestione todo en un repositorio seguro y accesible.',
    gradient: 'from-primary/20 to-primary-light/20',
    iconColor: 'text-primary'
  },
  {
    icon: Search,
    title: 'Investigación Legal Potenciada por IA',
    description: 'Realice búsquedas inteligentes en toda su base de documentos y millones de fuentes legales para encontrar precedentes y estatutos en segundos.',
    gradient: 'from-primary/20 to-primary-light/20',
    iconColor: 'text-primary'
  },
  {
    icon: FileText,
    title: 'Análisis y Redacción Automatizada',
    description: 'Analice, resuma y redacte contratos y documentos legales complejos, identificando cláusulas y riesgos potenciales de forma automática.',
    gradient: 'from-primary/20 to-primary-light/20',
    iconColor: 'text-primary'
  },
  {
    icon: BrainCircuit,
    title: 'Entrenamiento Inteligente de Practicantes',
    description: 'Genere recomendaciones de material de estudio para practicantes basadas en los documentos de su propio estudio, con revisión y aprobación del abogado a cargo.',
    gradient: 'from-primary/20 to-primary-light/20',
    iconColor: 'text-primary'
  }
];

export default function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Funcionalidades Avanzadas
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Herramientas Poderosas para
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Profesionales Legales Modernos
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Aproveche la inteligencia artificial para optimizar su flujo de trabajo, 
            reducir costos y ofrecer resultados excepcionales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Animated Gradient Background */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:border-primary/20 transition-all duration-300 h-full">
                <div className="flex items-start gap-6">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm flex items-center justify-center border border-gray-200 group-hover:border-primary/30 transition-all duration-300 shadow-lg`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm"
                    >
                      <span>Explorar más</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </div>

                {/* Progress Bar Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(47, 128, 237, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300"
          >
            Ver Todas las Funcionalidades
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}