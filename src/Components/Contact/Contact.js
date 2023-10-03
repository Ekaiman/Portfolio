import './Contact.css'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faGoogle,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons'

const Contact = ({ setElementInView, elementInView, play, stop }) => {
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
      <p ref={ref} className='contact-words'>
        {' '}
        Have a question or want to work together? Or want to talk ceramics or
        long distance hiking?
      </p>
      <p className='contact-words'>
        Shoot me an <a href='mailto:emilikaiman@gmail.com'>email.</a>
      </p>
      <a
        href='#home'
        className='arrow-container'
        onMouseEnter={() => {
          play()
        }}
      >
        <p className='arrow-up'>^</p>
        <p className='arrow-up'>^</p>
        <p className='arrow-up'>^</p>
      </a>
      <ul className='contact-links'>
        <p className='connect'>LETS CONNECT:</p>
        <section className='links'>
          <li>
            <a
              className='socials'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/emilikaiman/'
              onMouseEnter={() => {
                play()
              }}
              onMouseLeave={() => {
                stop()
              }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
            </a>
          </li>
          <li>
            <a
              className='socials'
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:emilikaiman@gmail.com'
              onMouseEnter={() => {
                play()
              }}
              onMouseLeave={() => {
                stop()
              }}
            >
              <FontAwesomeIcon icon={faGoogle} className='icon' />
            </a>
          </li>
          <li>
            <a
              className='socials'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/Ekaiman'
              onMouseEnter={() => {
                play()
              }}
              onMouseLeave={() => {
                stop()
              }}
            >
              <FontAwesomeIcon icon={faGithubAlt} className='icon' />
            </a>
          </li>
        </section>
      </ul>
    </section>
  )
}

export default Contact
