import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="/assets/logo-fondo-azul.png" alt="LawAI Logo" className="w-40 h-20 object-contain"/>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empoderando a los profesionales del derecho con tecnología de inteligencia artificial de vanguardia.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/Elaris-Digital-Solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Producto</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                  Precios
                </a>
              </li>
              <li>
                <a href="#security" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                  Seguridad
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                  Integraciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Compañía</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2F80ED]" />
                <span>contact@elarisdigitalsolutions.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2F80ED]" />
                <span>+51 987 450 340</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2F80ED]" />
                <span>Av. Primavera 2390, Santiago de Surco 15023</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 LawAI. Todos los derechos reservados por Elaris Digital Solutions.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                Política de Privacidad
              </a>
              <a href="#terms" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                Términos de Servicio
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-[#2F80ED] transition-all duration-300 transform hover:scale-105 inline-block">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
