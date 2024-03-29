import './Modal.css'
import { motion } from 'framer-motion'

const Modal = ({
  show,
  title,
  img,
  gitHub,
  closeModal,
  overview,
  description
}) => {
  let count = 0

  const nextImage = () => {
    count++
    if (img.length > count) {
      document.querySelector('.image-in-modal').src = img[count]
    } else {
      count = 0
      document.querySelector('.image-in-modal').src = img[count]
    }
  }

  const backImage = () => {
    count--
    if (count >= 0) {
      document.querySelector('.image-in-modal').src = img[count]
    } else {
      count = img.length - 1
      document.querySelector('.image-in-modal').src = img[count]
    }
  }

  return (
    show && (
      <motion.section
        className='modal-outside'
        key='modal'
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
      >
        <div className='modal-holder' onClick={e => e.stopPropagation()}>

          <img className='image-in-modal' src={img[0]} alt={title} />
          <section className='overview-holder'>
            {img.length > 1 && (
              <>
                <a
                  className='back-button'
                  onClick={() => {
                    backImage()
                  }}
                >
                  &#8249;
                </a>

                <a
                  className='next-button'
                  onClick={() => {
                    nextImage()
                  }}
                >
                  &#8250;
                </a>
              </>
            )}

            <div className='modal-content-holder'>
              <h1 className='title'>{title}</h1>
              <h2 className='description'>{description}</h2>
              <hr />
              <p className='overview'>{overview}</p>
              <div className='button-holder'>
                <a
                  className='gitHub-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={gitHub}
                >
                  {' '}
                  VIEW GITHUB
                </a>
                <button
                  className='close'
                  onClick={() => {
                    closeModal()
                  }}
                ></button>
              </div>
            </div>
          </section>
        </div>
      </motion.section>
    )
  )
}

export default Modal
