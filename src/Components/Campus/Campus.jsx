import './Campus.css'
import gallery_1 from '../../assets/image.webp'
import gallery_2 from '../../assets/image1.webp'
import gallery_3 from '../../assets/Hero-image.jpg'
import gallery_4 from '../../assets/program-3.webp'
import { FaArrowRight } from "react-icons/fa";
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="galery image campus" loading='lazy' />
        <img src={gallery_2} alt="galery image campus" loading='lazy' />
        <img src={gallery_3} alt="galery image campus" loading='lazy' />
        <img src={gallery_4} alt="galery image campus" loading='lazy' />
      </div>
      <button className='btn dark-btn'>See more here <FaArrowRight /></button>
    </div>
  )
}
export default Campus