import Layout from "@/components/Layout";
import Head from "next/head";

export default function Experience() {
  return (
    <Layout>
      <Head>
        <title>Sobre Mim | Meu Portfólio</title>
        <meta name="description" content="Saiba mais sobre mim e minha trajetória profissional." />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-textDark">Sobre Mim</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
         Experiências
        </p>
      </main>
    </Layout>
  );
}
