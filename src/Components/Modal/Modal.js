import './Modal.css'

const Modal = ({ show, title, img, gitHub, closeModal, overview }) => {
  return (
    show && (
      // <section className="modal-outside">
      <div className='modal-holder'>
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
    )
    // </section>
  )
}

export default Modal
