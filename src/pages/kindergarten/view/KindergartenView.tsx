import { StyledScreenWrapper } from "components/ScreenWrapper/styles";
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

  return (
    <StyledScreenWrapper>
      <input type="text" onChange={searchUserName} />
      <ul>{userListView}</ul>
    </StyledScreenWrapper>
  );
};

export default KindergartenView;
