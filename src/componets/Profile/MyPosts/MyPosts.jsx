import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { useForm } from 'react-hook-form';

const MyPosts = (props) => {

    let postsElements = props.postsData.map((p, index) => <Post message={p.message} likesCount={p.likesCount} id={p.id} key={index} />);

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <AddPostForm addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
            </div>
            {postsElements}
        </div>
    );
};


const AddPostForm = (props) => {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        console.log(data.addPostText);
        props.addPost(data.addPostText);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <span>Add Post:</span>
                <br />
                <textarea type="text"
                    {...register('addPostText', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: 'Минимум 5 символов'
                        }
                    })}
                />
            </label>
            <div style={{ height: 40 }}>
                {errors?.addPostText && <p>{errors?.addPostText?.message || 'Error!'}</p>}
            </div>
            <input type="submit" disabled={!isValid} />
        </form>
    )
}

export default MyPosts;
