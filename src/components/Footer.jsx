import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <XIcon />
        </div>
        <p> &copy; 2025 BensPizza.com</p>
      
    </div>
  )
}

export default Footer
