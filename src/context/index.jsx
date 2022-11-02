import React, { createContext, useState } from "react";

export const MainContext = createContext(null);

export default function MainProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  return (
    <MainContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </MainContext.Provider>
  );
}
