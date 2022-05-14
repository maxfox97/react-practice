import { connect } from 'react-redux';
import { getRequestUsers, follow, setCurrentPage, unfollow, followThunk, unFollowThunk } from "../redux/users-reducer";
import Users from './Users';
import React from 'react';
import Preloader from "../common/preloader/preloader";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../redux/users-selectors';





class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);

    }
    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNumber, pageSize);

    }
    follow = () => {
        this.props.follow(this.props.users.id)
    };
    unfollow = () => {

        this.props.unfollow(this.props.users.id)
    };
    render() {
        console.log('USERS')
        return <>

            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users} id={this.props.id}
                currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress} followThunk={this.props.followThunk}
                unFollowThunk={this.props.unFollowThunk} totalItemsCount={this.props.totalItemsCount} pageSize={this.props.pageSize}
            />
        </>
    }
}


let matStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};


export default compose(
    connect(matStateToProps, {
        follow, unfollow, setCurrentPage,
        getUsers: getRequestUsers, followThunk, unFollowThunk
    }),
)(UsersContainer)
