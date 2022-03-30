import "./App.css";
import Profile from "./componets/Profile/Profile";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";

const App = () => {
  return (
    <div className="app-wrapper">
     <Header />
     <Navbar />
     <Profile />
    </div>
  );
};

export default App;
