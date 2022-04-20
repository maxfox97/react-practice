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



const App = () => {

  return (
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
      </Routes>
     </div>
    </div> 
  );
};

export default App;
