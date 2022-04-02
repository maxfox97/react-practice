import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? "activeLink" : "";
const setActiveStyle = ({ isActive }) => ({ color: isActive ? 'gold' : 'black' });

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" style={setActiveStyle}>Profile</NavLink>
      </div>
      <div className={`${s.item} `}>
        <NavLink to="/dialogs" style={setActiveStyle}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" style={setActiveStyle}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" style={setActiveStyle}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" style={setActiveStyle}>Settings</NavLink>
      </div>
    </nav >
  );
};

export default Navbar;
