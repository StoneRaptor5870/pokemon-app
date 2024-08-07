"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result && result.error) {
      alert(result.error);
    } else if (result) {
      window.location.href = "/landing";
    } else {
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-full md:w-1/2 bg-gradient-to-tr from-yellow-400 to-red-600 justify-around items-center hidden">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Ash_Ketchum_Journeys.png/220px-Ash_Ketchum_Journeys.png"
            alt="Ash Ketchum"
            className="w-[400px] h-full object-contain -mr-6 mb-16"
          />
        </div>
      </div>
      <div className="flex flex-grow flex-col md:w-1/2 h-full justify-center py-10 items-center bg-white">
        <img
          src="https://cdn.dribbble.com/users/6245075/screenshots/16269935/pokeball.png"
          alt="Pokeball"
          className="flex justify-center items-center w-1/4 h-11/4 object-contain"
        />
        <form className="flex flex-col justify-center items-center bg-white" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again Traveller!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              style={{ color: "black" }}
            />
          </div>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{ color: "black" }}
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-red-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Signin
          </button>
        </form>
      </div>
    </div>
  );
}
