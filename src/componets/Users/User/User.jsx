import s from "./User.module.css"
import React from "react";


class User extends React.Component {
    constructor(props) {
        super(props)
    };
    follow = () => {

        this.props.follow(this.props.id)
    };

    unfollow = () => {

        this.props.unfollow(this.props.id)
    };

    render() {
        return (
            <div>
                <div className={s.users}>
                    <div className={s.avaBlock}>
                        <div className={s.ava}>
                            <div><img src={this.props.ava} alt="ava" /></div>
                        </div>
                        <div>
                            <div>
                                {this.props.followed
                                    ? <button className={s.buttonUser} onClick={this.unfollow} ><span>Unfollow</span></button>
                                    : <button className={s.buttonUser} onClick={this.follow} ><span>Follow</span></button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={s.aboutUser}>
                        <div className={s.messageUser}>
                            <div>{this.props.name}</div>
                            <div>{"props.status"}</div>
                        </div>
                        <div className={s.locationUser}>
                            <div>{"props.city"}</div>
                            <div>{"props.country"}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
