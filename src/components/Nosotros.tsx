import { Building, Users, Award, Target, Rocket, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Building,
    title: 'Nuestra Misión',
    description: 'Empoderar a los profesionales del derecho con herramientas de IA de vanguardia que ahorran tiempo, reducen costos y mejoran los resultados.',
    gradient: 'from-primary/20 to-primary-light/20',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary'
  },
  {
    icon: Users,
    title: 'Nuestro Equipo',
    description: 'Un equipo diverso de abogados, ingenieros de software y científicos de datos dedicados a construir el futuro de la tecnología legal.',
    gradient: 'from-primary/20 to-primary-light/20',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary'
  },
  {
    icon: Award,
    title: 'Nuestros Valores',
    description: 'Comprometidos con la innovación, la excelencia y la integridad. Construimos relaciones a largo plazo basadas en la confianza y el éxito mutuo.',
    gradient: 'from-primary/20 to-primary-light/20',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary'
  }
];

const stats = [
  { icon: Target, value: '99.7%', label: 'Tasa de Precisión', color: 'text-primary' },
  { icon: Rocket, value: '5 min', label: 'Setup Promedio', color: 'text-primary' },
  { icon: Heart, value: '2.5K+', label: 'Clientes Satisfechos', color: 'text-primary' },
];

export default function Nosotros() {
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
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
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
            Sobre Nosotros
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 md:leading-snug">
            Construyendo el Futuro de la
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Tecnología Legal
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Somos un equipo de expertos apasionados por revolucionar la industria legal 
            a través de la inteligencia artificial y la innovación.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:border-primary/30 transition-all duration-300 text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <stat.icon className={`w-12 h-12 ${stat.color}`} />
                </motion.div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              {/* Animated Gradient Background */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />

              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:border-primary/30 transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 ${value.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-md`}
                >
                  <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.gradient} rounded-b-2xl`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
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
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para Transformar su Práctica Legal?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únase a miles de profesionales que ya están aprovechando el poder de la IA
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Comenzar Ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}