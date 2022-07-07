import { atom } from "recoil";
import { INoticeInfo } from "../types/Notice.type";

export const noticeInfoAtom = atom<INoticeInfo>({
  key: "noticeInfoAtom",
  default: {
    noticeId: 0,
    imageId: 0,
    topId: 0,
    type: 0,
    mainText: "",
    subText: undefined,
    createdAt: "",
    createdBy: ""
  },
});
