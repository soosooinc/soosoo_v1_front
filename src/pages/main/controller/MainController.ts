import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfoApi } from "../../../apis/UserApis";
import { IUserInfo } from "../../../types/User.type";
import { Resetter, useRecoilState, useResetRecoilState } from "recoil";
import { userInfoAtom } from "../../../store/user";
import { MainNoticeHeaderTag } from "../../../constants/constants";
import { getNoticeApi } from "apis/NoticeApis";
import { INotice } from "types/Notice.type";

const MainController = () => {
  const [userInfo, setUserInfo] = useRecoilState<IUserInfo>(userInfoAtom);
  const [selectedNoticeHeaderTag, setSelectedNoticeHeaderTag] =
    useState<number>(0);
  const navigate = useNavigate();
  const mainNoticeHeaderTag = MainNoticeHeaderTag;
  const [noticeInfo, setNoticeInfo] = useState<INotice[]>([]);

  useEffect(() => {
    getNoticeHandler(1);
    getUserInfo(3);
  }, []);

  const getNoticeHandler = useCallback(
    async (kindergartenId: number): Promise<void> => {
      try {
        const data = await getNoticeApi(kindergartenId, "main", 0);
        setNoticeInfo(data);
      } catch (e: any) {}
    },
    [noticeInfo, setNoticeInfo]
  );

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
