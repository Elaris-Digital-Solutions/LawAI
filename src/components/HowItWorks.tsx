import { Upload, Cpu, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Logos3 } from '@/components/ui/logos3';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Subir',
    description: 'Suba sus documentos legales, contratos o escritos de forma segura a nuestra plataforma.',
    color: 'from-primary to-primary-light'
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Analizar',
    description: 'Nuestra IA procesa y analiza sus documentos utilizando procesamiento de lenguaje natural avanzado.',
    color: 'from-primary to-primary-light'
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Obtener Resultados',
    description: 'Reciba información completa, resúmenes y recomendaciones procesables al instante.',
    color: 'from-primary to-primary-light'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
    <section className="relative pt-32 pb-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

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
            Proceso Simple
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Cómo Funciona
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Comience en tres simples pasos y transforme su flujo de trabajo legal
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setActiveStep(index)}
                onHoverEnd={() => setActiveStep(null)}
                className="relative"
              >
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${step.color} rounded-3xl blur-2xl opacity-0 transition-opacity duration-500 ease-in-out`}
                  animate={{
                    opacity: activeStep === index ? 0.3 : 0,
                  }}
                />

                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-300 h-full"
                >
                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <motion.div
                    className="flex gap-2 mt-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`h-1 rounded-full flex-1 ${
                          i <= index ? `bg-gradient-to-r ${step.color}` : 'bg-gray-200'
                        }`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.2 + i * 0.1 }}
                      />
                    ))}
                  </motion.div>
                </motion.div>

                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-6 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.3 }}
                  >
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary"
                    >
                      <span className="text-2xl text-primary">→</span>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <Logos3 />
      </div>
    </section>
  );
}