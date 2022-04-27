import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";


const MyPosts = (props) => {

    let postsElements = props.postsData.map((p, index) => <Post message={p.message} likesCount={p.likesCount} id={p.id} key={index} />);

    let newPostElement = React.createRef(); //Ref

    let onAddPost = () => {

        props.addPost();

    }

    let onPostChange = () => {

        const text = newPostElement.current.value; // value in textarea
        props.updateNewPostText(text);

    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText} />
                <br />
                <button onClick={onAddPost}>
                    Add Post
                </button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;
