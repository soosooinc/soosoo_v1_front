import { StyledSideBar } from "./styles";
import { NavLink } from "react-router-dom";
import SideBarWrapper from "./SideBarWrapper";
import { memo } from "react";
import useQueryString from "../../common/useQueryString";

const SideBar = () => {
  const { status } = useQueryString();

  return (
    <StyledSideBar>
      <SideBarWrapper title="SOOSOO">
        <NavLink
          to="/main"
          className={
            status === "main" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          홈
        </NavLink>
        <NavLink
          to="/kindergarten"
          className={
            status === "kindergarten"
              ? "nested-nav-link-active"
              : "nested-nav-link"
          }
        >
          우리 유치원
        </NavLink>
        <NavLink
          to="/notice"
          className={
            status === "notice" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          공지사항
        </NavLink>
        <NavLink
          to="/announce"
          className={
            status === "announce" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          알림장
        </NavLink>
        <NavLink
          to="/dog"
          className={
            status === "dog" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          우리 강아지들
        </NavLink>
      </SideBarWrapper>
    </StyledSideBar>
  );
};

export default memo(SideBar);
