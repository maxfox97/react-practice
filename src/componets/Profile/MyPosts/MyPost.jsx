import React from 'react';
import Post from "./Post/Post";
import s from "./MyPost.module.css";

const MyPost = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

    let newPostElement = React.createRef(); //Ref



    let addPost = () => {
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
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <br />
                <button onClick={addPost}>
                    Add Post
                </button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPost;
