
import React from 'react';
import { Target, Users, BookOpen, MapPin } from 'lucide-react';

// Import images
import afonsobitoque from '../assets/afonsobitoque.png';
import josetico from '../assets/josetico.png';
import davidgoncalves from '../assets/davidgoncalves.png';
import davidcruz from '../assets/davidcruz.png';
import franciscomolo from '../assets/franciscomolo.png';
import leonardocantachini from '../assets/leonardocantachini.png';
import afonsofrancisco from '../assets/afonsofrancisco.png';
import simaoreis from '../assets/simaoreis.png';
import barbarapereira from '../assets/barbarapereira.png';
import beatrizmateia from '../assets/beatrizmateia.png';
import davidrodrigues from '../assets/davidrodrigues.png';
import davidsilvestre from '../assets/davidsilvestre.png';
import francisconeves from '../assets/francisconeves.png';
import joaomariabatista from '../assets/joaomariabatista.png';
import joaomiguelbatista from '../assets/joaomiguelbatista.png';
import leonardoalbudane from '../assets/leonardoalbudane.png';
import martimneves from '../assets/martimneves.png';
import miguelalvito from '../assets/miguelalvito.png';
import raquelnunes from '../assets/raquelnunes.png';
import ricardovicente from '../assets/ricardovicente.png';

const About: React.FC = () => {
  // Equipa Atualizada para o Mandato 2025/2026
  const direcao = [
    { name: 'Afonso Bitoque', role: 'Presidente', image: afonsobitoque },
    { name: 'José Tico', role: 'Vice-Presidente', image: josetico },
    { name: 'David Gonçalves', role: 'Tesoureiro', image: davidgoncalves },
    { name: 'David Cruz', role: 'Secretário', image: davidcruz },
  ];

  const mesaPlenario = [
    { name: 'Francisco Melo', role: 'Presidente', image: franciscomolo },
    { name: 'Leonardo Cantachini', role: 'Vice-Presidente', image: leonardocantachini },
    { name: 'Afonso Francisco', role: 'Secretário', image: afonsofrancisco },
    { name: 'Simão Reis', role: 'Primeiro Suplente', image: simaoreis },
  ];

  const vogais = [
    { name: 'Barbara Pereira', image: barbarapereira },
    { name: 'Beatriz Mateia', image: beatrizmateia },
    { name: 'David Rodrigues', image: davidrodrigues },
    { name: 'David Silvestre', image: davidsilvestre },
    { name: 'Francisco Neves', image: francisconeves },
    { name: 'João Maria Batista', image: joaomariabatista },
    { name: 'João Miguel Batista', image: joaomiguelbatista },
    { name: 'Leonardo Albudane', image: leonardoalbudane },
    { name: 'Martim Neves', image: martimneves },
    { name: 'Miguel Alvito', image: miguelalvito },
    { name: 'Raquel Nunes', image: raquelnunes },
    { name: 'Ricardo Vicente', image: ricardovicente },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Intro Section - Baseado nos Estatutos da AAUAlg Art 71º */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-text-100 mb-6">Sobre o NEEI</h1>
        <div className="flex items-center justify-center gap-2 text-accent-200 mb-6 font-medium">
          <MapPin size={20} />
          <span>Sala 0.18, Edifício 1, Campus de Gambelas, Faro</span>
        </div>
        <p className="text-lg text-text-200 leading-relaxed text-justify md:text-center">
          O <strong>Núcleo de Estudantes de Engenharia Informática (NEEI)</strong> é parte integrante da <strong>Associação Académica da Universidade do Algarve (AAUAlg)</strong>, representando todos os estudantes do curso de Engenharia Informática da UALG.
        </p>
      </div>

      {/* Pilares Estratégicos - Baseado nas Competências (Art 92º) e Instagram */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Pilar 1: Representação */}
        <div className="bg-bg-200 p-8 rounded-2xl text-center hover:bg-primary-100 transition-colors border border-transparent hover:border-primary-200">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent-200">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-bold text-text-100 mb-4">Representação</h3>
          <p className="text-text-200 text-sm leading-relaxed">
            Defender os interesses e direitos dos estudantes junto dos órgãos da Universidade e da Direção-Geral da AAUAlg, garantindo uma voz ativa na definição do percurso académico.
          </p>
        </div>

        {/* Pilar 2: Desenvolvimento */}
        <div className="bg-bg-200 p-8 rounded-2xl text-center hover:bg-primary-100 transition-colors border border-transparent hover:border-primary-200">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent-200">
            <BookOpen size={32} />
          </div>
          <h3 className="text-xl font-bold text-text-100 mb-4">Desenvolvimento</h3>
          <p className="text-text-200 text-sm leading-relaxed">
            Organizar atividades extracurriculares, workshops técnicos e eventos de contacto empresarial que complementem a formação letiva e potenciem a empregabilidade dos sócios.
          </p>
        </div>

        {/* Pilar 3: Vivência Académica */}
        <div className="bg-bg-200 p-8 rounded-2xl text-center hover:bg-primary-100 transition-colors border border-transparent hover:border-primary-200">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent-200">
            <Target size={32} />
          </div>
          <h3 className="text-xl font-bold text-text-100 mb-4">Vivência Académica</h3>
          <p className="text-text-200 text-sm leading-relaxed">
            Gerir os assuntos correntes do Núcleo e promover um espírito de união, integração e entreajuda, desde o acolhimento aos novos estudantes até à celebração dos finalistas.
          </p>
        </div>

      </div>

      {/* Team Section */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-100 mb-2">Estrutura do Núcleo</h2>
          <p className="text-accent-200 font-bold uppercase tracking-widest text-sm">Mandato 2025 / 2026</p>
        </div>

        {/* Direção */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-text-100 mb-8 border-b border-bg-300 pb-2 mx-auto max-w-xs">Direção</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {direcao.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center group">
                <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-primary-100 group-hover:border-accent-100 transition-colors shadow-md bg-bg-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.83)' }}
                  />
                </div>
                <h3 className="font-bold text-lg text-text-100">{member.name}</h3>
                <p className="text-accent-200 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mesa do Plenário */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-text-100 mb-8 border-b border-bg-300 pb-2 mx-auto max-w-xs">Mesa do Plenário</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mesaPlenario.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center group">
                <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-bg-200 group-hover:border-accent-100 transition-colors shadow-sm bg-bg-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.83)' }}
                  />
                </div>
                <h3 className="font-bold text-base text-text-100">{member.name}</h3>
                <p className="text-text-200 text-xs font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vogais */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-text-100 mb-8 border-b border-bg-300 pb-2 mx-auto max-w-xs">Vogais da Direção</h3>
          {/* Alterado para 4 colunas em md e acima (antes era lg:grid-cols-5) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
            {vogais.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center group">
                <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-bg-200 group-hover:border-accent-100 transition-colors shadow-sm bg-bg-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.83)' }}
                  />
                </div>
                <h3 className="font-bold text-sm text-text-100">{member.name}</h3>
                <p className="text-text-200 text-xs font-medium">Vogal</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
