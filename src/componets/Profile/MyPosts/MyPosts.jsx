import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";



// class MyPosts extends React.Component {

//     constructor(props) {
//         super(props);
//         alert('New')
//     }

//     onAddPost = () => {

//         this.props.addPost();

//     };

//     onPostChange = () => {
//         let newPostElement = React.createRef();
//         const text = newPostElement.current.value; // value in textarea
//         this.props.updateNewPostText(text);

//     }
//     render() {
//         let postsElements = this.props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} key={p.id} />);

//         return (
//             <div className={s.posts}>
//                 <h3>My posts</h3>
//                 <div>
//                     <textarea onChange={this.onPostChange}
//                         ref={this.onPostChange.newPostElement}
//                         value={this.props.newPostText} />
//                     <br />
//                     <button onClick={this.onAddPost}>
//                         Add Post
//                     </button>
//                 </div>
//                 {postsElements}
//             </div>
//         );
//     }
// }




const MyPosts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} key={p.id} />);

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
