import React from "react";
import { MainComponent } from "../mainComponent";
import SideBar from "../sidebar";

const MainPage = () => {
  return (
    <div className="bg-pink h-screen w-full flex justify-center items-center">
      <div className="h-[70%] w-[50%] bg-white rounded-lg flex">
        <SideBar/>
        <MainComponent />
      </div>
    </div>
  );
};

export default MainPage;
