import { NavLink } from "react-router-dom";
import "./../css/Sidebar.css";

const Sidebar = ({ isOpen, setIsOpen, routes }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        {routes.map((item, index) => (
          <NavLink 
            key={index} 
            to={item.path} 
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
