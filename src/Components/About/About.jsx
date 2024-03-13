import './About.css'
import AboutImage from '../../assets/About_image.webp'
import { FaPlayCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={AboutImage} alt="People how have a graduation" loading='lazy' className='about-img' />
        <FaPlayCircle className='playIcon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow&apos;s Leaders Today</h2>
        <p>Embark on transformative educational journey with our university&apos; comprehensive education program. Our cutting-edge skills,curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p>
          With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, shools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher , administrator, counselo, or educational leader, our deverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shapping the future of education.
        </p>
      </div>
    </div>
  )
}
export default About