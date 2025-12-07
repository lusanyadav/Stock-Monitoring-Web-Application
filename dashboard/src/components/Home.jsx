import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import BuyAction from "./BuyAction";
import GeneralContext from "./GeneralContext";
import { useContext } from "react";
function Home() {
  const { isOpen } = useContext(GeneralContext);
  return (
    <>
      <div className={isOpen ? "inactive" : ""}>
        <TopBar />
        <Dashboard />
      </div>

      <BuyAction/>
    </>
  );
};

export default Home;
