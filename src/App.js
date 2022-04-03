import "./App.css";
import Profile from "./componets/Profile/Profile";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Dialogs from "./componets/Dialogs/Dialogs";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import { Routes, Route, Link } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
     <Header />
     <Navbar state={props.state.sidebar}/>
     <div className="app-wrapper-content" >
      <Routes>
        <Route path="/dialogs" element={
           <Dialogs state={props.state.messagesPage}/>} />
        <Route path="/profile" element={ 
          <Profile state={props.state.profilePage}/>} />
        <Route path="/news" element={ 
          <News />} />
        <Route path="/music" element={ 
          <Music />} />
        <Route path="/settings" element={ 
          <Settings />} />
      </Routes>
     </div>
    </div> 
  );
};

export default App;
