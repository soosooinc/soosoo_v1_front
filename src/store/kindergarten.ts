import { atom } from "recoil";
import { IKindergartenJoinImage, IKindergartenInfo } from "../types/Kindergarten.type";
import { imageConfig } from "../common/imageConfig";

export const kindergartenInfoAtom = atom<IKindergartenInfo>({
  key: "kindergartenInfoAtom",
  default: {
    kindergartenId: 0,
    name: "",
    address: "",
    phone: undefined,
    imageId: undefined,
    imageUrl: undefined,
  },
});
