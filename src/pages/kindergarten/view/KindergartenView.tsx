import { StyledScreenWrapper } from "../../../components/ScreenWrapper/styles";
import KindergartenController from "../controller/kindergartenController";

type Teacher = {
  userId: number;
  name: string;
  imageUrl: string;
}

const KindergartenView = () => {
  const { teachersInfo } = KindergartenController();
  console.log(teachersInfo);
  if (teachersInfo == undefined) {
    return (
      <p>유치원</p>
    );
  } else {
    return (
      <StyledScreenWrapper>
        <p>유치원</p>
        {teachersInfo.map((teacher: Teacher) => (
          <div>
            <p>{teacher.name}</p>
            <img src={teacher.imageUrl} style={{ height: 200, width: 300 }} />
          </div>
        ))}
      </StyledScreenWrapper>
    );
  }
};

export default KindergartenView;
