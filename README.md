
# NEEI Web Portal & Quack 🦆

Este repositório contém o código-fonte do portal institucional do **Núcleo de Estudantes de Engenharia Informática (NEEI)** da Universidade do Algarve (UAlg).

A plataforma serve como o ponto central de comunicação para os estudantes, oferecendo recursos académicos, ofertas de emprego e, principalmente, o **Quack** — um executor de código.

## 🚀 Funcionalidades Principais

### 1. Quack (Executor de Código)
O Quack é uma ferramenta desenhada para as disciplinas de programação (C e Java) da licenciatura.
*   **Execução Real:** Utiliza a API do [Piston](https://github.com/engineer-man/piston) para compilar e executar código C e Java num ambiente seguro.
*   **Exercícios Curriculares:** Contém bibliotecas de exercícios das cadeiras de PI, LP, AED e POO.
*   **Testes Automáticos:** Validação imediata de Inputs/Outputs.

### 2. Portal Institucional
*   **Notícias e Eventos:** Calendário integrado e destaques do mandato.
*   **Recursos:** Repositório de apontamentos, exames e vídeos organizados por ano curricular.
*   **Vagas:** Quadro de ofertas de estágio e emprego para alunos e alumni.
*   **Projetos:** Showcase de projetos desenvolvidos pelos alunos.
*   **Equipa:** Apresentação dinâmica dos órgãos sociais com avatares gerados automaticamente.

## 🛠️ Tecnologias Utilizadas

*   **Frontend:** React 19, TypeScript.
*   **Estilos:** Tailwind CSS.
*   **Navegação:** React Router DOM.
*   **Ícones:** Lucide React.
*   **Execução de Código:** Piston API (Public Instance).
*   **Formulários:** Formspree.

## ⚙️ Instalação e Configuração

### Pré-requisitos
*   Node.js (v18 ou superior)

### Passos
1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/neei-portal.git
    cd neei-portal
    ```

2.  **Instalar dependências:**
    ```bash
    npm install
    ```

3.  **Correr o projeto:**
    ```bash
    npm start
    # ou
    npm run dev
    ```

## 📂 Estrutura de Pastas

*   `/data`: Contém os ficheiros TypeScript com os exercícios de cada cadeira (PI, AED, LP, POO).
*   `/pages`: Componentes das páginas principais (Home, Quack, Resources, etc.).
*   `/services`: Lógica de conexão com APIs externas (Executor Piston).
*   `/components`: Componentes reutilizáveis (Header, Footer, CodeEditor).

---

Desenvolvido com ❤️ pelo **NEEI UAlg**.
