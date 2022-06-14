import { StyledScreenWrapper } from "../../../components/ScreenWrapper/styles";
import  noticeController  from "../controller/noticeController"


const NoticeView = () => {
  const {noticeInfo} = noticeController();
  return (
    <StyledScreenWrapper>
      <p>공지사항</p>
    </StyledScreenWrapper>
  );
};

export default NoticeView;