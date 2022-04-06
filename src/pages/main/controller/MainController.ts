import React, { useEffect, useState } from "react";
import customAxios from "../../../common/axiosCustom";
import httpGet from "../../../common/httpGet";

interface props {}

const MainController = ({}: props) => {
  const [userName, setUserName] = useState<any>("");

  const getUserInfo = async () => {
    const resultData = await httpGet("user/info?userId=1");
    setUserName(resultData.name);
  };

  return { userName, getUserInfo };
};

export default MainController;
