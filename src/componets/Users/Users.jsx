import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import User from "./User/User";
import Paginator from "../common/preloader/Paginator/Paginator";

let Users = ({ users, onPageChanged, currentPage, totalItemsCount, pageSize, ...props }) => {



    let usersElements = users.map((el, index) => <User
        key={index} followed={el.followed} follow={props.follow}
        unfollow={props.unfollow} name={el.name} status={el.status}
        jobStatus={el.lookingForAJobDescription}
        toggleFollowingProgress={props.toggleFollowingProgress}
        followingInProgress={props.followingInProgress}
        followThunk={props.followThunk} unFollowThunk={props.unFollowThunk}
        ava={el.photos.small != null ? el.photos.small : userPhoto} id={el.id} />)

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalItemsCount} pageSize={pageSize}
            />

            <div className={s.userTitle}>Users</div>
            {usersElements}
            <div className={s.blockButton}>
                <div className={s.button} >
                    <span>
                        Show Users
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Users;