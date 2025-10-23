import { Building, Users, Award } from 'lucide-react';

export default function Nosotros() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un equipo de expertos legales y tecnológicos apasionados por revolucionar la industria legal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <Building className="w-12 h-12 mx-auto text-[#2F80ED] mb-4" />
            <h3 className="text-2xl font-bold text-[#0A2342] mb-2">Nuestra Misión</h3>
            <p className="text-gray-600">
              Nuestra misión es empoderar a los profesionales del derecho con herramientas de IA de vanguardia que ahorran tiempo, reducen costos y mejoran los resultados.
            </p>
          </div>
          <div className="p-8">
            <Users className="w-12 h-12 mx-auto text-[#2F80ED] mb-4" />
            <h3 className="text-2xl font-bold text-[#0A2342] mb-2">Nuestro Equipo</h3>
            <p className="text-gray-600">
              Somos un equipo diverso de abogados, ingenieros de software y científicos de datos dedicados a construir el futuro de la tecnología legal.
            </p>
          </div>
          <div className="p-8">
            <Award className="w-12 h-12 mx-auto text-[#2F80ED] mb-4" />
            <h3 className="text-2xl font-bold text-[#0A2342] mb-2">Nuestros Valores</h3>
            <p className="text-gray-600">
              Estamos comprometidos con la innovación, la excelencia y la integridad en todo lo que hacemos. Creemos en la construcción de relaciones a largo plazo con nuestros clientes basadas en la confianza y el éxito mutuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
