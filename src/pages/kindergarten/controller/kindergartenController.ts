import {
  getKindergartenInfoApi,
  getTeacherInfoApi,
} from "../../../apis/KindergartenApis";
import { Resetter, useRecoilState, useResetRecoilState } from "recoil";
import {
  IKindergartenInfo,
  ITeacherInfo,
} from "../../../types/Kindergarten.type";
import {
  kindergartenInfoAtom,
  tacherInfoAtom,
} from "../../../store/kindergarten";
import { useCallback, useEffect } from "react";

const kindergartenController = () => {
  const [kindergartenInfo, setKindergartenInfo] =
    useRecoilState<IKindergartenInfo>(kindergartenInfoAtom);

  const [teacherInfo, setTeacherInfo] =
    useRecoilState<ITeacherInfo>(tacherInfoAtom);

  useEffect(() => {
    getKindergartenInfo(1);
    getTeacherInfo(1);
  }, []);

  const getKindergartenInfo = useCallback(
    async (kindergartenId: number): Promise<void> => {
      try {
        const { kindergarten, image } = await getKindergartenInfoApi(
          kindergartenId
        );
        setKindergartenInfo({
          kindergartenId: kindergarten.kindergartenId,
          name: kindergarten.name,
          address: kindergarten.address,
          phone: kindergarten.phone ? kindergarten.phone : undefined,
          imageId: kindergarten.imageId ? kindergarten.imageId : undefined,
          imageUrl: kindergarten.imageUrl ? kindergarten.imageUrl : undefined,
        });
      } catch (e: any) {}
    },
    [kindergartenInfo, setKindergartenInfo]
  );

  const getTeacherInfo = useCallback(
    async (kindergartenId: number): Promise<void> => {
      try {
        const data = await getTeacherInfoApi(kindergartenId);
        setTeacherInfo({
          userId: data.userId,
          name: data.name,
          imageUrl: data.imageUrl,
        });
      } catch (e: any) {}
    },
    [teacherInfo, setTeacherInfo]
  );

  return {
    kindergartenInfo,
    teacherInfo,
  };
};

export default kindergartenController;
