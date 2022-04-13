import axios from "axios";
import User from "./User/User";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });
        };

    }


    let usersElements = props.users.map(el => <User followed={el.followed} follow={props.follow} unfollow={props.unfollow} key={el.id} name={el.name} status={el.status} ava={el.photos.small != null ? el.photos.small : userPhoto} id={el.id} />)


    return (
        <div>
            <div className={s.userTitle}>Users</div>
            {usersElements}
            <div className={s.blockButton}>
                <div className={s.button} onClick={getUsers} ><span>Show User</span></div>
            </div>
        </div>
    );
};

export default Users;
