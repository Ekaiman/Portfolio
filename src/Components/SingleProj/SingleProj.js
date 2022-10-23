import './SingleProj.css'

const SingleProj = ({ title, img, gitHub }) => {
  return (
    <div className='container'>
      <img className='project-image' src={img} />
      <div class='middle'>
        <button class='text'>SEE MORE</button>
      </div>
    </div>
  )
}

export default SingleProj
