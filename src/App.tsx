import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import * as Screens from "./screens";

const App = () => {
  return (
    <>
      {/* 로그인페이지(ex localhost:3000) 일 때 Nav 및 SideBar컴포넌트 없애기*/}
      {/* {window.location.pathname === "/" || (
        <>
          <Nav />
          <SideBar />
        </>
      )} */}
      <Nav />
      <SideBar />
      <Routes>
        {/* <Route path="/" element={<Pages.LoginView />} /> */}
        {/* <Route path="/main" element={<Screens.MainScreen />} /> */}
        <Route path="/" element={<Screens.MainScreen />} />
        <Route path="/kindergarten" element={<Screens.AnnounceScreen />} />
        <Route path="/notice" element={<Screens.DogScreen />} />
        <Route path="/announce" element={<Screens.KindergartenScreen />} />
        <Route path="/dog" element={<Screens.NoticeScreen />} />
        {/* <Route path="/*" element={<Screens.NotFoundScreen />} /> */}
      </Routes>
    </>
  );
};

export default App;
