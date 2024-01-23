import Head from 'next/head'
import Hero from '../Components/Hero/Hero';
import Navigation from '../Components/Navigation/Navigation';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects'
import Footer from '../Components/Footer/Footer';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
     <Head>
      <title>Asuman Ssendegeya</title>
      <meta name="description" content="I'm Asuman Ssendegeya a web developer who loves building scalable, fast and intuitive user experiences. Specialized in the JavaScript ecosystem - particularly React, Next.js, Typescript and Express. I am particularly interested in the front-end, designing user interfaces and delivering clean, modular code." />
    </Head>
      <main>
        <section>
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Footer />
        </section>
      </main>
    </Fragment>
  )
}
