import './About.css'
import { filterProps, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useRef, useState, useCallback } from 'react'

const About = ({ setElementInView, elementInView }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  const [ref1, inView1] = useInView()
  const [bioLength, setBioLength] = useState('mid')

  const emiliAbout = {
    short: 'Im Emili: creative thinker and problem solver',
    shortMid:
      "I'm Emili: creative thinker gone Front-end Engineer.  I know JavaScript and React really well.",
    mid: "I'm Emili: creative thinker, challenge seeker and Front-end Engineer. I thrive in environments that require critical thinking and problem solving. I know JavaScript, React, TypeScript and think E2E and user flow testing is important.",
    midLong:
      "I'm Emili: artist, and creative thinker gone Front-end Engineer. As someone who actively seeks out challenges, I'm excited to be in a career that promotes life long learning and endless opportunities for growth. I thrive in environments that require critical thinking and problem solving. I've spent the last year learning front-end development and specialize in JavaScript, React, TypeScript and see importance in both end-to-end and user flow testing. I'm located in Denver, CO.",
    long: "I'm Emili: outdoor enthusiast, artist, and creative thinker gone Front-end Engineer. As someone who actively seeks out challenges, I'm excited to be in a career that promotes life long learning and endless opportunities for growth. I thrive in environments that require critical thinking and problem solving. I've spent the last year learning front-end development and specialize in JavaScript, React, TypeScript and see importance in both end-to-end and user flow testing. I'm located in Denver, CO and in my spare time you'll find me in the outdoors finding ways to get my endorphins pumping, in a ceramics studio, or curled up cuddling my cat named baby."
  }

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
          <p>Adjust bio length:</p>
          <div className='bio-length'>
            <div className='radio-buttons'>
              <input
                type='radio'
                value='short'
                className='short'
                name='length'
                onClick={() => {
                  setBioLength('short')
                }}
              />
              <input
                type='radio'
                value='shortMid'
                className='shortMid'
                name='length'
                onClick={() => {
                  setBioLength('shortMid')
                }}
              />
              <input
                type='radio'
                value='mid'
                className='mid'
                name='length'
                defaultChecked={true}
                onClick={() => {
                  setBioLength('mid')
                }}
              />
              <input
                type='radio'
                value='midLong'
                className='midLong'
                name='length'
                onClick={() => {
                  setBioLength('midLong')
                }}
              />
              <input
                type='radio'
                value='long'
                className='long'
                name='length'
                onClick={() => {
                  setBioLength('long')
                }}
              />
            </div>
            <div className='short-long'>
              <p>shortest</p>
              <p>longest</p>
            </div>
          </div>

          <h2 className='about-words'>{emiliAbout[bioLength]}</h2>
        </motion.section>
      </motion.section>
    </div>
  )
}

export default About
