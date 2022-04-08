import { memo } from "react";
import { StyledUploadWrapper } from "../style/MainStyles";
import MainController from "../controller/MainController";

const MainView = () => {
  const { userImage } = MainController();
  return (
    <StyledUploadWrapper>
      {"홈"}
      <img src={userImage} style={{ height: 300, width: 300 }} />
    </StyledUploadWrapper>
  );
};

export default memo(MainView);
