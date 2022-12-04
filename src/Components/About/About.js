import './About.css'
import { filterProps, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useRef, useState, useCallback } from 'react'
// import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = ({ setElementInView, elementInView, play }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  const [ref1, inView1] = useInView()
  const [bioLength, setBioLength] = useState('mid')

  const emiliAbout = {
    short: ' creative thinker and problem solver.',
    shortMid:
      ' creative thinker gone Front-end Engineer.  I know JavaScript and React really well.',
    mid: ' creative thinker, challenge seeker and Front-end Engineer. I thrive in environments that require critical thinking and problem solving. I know JavaScript, React, TypeScript and think E2E and user flow testing is important.',
    midLong:
      " artist, and creative thinker gone Front-end Engineer. As someone who actively seeks out challenges, I'm excited to be in a career that promotes life long learning and endless opportunities for growth. I thrive in environments that require critical thinking and problem solving. I've spent the last year learning front-end development and specialize in JavaScript, React, TypeScript and see importance in both end-to-end and user flow testing. I'm located in Denver, CO.",
    long: " outdoor enthusiast, artist, and creative thinker gone Front-end Engineer. As someone who actively seeks out challenges, I'm excited to be in a career that promotes life long learning and endless opportunities for growth. I thrive in environments that require critical thinking and problem solving. I've spent the last year learning front-end development and specialize in JavaScript, React, TypeScript and see importance in both end-to-end and user flow testing. I'm located in Denver, CO and in my spare time you'll find me in the outdoors finding ways to get my endorphins pumping, in a ceramics studio, or curled up cuddling my cat named Baby."
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
      <>
        <h1 className='section-title about-title'>ABOUT</h1>
      </>

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
          <section className='bio-radio-holder'>
            <div>
              <p className='adjust-bio-length'>Adjust bio length:</p>
              <div className='bio-length'>
                <div className='radio-buttons'>
                  <input
                    type='radio'
                    value='short'
                    className='radio-button'
                    name='length'
                    // onMouseEnter={() => {
                    // }}
                    onClick={() => {
                      setBioLength('short')
                    }}
                    onMouseEnter={() => {
                      play()
                    }}
                  />
                  <input
                    type='radio'
                    value='shortMid'
                    className='radio-button'
                    name='length'
                    onClick={() => {
                      setBioLength('shortMid')
                    }}
                    onMouseEnter={() => {
                      play()
                    }}
                  />
                  <input
                    type='radio'
                    value='mid'
                    className='radio-button'
                    name='length'
                    defaultChecked={true}
                    onClick={() => {
                      setBioLength('mid')
                    }}
                    onMouseEnter={() => {
                      play()
                    }}
                  />
                  <input
                    type='radio'
                    value='midLong'
                    className='radio-button'
                    name='length'
                    onClick={() => {
                      setBioLength('midLong')
                    }}
                    onMouseEnter={() => {
                      play()
                    }}
                  />
                  <input
                    type='radio'
                    value='long'
                    className='radio-button'
                    name='length'
                    onClick={() => {
                      setBioLength('long')
                    }}
                    onMouseEnter={() => {
                      play()
                    }}
                  />
                </div>
                <div className='short-long'>
                  <p>shortest</p>
                  <p>longest</p>
                </div>
              </div>
            </div>
          </section>
          <h2 className='intro'>I'm Emili:</h2>
          <h2 className='about-words intro'>{emiliAbout[bioLength]}</h2>
        </motion.section>
      </motion.section>
      <motion.a
        ref={ref}
        variants={boxVariantRight}
        initial='hidden'
        animate={control}
        transition={{ ease: [1, -0.65, 0, 2.25], duration: 2, delay: 0.3 }}
        className='about-me-icons'
        href='#contact'
        onMouseEnter={() => { play()}}
      >
        <p className='contact-connect'>LETS CONNECT!</p>
        <motion.div
          animate={{
            // scale: [1, 1.2, 1.2, 1, 1],
            translateY: [0, 0, 10, 10, 0]
            // borderRadius: ['0%', '0%', '50%', '50%', '0%']
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </motion.div>
      </motion.a>
    </div>
  )
}

export default About
