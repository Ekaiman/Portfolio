import SingleProj from '../SingleProj/SingleProj'
import './Work.css'
import Modal from '../Modal/Modal'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import ProjectFilter from '../ProjectFilter/ProjectFilter'

const Work = ({
  showModal,
  setSelectedProj,
  showing,
  closeModal,
  title,
  img,
  gitHub,
  overview,
  setElementInView,
  elementInView,
  projects,
  description
}) => {
  
  const control = useAnimation()
  const [ref, inView] = useInView()
  const [ref1, inView1] = useInView()
  const [showingProjects, setShowingProjects]
    = useState(projects)
  
  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  useEffect(() => {
    if (inView1) {
      setElementInView(prev => [...prev, 'work'])
    }
    if (!inView1) {
      let removeElem = elementInView.filter(elem => elem !== 'work')
      setElementInView(removeElem)
    }
  }, [ref1, inView1])

  const projectCard = showingProjects.map((proj, index) => {
    return (
      <SingleProj
        inView={inView}
        index={index}
        setSelectedProj={setSelectedProj}
        showModal={showModal}
        title={proj.title}
        img={proj.img}
        gitHub={proj.gitHub}
        overview={proj.overview}
        control={control}
        lang={proj.lang}
        key={proj.id}
        description={proj.description}
      />
    )
  })

  return (
    <>
      <motion.section ref={ref} id='work' className='work-wrapper'>
        <AnimatePresence initial={false}>
          <Modal
            show={showing}
            closeModal={closeModal}
            title={title}
            img={img}
            gitHub={gitHub}
            overview={overview}
            description={description}
          />
        </AnimatePresence>

        <h1 className='section-title'>PROJECTS</h1>
        {/* <ProjectFilter projects={projects} setShowingProjects={setShowingProjects} showingProjects={showingProjects} /> */}
        <div ref={ref1} className='project-holder'>
          {projectCard}
        </div>
      </motion.section>
    </>
  )
}

export default Work
