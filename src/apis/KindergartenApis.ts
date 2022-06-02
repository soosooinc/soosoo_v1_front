import customAxios from "../common/axiosCustom";
import { IKindergartenJoinImage , ITeacherInfo } from "../types/Kindergarten.type";

export const getKindergartenInfoApi = async (
  kindergartenId: number
): Promise<IKindergartenJoinImage> => {
  const url: string = `kindergarten/info?kindergartenId=${kindergartenId}`;
  const { data } = await customAxios.get(url);
  return data.data;
};

export const getTeacherInfoApi = async (
  kindergartenId: number
): Promise<ITeacherInfo> => {
  const url: string = `kindergarten/teacherInfo?kindergartenId=${kindergartenId}`;
  const { data } = await customAxios.get(url);
  return data.data;
};