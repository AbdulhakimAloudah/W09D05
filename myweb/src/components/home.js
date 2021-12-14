import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";



const BASE_URL = process.env.REACT_APP_BASE_URL;


function Home() {
  const [logemail, setLogemail] = useState("");
  const [logpassword, setLogpassword] = useState("");
  const [username, setUsername] = useState("");
  const register = async () => {
    const result = await axios.post(`${BASE_URL}/signup`, {
      email: logemail,
      password: logpassword,
      username: username,
    });
  };
  return (
    <div className="home">
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
      />
      <input
        onChange={(e) => {
          setLogemail(e.target.value);
        }}
        type="text"
      />
      <input
        onChange={(e) => {
          setLogpassword(e.target.value);
        }}
        type="text"
      />

      <button onClick={register}> Register</button>
    </div>
  );
}

export default Home;
