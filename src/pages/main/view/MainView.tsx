import { memo } from "react";
import { StyledScreenWrapper } from "../../../components/ScreenWrapper/styles";
import MainController from "../controller/MainController";

const MainView = () => {
  const { userImage } = MainController();
  return (
    <StyledScreenWrapper>
      {"홈"}
      <img src={userImage} style={{ height: 300, width: 300 }} />
    </StyledScreenWrapper>
  );
};

export default memo(MainView);
