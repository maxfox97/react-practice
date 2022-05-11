import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader"
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";


const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />
  }
  if (profile.photos.large === null) {
    profile.photos.large = 'https://gavrila-alandala.ro/wp-content/uploads/2019/10/joker-4.jpg'
  }

  return (
    <div className={s.profileInfoBlock}>
      <div>
        <img src={profile.photos.large} />
        <br />
        <span>{profile.aboutMe}</span>
        <br />
        <span>{profile.fullName}</span>
        <br />
        <span>{profile.userId}</span>
        <br />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
