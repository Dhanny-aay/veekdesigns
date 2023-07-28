import Image from 'next/image'
import Hero from './comps/hero'
import Servies from './comps/services'
import Projects from './comps/projects'

export default function Home() {
  return (
    <>
    <Hero/>
    <Servies/>
    <Projects/>
    </>
  )
}
