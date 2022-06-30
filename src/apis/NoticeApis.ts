import customAxios from "../common/axiosCustom";
import { INoticeInfo, INotice } from "../types/Notice.type";

export const getNoticeInfoApi = async (
  noticeId: number
): Promise<INoticeInfo> => {
  const url: string = `notice/getNoticeInfo?noticeId=${noticeId}`;
  const { data } = await customAxios.get(url);
  return data.data;
};

export const getNoticeApi = async (
  kindergartenId: number,
  status: string,
  page: number
): Promise<INotice[]> => {
  const url: string = `notice/getNotice?status=${status}&kindergartenId=${kindergartenId}&page=${page}`;
  const { data } = await customAxios.get(url);
  return data.data;
};
