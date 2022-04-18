import s from "./User.module.css"
import React from "react";
import { NavLink } from "react-router-dom";


let User = (props) => {

    return (
        <div>
            <div className={s.users}>
                <div className={s.avaBlock}>
                    <div className={s.ava}>
                        <NavLink to={'/profile/' + props.id}>
                            < img src={props.ava} alt="ava" />
                        </NavLink>
                    </div>
                    <div>
                        <div>
                            {props.followed
                                ? <button className={s.buttonUser} onClick={props.unfollow} ><span>Unfollow</span></button>
                                : <button className={s.buttonUser} onClick={props.follow} ><span>Follow</span></button>
                            }
                        </div>
                    </div>
                </div>
                <div className={s.aboutUser}>
                    <div className={s.messageUser}>
                        <div>{props.name}</div>
                        <div>{props.id}</div>
                    </div>
                    <div className={s.locationUser}>
                        <div>{"props.jobStatus"}</div>
                        <div>{"props.country"}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;
