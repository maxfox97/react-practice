import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../redux/profile-reducer'
import Profile from './Profile';
import { useParams } from 'react-router-dom';



// class ProfileContainer extends React.Component {

//   componentDidMount() {

//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//       .then(response => {
//         this.props.setUserProfile(response.data);
//       });
//   }

//   render() {

//     return (
//       <Profile  {...this.props} profile={this.props.profile} />

//     )
//   }
// }


let ProfileContainerFunctionComponent = (props) => {
  let { userId } = useParams();

  useEffect(() => {
    if (userId === undefined) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        props.setUserProfile(response.data);
      });
  }, []);
  return (
    <Profile  {...props} profile={props.profile} />
  )
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})


export default connect(mapStateToProps, { setUserProfile })(ProfileContainerFunctionComponent);

