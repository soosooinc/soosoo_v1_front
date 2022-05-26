import { memo } from "react";
import { NoticeHeader, NoticeBody, NoticeHeaderTag } from "../style/styles";

interface props {
  mainNoticeHeaderTag: any;
}

const MainNoticeView = ({ mainNoticeHeaderTag }: props) => {
  return (
    <>
      <NoticeHeader>
        {mainNoticeHeaderTag.map((item: any, index: number) => {
          return (
            <NoticeHeaderTag key={index.toString()}>
              <span>{item.name}</span>
            </NoticeHeaderTag>
          );
        })}
      </NoticeHeader>
      <NoticeBody></NoticeBody>
    </>
  );
};

export default memo(MainNoticeView);
