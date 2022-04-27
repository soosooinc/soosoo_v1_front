import httpGet from "common/httpGet";
import { useEffect, useState } from "react";

const KindergartenController = () => {
    const [teachersInfo, setTeachersInfo] = useState<any>([]);
    const [kindergartenInfo, setKindergartenInfo] = useState<any>([]);

    useEffect(() => {
        getTeachersInfo();
        getKindergartenInfo();
    }, []);

    const getTeachersInfo = async (kindergartenId?: number) => {
        kindergartenId = 1;
        const resultData = await httpGet(`kindergarten/getTeacherInfo?kindergartenId=${kindergartenId}`);
        setTeachersInfo(resultData);
    };

    const getKindergartenInfo = async (kindergartenId?: number) => {
        kindergartenId = 1;
        const resultData = await httpGet(`kindergarten/info?kindergartenId=${kindergartenId}`);
        setKindergartenInfo(resultData);
    };

    return {
        teachersInfo,
        kindergartenInfo
    };
};

export default KindergartenController;