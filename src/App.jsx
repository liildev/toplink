import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { MainContext } from "./context";
import Auth from "./pages/Auth";
import Forgot from "./pages/Forgot";
import Home from "./pages/Home";
import Reset from "./pages/Reset";

export default function App() {
  const { isAuth, setIsAuth } = useContext(MainContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        {isAuth ? (
          <>
            <Route path="/" element={<Home />} index />
            <Route path="*" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/sign-in" element={<Auth />} />
            <Route path="/sign-up" element={<Auth />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset/:id/:token" element={<Reset />} />
            <Route path="*" element={<Auth />} />
          </>
        )}
      </Routes>
    </>
  );
}
