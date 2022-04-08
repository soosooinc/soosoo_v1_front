import React, { useEffect, useState } from "react";
import customAxios from "../../../common/axiosCustom";
import httpGet from "../../../common/httpGet";

const MainController = () => {
  const [userImage, setUserImage] = useState<string>("");

  useEffect(() => {
    getUserImage();
  }, []);

  const getUserImage = async (imageId?: number) => {
    imageId = 1;
    const resultData = await httpGet(`image/getImage?imageId=${imageId}`);
    setUserImage(resultData);
  };

  return {
    userImage,
  };
};

export default MainController;
