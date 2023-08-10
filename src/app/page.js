import Image from 'next/image'
import Hero from './comps/hero'
import Servies from './comps/services'
import Projects from './comps/projects'
import Moreprojects from './comps/moreprojects'
import About from './comps/about'
import Process from './comps/process'
import Contacts from './comps/contact'
import Footer from './comps/footer'

export default function Home() {
  return (
    <>
    <Hero/>
    <Servies/>
    <Projects/>
    <Moreprojects/>
    <About/>
    <Contacts/>
    <Process/>
    <Footer/>
    </>
  )
}
