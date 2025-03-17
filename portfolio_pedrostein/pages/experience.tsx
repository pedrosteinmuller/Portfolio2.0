import Layout from "@/components/Layout";
import Head from "next/head";

const stacks = [
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🗄" },
  { name: "Power BI", icon: "📊" },
  { name: "DAX", icon: "📊" },
  { name: "Excel", icon: "📈" },
  { name: "Apache Spark", icon: "✨" },
  { name: "ETL", icon: "🛠" },
  { name: "Google Cloud Platform", icon: "☁︎" },
];

const experiences = [
  {
    company: "Empresa X",
    role: "Data Engineer",
    period: "2023 - Presente",
    description:
      "Atuando na construção de pipelines de dados usando Python e SQL Server.",
  },
  {
    company: "Startup Y",
    role: "Analista de Dados Júnior",
    period: "2021 - 2023",
    description:
      "Análise de dados e criação de dashboards interativos no Power BI.",
  },
  {
    company: "Universidade Z",
    role: "Pesquisador Científico",
    period: "2018 - 2021",
    description:
      "Trabalhei com análise de sinais de rádio do espaço e processamento de dados.",
  },
];

export default function Experience() {
  return (
    <Layout>
      <Head>
        <title>Experiências e Habilidades | Meu Portfólio</title>
        <meta
          name="description"
          content="Saiba mais sobre as minhas experiências e habilidades."
        />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden pt-14">
        <h1 className="text-center text-4xl font-bold text-textDark">
          Experiências e Habilidades
        </h1>
        <section className="py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform"
              >
                <span className="text-4xl font-bold">{stack.icon}</span>
                <p className="text-lg font-semibold mt-2">{stack.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center text-textDark mb-6">
            Experiência Profissional
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative border-l-4 border-purple-900 pl-6 pb-6 mb-6"
              >
                <h3 className="text-xl font-semibold">
                  {exp.role} - {exp.company}
                </h3>
                <p className="text-gray-600">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
