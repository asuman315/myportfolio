import Head from "next/head";
import Home from "../Components/Home";

export default function HomePage() {
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
        className={`font-urbanist min-h-screen text-white`}
      >
        <Home />
      </main>
    </>
  );
}
