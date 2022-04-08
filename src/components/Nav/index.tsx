import { memo, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logout, NavLogo, NavTitle, StyledLogo, StyledNav } from "./styles";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <StyledNav>
      <StyledLogo onClick={() => navigate("/")}>
        <NavLogo
          src="https://discussionskorea.apple.com/public/assets/avatars/SYSTEM_DEFAULT_AVATAR_EN_4.png"
          alt="LOGO"
        />
        <NavTitle>soosoo</NavTitle>
      </StyledLogo>
    </StyledNav>
  );
};

export default memo(Nav);
