import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfoBlock}>
      <div className={s.profileImg}>
        <img src="https://coreteka.com/wp-content/uploads/2020/08/difference-between-ux-ui-ux-ui-coreteka.png"></img>
      </div>
      <div>
        Ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
