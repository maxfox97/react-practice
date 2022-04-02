
import s from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <div className={s.ava}>
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png"></img>
                </div>
                {props.message}
                <div className={s.like}>
                    <span>like {props.likesCount}</span>
                </div>

            </div>
        </div>
    );
};

export default Post;