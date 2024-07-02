
import heroImage from '../assets/heroImage.jpg'

export default function Hero() {
  return (
    <div className="Hero_Container">
        
      <div className='Image_Wrapper'>
        <img src={heroImage} alt="Rhey's image" />
      </div>
      
      <div className="Hero_Description">
        <h1>Hi, I am Rhey, Creative Technologist</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum dicta eveniet ut officiis aliquam fugiat dolore maiores.</p>
        <button>Download Resume</button>
      </div>
    </div>
  )
}
 