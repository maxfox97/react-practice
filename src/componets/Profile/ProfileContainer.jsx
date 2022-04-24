import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserProfileThunk } from '../redux/profile-reducer'
import Profile from './Profile';
import { useParams } from 'react-router-dom';




let ProfileContainerFunctionComponent = (props) => {
  let { userId } = useParams();

  useEffect(() => {
    if (userId === undefined) {
      userId = 2;

    }

    props.setUserProfileThunk(userId);

  }, []);
  return (
    <Profile  {...props} profile={props.profile} />
  )
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})


export default connect(mapStateToProps, { setUserProfileThunk })(ProfileContainerFunctionComponent);

