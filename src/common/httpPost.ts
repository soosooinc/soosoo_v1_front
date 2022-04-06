import customAxios from "./axiosCustom";

const httpPost = async (uri: string, datas: any) => {
  const resultData = await customAxios.post(uri, datas);
  if(resultData.data.status === 200) {
    return resultData.data.data;
  } else {
    return null;
  }
};

export default httpPost;
