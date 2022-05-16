import { memo } from "react";
import { NoticeHeader, NoticeBody, NoticeHeaderTag } from "../style/styles";

interface props {
  mainNoticeHeaderTag: any;
  selectedNoticeHeaderTag: number;
  setSelectedNoticeHeaderTag: (status: number) => void;
}

const MainNoticeView = ({ mainNoticeHeaderTag, selectedNoticeHeaderTag, setSelectedNoticeHeaderTag }: props) => {
  return (
    <>
      <NoticeHeader>
        {mainNoticeHeaderTag.map((item: any) => {
          return (
            <NoticeHeaderTag key={item.value.toString()} onClick={() => {setSelectedNoticeHeaderTag(item.value)}}>
              <span>{item.name}</span>
            </NoticeHeaderTag>
          );
        })}
      </NoticeHeader>
      <NoticeBody>
        <button>{selectedNoticeHeaderTag === 0 ? "qq" : selectedNoticeHeaderTag === 1 ? "ww" : "ee"}</button>
      </NoticeBody>
    </>
  );
};

export default memo(MainNoticeView);
