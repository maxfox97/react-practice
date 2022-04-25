import Header from './Header';
import React from 'react';
import { getAuthUserDataThunk } from '../redux/auth-reducer'
import { connect } from 'react-redux';




class HeaderContainer extends React.Component {

   componentDidMount() {
      this.props.getAuthUserDataThunk();
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



export default connect(mapStateToProps, { getAuthUserDataThunk })(HeaderContainer);
