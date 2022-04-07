import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 46px;
  background-color: ${(props) => props.theme.navBg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  z-index: 999;
`;

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 164px;
`;

export const NavLogo = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const NavTitle = styled.span`
  font-size: 1.75rem;
  letter-spacing: 2px;
  font-weight: bolder;
  color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`;

export const Logout = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  cursor: pointer;
`;
