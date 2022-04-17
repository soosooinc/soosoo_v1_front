import httpGet from "common/httpGet";
import { useEffect, useState } from "react";

const KindergartenController = () => {
    const [teachersInfo, setTeachersInfo] = useState<any[]>();

    useEffect(() => {
        getTeachersInfo();
    }, []);

    const getTeachersInfo = async (kindergartenId?: number) => {
        kindergartenId = 1;
        const resultData = await httpGet(`kindergarten/getTeacherInfo?kindergartenId=${kindergartenId}`);
        setTeachersInfo(resultData);
    };

    return {
        teachersInfo
    };
};

export default KindergartenController;
