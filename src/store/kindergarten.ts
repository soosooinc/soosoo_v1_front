import { atom } from "recoil";
import { IKindergartenInfo , ITeacherInfo } from "../types/Kindergarten.type";

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

export const tacherInfoAtom = atom<ITeacherInfo>({
  key: "tacherInfoInfoAtom",
  default: {
    userId: 0,
    name: "",
    imageUrl: ""
  },
});