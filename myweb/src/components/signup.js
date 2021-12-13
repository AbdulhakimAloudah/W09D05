import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [err, setErr] = useState("");
    const [role, setRole] = useState("61a73b798dfedd280478fb8d");


  const signup = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/signup`, {
        email: e.target.email.value,
        password: e.target.password.value,

        role,
      });
      console.log(result.data);
      if (result.data.errors) {
        console.log(result.data.errors[0].msg);
        setErr(result.data.errors[0].msg);
      } else if (result.data.message) {
        setErr(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="home">
      <div className="formm">
        <h1>Sign Up</h1>
        <form onSubmit={signup}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <label htmlFor="password2">Confirm Password:</label>
          <input type="password" name="password2" />
          <button type="submit">Sign up</button>
        </form>
        <p>{err}</p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SignUp;
