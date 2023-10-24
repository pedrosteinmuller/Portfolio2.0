import LeftSideBar from "@/components/LeftSideBar";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";
import Head from "next/head";
import {motion} from "framer-motion";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Steinmüller</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logopedro.jpg" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 fixed left-5 bottom-15"
          >
            <LeftSideBar />
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4">
            <Banner />
          </div>
          <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5 }}
           className="hidden xl:inline-flex w-32 h-30 fixed right-0"
          >
            <RightSideBar />
          </motion.div>
        </div>
      </main>
    </>
  )
}
