import './Contact.css'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Contact = ({ setElementInView, elementInView }) => {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setElementInView(prev => [...prev, 'contact'])
    } else {
      let removeElem = elementInView.filter(elem => elem !== 'contact')
      setElementInView(removeElem)
    }
  }, [inView])

  return (
        <section id='contact' className='contact-wrapper'>
          <div className='space'></div>
          <h1 ref={ref} className='section-title'>
            CONTACT
          </h1>
          <p ref={ref}> Have a question or want to work together?</p>
          <p>
            Shoot me an <a href='mailto:emilikaiman@gmail.com'>email.</a>
          </p>
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
  )
}

export default Contact
