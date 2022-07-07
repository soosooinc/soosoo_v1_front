import { StyledScreenWrapper } from "../../../components/ScreenWrapper/styles";
import  noticeController  from "../controller/noticeController"


const NoticeView = () => {
  const {noticeInfo} = noticeController();
  return (
    <StyledScreenWrapper>
      <p>{noticeInfo.mainText}</p>
      <p>{noticeInfo.subText}</p>
      <p>{noticeInfo.createdBy}</p>
      <p>{noticeInfo.createdAt}</p>
    </StyledScreenWrapper>
  );
};

export default NoticeView;