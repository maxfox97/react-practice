import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {

   return (
      <header className={s.header} >
         <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/mobile-ui-ux.png"></img>
         <div className={s.loginBlock}>
            {props.isAuth ? props.login
               : <NavLink to={'/Login'}>Login</NavLink>
            }
         </div>
      </header >
   );
};

export default Header;
