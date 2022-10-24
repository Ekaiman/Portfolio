import './Contact.css'

const Contact = () => {
  return (
    <>
      <section id='hexagon'>
        <section id='contact' className='contact-wrapper'>
          <div className='space'></div>
          <h1>CONTACT</h1>
          <p>Have a question or want to work together?</p>
          <p>Shoot me an <a href='mailto:emilikaiman@gmail.com'>email.</a></p>
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
