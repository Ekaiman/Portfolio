import './Home.css'

const Home = ({handleScroll}) => {
  return (
    <header id='home' className='home-wrapper'>
      <h1>Hello, I'm Emili Kaiman.</h1>
      <h1>I'm a Front-end engineer.</h1>
      <a href='#about' onClick={() => { handleScroll()}}> View my work</a>
    </header>
  )
}

export default Home
