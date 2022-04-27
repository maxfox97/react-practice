import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader"
import ProfileStatus from "../ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  if (props.profile.photos.large === null) {
    props.profile.photos.large = 'https://gavrila-alandala.ro/wp-content/uploads/2019/10/joker-4.jpg'
  }

  return (
    <div className={s.profileInfoBlock}>
      <div>
        <img src={props.profile.photos.large} />
        <br />
        <span>{props.profile.aboutMe}</span>
        <br />
        <span>{props.profile.fullName}</span>
        <br />
        <span>{props.profile.userId}</span>
        <br />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
