import './SingleProj.css'
import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SingleProj = ({
  control,
  inView,
  index,
  title,
  img,
  lang,
  gitHub,
  showModal,
  setSelectedProj,
  overview
}) => {


  const boxVariantBottom = {
    visible: { y: 0, opacity: 1, scale: 1 },
    hidden: { y: 200, opacity: 0, scale: 0.4 }
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
        transition={{
          ease: 'easeIn',
          duration: 0.2,
          delay: index - index * 0.8
        }}
        className='container'
      >
        <img className='project-image' src={img[0]} />
        <motion.div
          // initial={{scale: 2}}
          // whileHover={{
          //   scale: 1,
          //   transition: { duration: 1 }
          // }}
          className='middle'
        >
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
          <div>
            <h1 className='middle-title'>{title}</h1>
            <p className='middle-lang'>{lang}</p>
          </div>
          <button
            className='button-6'
            role='button'
            onClick={e => {
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
        </motion.div>
      </motion.div>
    </>
  )
}

export default SingleProj
