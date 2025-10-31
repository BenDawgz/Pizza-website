import React, {useState} from 'react'
import '../styles/Navbar.css'
import Logo from '../assets/pizzaLogo.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from 'react-router-dom'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
    return (
       <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        {/* Show hiddenLink only when openLinks is true (mobile menu open) */}
        {openLinks && (
          <div className="hiddenLink">
            <Link to="/" onClick={toggleNavbar}>Home</Link>
            <Link to="/menu" onClick={toggleNavbar}>Menu</Link>
            <Link to="/about" onClick={toggleNavbar}>About</Link>
            <Link to="/contact" onClick={toggleNavbar}>Contact</Link>
          </div>
        )}
      </div>
      <div className="rightSide">
        {/* These links will be visible on full screen, hidden on mobile via CSS */}
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* Reorder button visible only on mobile via CSS */}
        <button onClick={toggleNavbar} className="reorder-button">
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;