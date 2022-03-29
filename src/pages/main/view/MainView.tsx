import React from "react";
import MainController from "../controller/MainController";

interface props {}

const MainView = ({}: props) => {
  const { userName, getUserInfo } = MainController({});
  return (
    <div>
      <p>main view</p>
      <button
        style={{ height: 100 }}
        onClick={() => {
          getUserInfo();
        }}
      >
        이름
      </button>
      {userName !== "" && <p>{userName}</p>}
    </div>
  );
};

export default MainView;
