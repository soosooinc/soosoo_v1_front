import { atom } from "recoil";
import { IKindergartenInfo } from "../types/Kindergarten.type";

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
