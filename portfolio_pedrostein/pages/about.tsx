import Layout from "@/components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Sobre Mim | Meu Portfólio</title>
        <meta
          name="description"
          content="Saiba mais sobre mim e minha trajetória profissional."
        />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden">
        <h1 className="text-center text-4xl font-bold text-textDark text-textLight">
          Sobre Mim
        </h1>
        <p className="mt-4 text-lg text-600 max-w-2xl text-center">
          Oi, me chamo Pedro Steinmüller Pimentel, tenho 29 anos e sou natural
          de Campina Grande - Paraíba. Quero compartilhar um pouco da minha
          trajetória de vida e profissional e de como cheguei até aqui.
        </p>
        <p className="mt-4 text-lg text-600 max-w-2xl text-center">
          Desde a adolescência, sempre fui fascinado por matemática e física,
          buscando entender o universo, sua origem e composição. Esse interesse
          me levou a cursar Licenciatura em Física pela Universidade Estadual da
          Paraíba (UEPB), onde me graduei após quatro anos. Em seguida, fui
          aprovado no mestrado da Universidade Federal de Campina Grande (UFCG),
          onde aprofundei meus estudos e desenvolvi habilidades analíticas ao
          trabalhar com dados cosmológicos e sinais captados por
          radiotelescópios. Foi nesse período que meu interesse por Análise de
          Dados começou a crescer.
        </p>
        <p className="mt-4 text-lg text-600 max-w-2xl text-center">
          Durante meus anos na pesquisa científica, tive contato intenso com
          Python, SQL, visualização de dados e Big Data, analisando grandes
          volumes de informações para interpretar fenômenos físicos. Após
          concluir o mestrado em 2022, decidi direcionar minha carreira para a
          área de Análise de Dados, onde fiz o curso de 1 ano na escola Trybe e
          logo após alguns meses consegui a minha primeira oportunidade como
          analista de dados em uma startup brasileira, aplicando meu
          conhecimento matemático e estatístico e experiência na área de dados
          para solucionar problemas reais no mundo dos negócios.
        </p>
        <p className="mt-4 text-lg text-600 max-w-2xl text-center">
          Para fortalecer meus conhecimentos e ferramentas de ETL em análise de
          dados, aprofundei meus estudos em Python, Pandas, Power BI e SQL,
          desenvolvendo projetos práticos e aplicando técnicas de exploração e
          análise de dados. Meu objetivo é transformar dados em insights
          estratégicos que auxiliem empresas na tomada de decisão.
        </p>
        <p className="mt-4 text-lg text-600 max-w-2xl text-center">
          Além disso, possuo conhecimentos adicionais em minha formação de
          Desenvolvimento Web Fullstack, adquiridos durante minha formação na
          Trybe, o que me proporcionou uma visão mais ampla sobre tecnologia e
          integração de dados.
        </p>
        <p className="mt-4 text-lg text-600 max-w-2xl text-center">
          Minha expertise inclui análise exploratória de dados, criação de
          dashboards interativos, automação de processos e desenvolvimento de
          soluções de Business Intelligence. Atualmente, estou focado em
          consolidar minha carreira na Análise de Dados, buscando desafios que
          me permitam crescer e contribuir significativamente para projetos
          inovadores.
        </p>
      </main>
    </Layout>
  );
}
