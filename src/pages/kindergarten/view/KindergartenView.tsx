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

const pageKindergartenInfo = (kindergartenInfo: any) => {
  return(
    <div>
      <h1>유치원 : {kindergartenInfo.name}</h1>
      <p>주소 : {kindergartenInfo.address}</p>
      <p>대표번호 : {kindergartenInfo.phone}</p>
    </div>
  )
}

const KindergartenView = () => {
  const { teachersInfo , kindergartenInfo } = KindergartenController();
  if (teachersInfo == undefined || kindergartenInfo==undefined) {
    return (
      <p>유치원 정보 없음</p>
    );
  } else {
    return (
      <StyledScreenWrapper>
        {pageKindergartenInfo(kindergartenInfo)}
        {teachersInfo.map((teacher: any, index: number) => (
          pageTemp(teacher, index)
        ))}
      </StyledScreenWrapper>
    );
  }
};

export default KindergartenView;
