import {motion} from "framer-motion";

const Banner = () => {
  return (
    <section
    id="home"
    className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 
    lgl:gap-8 mdl:px-10 xl:px-4'
    >
      <motion.h3
      initial={{ y:10, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6}}
      className='text-lg font-titleFont tracking-wide text-textGreen'
      >
        Olá, meu nome é
      </motion.h3>
      <motion.h1
      initial={{ y:10, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7}}
      className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Pedro Steinmüller Pimentel <span className="text-textDark mt-2 lgl:mt-4">Apaixonado por análise de dados</span>
      </motion.h1>
      <motion.p
      initial={{ y:10, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8}}
      >
        Analista de Dados, Pesquisador Científico e Mestre em Física com experiência em resolução de problemas complexos e análise de Big Data em cenários empresariais e científicos. Gosto de sempre estar aprendendo coisas novas e me desafiando a resolver problemas.
      </motion.p>
      <motion.button
      className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      initial={{ y:10, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      >
        Veja os meus Projetos!
      </motion.button>
    </section>
  )
}

export default Banner