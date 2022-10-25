import './SingleProj.css'
import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const SingleProj = ({ control, ref, inView, index, title, img, lang, gitHub, showModal, setSelectedProj, overview }) => {
  // const control = useAnimation()
  // const [ref, inView] = useInView()

  const boxVariantBottom = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 50, opacity: 0 }
  }

  // console.log(control)
  

  // useEffect(() => {
  //   console.log(inView, 'yes')
  //   if (inView) {
  //     control.start('visible')
  //   }
  // }, [control, inView])

  return (
    <>
      <motion.div
        variants={boxVariantBottom}
        initial='hidden'
        animate={control}
        transition={{ ease: 'easeIn', duration: 1, delay: index - 0.6 }}
        className='container'
      >
        <img className='project-image' src={img} />
        <div class='middle'>
          {/* <button
            onClick={() => {
              showModal()
              setSelectedProj({
                title: title,
                img: img,
                gitHub: gitHub,
                overview: overview
              })
            }}
            class='text'
          >
            Learn More
          </button> */}
          <h1>{title}</h1>
          <p>{lang}</p>
          <button
            class='button-6'
            role='button'
            onClick={(e) => {
             e.stopPropagation()
              showModal()
              setSelectedProj({
                title: title,
                img: img,
                gitHub: gitHub,
                overview: overview
              })
            }}
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </>
  )
}

export default SingleProj
