import { memo } from "react";
import { StyledScreenWrapper } from "../../../components/ScreenWrapper/styles";
import MainController from "../controller/MainController";
import {
  UserImg,
  TopWrapper,
  UserName,
  UserKindergartenName,
} from "../style/styles";

const MainView = () => {
  const { userInfo } = MainController();
  return (
    <StyledScreenWrapper>
      <TopWrapper>
        <UserImg src={userInfo.imageUrl} />
        <UserName>{userInfo.name}</UserName>
        <UserKindergartenName>{userInfo.kindergartenName}</UserKindergartenName>
      </TopWrapper>
    </StyledScreenWrapper>
  );
};

export default memo(MainView);
