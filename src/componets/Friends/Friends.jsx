import s from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = (props) => {

    // const friendsData = [
    //     { id: 1, name: "Andrew", url: "https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg" },
    //     { id: 2, name: "Sasha", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULBnK_PHTmCn8xfVZZntw-wMnqRpbDFgZUA&usqp=CAU" },
    //     { id: 3, name: "Sveta", url: "https://previews.123rf.com/images/artemstepanov/artemstepanov1606/artemstepanov160600062/57844959-vektor-weibliches-gesicht-avatar-schablone-piktogramm-taste-rund-trendy-flache-symbol-mit-frauen-f%C3%BCr.jpg" },
    // ];

    const friendsElements = props.friendsData.map(el => <FriendsItem name={el.name} id={el.id} url={el.url} />)

    return (
        <div className={s.blockFriends}>
            {friendsElements}
        </div>

    )
}





export default Friends;