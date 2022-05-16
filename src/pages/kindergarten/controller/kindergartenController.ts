import { getKindergartenInfoApi } from "../../../apis/KindergartenApis";
import { Resetter, useRecoilState, useResetRecoilState } from "recoil";
import { IKindergartenInfo } from "../../../types/Kindergarten.type";
import { kindergartenInfoAtom } from "../../../store/kindergarten";
import { useCallback, useEffect } from "react";

const kindergartenController = () => {
  const [kindergartenInfo, setKindergartenInfo] =
    useRecoilState<IKindergartenInfo>(kindergartenInfoAtom);

  useEffect(() => {
    getKindergartenInfo(1);
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
    [setKindergartenInfo]
  );

  return {
    kindergartenInfo,
  };
};

export default kindergartenController;
