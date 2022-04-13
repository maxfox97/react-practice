import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../redux/users-reducer";
import Users from "./Users";



let matStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {

            dispatch(followAC(userId))
        },
        unfollow: (userId) => {

            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {

            dispatch(setUsersAC(users))
        }

    }
}

let MyUsersContainer = connect(matStateToProps, mapDispatchToProps)(Users);



export default MyUsersContainer;
