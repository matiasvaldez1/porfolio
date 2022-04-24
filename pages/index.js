import Head from 'next/head'
import { Introduction } from '../components/Introduction/Introduction'
import { Hero } from '../components/Hero/Hero'
import { About } from '../components/About/About'
import {projects} from '../utils/projects'
import { Card } from '../components/Card projects/Card'
import styles from '../styles/Index.module.css'
import { Contact } from '../components/Contact/Contact'
import { Footer } from '../components/Footer/Footer'

export default function Home({projectsProps}) {
  return (
    <div>
      <Head>
        <title>Matias Valdez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Introduction />
      <About />
      <div className={styles.container}>
        <h1 className={styles.title}>My recent work</h1>
        <div className={styles.grid}>
          {projectsProps?.map(project =>{
            return (
              <Card 
              image={project.image}
              title={project.title}
              github={project.github}
              deploy={project.deploy}
              />
            )
          })}
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export const getStaticProps = async() =>{
  const projectsProps = projects
  return {
    props: {
      projectsProps
    }
  }
}
