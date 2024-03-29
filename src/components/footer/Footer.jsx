import './footer.css'
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PEPITO</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Tertimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    <div className='footer__socials'>
      <a href="https://facebook.com"><BsFacebook/></a>
      <a href="htpps://instagram.com"><BsInstagram/></a>
      <a href="https://twitter.com"><BsTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; PEPITO Tutorials. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer