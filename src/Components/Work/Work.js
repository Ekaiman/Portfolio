import SingleProj from '../SingleProj/SingleProj'
import './Work.css'

const Work = () => {
  const projects = [
    {
      title: 'Tic Tac Toe',
      img: '../../../../project_imgs/tictac.png',
      gitHub: 'https://github.com/Ekaiman/tic-tac-toe'
    },
    {
      title: 'Roll For Initiative',
      img: '../../../../project_imgs/dnd.png',
      gitHub: 'https://github.com/jskomal/roll-for-initiative'
    },
    {
      title: 'Randcid Tomatillos',
      img: '../../../../project_imgs/rancid.png',
      gitHub: 'https://github.com/Ekaiman/Rancid_Tomatillos'
    },
    {
      title: 'Travel Tracker',
      img: '../../../../project_imgs/travel.png',
      gitHub: 'https://github.com/Ekaiman/travelTracker'
    },
    {
      title: 'DiverCity',
      img: '../../../../project_imgs/divercity.png',
      gitHub: 'https://github.com/Capstone-LGBTQ-BIPOC/FE_DiverCity'
    }
  ]

  const projectCard = projects.map(proj => {
    return <SingleProj title={proj.title} img={proj.img} github={proj.gitHub} />
  })

  return (
    <section id='work' className='work-wrapper'>
      <h1>This section is about my work</h1>
      <div className='project-holder'>
        {projectCard}
      </div>
    </section>
  )
}

export default Work
