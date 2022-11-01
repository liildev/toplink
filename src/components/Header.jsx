import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../context";
import Button from "./UI/Button";

export default function Header() {
  const { isAuth, setUser, setIsAuth } = useContext(MainContext);
  const navigate = useNavigate()
  
  const signOut = () => {
    localStorage.removeItem("token");
    setUser({});
    setIsAuth(false);
    navigate('/sign-in')
  };

  return (
    <div className="w-full bg-[#e8e9f1] py-4 px-10 flex items-center">
      <Link to={"/"} className="text-2xl font-bold text-violet-800   flex-1">
        Toplink
      </Link>

      <ul className="flex items-center justify-center gap-x-20 mr-14">
        <li>
          <Link className="link" to="/">
            U qanday ishlaydi
          </Link>
        </li>
        <li>
          <Link className="link" to="/">
            Xususiyat
          </Link>
        </li>
      </ul>

      {isAuth ? (
        <Button bg={true} onClick={signOut}>
          Chiqish
        </Button>
      ) : (
        <div className="flex items-center gap-x-6 cursor-pointer">
          <Button bg={true}>
            <Link to={"/sign-in"}>Kirish</Link>
          </Button>
          <Button hover={true}>
            <Link to={"/sign-up"}>Ro‘yxatdan o‘tish</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
