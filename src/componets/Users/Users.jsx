import axios from "axios";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import React from "react";
import User from "./User/User";


debugger
class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let usersElements = this.props.users.map(el => <User
            key={el.id} followed={el.followed} follow={this.props.follow}
            unfollow={this.props.unfollow} name={el.name} status={el.status}
            ava={el.photos.small != null ? el.photos.small : userPhoto} id={el.id} />)
        return (
            <div>
                <div className={s.userTitle}>Users</div>
                {usersElements}
                <div className={s.blockButton}>
                    <div className={s.button} ><span>Show Users</span></div>
                </div>
            </div>
        )
    }
}


// const Users = (props) => { Functional component

//     let getTask = () => {

//     }

//     let usersElements = props.users.map(el => <User key={el.id} followed={el.followed} follow={props.follow} unfollow={props.unfollow} name={el.name} status={el.status} ava={el.photos.small != null ? el.photos.small : userPhoto} id={el.id} />)
//     return (
//         <div>
//             <div className={s.userTitle}>Users</div>
//             {usersElements}
//             <div className={s.blockButton}>
//                 <div className={s.button} onClick={getTask}><span>Show User</span></div>
//             </div>
//         </div>
//     );

// }


export default Users;
