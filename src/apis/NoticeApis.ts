import customAxios from "../common/axiosCustom";
import { INoticeInfo } from "../types/Notice.type";

export const getNoticeInfoApi = async (noticeId: number): Promise<INoticeInfo> => {
  const url: string = `notice/getNoticeInfo?noticeId=${noticeId}`;
  const { data } = await customAxios.get(url);
  return data.data;
};
