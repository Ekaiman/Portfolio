import './About.css'
import { filterProps, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useRef, useState } from 'react'

const About = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const boxVariantLeft = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -200, opacity: 0 }
  }

  const boxVariantRight = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 200, opacity: 0 }
  }

  useEffect(() => {
    // console.log(inView)
    if (inView) {
      control.start('visible')
      document.querySelector('.about').ariaCurrent = 'page'
      document.querySelector('.work').ariaCurrent = false
      document.querySelector('.home').ariaCurrent = false
      document.querySelector('.contact').ariaCurrent = false
    }
  }, [control, inView])

  return (
    <div id='about' className='about-screen'>
      <h1 className='section-title'> ABOUT</h1>

      <motion.section
        ref={ref}
        variants={boxVariantLeft}
        initial='hidden'
        animate={control}
        transition={{ ease: 'easeIn', duration: 1, delay: 0.3 }}
        // viewport={{ once: false }}
        // initial={{ opacity: 0, x: -150 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ type: "easeIn", duration: .15, delay: .50}}
        className='about-wrapper'
      >
        <img className='about-image' src='../../../../picture.png' />
        <motion.section
          ref={ref}
          variants={boxVariantRight}
          initial='hidden'
          animate={control}
          transition={{ ease: [1, -0.65, 0, 2.25], duration: 2, delay: 0.5 }}
          className='about-items'
        >
          <h2 className='about-words'>
            I'm Emili, an outdoor entushiast and artist gone Front-End Engineer.
          </h2>
          <h3 className='about-words'>
            After an accident thats changed my abilities to push my limits
            outdoors, I've found ways to mentally push limits through software
            engineering.
          </h3>
          <h3 className='about-words'>
            I've spent the last year learning front-end development,
            specifically vanilla JavaScript, React and TypeScript.
          </h3>
        </motion.section>
      </motion.section>
    </div>
  )
}

export default About
