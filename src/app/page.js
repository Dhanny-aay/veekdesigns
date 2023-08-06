import Image from 'next/image'
import Hero from './comps/hero'
import Servies from './comps/services'
import Projects from './comps/projects'
import Moreprojects from './comps/moreprojects'
import About from './comps/about'
import Process from './comps/process'

export default function Home() {
  return (
    <>
    <Hero/>
    <Servies/>
    <Projects/>
    <Moreprojects/>
    <About/>
    <Process/>
    </>
  )
}
