import { memo } from "react";
import { NoticeHeader, NoticeBody, NoticeHeaderTag } from "../style/styles";
import MainController from "../controller/MainController";

interface props {
  mainNoticeHeaderTag: any;
  selectedNoticeHeaderTag: number;
  setSelectedNoticeHeaderTag: (status: number) => void;
  movePage: (type: number) => void;
}

const MainNoticeView = ({
  mainNoticeHeaderTag,
  selectedNoticeHeaderTag,
  setSelectedNoticeHeaderTag,
  movePage
}: props) => {
  return (
    <>
      <NoticeHeader>
        {mainNoticeHeaderTag.map((item: any) => {
          return (
            <NoticeHeaderTag
              key={item.value.toString()}
              onClick={() => {
                setSelectedNoticeHeaderTag(item.value);
              }}
            >
              <span>{item.name}</span>
            </NoticeHeaderTag>
          );
        })}
      </NoticeHeader>
      <NoticeBody>
        <button
          onClick={() => {
            movePage(selectedNoticeHeaderTag);
          }}
        >
          {"더보기"}
        </button>
      </NoticeBody>
    </>
  );
};

export default memo(MainNoticeView);
