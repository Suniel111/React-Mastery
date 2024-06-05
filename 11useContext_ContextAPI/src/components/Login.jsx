import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setPassword("");
    setUsername("");
  };
  return (
    <div className="content-center justify-center w-full h-5/6 grid place-items-center p-10">
      <div>
        <h2 className="text-xl font-bold flex flex-row content-center justify-center w-full mb-5">
          Login
        </h2>
        <input
          className="border-2 border-black w-60 h-8 p-3 rounded-md mr-3 text-black"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />{" "}
        <input
          className="border-2 border-black w-60 h-8 p-3 rounded-md mr-3 text-black"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 w-32 h-10 border-2 border-gray-400 rounded-lg hover:bg-blue-200 transition-all duration-100"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
