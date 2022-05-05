import { atom } from "recoil";
import { IUserInfo } from "../types/User.type";
import { imageConfig } from "../common/imageConfig";

export const userInfoAtom = atom<IUserInfo>({
  key: "userInfoAtom",
  default: {
    userId: 0,
    kindergartenName: "",
    imageUrl: imageConfig + "default_user_img.jpg",
    id: "",
    name: "",
    type: 0,
    phone: undefined,
    email: undefined,
  },
});
