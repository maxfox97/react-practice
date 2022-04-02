import MyPost from "./MyPosts/MyPost";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost postsData={props.postsData} />
    </div>
  );
};

export default Profile;
