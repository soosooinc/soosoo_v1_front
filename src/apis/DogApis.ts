import customAxios from "../common/axiosCustom";
import { IUserInfo } from "../types/User.type";

export const getUserInfoApi = async (userId: number): Promise<IUserInfo> => {
  const url: string = `user/info?userId=${userId}`;
  const { data } = await customAxios.get(url);
  return data.data;
};
