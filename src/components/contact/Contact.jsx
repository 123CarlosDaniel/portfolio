import './contact.css'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a2owugw', 'template_o3lolpp', form.current, 'ez3QVxlfAB8gURWDh')
      .then((result) => {
          console.log(form.current);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      console.log(e.target)
      e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pepito@gmail.com</h5>
            <a href="mailto:carloss_jt@hotmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Pepito Gomez</h5>
            <a href="https://m.me/erneest.achiever">Send a message</a>
          </article>
          <article className='contact__option'>
          <FaWhatsapp className='contact__option-icon'/>
            <h4>Whattsapp</h4>
            <h5>913896788</h5>
            <a href="https://api.whatsapp.com/send?phone=+51913896788">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name'/>
          <input type="email" name='email' placeholder='Your email' />
          <textarea name="message" rows="7" placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    )
}

export default Contact