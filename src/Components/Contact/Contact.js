import './Contact.css'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

      {/* <footer className='contact-links'> */}
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
              {/* <FontAwesomeIcon icon={faHome} className='icon'/> */}
              <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
              {/* <i class='fab fa-facebook-f icon'></i>{' '} */}
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
              {/* <FontAwesomeIcon icon={faHome} className='icon'/> */}
              <FontAwesomeIcon icon={faGoogle} className='icon' />
              {/* <i class='fab fa-facebook-f icon'></i>{' '} */}
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
              {/* <FontAwesomeIcon icon={faHome} className='icon'/> */}
              <FontAwesomeIcon icon={faGithubAlt} className='icon' />
              {/* <i class='fab fa-facebook-f icon'></i>{' '} */}
            </a>
          </li>
        </section>
      </ul>

      {/* <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/Ekaiman'
        >
          <img className='icons' src='../../../../social-icons/Octocat.png' />
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
        </a> */}
      {/* </footer> */}
    </section>
  )
}

export default Contact
