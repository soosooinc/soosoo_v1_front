import { StyledScreenWrapper } from "components/ScreenWrapper/styles";
import { convertCompilerOptionsFromJson } from "typescript";
import kindergartenController from "../controller/kindergartenController";

const KindergartenView = () => {
  const { kindergartenInfo, teacherInfo } = kindergartenController();
  
  function deleteTeacher(kindergartenId: number, teacherId: number) {
    console.log(kindergartenId, teacherId);
  }

  const teachersList = teacherInfo.map(teacher => (
    <>
      <li key={teacher.userId}>{teacher.name}</li>
      <li key={teacher.userId}>{teacher.userId}</li>
      <button
        onClick={() => {
          deleteTeacher(kindergartenInfo.kindergartenId, teacher.userId);
        }}
      >
        삭제
      </button>
    </>
  ));

  return (
    <StyledScreenWrapper>
      <ul>{teachersList}</ul>
    </StyledScreenWrapper>
  );
};

export default KindergartenView;
