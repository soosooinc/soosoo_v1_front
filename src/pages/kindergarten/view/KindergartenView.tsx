import { StyledScreenWrapper } from "components/ScreenWrapper/styles";
import kindergartenController from "../controller/kindergartenController";

const KindergartenView = () => {
  const { kindergartenInfo, teacherInfo, searchUserName } =
    kindergartenController();
  return (
    <StyledScreenWrapper>
      <input type="text" onChange={searchUserName} />
    </StyledScreenWrapper>
  );
};

export default KindergartenView;
