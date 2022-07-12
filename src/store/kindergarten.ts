import { atom } from "recoil";
import { IUserInfo } from "../types/User.type";
import { imageConfig } from "../common/imageConfig";
import { IKindergartenInfo, ITeacherInfo } from "../types/Kindergarten.type";

export const kindergartenInfoAtom = atom<IKindergartenInfo>({
  key: "kindergartenInfoAtom",
  default: {
    kindergartenId: 0,
    name: "",
    address: "",
    phone: undefined,
    imageId: undefined,
    imageUrl: undefined
  }
});

export const tacherInfoAtom = atom<ITeacherInfo[]>({
  key: "tacherInfoAtom",
  default: [
    {
      userId: 0,
      name: "",
      imageUrl: ""
    }
  ]
});

export const userListAtom = atom<IUserInfo[]>({
  key: "userListAtom",
  default: [
    {
      userId: 0,
      kindergartenName: "",
      imageUrl: imageConfig + "default_user_img.jpg",
      id: "",
      name: "",
      type: 0,
      phone: undefined,
      email: undefined
    }
  ]
});
