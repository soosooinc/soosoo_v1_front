import customAxios from "./axiosCustom";

const httpGet = async (uri: string) => {
  const resultData = await customAxios.get(uri);
  if (resultData.data.status === 200) {
    return resultData.data.data;
  } else {
    return null;
  }
};

export default httpGet;
