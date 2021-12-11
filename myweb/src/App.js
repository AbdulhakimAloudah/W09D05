import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forgot from "./components/horget";
import Activated from "./components/activated";
import PasswordReset from "./components/passwordReset";
import Posts from "./components/posts";
import Post from "./components/post";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/activate/:token" element={<Activated />} />
        <Route exact path="/forgot/:token" element={<PasswordReset />} />
        <Route exact path="/post/:id" element={<Post />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route
          path="*"
          element={
            <>
            
              <button onClick={() => navigate("/")}>Home</button>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
