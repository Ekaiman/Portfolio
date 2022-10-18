import './Home.css'

const Home = ({handleScroll}) => {
  return (
    <header id='home' className='home-wrapper'>
      <h1>Hey, I'm Emili.</h1>
      <h1>Front-end devloper.</h1>
      <a href='#about' className='view-work-button'> View my work</a>
    </header>
  )
}

export default Home
