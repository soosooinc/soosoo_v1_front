import React, { useCallback, useEffect, useState } from "react";
import {getUserInfoApi} from "../../../apis/user/UserApis";

const MainController = () => {
  const [userImage, setUserImage] = useState<string>("");

  useEffect(() => {
    getUserInfo(3);
  }, []);

  const getUserInfo = useCallback(async (userId: number): Promise<void> => {
    try {
      const resultData = await getUserInfoApi(3);
    } catch (e: any) {
    }
  }, []);
 

  return {
    userImage,
  };
};

export default MainController;
