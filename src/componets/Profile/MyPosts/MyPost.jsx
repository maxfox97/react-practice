
import Post from "./Post/Post";
import s from "./MyPost.module.css";

const MyPost = () => {
    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea></textarea>
                <br />
                <button>add post</button>
            </div>
            <Post message="Hi, how are you ?" like='3' />
            <Post message="Hi, Max ?" like='2' />
            <Post message="Hi, Alex ?" like='10' />
        </div>
    );
};

export default MyPost;
