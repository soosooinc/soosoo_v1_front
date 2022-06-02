import kindergartenController from "../controller/kindergartenController";

const KindergartenView = () => {
  const { kindergartenInfo , teacherInfo } = kindergartenController();
  console.log(kindergartenInfo);
  console.log(teacherInfo);
  return <></>;
};

export default KindergartenView;