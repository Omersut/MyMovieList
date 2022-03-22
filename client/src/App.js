import "./App.css";
import "./reset.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SingIn from "./pages/Auth/singin";
import SingUp from "./pages/Auth/singup";
import Movies from "./pages/movies";
import Profile from "./pages/Auth/profile/Profile";
import { useAuth } from "./context/AuthContext";
import MyList from "./pages/mylist/MyList";

function App() {
  const { loggedIn } = useAuth();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <p>tayfun dagci</p>
        dsfdsfdsfds
        <div id="content">
          <Routes>
            <Route exact path="/" element={<Movies />} />

            {!loggedIn && <Route path="/singup" element={<SingUp />} />}
            {!loggedIn && <Route path="/singin" element={<SingIn />} />}

            {loggedIn && <Route path="/profile" element={<Profile />} />}
            {loggedIn && <Route path="/mylist" element={<MyList />} />}
            <Route path="*" element={<Movies />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
