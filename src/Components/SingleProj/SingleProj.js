import './SingleProj.css'
import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const SingleProj = ({ title, img, gitHub, showModal, setSelectedProj, overview }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const boxVariantBottom = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 200, opacity: 0 }
  }

  

  useEffect(() => {
    console.log(inView)
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <>
      
      <motion.div
        ref={ref}
        variants={boxVariantBottom}
        initial='hidden'
        animate={control}
        transition={{ ease: 'easeIn', duration: 1, delay: 0.4 }} className='container'>
        <img className='project-image' src={img} />
        <div class='middle'>
          <button
            onClick={() => {
              showModal()
              setSelectedProj({ title: title , img: img, gitHub: gitHub, overview: overview })
            }}
            class='text'
          >
            SEE MORE
          </button>
        </div>
      </motion.div>
    </>
  )
}

export default SingleProj
