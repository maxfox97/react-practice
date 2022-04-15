import axios from "axios";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import React from "react";
import User from "./User/User";



class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; pages.length < 10; i++) {
            pages.push(i)
        }

        let usersElements = this.props.users.map(el => <User
            key={el.id} followed={el.followed} follow={this.props.follow}
            unfollow={this.props.unfollow} name={el.name} status={el.status}
            ava={el.photos.small != null ? el.photos.small : userPhoto} id={el.id} />)


        return (
            <div>
                <div className={s.menuPages}>
                    {pages.map(p => {
                        return (
                            <span className={this.props.currentPage === p && s.selectedPage} onClick={(e) => { this.onPageChanged(p) }}  >{p}</span>
                        )
                    })}
                </div>
                <div className={s.userTitle}>Users</div>
                {usersElements}
                <div className={s.blockButton}>
                    <div className={s.button} ><span>Show Users</span></div>
                </div>
            </div >
        )
    }
}


export default Users;
