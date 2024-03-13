import './Contact.css';
import { FaMessage, FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';
// 03700144-4e79-43c9-848a-ade77ae2e3c5


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", '03700144-4e79-43c9-848a-ade77ae2e3c5');

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send us a message <FaMessage />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit exercitationem, sequi culpa veniam provident illo, autem
          quos similique dolore suscipit? Nisi tempore quae ipsam facere quidem
          amet, deserunt dignissimos.
        </p>
        <ul>
          <li><AiOutlineMail className='contact-icon' />tchoikuemel06@gmail.com</li>
          <li><FaPhoneAlt className='contact-icon' />+237-699-83-81-17</li>
          <li><FaLocationDot className='contact-icon' />Douala 3e , Yassa village , Yattika</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label >Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone number</label>
          <input type="tel" name='phone' required placeholder='Enter your mobile number' />
          <label >Write your message here</label>
          <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <FaArrowRightLong /></button>
        </form>
        <span style={{color: 'green'}}>{result}</span>
      </div>
    </div>
  );
};
export default Contact;
