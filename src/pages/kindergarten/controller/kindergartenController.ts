import httpGet from "common/httpGet";
import { useEffect, useState } from "react";

const kindergartenController = () => {
    const [teachersInfo, setTeachersInfo] = useState();

    useEffect(() => {
        getTeachersInfo();
    }, []);

    const getTeachersInfo = async (kindergartenId?: number) => {
        kindergartenId = 1;
        const resultData = await httpGet(`kinergarten/getTeacherInfo?kindergartenId=${kindergartenId}`);
        setTeachersInfo(resultData);
    };

    return {
        teachersInfo
    };
};

export default kindergartenController;
