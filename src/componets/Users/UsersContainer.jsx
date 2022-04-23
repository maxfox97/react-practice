import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFecthing, unfollow, toggleFollowingProgress } from "../redux/users-reducer";
import Users from './Users';
import React from 'react';
import Preloader from "../common/preloader/preloader";
import { usersAPI } from "../../api/api";




class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFecthing(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {

                this.props.toggleIsFecthing(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFecthing(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFecthing(false);
                this.props.setUsers(data.items);
            });
    }

    follow = () => {

        this.props.follow(this.props.users.id)
    };

    unfollow = () => {

        this.props.unfollow(this.props.users.id)
    };


    render() {

        return <>

            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users} id={this.props.id}
                follow={this.props.follow} unfollow={this.props.unfollow}
                currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let matStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};


let MyUsersContainer = connect(matStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFecthing, toggleFollowingProgress })(UsersContainer);



export default MyUsersContainer;
