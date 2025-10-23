import { FileText, MessageSquare, FileEdit, Search } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Automatización de Revisión de Documentos',
    description: 'Analice instantáneamente documentos legales, identifique cláusulas clave y señale riesgos potenciales con precisión impulsada por IA.',
    color: '#2F80ED'
  },
  {
    icon: MessageSquare,
    title: 'Chatbot Legal',
    description: 'Obtenga respuestas instantáneas a preguntas legales, investigue jurisprudencia y reciba orientación impulsada por IA 24/7.',
    color: '#2F80ED'
  },
  {
    icon: FileEdit,
    title: 'Redacción y Resumen de Contratos',
    description: 'Genere plantillas de contratos, resuma acuerdos extensos y garantice el cumplimiento con automatización inteligente.',
    color: '#2F80ED'
  },
  {
    icon: Search,
    title: 'Asistente de Investigación Legal',
    description: 'Busque en millones de documentos legales, precedentes y estatutos en segundos con investigación mejorada por IA.',
    color: '#2F80ED'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4">
            Funcionalidades Poderosas para la Práctica Legal Moderna
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aproveche la inteligencia artificial para optimizar su flujo de trabajo, reducir costos y ofrecer resultados excepcionales a sus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#F3F4F6] hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-transparent hover:border-[#2F80ED]/20"
            >
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: feature.color }}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0A2342] mb-3 group-hover:text-[#2F80ED] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
