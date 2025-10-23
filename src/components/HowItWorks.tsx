import { Upload, Cpu, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Subir',
    description: 'Suba sus documentos legales, contratos o escritos de forma segura a nuestra plataforma.'
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Analizar',
    description: 'Nuestra IA procesa y analiza sus documentos utilizando procesamiento de lenguaje natural avanzado.'
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Obtener Resultados',
    description: 'Reciba información completa, resúmenes y recomendaciones procesables al instante.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F3F4F6] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4">
            Cómo Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comience en tres simples pasos y transforme su flujo de trabajo legal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2F80ED]/30 to-transparent -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10 border border-gray-100 hover:border-[#2F80ED]/30 group">
                <div className="absolute -top-4 -right-4 text-6xl font-bold text-[#2F80ED]/10 group-hover:text-[#2F80ED]/20 transition-colors">
                  {step.number}
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-[#2F80ED] to-[#1e5cb8] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#2F80ED]/30 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#0A2342] mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
