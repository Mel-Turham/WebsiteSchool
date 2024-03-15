import './Footer.css'
const Footer = () => {

  const getYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p>&copy; {getYear} Edusity. All rights reserved</p>
      <ul>
        <li>Terms of services</li>
        <li>Privacy Policy</li>
      </ul>
    </footer>
  )
}
export default Footer