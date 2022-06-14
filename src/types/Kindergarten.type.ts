export interface IKindergartenInfo{
    kindergartenId : number;
    name : string;
    address : string,
    phone : string | undefined;
    imageId : number | undefined;
    imageUrl : string | undefined; 
}

export interface ITeacherInfo{
    userId: number;
    name: string;
    imageUrl: string;
}

export interface IKindergartenJoinImage{
    kindergarten: IKindergartenInfo;
    image: ITeacherInfo;
}
