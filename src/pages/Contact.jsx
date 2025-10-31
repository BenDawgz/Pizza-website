import React from 'react'
import pizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' 
        style={{ backgroundImage: `url(${pizzaLeft})` }}></div>
        <div className='rightSide'>
          <h1>Contact us</h1>

          <form id='contactForm' method='POST'>
            <label htmlFor='name'>Full Name: </label>
            <input type='text' name='name' placeholder='Enter Name' />
            <label htmlFor='email'>Email: </label>
            <input type='email' name='email' placeholder='Enter email' />
            <label htmlFor='message'>Enter Message</label>
            <textarea rows='6' placeholder='Enter message' name='message' required></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>
            
      
    </div>
  )
}

export default Contact
