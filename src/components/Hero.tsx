import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0A2342] via-[#0d2d52] to-[#0A2342] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
              <span className="w-2 h-2 bg-[#2F80ED] rounded-full animate-pulse"></span>
              <span>Impulsado por Tecnología de IA Avanzada</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tu Asistente Legal de IA
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Empoderando a los abogados con automatización inteligente y conocimientos legales en tiempo real.
              Transforme su práctica legal con inteligencia artificial de vanguardia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(47, 128, 237, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2F80ED] hover:bg-[#2570d9] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#2F80ED]/30">
                Comenzar
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 border border-white/20">
                Ver Demostración
              </motion.button>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-[#2F80ED]">50K+</div>
                <div className="text-sm text-gray-400">Documentos Analizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2F80ED]">2,500+</div>
                <div className="text-sm text-gray-400">Firmas de Abogados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2F80ED]">99.7%</div>
                <div className="text-sm text-gray-400">Tasa de Precisión</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2F80ED]/20 to-transparent rounded-3xl blur-3xl"></div>
            <motion.div
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl"
              animate={{ y: [-5, 5] }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
            >
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 animate-pulse-slow">
                  <div className="h-3 bg-white/20 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-white/20 rounded w-1/2"></div>
                </div>
                <div className="bg-[#2F80ED]/20 rounded-lg p-4 border border-[#2F80ED]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#2F80ED] rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold">AI</span>
                    </div>
                    <div className="text-sm font-semibold">Análisis Completo</div>
                  </div>
                  <div className="h-2 bg-white/20 rounded w-full mb-2"></div>
                  <div className="h-2 bg-white/20 rounded w-5/6"></div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="h-3 bg-white/20 rounded w-2/3 mb-2"></div>
                  <div className="h-3 bg-white/20 rounded w-4/5"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}
