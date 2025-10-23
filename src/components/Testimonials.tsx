import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Socia Senior',
    firm: 'Mitchell & Asociados',
    content: 'LawAI ha revolucionado nuestro proceso de revisión de documentos. Lo que antes tomaba días, ahora toma horas. La precisión es notable.',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'Abogado Corporativo',
    firm: 'TechCorp Legal',
    content: 'La función de análisis de contratos es un cambio de juego. Ahora podemos manejar 3 veces más contratos con el mismo tamaño de equipo.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Abogada Gerente',
    firm: 'Grupo Legal Rodriguez',
    content: 'Excelente asistente legal de IA. Solo las capacidades de investigación nos han ahorrado innumerables horas y mejorado los resultados de nuestros casos.',
    rating: 5
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4">
            Con la Confianza de las Principales Firmas de Abogados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Únase a miles de profesionales del derecho que confían en LawAI para su práctica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative group hover:scale-105"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#2F80ED]/10 group-hover:text-[#2F80ED]/20 transition-colors" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2F80ED] text-[#2F80ED]" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2F80ED] to-[#1e5cb8] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-[#0A2342]">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.firm}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          id="features"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="border-t border-gray-200 pt-12">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Con la Confianza de Firmas Líderes
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {trustedBy.map((firm, index) => (
                <div
                  key={index}
                  className="text-center text-gray-400 font-semibold text-sm hover:text-[#2F80ED] transition-all duration-300 cursor-default transform hover:scale-105"
                >
                  {firm}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
