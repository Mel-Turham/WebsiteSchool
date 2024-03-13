import './Navbar.css';
import Logo from '../../assets/LogoWeb.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const handleOnclick = () => {
    setActiveMenu((currentState) => !currentState)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
      <img src={Logo} alt="Logo image" className='logo' />
      <ul className={`${activeMenu ? '' : 'mobile-menu'}`}>
        <li>
          <Link to='hero' smooth={true} offset={0}
            duration={500}>Home</Link>
        </li>
        <li> <Link to='program' smooth={true} offset={-260}
          duration={500}>Program</Link></li>
        <li> <Link to='about' smooth={true} offset={-260}
          duration={500}>About us</Link></li>
        <li> <Link to='campus' smooth={true} offset={-260}
          duration={500}>Campus</Link></li>
        <li> <Link to='testimonials' smooth={true} offset={-260}
          duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} duration={500} offset={-260} className='btn'>Contact us</Link></li>
      </ul>
      <AiOutlineMenu onClick={handleOnclick} className='toggleButton' role='button' />
    </nav>
  );
};
export default Navbar;
