import s from "./User.module.css"





const User = (props) => {

    let follow = () => {

        props.follow(props.id)
    }

    let unfollow = () => {

        props.unfollow(props.id)
    }



    return (

        <div>
            <div className={s.users}>
                <div className={s.avaBlock}>
                    <div className={s.ava}>
                        <div><img src={props.ava} alt="ava" /></div>
                    </div>
                    <div>
                        <div>
                            {props.followed
                                ? <button className={s.buttonUser} onClick={unfollow} ><span>Unfollow</span></button>
                                : <button className={s.buttonUser} onClick={follow} ><span>Follow</span></button>
                            }
                        </div>
                    </div>
                </div>
                <div className={s.aboutUser}>
                    <div className={s.messageUser}>
                        <div>{props.name}</div>
                        <div>{"props.status"}</div>
                    </div>
                    <div className={s.locationUser}>
                        <div>{"props.city"}</div>
                        <div>{"props.country"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
