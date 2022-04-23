import s from "./User.module.css"
import React from "react";
import { NavLink } from "react-router-dom";
import { userFollow, userUnFollow } from "../../../api/api";


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
                                ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {

                                    props.toggleFollowingProgress(true, props.id)
                                    userUnFollow.unFollow(props.id)
                                        .then(response => {

                                            if (response.resultCode === 0) {
                                                props.unfollow(props.id)
                                            }
                                            props.toggleFollowingProgress(false, props.id)
                                        });




                                }} >
                                    <span>Unfollow</span>
                                </button>
                                : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {

                                    props.toggleFollowingProgress(true, props.id)
                                    userFollow.follow(props.id)
                                        .then(response => {

                                            if (response.resultCode === 0) {
                                                props.follow(props.id)
                                            }
                                            props.toggleFollowingProgress(false, props.id)
                                        });
                                }} >
                                    <span>Follow</span>
                                </button>
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
        </div >
    )
}

export default User;
