import { StyledSideBar } from "./styles";
import { NavLink } from "react-router-dom";
import SideBarWrapper from "./SideBarWrapper";
import { memo } from "react";
import usePathParams from "../../../common/usePathParams";

const SideBar = () => {
  const path: string = usePathParams();

  return (
    <StyledSideBar>
      <SideBarWrapper title="SOOSOO">
        <NavLink
          to="/main"
          className={
            path === "/main" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          홈
        </NavLink>
        <NavLink
          to="/kindergarten"
          className={
            path === "/kindergarten"
              ? "nested-nav-link-active"
              : "nested-nav-link"
          }
        >
          우리 유치원
        </NavLink>
        <NavLink
          to="/notice"
          className={
            path === "/notice" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          공지사항
        </NavLink>
        <NavLink
          to="/announce"
          className={
            path === "/announce" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          알림장
        </NavLink>
        <NavLink
          to="/dog"
          className={
            path === "/dog" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          우리 강아지들
        </NavLink>
      </SideBarWrapper>
    </StyledSideBar>
  );
};

export default memo(SideBar);
