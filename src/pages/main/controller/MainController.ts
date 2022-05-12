import React, { useCallback, useEffect, useState } from "react";
import { getUserInfoApi } from "../../../apis/user/UserApis";
import { IUserInfo } from "../../../types/User.type";
import { Resetter, useRecoilState, useResetRecoilState } from "recoil";
import { userInfoAtom } from "../../../store/user";
import { MainNoticeHeaderTag } from "../../../constants/constants";

const MainController = () => {
  const [userInfo, setUserInfo] = useRecoilState<IUserInfo>(userInfoAtom);
  const mainNoticeHeaderTag = MainNoticeHeaderTag;

  useEffect(() => {
    getUserInfo(3);
  }, []);

  const getUserInfo = useCallback(
    async (userId: number): Promise<void> => {
      try {
        const data = await getUserInfoApi(3);
        setUserInfo({
          userId: data.userId,
          kindergartenName: data.kindergartenName,
          imageUrl: data.imageUrl,
          id: data.id,
          name: data.name,
          type: data.type,
          phone: data.phone ? data.phone : undefined,
          email: data.email ? data.email : undefined,
        });
      } catch (e: any) {}
    },
    [setUserInfo]
  );

  return {
    userInfo,
    mainNoticeHeaderTag,
  };
};

export default MainController;
