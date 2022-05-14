import "./App.css";
import Navbar from "./componets/Navbar/Navbar";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UsersContainer from "./componets/Users/UsersContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginPage from "./componets/Login/Login";
import React, { Component, Suspense } from "react";
import { initializeApp} from './componets/redux/app-reducer'
import { connect } from 'react-redux';
import Preloader from "./componets/common/preloader/preloader";
import { Provider } from "react-redux";
import store from './componets/redux/redux-store';

//import DialogsContainer from "./componets/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./componets/Profile/ProfileContainer'));

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
          <Suspense fallback={<div>DOWNLOAD...</div>}>
            <Routes>
              <Route path="/" element={<ProfileContainer />} />
              <Route path="/dialogs" element={
                <DialogsContainer />
              }/>
              <Route path="profile/*" element={  
                <ProfileContainer />
              }/>
              <Route path="/profile/:userId" element={<ProfileContainer />}/>
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={ <Music />} />
              <Route path="/settings" element={ <Settings />} />
              <Route path="/login" element={ <LoginPage />} />
            </Routes>
          </Suspense>
          </div>
        </div> 
    )  
  };
};

const mapStateToProps = (state) => ({
  intialized: state.app.intialized
})


let AppContainer =  connect(mapStateToProps, { initializeApp})(App);;

 const MainApp = (props) => {
 return <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
      </BrowserRouter>
}

export default MainApp;