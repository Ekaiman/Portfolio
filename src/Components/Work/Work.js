import SingleProj from '../SingleProj/SingleProj'
import './Work.css'
import Modal from '../Modal/Modal'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

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
  elementInView
}) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const [ref1, inView1] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  useEffect(() => {
    if (inView1) {
      console.log('WORK')
      setElementInView(prev => [...prev, 'work'])
    }
    if (!inView1) {
      console.log('not in view WORK')
      let removeElem = elementInView.filter(elem => elem !== 'work')
      setElementInView(removeElem)
    }
  }, [ref1, inView1])

  const projects = [
    {
      id: 2,
      title: 'Roll For Initiative',
      img: '../../../../project_imgs/dnd.png',
      gitHub: 'https://github.com/jskomal/roll-for-initiative',
      overview:
        'Roll For Initiative is a chance style combat game featuring the mythical monster and courageous herse from the Dungens and Dragons (DnD) universe. Written in React and TypeScript.',
      lang: 'React/TypeScript'
    },
    {
      id: 1,
      title: 'DiverCity',
      img: '../../../../project_imgs/divercity.png',
      gitHub: 'https://github.com/Capstone-LGBTQ-BIPOC/FE_DiverCity',
      overview: 'Divercity',
      lang: 'React'
    },
    {
      id: 3,
      title: 'Tic Tac Toe',
      img: '../../../../project_imgs/tictac.png',
      gitHub: 'https://github.com/Ekaiman/tic-tac-toe',
      overview:
        'Tic Tac Toe allows for users to play a game that automatically asses for a win or draw. Written in vanilla JavaScript.',
      lang: 'Vanilla JS'
    },
    {
      id: 5,
      title: 'Randcid Tomatillos',
      img: '../../../../project_imgs/rancid.png',
      gitHub: 'https://github.com/Ekaiman/Rancid_Tomatillos',
      overview:
        'Rancid tomatillos was a project built to learn React and dynamic routing. ',
      lang: 'React'
    },
    {
      id: 4,
      title: 'Travel Tracker',
      img: '../../../../project_imgs/travel.png',
      gitHub: 'https://github.com/Ekaiman/travelTracker',
      overview: '',
      lang: 'Vanilla JS'
    }
  ]

  const projectCard = projects.map((proj, index) => {
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
      />
    )
  })

  return (
    <motion.section ref={ref} id='work' className='work-wrapper'>
      <AnimatePresence initial={false}>
        <Modal
          show={showing}
          closeModal={closeModal}
          title={title}
          img={img}
          gitHub={gitHub}
          overview={overview}
        />
      </AnimatePresence>

      <h1 className='section-title'>PROJECTS</h1>
      <div ref={ref1} className='project-holder'>
        {projectCard}
      </div>
    </motion.section>
  )
}

export default Work
