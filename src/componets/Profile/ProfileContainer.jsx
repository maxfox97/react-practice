import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserProfileThunk, getStatus, updateStatus } from '../redux/profile-reducer'
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';

let ProfileContainer = (props) => {


  let { userId } = useParams();

  useEffect(() => {
    if (userId === undefined) {
      userId = 23398;
    }
    props.setUserProfileThunk(userId);

    props.getStatus(userId);

  }, []);
  return (
    <Profile  {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
  )
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})


export default compose(
  connect(mapStateToProps, { setUserProfileThunk, getStatus, updateStatus }),
)(ProfileContainer);

