import './Modal.css'
import { motion } from 'framer-motion'

const Modal = ({ show, title, img, gitHub, closeModal, overview }) => {
  return (
    show && (
      <motion.section
        className='modal-outside'
        key='modal'
        initial={{ opacity: 0, scale: .7}}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: .7 }}
      >
        <div className='modal-holder' onClick={e => e.stopPropagation()}>
          <div className='modal-image'>
            <img className='image-in-modal' src={img} />
          </div>
          <section className='overview-holder'>
            <h1 className='title'>{title}</h1>
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
                View GitHub
              </a>
              <button
                className='close'
                onClick={() => {
                  closeModal()
                }}
              ></button>
            </div>
          </section>
        </div>
      </motion.section>
    )
  )
}

export default Modal
