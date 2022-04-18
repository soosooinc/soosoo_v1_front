import { StyledScreenWrapper } from "../../../components/ScreenWrapper/styles";
import KindergartenController from "../controller/kindergartenController";

const pageTemp = (teacher: any, index: any) => {
  return (
    <div key={index.toString()}>
      <p>{teacher.name}</p>
      <img src={teacher.imageUrl} style={{ height: 200, width: 300 }} />
    </div>
  )
} 

const KindergartenView = () => {
  const { teachersInfo } = KindergartenController();
  if (teachersInfo == undefined) {
    return (
      <p>유치원</p>
    );
  } else {
    return (
      <StyledScreenWrapper>
        <p>유치원</p>
        {teachersInfo.map((teacher: any, index: number) => (
          pageTemp(teacher, index)
        ))}
      </StyledScreenWrapper>
    );
  }
};

export default KindergartenView;
