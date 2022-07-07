import { getNoticeInfoApi } from "apis/NoticeApis";
import { Resetter, useRecoilState, useResetRecoilState } from "recoil";
import { INoticeInfo } from "../../../types/Notice.type"
import { noticeInfoAtom } from "../../../store/notice"
import { useCallback, useEffect } from "react";

const noticeController = () => {
    const [noticeInfo, setNoticeInfo] = useRecoilState<INoticeInfo>(noticeInfoAtom)

    useEffect(()=>{
        getNoticeInfo(1);
    }, []);

    const getNoticeInfo = useCallback(
        async (noticeId:number): Promise<void> =>{
        try{
            const data= await getNoticeInfoApi(noticeId);
            console.log(data);
            setNoticeInfo({
                noticeId : data.noticeId,
                imageId: data.imageId,
                topId: data.topId,
                type: data.type,
                mainText: data.mainText,
                subText: data.subText ? data.subText : undefined,
                createdBy: data.createdBy,
                createdAt: data.createdAt
            })
        }catch(e:any) {}
    }, [
        
        setNoticeInfo,
    ]);

    return{
        noticeInfo,
    }
};

export default noticeController;