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

export const deleteTeacherApi = async (
  kindergartenId: number,
  teacherId: number
): Promise<void> => {
  const url: string = `kindergarten/deleteTeacher?kindergartenId=${kindergartenId}&userId=${teacherId}`;
  const { data } = await customAxios.get(url);
  return data.data;
};
