import React from "react";
import { useAuth } from "../contexts/AuthContext";

export const Home = () => {
  const { logout } = useAuth();
  return (
    <div className="p-12">
      <p className="text-5xl text-rose-500">Welcome to Thailand</p>
      <button
        className="bg-rose-500 px-5 py-4 text-white rounded-xl shadow-md mt-5"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};
