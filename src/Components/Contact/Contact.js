import './Contact.css'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Contact = () => {
  const [ref, inView] = useInView()

  useEffect(() => {
    // console.log(inView)
    if (inView) {
      console.log('ABOUT')
      document.querySelector('.contact').ariaCurrent = 'page'
      document.querySelector('.work').ariaCurrent = false
      document.querySelector('.home').ariaCurrent = false
      document.querySelector('.about').ariaCurrent = false
    } 
  }, [inView])
  return (
    <>
      <section ref={ref} id='hexagon'>
        <section id='contact' className='contact-wrapper'>
          <div className='space'></div>
          <h1 className='section-title'>CONTACT</h1>
          <p>Have a question or want to work together?</p>
          <p>Shoot me an <a href='mailto:emilikaiman@gmail.com'>email.</a></p>
          <button></button>
          <footer className='contact-links'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/Ekaiman'
            >
              <img
                className='icons'
                src='../../../../social-icons/Octocat.png'
              />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/emilikaiman/'
            >
              <img className='icons' src='../../../../social-icons/li.png' />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:emilikaiman@gmail.com'
            >
              <img className='icons' src='../../../../social-icons/email.png' />
            </a>
          </footer>
        </section>
      </section>
    </>
  )
}

export default Contact
