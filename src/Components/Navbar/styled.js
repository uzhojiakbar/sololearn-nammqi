import { RiCloseFill } from "react-icons/ri";
import styled from "styled-components";

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  min-height: 80px;
  height: fit-content;
  background-color: var(--header-backdound);
`;

const NavbarContainer = styled.nav`
  padding: 0 20px;
  color: white;

  position: relative;
  margin: 0 auto;
  max-width: 1920px;
  width: 100vw;
`;

const Logo = styled.div`
  font-size: 24px;
  cursor: pointer;
  padding: 10px 15px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
`;

const NavLink = styled.div`
  color: white;
  text-decoration: none;
  user-select: none;
  font-size: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  .back {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .main {
    position: relative;
    top: 80px;
    left: 0; /* Markazlash uchun */
    transform: translateX(25%);

    width: 70vw;
    min-height: 80vh;
    max-height: 80vh;

    background-color: white;
    border-radius: 20px;
    z-index: 10; /* Menu boshqa elementlar ustida ko'rinishi uchun */
  }
`;

const CloseIcon = styled(RiCloseFill)`
  color: black;

  position: absolute;

  right: 10px;
  top: 10px;

  cursor: pointer;

  width: 40px;
  height: 40px;

  transition: 0;

  &:hover {
    transition: 0.1 ease-in;
    color: red;
  }
`;

export {
  NavWrapper,
  CloseIcon,
  NavbarContainer,
  NavLink,
  NavLinks,
  Logo,
  Menu,
};
