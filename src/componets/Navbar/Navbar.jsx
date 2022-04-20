import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import Friends from "../Friends/Friends";

// const setActive = ({ isActive }) => isActive ? "activeLink" : "";
const setActiveStyle = ({ isActive }) => ({ color: isActive ? 'gold' : 'black' });

const Navbar = (props) => {

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" style={setActiveStyle}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" style={setActiveStyle}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" style={setActiveStyle}>Users</NavLink>
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
      <div className={s.item}>

        <div className={s.itemFriends}>
          <span>Friends</span>
        </div>
        {/* <Friends friendsData={props.state.friendsData} /> */}
      </div>
    </nav >
  );
};

export default Navbar;
