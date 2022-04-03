import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <div>
                    <img src={props.url}></img>
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div >
    )
}



export default DialogItem;