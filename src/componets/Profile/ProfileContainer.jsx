import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserProfileThunk, getStatus, updateStatus } from '../redux/profile-reducer'
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { useNavigate } from 'react-router-dom';


let ProfileContainer = (props) => {


  let { userId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      userId = props.authorisedUserId;
      // userId = 23398;
      if (!userId) {
        navigate("/login");
      }
    }
    props.setUserProfileThunk(userId);

    props.getStatus(userId);

  }, []);
  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus} />
  )
}

let mapStateToProps = (state) => ({

  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
})


export default compose(
  connect(mapStateToProps, { setUserProfileThunk, getStatus, updateStatus }),
)(ProfileContainer);

