
import './About.css'
const About = () => { 

  return (
    <section id='about' className='about-wrapper'>
      <h1> THIS IS MY ABOUT ME</h1>
      <img className='about-image' src='../../../../picture.png' />
      <section className='about-items'>
        <h2 className='item'>first</h2>
        <h2 className='item'>second</h2>
        <h2 className='item'>third</h2>
        <h2 className='item'>fourth</h2>
      </section>
    </section>
  )
}

export default About