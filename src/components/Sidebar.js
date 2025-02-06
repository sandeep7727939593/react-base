import { Link } from "react-router-dom";
import "./../css/Sidebar.css";

const Sidebar = ({isOpen, setIsOpen}) => {

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>🏠 Home</Link>
        <Link to="/order-list" onClick={() => setIsOpen(false)}>📋 List</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>🖼️ Gallery</Link>
        <Link to="/images" onClick={() => setIsOpen(false)}>📷 Image</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>ℹ️ About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>📞 Contact</Link>
      </div>
    </>
  );
};

export default Sidebar;
