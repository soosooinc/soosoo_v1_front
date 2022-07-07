export interface INoticeInfo {
  noticeId: Number;
  imageId: Number;
  topId: Number;
  type: Number;
  mainText: string;
  subText: string | undefined;
  createdAt: string | undefined;
  createdBy : string;
}

/**
 * 공지사항 정보
 */
export interface INotice {
  noticeId: Number;
  imageId: Number;
  topId: Number;
  kindergartenId: Number | undefined;
  type: Number;
  mainText: string;
  subText: string | undefined;
  createdAt: string | undefined;
  createdBy : string;
}
