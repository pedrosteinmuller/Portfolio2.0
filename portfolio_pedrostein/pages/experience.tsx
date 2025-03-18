import Layout from "@/components/Layout";
import Head from "next/head";

const stacks = [
  { name: "Python", icon: "🐍" },
  { name: "Apache Spark", icon: "🐍" },
  { name: "PySpark", icon: "🐍" },
  { name: "Power BI", icon: "📊" },
  { name: "DAX", icon: "📊" },
  { name: "Business Intelligence", icon: "📊" },
  { name: "SQL", icon: "🛢️" },
  { name: "Databricks", icon: "🛢️" },
  { name: "Excel", icon: "📈" },
  { name: "ETL", icon: "🛠️" },
  { name: "Google Cloud Platform", icon: "☁️" },
  { name: "Jupyter Notebook", icon: "📝" },
];

const experiences = [
  {
    company: "DEEP ESG",
    role: "Analista de Dados",
    period: "Novembro 2023 - Agosto 2024",
    description:
      "Na minha atuação, trabalhei com processamento e análise de grandes volumes de dados, dentro da infraestrutura do Google Cloud Platform (GCP). Desenvolvi pipelines de ETL para ingestão, transformação e armazenamento de dados, garantindo eficiência e escalabilidade nos processos. Fiz Manipulação e integração de dados utilizando Jupyter Notebooks, Apache Spark, PySpark e bancos de dados SQL/NoSQL;",
  },
  {
    company: "Universidade Federal de Campina Grande",
    role: "Pesquisador Científico",
    period: "Janeiro 2020 - Maio 2022",
    description:
      "Trabalhei com análise de sinais de rádio do espaço e processamento de dados. Minha jornada como pesquisador científico foi marcada por desafios complexos e conquistas significativas no campo da cosmologia e gravitação. Durante meu mestrado e como pesquisador, participei da construção inicial do radiotelescópio Uirapuru, testes e comprovações de teorias físicas que ampliou meu entendimento sobre o universo e me proporcionou habilidades práticas em instrumentação científica e análise de dados. Utilizei Python, Pandas, NumPy, Matplotlib e Seaborn para análise de dados e visualização de informações.",
  },
  {
    company: "Escolas Públicas e Privadas de Campina Grande",
    role: "Professor de Física",
    period: "Janeiro 2016 - Agosto 2018",
    description:
      "Durante minha graduação, participei de programas de iniciação à docência, como o PIBID e a Residência Pedagógica, onde lecionei aulas de Física para escolas públicas de Campina Grande - Paraíba. Além disso, realizei estágios obrigatórios do curso, aprimorando minha didática e habilidades de comunicação. A experiência de ensinar me proporcionou a capacidade de traduzir conceitos complexos de forma acessível, desenvolver pensamento crítico e solucionar problemas de maneira estruturada, competências fundamentais para análise de dados. A vivência em sala de aula também me proporcionou habilidades de liderança, trabalho em equipe e resiliência.",
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
        <h1 className="text-4xl font-bold mb-12 text-center text-textLight">
          Habilidades
        </h1>
        <section className="py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform"
              >
                <span className="text-4xl font-bold">{stack.icon}</span>
                <p className="text-lg font-semibold mt-2 text-gray-900">
                  {stack.name}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-12 text-center text-textLight">
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
                <p className="mt-2">
                  {exp.description}{" "}
                  <a
                    href="https://www.linkedin.com/in/pedrosteinmuller"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-900 font-semibold hover:underline"
                  >
                    Saiba mais no meu LinkedIn.
                  </a>
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
