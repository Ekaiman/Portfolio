import './Careers.css'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Careers = ({ elementInView, setElementInView }) => {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setElementInView(prev => [...prev, 'careers'])
    } else {
      let removeElem = elementInView.filter(elem => elem !== 'careers')
      setElementInView(removeElem)
    }
  }, [inView])

  return (
    <div id='careers' className='careers-holder'>
      <p ref={ref} className='section-title'>
        CAREERS
      </p>
      <div class='job-holder'>
        <div className='line'>
          <section>
            <h1 className='date'></h1>
            <div className='circle'></div>
            <section className='job'>
              <p className='date'>MARCH 2023 - PRESENT</p>
              <h1 className='title'>
                Frontend Engineer @ Boomerang DM (parttime)
              </h1>
              <p className='description'>
                As the only frontend engineer at Boomerang DM, I have been
                responsible for updating the legacy codebase to a mobile
                friendly and responsive design. I'm proud to say that I have
                been commited to helping deliver a seamless product to our end
                users. As just one of two developers, I often wear many hats and
                participate in QA and design.
              </p>
            </section>
          </section>
          <div className='circle two'></div>
          <section className='job job-2'>
            <p className='date'>JANUARY 2023 - JUNE 2024</p>
            <h1 className='title'>
              Software Engineer @ Dish Network (fulltime){' '}
            </h1>
            <p className='description'>
              As a Software Engineer at Dish I had the abilit to identify issues
              within our software and workflows and the autonomy to come up
              with solutions. I used Python scripts, Selenium, and WebDriver to
              automate manual tasks and reduce processing time. I also worked
              closely with our stakeholders to configure our software to their
              business needs.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Careers
