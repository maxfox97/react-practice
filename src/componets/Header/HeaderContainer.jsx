import axios from 'axios';
import Header from './Header';
import React, { useEffect } from 'react';
import { setAuthUserData } from '../redux/auth-reducer'
import { connect } from 'react-redux';



class HeaderContainer extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then((response) => {

            if (response.data.resultCode === 0) {
               let { userId, login, email } = response.data.data;
               this.props.setAuthUserData(userId, login, email);
            }
         });
   }
   render() {
      return <Header {...this.props} />
   }
};


const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   email: state.auth.email,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);