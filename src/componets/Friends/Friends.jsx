import s from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = (props) => {
    // debugger
    const friendsElements = props.friendsData.map(el => <FriendsItem name={el.name} id={el.id} url={el.url} />)
    return (
        <div className={s.blockFriends}>
            {friendsElements}
        </div>

    )
}





export default Friends;