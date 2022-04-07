import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/profile-reducer";
import store from "../../redux/store";
import MyPosts from "./MyPosts";





const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {

        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
            addPost={addPost}
            newPostText={state.profilePage.newPostText}
            postsData={state.profilePage.postsData}

        />
    );
};

export default MyPostsContainer;
