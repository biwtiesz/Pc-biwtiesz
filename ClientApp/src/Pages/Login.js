import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import Image from "../assets/images/image.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const { login } = useAuth();

  const togglePasswordType = () => {
    passwordType === "text"
      ? setPasswordType("password")
      : setPasswordType("text");
  };

  const handleSunmit = (event) => {
    event.preventDefault();

    login(username, password);
  };

  return (
    <form
      className="flex justify-center items-center min-h-screen bg-orange-200"
      onSubmit={handleSunmit}
    >
      <div className="bg-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center overflow-hidden">
        <div className="flex flex-col space-y-6 p-10 md:p-20">
          <h3 className="text-3xl font-bold text-orange-500 mb-4 text-center md:text-left">
            Log in to GHB DApp
          </h3>
          <p className="font-light text-sm text-gray-500 text-center md:text-left">
            Log in to access your account
          </p>
          <div className="flex justify-center items-center border border-zinc-300 rounded md:px-3 overflow-hidden focus-within:outline focus-within:outline-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hidden md:block stroke-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              type="text"
              className="py-5 px-6 border-none outline-none text-sm placeholder:text-sm w-full min-w-[300px]"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
            />
          </div>
          <div className="flex justify-center items-center border border-zinc-300 rounded md:px-3 pr-3 overflow-hidden focus-within:outline focus-within:outline-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hidden md:block stroke-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <input
              type={passwordType}
              className="py-5 px-6 border-none outline-none text-sm placeholder:text-sm w-full min-w-[300px]"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={togglePasswordType}
            >
              {passwordType === "password" ? (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              )}
            </svg>
          </div>
          <button className="bg-orange-400 font-bold py-5 px-3 rounded text-white hover:bg-orange-300 transform hover:-translate-y-1 transition duration-300">
            Login
          </button>
        </div>
        <div>
          <img src={Image} alt="Login" className="max-w-sm hidden md:block" />
        </div>
      </div>
    </form>
  );
};

export { Login };
