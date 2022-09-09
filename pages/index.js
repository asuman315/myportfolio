import Head from 'next/head'
import Hero from '../Components/Hero/Hero';
import Navigation from '../Components/Navigation/Navigation';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects'
import Footer from '../Components/Footer/Footer';

export default function Home() {
  return (
   <main>
      <section>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </section>
   </main>
  )
}
