import { connect } from "react-redux";
import { addPostActionCreator } from "../../redux/profile-reducer";
import store from "../../redux/store";
import MyPosts from "./MyPosts";


let matStateToProps = (state) => {

    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
};

let mapDispatchToProps = (dispatch) => {

    return {
        addPost: (text) => {
            let action = addPostActionCreator(text)
            dispatch(action);
        },
    }
}

let MyPostsContainer = connect(matStateToProps, mapDispatchToProps)(MyPosts);

window.store = store;

export default MyPostsContainer;
