import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/profile-reducer";
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
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action);
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
    }
}

let MyPostsContainer = connect(matStateToProps, mapDispatchToProps)(MyPosts);

window.store = store;

export default MyPostsContainer;
