import React, { useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [title, setTitle] = useState<string>("");
  const setChildTitle = (childTitle: string) => {
    setTitle(childTitle);
  };
  return (
    <div className="min-w-screen min-h-screen">
      <Header title={title} />
      <div className="w-full min-h-screen h-auto  grid grid-cols-[20%_minmax(0,_1fr)]">
        <NavBar setChildTitle={setChildTitle} title={title} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
