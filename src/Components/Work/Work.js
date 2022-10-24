import SingleProj from '../SingleProj/SingleProj'
import './Work.css'
import Modal from '../Modal/Modal'

const Work = ({showModal, setSelectedProj, showing, closeModal, title, img, gitHub, overview }) => {
  const projects = [
    {
      title: 'Tic Tac Toe',
      img: '../../../../project_imgs/tictac.png',
      gitHub: 'https://github.com/Ekaiman/tic-tac-toe',
      overview: "Tic Tac Toe allows for users to play a game that automatically asses for a win or draw. Written in vanilla JS."
    },
    {
      title: 'Roll For Initiative',
      img: '../../../../project_imgs/dnd.png',
      gitHub: 'https://github.com/jskomal/roll-for-initiative',
      overview: "Roll For Initiative is a chance style combat game featuring the mythical monster and courageous herse from the Dungens and Dragons (DnD) universe. Written in React and TypeScript."
    },
    {
      title: 'Randcid Tomatillos',
      img: '../../../../project_imgs/rancid.png',
      gitHub: 'https://github.com/Ekaiman/Rancid_Tomatillos',
      overview: ""
    },
    {
      title: 'Travel Tracker',
      img: '../../../../project_imgs/travel.png',
      gitHub: 'https://github.com/Ekaiman/travelTracker',
      overview: ""
    },
    {
      title: 'DiverCity',
      img: '../../../../project_imgs/divercity.png',
      gitHub: 'https://github.com/Capstone-LGBTQ-BIPOC/FE_DiverCity',
      overview: ""
    }
  ]

  const projectCard = projects.map((proj, index) => {
    return <SingleProj index={index}  setSelectedProj={setSelectedProj} showModal={showModal} title={proj.title} img={proj.img} gitHub={proj.gitHub} overview={proj.overview} />
  })

  return (
    <section id='work' className='work-wrapper'>
      <Modal show={showing} closeModal={closeModal} title={title} img={img} gitHub={gitHub} overview={overview} />
      <h1 className='section-title'>PROJECTS</h1>
      <div className='project-holder'>
        {projectCard}
      </div>
    </section>
  )
}

export default Work
