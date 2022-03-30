import MyPost from "./MyPosts/MyPost";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.profile__img}>
        <img src="https://coreteka.com/wp-content/uploads/2020/08/difference-between-ux-ui-ux-ui-coreteka.png"></img>
      </div>
      <div>
        Ava + description
      </div>
      <MyPost />
    </div>
  );
};

export default Profile;
