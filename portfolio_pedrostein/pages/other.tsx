import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import TrackVisibility from "react-on-screen";
import myProjects from "@/components/otherProject";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const mySkills = [
  { name: "CSS", image: "/css.svg" },
  { name: "Docker", image: "/docker.svg" },
  { name: "Git", image: "/git.svg" },
  { name: "GitHub", image: "/github.svg" },
  { name: "HTML", image: "/html.svg" },
  { name: "JavaScript", image: "/javascript.svg" },
  { name: "Jest", image: "/jest.svg" },
  { name: "MySQL", image: "/mysql.svg" },
  { name: "NodeJs", image: "/nodejs.svg" },
  { name: "React", image: "/react.svg" },
];

export default function Other() {
  const [activeTab, setActiveTab] = useState("first");
  return (
    <Layout>
      <Head>
        <title>Conhecimentos Adicionais | Meu Portfólio</title>
        <meta
          name="description"
          content="Saiba mais sobre mim e minha trajetória profissional."
        />
      </Head>

      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden pt-14">
        <h1 className="text-4xl font-bold mb-12 text-center text-textLight">
          Conhecimentos Adicionais
        </h1>
        <section id="skills" className="py-20 mt-10 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              className="py-12"
            >
              {mySkills.map(({ name, image }) => (
                <SwiperSlide key={name} className="flex flex-col items-center">
                  <div className="w-24 h-24 flex justify-center items-center bg-gray-800 rounded-full shadow-lg relative">
                    <Image
                      src={image}
                      alt={name}
                      width={64} // Define um tamanho fixo para otimizar carregamento
                      height={64}
                    />
                  </div>
                  <p className="mt-8 text-lg text-left font-semibold pt-12">
                    {name}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* Conhecimentos Adicionais Section */}
        <section
          id="additional-knowledge"
          className="py-12 text-white"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-lg font-medium">
              Já desenvolvi projetos de front-end, back-end e testes, utilizando
              tecnologias como HTML, CSS, JavaScript, React, Redux, TypeScript,
              Node.js, Docker, API Rest, Jest, RTL, Mocha, Chai e TDD.
            </p>
          </div>
          <section id="project" className="py-12 text-white">
            <div className="container mx-auto px-6">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2 className="text-3xl font-bold mb-12 text-center text-textLight">
                      Projetos de Front-End realizados durante a formação de Desenvolvedor Web Full Stack 
                    </h2>
                    <p className="text-lg mb-8">
                      A seguir, você poderá visualizar os meus projetos
                      realizados durante o módulo de Front-End na Trybe. Cada
                      projeto possui uma descrição do que é, stacks envolvidas,
                      link do projeto e do repositório no GitHub.
                    </p>

                    <div className="mb-5 text-center">
                      <ul className="flex justify-center space-x-8 mb-6">
                        <li>
                          <button
                            onClick={() => setActiveTab("first")}
                            className={`text-xl ${
                              activeTab === "first"
                                ? "text-blue-500"
                                : "text-white"
                            } hover:text-blue-300`}
                          >
                            Projetos
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setActiveTab("second")}
                            className={`text-xl ${
                              activeTab === "second"
                                ? "text-blue-500"
                                : "text-white"
                            } hover:text-blue-300`}
                          >
                            Links dos projetos
                          </button>
                        </li>
                      </ul>
                    </div>

                    {activeTab === "first" && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {myProjects.map((project, index) => (
                          <div
                            key={index}
                            className="project-container p-10 bg-gray-800 rounded-lg shadow-lg"
                          >
                            <Image
                              src={project.imagem}
                              alt={project.nome}
                              width={400}
                              height={300}
                              className="w-full h-auto"
                            />
                            <div className="project-description">
                              <h3 className="font-semibold text-lg mb-2">
                                {project.nome}
                              </h3>
                              <p>{project.descricao}</p>
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-2">
                                Tecnologias:
                              </h3>
                              <div className="flex space-x-4">
                                {project.stacks.map((stack, i) => (
                                  <div key={i} className="w-8 h-8">
                                    <Image
                                      src={stack}
                                      alt="Stack"
                                      width={32}
                                      height={32}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="project-links mt-8 space-x-4">
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-300"
                              >
                                Visualizar Projeto
                              </a>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-300"
                              >
                                Repositório no GitHub
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeTab === "second" && (
                      <div className="space-y-4">
                        {myProjects.map((project, index) => (
                          <div key={index} className="text-blue-500">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-300"
                            >
                              {project.link}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </TrackVisibility>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}
