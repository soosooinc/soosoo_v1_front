import MainView from "./pages/main/view/MainView";
import { Route, Routes } from "react-router-dom";
import useQueryString from "./common/useQueryString";

const App = () => {
  const { disable, reset } = useQueryString();
  return (
    <div>
      <p>시작하자 수수들이여</p>
      <MainView />
    </div>
  );
};

export default App;
