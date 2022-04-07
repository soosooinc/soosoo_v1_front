import { memo, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logout, NavLogo, NavTitle, StyledLogo, StyledNav } from "./styles";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <StyledNav>
      <StyledLogo
        onClick={() =>
          navigate("/content?disable=false&reset=true&status=setcontents")
        }
      >
        <NavLogo
          src="https://cdn.imweb.me/thumbnail/20211027/3ef8c1a4f5c8b.png"
          alt="LOGO"
        />
        <NavTitle>soosoo</NavTitle>
      </StyledLogo>
    </StyledNav>
  );
};

export default memo(Nav);
