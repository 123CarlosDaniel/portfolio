import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward,FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years experience</small>
            </article>
            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
            <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, autem. Harum quisquam molestias hic, quas repudiandae dignissimos repellat assumenda magni corporis nisi deserunt tempora veritatis repellendus, eligendi optio voluptatem vitae?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About