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
        title: "Ranking de Universidades.",
        description: "Análise de dados do ranking global das melhores universidades.",
        link: "https://github.com/pedrosteinmuller/UniversityRanking",
        icon: "🏛️"
      },
      {
        title: "Análise de Músicas do Spotify.",
        description: "Análise de 114.000 músicas do Spotify para encontrar padrões e insights.",
        link: "https://github.com/pedrosteinmuller/SpotifySongs",
        icon: "🎵"
      }
    ],
    sql: [
      {
        title: "Estudos e Práticas de SQL",
        description: "Práticas de SQL, querys avançadas, aprimorando os conhecimentos teóricos e análise de métricas.",
        link: "https://github.com/pedrosteinmuller/Analise_Metricas_Querys_SQL",
        icon: "📌"
      },
      {
        title: "Pizzaria SQL",
        description: "Resolução de perguntas de negócio utilizando SQL.",
        link: "https://github.com/pedrosteinmuller/PizzariaSQL",
        icon: "🍕"
      }
    ],
    powerbi: [
      {
        title: "Dashboards Power BI - Curso DSA",
        description: "Dashboard desenvolvido de diversas áreas de negócio para geração de insights relevantes, utilizando dados fictícios e uso de DAX.",
        link: "https://github.com/pedrosteinmuller/PowerBI-Dashboards",
        icon: "👥"
      },
      {
        title: "Dashboard sobre Gestão de Projetos",
        description: "Visualização clara de KPIs envolvendo gestão de projetos para tomada de decisão e criação de DAX.",
        link: "https://github.com/pedrosteinmuller/Dashboard_PowerBI_Gestao_Projetos",
        icon: "📈"
      },
      {
        title: "Dashboards Power BI - RH e KPIs",
        description: "Dashboard em Power BI focado em KPIs (Key Performance Indicators) da área de Recursos Humanos.",
        link: "https://github.com/pedrosteinmuller/Dashboard_PowerBi_RH_KPIs",
        icon: "📈"
      },
      {
        title: "Dashboards Power BI - Superstore",
        description: "Dashboard em Power BI e DAX com foco em análise de vendas da Global Superstore.",
        link: "https://github.com/pedrosteinmuller/Dashboard_PowerBi_Superstore",
        icon: "📈"
      },
      {
        title: "Dashboards Power BI - Financeiro",
        description: "Dashboard em Power BI com foco em análise financeira.",
        link: "https://github.com/pedrosteinmuller/Dashboard_PowerBi_Financeiro",
        icon: "📈"
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
    <section className="w-full h-screen font-bodyFont bg-bodyColor overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-textLight">Projetos</h2>
        
        {/* Project Tabs */}
        <div className="flex justify-center mb-10">
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
              onClick={() => setActiveTab('excel')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'excel' 
                  ? 'bg-purple-900 text-white' 
                  : 'bg-white text-purple-900 hover:bg-grey-100'
              } border-t border-b border-purple-300 transition duration-300`}
            >
              Excel
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
