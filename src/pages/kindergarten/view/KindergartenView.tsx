import { StyledScreenWrapper } from "components/ScreenWrapper/styles";
import { convertCompilerOptionsFromJson } from "typescript";
import kindergartenController from "../controller/kindergartenController";

const KindergartenView = () => {
  const {
    kindergartenInfo,
    teacherInfo,
    userList,
    searchUserName,
    addTeacher
  } = kindergartenController();
  
  const userListView = userList.map(user => (
    <>
      <p key={user.name}>{user.name}</p>
      <button
        onClick={() => {
          addTeacher(kindergartenInfo.kindergartenId, user.userId);
        }}
      >
        추가
        </button>
    </>
  ));

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
      <input type="text" onChange={searchUserName} />
      <ul>{userListView}</ul>
      <ul>{teachersList}</ul>
    </StyledScreenWrapper>
  );
};

export default KindergartenView;
