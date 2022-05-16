import customAxios from "../common/axiosCustom";
import { IKindergartenJoinImage } from "../types/Kindergarten.type";

export const getKindergartenInfoApi = async (
  kindergartenId: number
): Promise<IKindergartenJoinImage> => {
  const url: string = `kindergarten/info?kindergartenId=${kindergartenId}`;
  const { data } = await customAxios.get(url);
  return data.data;
};
