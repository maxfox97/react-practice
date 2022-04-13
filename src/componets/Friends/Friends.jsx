import s from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = (props) => {

    const friendsElements = props.friendsData.map(el => <FriendsItem
        name={el.name}
        key={el.id}
        id={el.id}
        url={el.url} />)
    return (
        <div className={s.blockFriends}>
            {friendsElements}
        </div>

    )
}





export default Friends;