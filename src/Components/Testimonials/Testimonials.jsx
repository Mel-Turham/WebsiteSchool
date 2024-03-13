import './Testimonials.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import user_1 from '../../assets/image.webp';
import user_2 from '../../assets/image1.webp';
import user_3 from '../../assets/Hero-image.jpg';
import user_4 from '../../assets/program-3.webp';
import { useRef } from 'react';
const Testimonials = () => {


  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`
  }


  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`
  }
  return (
    <div className='testimonials'>
      <button className='back-btn' onClick={slideBackward}>
        <FaArrowLeft />
      </button>
      <button type='button' className='next-btn' onClick={slideForward}>
        <FaArrowRight />
      </button>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user_1} alt="" />
                <div><h3>William Jackson</h3>
                  <span>Edusity, USA</span></div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, obcaecati consequuntur voluptatem pariatur fugit, ipsum ipsa molestiae similique reiciendis, molestias hic iure vitae esse ducimus! Aperiam, error. </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user_2} alt="" />
                <div><h3>William Jackson</h3>
                  <span>Edusity, USA</span></div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, obcaecati consequuntur voluptatem pariatur fugit, ipsum ipsa molestiae similique reiciendis, molestias hic iure vitae esse ducimus! Aperiam, error. </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user_3} alt="" />
                <div><h3>William Jackson</h3>
                  <span>Edusity, USA</span></div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, obcaecati consequuntur voluptatem pariatur fugit, ipsum ipsa molestiae similique reiciendis, molestias hic iure vitae esse ducimus! Aperiam, error.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user_4} alt="" />
                <div> <h3>William Jackson</h3>
                  <span>Edusity, USA</span></div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, obcaecati consequuntur voluptatem pariatur fugit, ipsum ipsa molestiae similique reiciendis, molestias hic iure vitae esse ducimus! Aperiam, error.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Testimonials;
