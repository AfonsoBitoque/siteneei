import React from 'react';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

interface ResourceItem {
  title: string;
  type: 'PDF' | 'Video' | 'Link';
  size: string;
}

const Resources: React.FC = () => {
  // Listas de recursos vazias conforme solicitado
  const resourcesYear1: ResourceItem[] = [];
  const resourcesYear2: ResourceItem[] = [];
  const resourcesYear3: ResourceItem[] = [];

  const renderSection = (yearTitle: string, items: ResourceItem[]) => (
    <div className="bg-white p-6 rounded-xl border border-primary-200 shadow-sm">
      <h2 className="text-xl font-bold text-text-100 mb-6 border-b border-bg-300 pb-2">{yearTitle}</h2>
      
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 bg-bg-200 rounded-lg border border-dashed border-primary-300">
            <BookOpen className="text-primary-300 mb-3 opacity-50" size={40} />
            <p className="text-text-200 text-sm font-medium">Ainda não foram adicionados recursos para este ano.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((res, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-bg-200 rounded-lg hover:bg-primary-100 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                {res.type === 'PDF' ? <FileText className="text-text-200" size={20}/> : <Video className="text-text-200" size={20}/>}
                <div>
                  <p className="text-sm font-medium text-text-100">{res.title}</p>
                  <p className="text-xs text-text-200">{res.type} • {res.size}</p>
                </div>
              </div>
              <Download className="text-accent-200 opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <div className="flex items-center gap-4 mb-12">
        <div className="bg-primary-100 p-3 rounded-lg">
            <BookOpen className="text-accent-200" size={32} />
        </div>
        <div>
            <h1 className="text-3xl font-bold text-text-100">Recursos de Estudo</h1>
            <p className="text-text-200">Apontamentos, exames antigos e guias partilhados pela comunidade.</p>
        </div>
      </div>

      <div className="space-y-8">
        {renderSection('1º Ano', resourcesYear1)}
        {renderSection('2º Ano', resourcesYear2)}
        {renderSection('3º Ano', resourcesYear3)}
      </div>
    </div>
  );
};

export default Resources;