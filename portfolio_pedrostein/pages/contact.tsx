import Layout from "@/components/Layout";
import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/meoaobao", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        (event.target as HTMLFormElement).reset(); // Limpa o formulário após o envio
      } else {
        alert("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      alert("Ocorreu um erro. Verifique sua conexão e tente novamente.");
    }

    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>Contato | Meu Portfólio</title>
        <meta
          name="description"
          content="Entre em contato comigo. Conheça meus perfis no LinkedIn, GitHub e envie uma mensagem."
        />
      </Head>
      <div className="flex flex-col items-center bg-bodyColor">
        <h2 className="text-4xl font-semibold mb-4 text-textDark ">Meus Contatos</h2>
        <ul className="space-y-2 text-lg ">
          <li>
            <span className="font-medium ">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/pedrosteinmuller"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/pedrosteinmuller
            </a>
          </li>
          <li>
            <span className="font-medium">Celular:</span>{" "}
            <a
              href="tel:+5583987754348"
              className="text-blue-500 hover:underline"
            >
              +55 83 98775-4348
            </a>
          </li>
          <li>
            <span className="font-medium">GitHub:</span>{" "}
            <a
              href="https://github.com/pedrosteinmuller"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              github.com/pedrosteinmuller
            </a>
          </li>
          <li>
            <span className="font-medium">Gmail:</span>{" "}
            <a
              href="mailto:pedrosteinmuller100@gmail.com"
              className="text-blue-500 hover:underline"
            >
              pedrosteinmuller100@gmail.com
            </a>
          </li>
          <li>
            <span className="font-medium">Hotmail:</span>{" "}
            <a
              href="mailto:pedrosteinmuller10105@hotmail.com"
              className="text-blue-500 hover:underline"
            >
              pedrosteinmuller10105@hotmail.com
            </a>
          </li>
        </ul>
      </div>
      <main className="min-h-screen bg-bodyColor text-textLight flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold text-textDark mb-8 ">Envie a sua mensagem para que possamos conversar mais e você pode me conhecer melhor!</h1>

        <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Envie sua Mensagem</h2>
          {submitted ? (
            <p className="text-green-400 font-medium">
              Obrigado! Sua mensagem foi enviada com sucesso.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300 disabled:bg-gray-500"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          )}
        </div>
      </main>
    </Layout>
  );
}
