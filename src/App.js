import "./App.css";
import Navbar from "./componets/Navbar/Navbar";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginPage from "./componets/Login/Login";
import { Component } from "react";
import { initializeApp} from './componets/redux/app-reducer'
import { connect } from 'react-redux';
import Preloader from "./componets/common/preloader/preloader";
 


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
 }

  render (){
    if(!this.props.intialized){return <Preloader />}

    return(
       <div className="app-wrapper">
          <HeaderContainer  />
          <Navbar />
          <div className="app-wrapper-content" >
            <Routes>
              <Route path="/" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />}/>
              <Route path="profile/*" element={<ProfileContainer />}/>
              <Route path="/profile/:userId" element={<ProfileContainer />}/>
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={ <Music />} />
              <Route path="/settings" element={ <Settings />} />
              <Route path="/login" element={ <LoginPage />} />
            </Routes>
          </div>
        </div> 
    )  
  };
};

const mapStateToProps = (state) => ({
  intialized: state.app.intialized
})


export default  connect(mapStateToProps, { initializeApp})(App);;
