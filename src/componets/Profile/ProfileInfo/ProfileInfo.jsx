import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.profileInfoBlock}>
      <div className={s.profileImg}>
        <img src="https://coreteka.com/wp-content/uploads/2020/08/difference-between-ux-ui-ux-ui-coreteka.png"></img>
      </div>
      <div>
        <img src={props.profile.photos.large} />
        <br />
        <span>{props.profile.aboutMe}</span>
        <br />
        <span>{props.profile.fullName}</span>
        <br />
        <span>{props.profile.userId}</span>
        <br />
        Ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
