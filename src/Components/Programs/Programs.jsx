import './Programs.css'
import Img2 from '../../assets/program-2.avif'
import Img3 from '../../assets/program-3.webp'
import { FaUserGraduate } from "react-icons/fa";
import { FaGraduationCap, FaBookOpenReader } from "react-icons/fa6";
const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={Img2} alt="program" loading='lazy' />
        <div className="caption">
          <FaBookOpenReader className='programIcon'/>
          <p>Gradution Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Img2} alt="program" loading='lazy' />
        <div className="caption">
          <FaGraduationCap className='programIcon'/>
          <p>Gradution Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Img3} alt="program" loading='lazy' />
        <div className="caption">
          <FaUserGraduate className='programIcon' />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}
export default Programs