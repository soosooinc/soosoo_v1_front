import {
  getKindergartenInfoApi,
  getTeachersInfoApi,
  searchUserNameApi
} from "../../../apis/KindergartenApis";
import { Resetter, useRecoilState, useResetRecoilState } from "recoil";
import {
  IKindergartenInfo,
  ITeacherInfo
} from "../../../types/Kindergarten.type";
import {
  kindergartenInfoAtom,
  tacherInfoAtom
} from "../../../store/kindergarten";
import { useCallback, useEffect } from "react";

const kindergartenController = () => {
  const [kindergartenInfo, setKindergartenInfo] =
    useRecoilState<IKindergartenInfo>(kindergartenInfoAtom);

  const [teacherInfo, setTeacherInfo] =
    useRecoilState<ITeacherInfo[]>(tacherInfoAtom);

  useEffect(() => {
    getKindergartenInfo(1);
    getTeachersInfo(1);
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
          imageUrl: image.imageUrl ? image.imageUrl : undefined
        });
      } catch (e: any) {}
    },
    [kindergartenInfo, setKindergartenInfo]
  );

  const getTeachersInfo = useCallback(
    async (kindergartenId: number): Promise<void> => {
      try {
        const data = await getTeachersInfoApi(kindergartenId);

        const teacherInfoTemp: ITeacherInfo[] = [];
        data.forEach((teacherData: ITeacherInfo) => {
          const dataTemp = {
            userId: teacherData.userId,
            name: teacherData.name,
            imageUrl: teacherData.imageUrl
          };
          teacherInfoTemp.push(dataTemp);
        });
        setTeacherInfo(teacherInfoTemp);
      } catch (e: any) {}
    },
    [teacherInfo, setTeacherInfo]
  );

  const searchUserName = (e: any) => {
    try {
      const data = searchUserNameApi(e.target.value);
      console.log(data);
    } catch (err: any) {}
  };

  return {
    kindergartenInfo,
    teacherInfo,
    searchUserName
  };
};

export default kindergartenController;
