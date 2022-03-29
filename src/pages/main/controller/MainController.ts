import React, { useEffect, useState } from "react";
import customAxios from "../../../common/axiosCustom";

interface props {}

const MainController = ({}: props) => {
  const [userName, setUserName] = useState<any>("");

  const getUserInfo = async () => {
    const resultData = await customAxios.get("user/info?userId=1");
    console.log("resultData: ", resultData.data.data);

    setUserName(resultData.data.data.name);
  };

  return { userName, getUserInfo };
};

export default MainController;
