import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="p-10">
      <p className="text-center text-3xl mb-2 mt-10">Rabits</p>
      <p className="text-center text-xl mb-4">
        Create habits to track so you can feed your rabbit! Create an account to
        start now, or log in. Happy rabbiting!
      </p>
      <div className="flex justify-center gap-10 align-middle mt-6">
        <Login />
        <Register />
      </div>
    </div>
  );
};

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("https://rabits-back.vercel.app/login", {
        username: username,
        password: password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border border-1 px-10 py-6 rounded-xl">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl text-center mb-4">Login</h2>
        <div className="mb-2 flex justify-between gap-2">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="border border-1"
          />
        </div>
        <div className="mb-2 flex justify-between gap-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border border-1"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="border border-1 px-4 py-2 rounded-md text-center"
          >
            Login!
          </button>
        </div>
      </form>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://rabits-back.vercel.app/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border border-1 px-10 py-6 rounded-xl">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl text-center mb-4">Register</h2>
        <div className="mb-2 flex justify-between gap-2">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="border border-1"
          />
        </div>
        <div className="mb-2 flex justify-between gap-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border border-1"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="border border-1 px-4 py-2 rounded-md text-center"
          >
            Register!
          </button>
        </div>
      </form>
    </div>
  );
};
