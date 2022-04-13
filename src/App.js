import "./App.css";
import Profile from "./componets/Profile/Profile";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import store from "./componets/redux/store";
import UsersContainer from "./componets/Users/UsersContainer";


let state = store.getState();

const App = () => {

  return (
    <div className="app-wrapper">
     <Header />
     <Navbar state={state.sidebar}/>
     <div className="app-wrapper-content" >
      <Routes>
        <Route path="/dialogs" element={<DialogsContainer />}/>
        <Route path="/profile" element={<Profile />}/>
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
