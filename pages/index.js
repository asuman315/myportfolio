import Head from "next/head";
import Hero from "../Components/Hero/Hero";
import Navigation from "../Components/Navigation/Navigation";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Asuman Ssendegeya</title>
        <meta
          name="description"
          content="I'm Asuman Ssendegeya a web developer who loves building scalable, fast and intuitive user experiences. Specialized in the JavaScript ecosystem - particularly React, Next.js, Typescript and Express. I am particularly interested in the front-end, designing user interfaces and delivering clean, modular code."
        />
      </Head>
      <main
        className={`font-urbanist min-h-screen text-white pb-16`}
        style={{
          backgroundImage: "url('/assets/dotted-pattern-83.svg'), url('/assets/semi-circle-five.svg')",
          backgroundRepeat: "repeat, no-repeat",
          backgroundPosition: "center, left top",
          backgroundAttachment: "fixed, scroll",
          backgroundSize: "auto, auto",
        }}
      >
        <section className=" min-h-scree">
         {/* <Image src="/assets/dotted-pattern-84.svg" alt="dotted pattern" width={400} height={500} className="absolute " /> */}
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Footer />
        </section>
      </main>
    </>
  );
}
