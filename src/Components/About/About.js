import './About.css'
import { filterProps, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useRef, useState, useCallback } from 'react'

const About = ({ setElementInView, elementInView }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  const [ref1, inView1] = useInView()

  const boxVariantLeft = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -200, opacity: 0 }
  }

  const boxVariantRight = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 200, opacity: 0 }
  }

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  useEffect(() => {
    if (inView1) {
      setElementInView(prev => [...prev, 'about'])
    } else {
      let removeElem = elementInView.filter(elem => elem !== 'about')
      setElementInView(removeElem)
    }
  }, [inView1])

  return (
    <div id='about' className='about-screen'>
      <h1 className='section-title about-title'>ABOUT</h1>

      <motion.section
        ref={ref}
        variants={boxVariantLeft}
        initial='hidden'
        animate={control}
        transition={{ ease: 'easeIn', duration: 1, delay: 0.15 }}
        // viewport={{ once: false }}
        // initial={{ opacity: 0, x: -150 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ type: "easeIn", duration: .15, delay: .50}}
        className='about-wrapper'
      >
        <img ref={ref1} className='about-image' src='../../../../picture.png' />
        <motion.section
          ref={ref}
          variants={boxVariantRight}
          initial='hidden'
          animate={control}
          transition={{ ease: [1, -0.65, 0, 2.25], duration: 2, delay: 0.3 }}
          className='about-items'
        >
          <h2 className='about-words'>
            I'm Emili: outdoor enthusiast, artist, and creative thinker gone
            Front-End Engineer.
          </h2>
          <h3 className='about-words'>
            As someone who actively seeks out challenges, I'm excited to be in a
            career that promotes life long learning and endless opporunities for
            growth. I thrive in enviorments that require critical thinking and
            problem solving. I've spent the last year learning front-end
            development, and specialize in JavaScript, React, TypeScript and see
            the importance in both end-to-end testing and user flow testing.
          </h3>
          <h3 className='about-words'>
            I'm located in Denver, CO and in my spare time you'll find me in the
            outdoors finding ways to get my endorphins pumping, or curled up
            cuddling my cat named Baby.
          </h3>
        </motion.section>
      </motion.section>
    </div>
  )
}

export default About
