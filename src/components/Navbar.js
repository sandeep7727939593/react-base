import "./../css/Navbar.css";
import {isMobile} from 'react-device-detect';

const Navbar = ({isOpen, setIsOpen}) => {

  return (
    <nav className="navbar">
      <h2>CodewithJangir</h2>
      <div className="nav-links">
      {isMobile && <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>}
      </div>
    </nav>
  );
};

export default Navbar;
