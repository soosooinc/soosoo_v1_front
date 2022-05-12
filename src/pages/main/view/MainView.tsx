import { memo } from "react";
import { StyledScreenWrapper } from "../../../components/ScreenWrapper/styles";
import MainController from "../controller/MainController";
import {
  UserImg,
  TopWrapper,
  UserName,
  UserKindergartenName,
  BottomWrapper,
  NoticeWrapper,
} from "../style/styles";
import MainNoticeView from "./MainNoticeView";

const MainView = () => {
  const { userInfo, mainNoticeHeaderTag } = MainController();
  return (
    <StyledScreenWrapper>
      <TopWrapper>
        <UserImg src={userInfo.imageUrl} />
        <UserName>{userInfo.name}</UserName>
        <UserKindergartenName>{userInfo.kindergartenName}</UserKindergartenName>
      </TopWrapper>
      <BottomWrapper>
        <NoticeWrapper>
          <MainNoticeView mainNoticeHeaderTag={mainNoticeHeaderTag} />
        </NoticeWrapper>
      </BottomWrapper>
    </StyledScreenWrapper>
  );
};

export default memo(MainView);
