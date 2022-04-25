import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserProfileThunk } from '../redux/profile-reducer'
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let ProfileContainer = (props) => {
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
  profile: state.profilePage.profile,
})

//withAuthRedirect(connect(mapStateToProps, { setUserProfileThunk })(ProfileContainer));

export default compose(
  connect(mapStateToProps, { setUserProfileThunk }),
  //withAuthRedirect
)(ProfileContainer);

