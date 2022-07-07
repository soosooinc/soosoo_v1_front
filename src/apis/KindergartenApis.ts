import { IUserInfo } from "types/User.type";
import customAxios from "../common/axiosCustom";
import {
  IKindergartenJoinImage,
  ITeacherInfo
} from "../types/Kindergarten.type";

export const getKindergartenInfoApi = async (
  kindergartenId: number
): Promise<IKindergartenJoinImage> => {
  const url: string = `kindergarten/info?kindergartenId=${kindergartenId}`;
  const { data } = await customAxios.get(url);
  return data.data;
};

export const getTeachersInfoApi = async (
  kindergartenId: number
): Promise<ITeacherInfo[]> => {
  const url: string = `kindergarten/teacherInfo?kindergartenId=${kindergartenId}`;
  const { data } = await customAxios.get(url);
  return data.data;
};

export const searchUserNameApi = async (
  userName: String
): Promise<IUserInfo[]> => {
  const url: string = `kindergarten/searchName?userName=${userName}`;
  const { data } = await customAxios.get(url);
  return data.data;
};

export const addTeacherApi = async (
  kindergartenId: number,
  userId: number
): Promise<void> => {
  const url: string = `kindergarten/addTeacher?kindergartenId=${kindergartenId}&userId=${userId}`;
  const { data } = await customAxios.get(url);
  return data.data;
};
