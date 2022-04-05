import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPost
        newPostText={props.profilePage.newPostText}
        postsData={props.profilePage.postsData}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      //  
      />
    </div>
  );
};

export default Profile;
