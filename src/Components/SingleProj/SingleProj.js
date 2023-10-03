import './SingleProj.css'
import React, { useEffect, useState } from 'react'

import { motion} from 'framer-motion'


const SingleProj = ({
  control,

  index,
  title,
  img,
  lang,
  gitHub,
  showModal,
  setSelectedProj,
  overview,
  description
}) => {


  const boxVariantBottom = {
    visible: { y: 0, opacity: 1, scale: 1 },
    hidden: { y: 200, opacity: 0, scale: 0.4 }
  }


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
          className='middle'
        >
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
                overview: overview,
                description: description
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
