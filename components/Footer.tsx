import React from 'react';
import { Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import logoSmall from '../assets/logoneeipequeno-removebg-preview.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-300 text-bg-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <div className="mb-4">
              <img src={logoSmall} alt="NEEI Logo" className="h-16 w-auto" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Núcleo de Estudantes de Engenharia Informática da Universidade do Algarve.
              Atuamos para promover, apoiar e representar ativamente os estudantes de LEI, fortalecendo a integração e a cooperação para uma experiência académica completa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#/sobre" className="hover:text-accent-100 transition-colors">Sobre Nós</a></li>
              <li><a href="#/eventos" className="hover:text-accent-100 transition-colors">Eventos</a></li>
              <li><a href="#/vagas" className="hover:text-accent-100 transition-colors">Vagas</a></li>
              <li><a href="#/quack" className="hover:text-accent-100 transition-colors">Quack Executor</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Contactos</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-accent-100 mt-0.5 shrink-0" />
                <span>Sala 0.18, Edifício 1,<br />Campus de Gambelas, Faro</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-accent-100 shrink-0" />
                <a href="mailto:neei@aaualg.pt" className="hover:text-white transition-colors">neei@aaualg.pt</a>
              </li>
              <li className="flex items-center gap-4 mt-6">
                <a
                  href="https://www.facebook.com/NEEIUALG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-100 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/neeiualg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-100 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-xs text-gray-400">
          {new Date().getFullYear()} NEEI - Núcleo de Estudantes de Engenharia Informática da UAlg.
        </div>
      </div>
    </footer>
  );
};

export default Footer;