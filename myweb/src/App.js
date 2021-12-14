import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Post from "./components/Post";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/getPosts" element={<Posts />} />
        <Route exact path="/post" element={<Post />} />

        <Route
          path="*"
          element={
            <>
              <h1>wrong path boy</h1>
              <button onClick={() => navigate("/")}>Home</button>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
