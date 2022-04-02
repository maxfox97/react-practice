
import Post from "./Post/Post";
import s from "./MyPost.module.css";

const MyPost = (props) => {

    // const postsData = [
    //     { id: 1, message: "Hi, Max, What's up ?", likesCount: "12" },
    //     { id: 2, message: "Hi, Sveta, How are you ?", likesCount: "24" },
    //     { id: 3, message: "Hi, Nika", likesCount: "13" },
    //     { id: 3, message: "Hi", likesCount: "56" },
    //     { id: 3, message: "Yo", likesCount: "13" },
    // ];


    const postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <br />
                <button>add post</button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPost;
