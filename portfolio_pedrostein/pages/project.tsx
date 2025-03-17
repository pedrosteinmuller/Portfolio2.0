import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Layout from '@/components/Layout';
import Head from 'next/head';

// Tipagem para os projetos
interface Project {
  title: string;
  description: string;
  link: string;
  icon: string;
}

// Tipagem para o objeto de projetos
interface ProjectsData {
  python: Project[];
  sql: Project[];
  powerbi: Project[];
  excel: Project[];
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'sql' | 'powerbi'| 'excel'>('python'); // Tipagem para as tabs

  const projects: ProjectsData = {
    python: [
      {
        title: "Análise das linguagens mais utilizadas no GitHub.",
        description: "Análise exploratória utilizando a API do GitHub para coletar dados das linguagens de programação mais utilizadas durante o período de 2019 a 2023.",
        link: "https://github.com/pedrosteinmuller/github-language-analysis",
        icon: "📊"
      },
      {
        title: "Supermarket Sales Dashboard.",
        description: "Este projeto é um dashboard interativo desenvolvido em Python com Streamlit e Plotly para análise de vendas de um supermercado.",
        link: "https://github.com/pedrosteinmuller/Dashboard_Python",
        icon: "📊"
      },
      {
        title: "Data Analysis With Google Colaboratory.",
        description: "Análises e práticas de ETL com Python e Pandas através do Google Colaboratory.",
        link: "https://github.com/pedrosteinmuller/project_data_analysis_python",
        icon: "📊"
      },
      {
        title: "Ranking de Universidades (em andamento)",
        description: "Análise de dados do ranking global das melhores universidades.",
        link: "",
        icon: "🏛️"
      },
      {
        title: "Análise de Músicas do Spotify (em andamento)",
        description: "Análise de 114.000 músicas do Spotify para encontrar padrões e insights.",
        link: "",
        icon: "🎵"
      }
    ],
    sql: [
      {
        title: "Desafios SQL (em andamento)",
        description: "Desafios resolvidos em SQL nos níveis Easy, Medium e Hard.",
        link: "",
        icon: "📌"
      },
      {
        title: "Pizzaria SQL (em andamento)",
        description: "Resolução de perguntas de negócio utilizando SQL.",
        link: "",
        icon: "🍕"
      }
    ],
    powerbi: [
      {
        title: "Dashboard sobre Gestão de Projetos",
        description: "Visualização clara de KPIs envolvendo gestão de projetos para tomada de decisão e criação de DAX.",
        link: "https://github.com/pedrosteinmuller/Dashboard_PowerBI_Gestao_Projetos",
        icon: "📈"
      },
      {
        title: "Dashboards Power BI - Curso DSA",
        description: "Dashboard desenvolvido de diversas áreas de negócio para geração de insights relevantes, utilizando dados fictícios e uso de DAX.",
        link: "https://github.com/pedrosteinmuller/PowerBI-Dashboards",
        icon: "👥"
      }
    ],
        excel: [
      {
        title: "(em breve...)",
        description: "",
        link: "",
        icon: "📈"
      },
    ],
  };

  return (
    <Layout>
      <Head>
      <title>Projetos | Meu Portfólio</title>
      </Head>
    <title>Projetos | Meu Portfólio</title>
    <section className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-grey-900">Projetos</h2>
        
        {/* Project Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button 
              onClick={() => setActiveTab('python')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'python' 
                  ? 'bg-purple-900 text-white' 
                  : 'bg-white text-purple-900 hover:bg-grey-100'
              } border border-purple-300 transition duration-300`}
            >
              Python
            </button>
            <button 
              onClick={() => setActiveTab('sql')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'sql' 
                  ? 'bg-purple-900 text-white' 
                  : 'bg-white text-purple-900 hover:bg-grey-100'
              } border-t border-b border-purple-300 transition duration-300`}
            >
              SQL
            </button>
            <button 
              onClick={() => setActiveTab('powerbi')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'powerbi' 
                  ? 'bg-purple-900 text-white' 
                  : 'bg-white text-purple-900 hover:bg-grey-100'
              } border border-purple-300 transition duration-300`}
            >
              Power BI
            </button>
            <button 
              onClick={() => setActiveTab('excel')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'excel' 
                  ? 'bg-purple-900 text-white' 
                  : 'bg-white text-purple-900 hover:bg-grey-100'
              } border border-purple-300 transition duration-300`}
            >
              Excel
            </button>
          </div>
        </div>

        {/* Projects */}
        <div>
          {projects[activeTab].map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default Projects;
