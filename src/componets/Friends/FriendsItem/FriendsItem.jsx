import s from "./FriendsItem.module.css";

const FriendsItem = (props) => {

    return (
        <div>
            <div className={s.blockItem}>
                <div className={s.avaFriends}>
                    <img src={props.url}></img>
                </div>
                <div>
                    {props.name}
                </div>
            </div>
        </div>

    )
}



export default FriendsItem;