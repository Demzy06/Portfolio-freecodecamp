import React from 'react'
import '../Styles/Contact.css'
import { Link } from 'react-router-dom';


const Contact = () => {
  const facebookLink ='https://www.facebook.com/';
  const githubLink = 'https://github.com/';
  const twitterLink ='https://twitter.com/?lang=en';
  const mailLink ='mailto:someone@example.com';
  const callMeLink ='tel:+16073583545';
  return (
    <div className='footer_container d-flex justify-content-center align-items-center' id='contact'>
      
        <div className='dev_info text-light '>
        <h1>Let's work together...</h1>
        <p className='d-flex justify-content-center fst-italic fw-light'>How do you take your coffee?</p>
        </div>

        <section className='contact_us d-flex justify-content-evenly align-items-center text-light mt-5 '>
          <p>
            <Link to={facebookLink} className='text-decoration-none text-light' target='_blank'>
            <i class="icons fa-brands fa-square-facebook me-2"></i>Facebook
            </Link>
            </p>

          <p>
            <Link to={githubLink} className='text-decoration-none text-light'>
            <i class="fa-brands fa-github me-2"></i>GitHub
            </Link>
            </p>

          <p>
            <Link to={twitterLink} className='text-decoration-none text-light'>
            <i class="icons fa-brands fa-twitter me-2"></i>Twitter
            </Link>
            </p>

          <p>
            <Link to={mailLink} className='text-light text-decoration-none'>
            <i class="icons fa-solid fa-at me-2"></i>Send a mail
            </Link>
            </p>

          <p>
          <Link to={callMeLink} className='text-light text-decoration-none'>
            <i class="icons fa-solid fa-mobile-screen-button me-2"></i>Call me
            </Link>
            </p>
        </section>
      
    </div>
  )
}

export default Contact