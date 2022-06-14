import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfoApi } from "../../../apis/UserApis";
import { IUserInfo } from "../../../types/User.type";
import { Resetter, useRecoilState, useResetRecoilState } from "recoil";
import { userInfoAtom } from "../../../store/user";
import { MainNoticeHeaderTag } from "../../../constants/constants";

const MainController = () => {
  const [userInfo, setUserInfo] = useRecoilState<IUserInfo>(userInfoAtom);
  const [selectedNoticeHeaderTag, setSelectedNoticeHeaderTag] =
    useState<number>(0);
  const navigate = useNavigate();
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
          email: data.email ? data.email : undefined
        });
      } catch (e: any) {}
    },
    [setUserInfo]
  );

  const movePage = (selectedNoticeHeaderTag: number) => {
    switch (selectedNoticeHeaderTag) {
      case 0:
        navigate("/notice");
        break;
      case 1:
        navigate("/announce");
        break;
      case 2:
        navigate("/dog");
        break;
    }
  };
  return {
    userInfo,
    mainNoticeHeaderTag,
    selectedNoticeHeaderTag,
    setSelectedNoticeHeaderTag,
    movePage
  };
};

export default MainController;
