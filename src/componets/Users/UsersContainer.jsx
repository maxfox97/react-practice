import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFecthing, unfollow } from "../redux/users-reducer";
import Users from './Users';
import React from 'react';
import axios from 'axios';
import Preloader from "../common/preloader/preloader";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFecthing(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {

                this.props.toggleIsFecthing(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFecthing(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFecthing(false);
                this.props.setUsers(response.data.items);
            });
    }

    follow = () => {

        this.props.follow(this.props.id)
    };

    unfollow = () => {

        this.props.unfollow(this.props.id)
    };


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users} id={this.props.id}
                follow={this.props.follow} unfollow={this.props.unfollow}
                currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
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
    }
};


let MyUsersContainer = connect(matStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFecthing, })(UsersContainer);



export default MyUsersContainer;
