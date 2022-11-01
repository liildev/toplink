import React from "react";
import { useContext } from "react";
import User from "../components/UI/User";
import { MainContext } from "../context";

export default function Home() {
  const { user } = useContext(MainContext);

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="shadow-xl rounded-md px-10 py-10 flex items-center justify-between w-[400px]">
        <User />

        <div className="ml-2 border-b-2 border-black">
          <ul>
            <li>Username: @{user.username}</li>
            <li>Full name: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
