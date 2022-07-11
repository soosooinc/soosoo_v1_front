import { getNoticeInfoApi, getNoticeApi } from "apis/NoticeApis";
import { Resetter, useRecoilState, useResetRecoilState, atom } from "recoil";
import { INoticeInfo, INotice } from "../../../types/Notice.type"
import { noticeInfoAtom } from "../../../store/notice"
import { useCallback, useEffect } from "react";

const noticeListAtom = atom<INotice>({
    key: "noticeListAtom",
    default: {
      noticeId: 0,
      imageId: 0,
      topId: 0,
      kindergartenId: undefined,
      type: 0,
      mainText: "",
      subText: undefined,
      createdAt: "",
      createdBy: ""
    },
  });

const noticeController = () => {
    const [noticeInfo, setNoticeInfo] = useRecoilState<INoticeInfo>(noticeInfoAtom)
    const [noticelist, setNoticeList] = useRecoilState<INotice>(noticeListAtom)

    useEffect(()=>{
        getNoticeInfo(1);
        getNoticeList(1, "main", 0)

    }, []);

    const getNoticeInfo = useCallback(
        async (noticeId:number): Promise<void> =>{
        try{
            const data= await getNoticeInfoApi(noticeId);
            //console.log(data);
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

    const getNoticeList = useCallback(
        async (kindergartenId:number, status:string, page:number): Promise<void> =>{
        try{
            const data= await getNoticeApi(kindergartenId, status, page);
            console.log(data);
            
        }catch(e:any) {}
    }, [
        
        setNoticeList,
    ]);

    

    return{
        noticeInfo,
    }
};

export default noticeController;