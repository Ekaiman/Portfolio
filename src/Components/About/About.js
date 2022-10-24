import './About.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

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
    console.log(inView)
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <div id='about' className='about-screen'>
      <h1 className='about-word'> ABOUT</h1>

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
          transition={{ ease: [1, -0.65, 0, 2.25], duration: 2, delay: .5 }}
          className='about-items'
        >
          <h2 className='item1'>first</h2>
          <h2 className='item2'>second</h2>
          <h2 className='item3'>third</h2>
          <h2 className='item4'>fourth</h2>
        </motion.section>
      </motion.section>
    </div>
  )
}

export default About
