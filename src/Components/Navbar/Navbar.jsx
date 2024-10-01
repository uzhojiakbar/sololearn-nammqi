import { useState } from "react";
import { NavbarNewUser } from "../../Utils/navbarData";
import { Button } from "../Header/style";
import {
  CloseIcon,
  Logo,
  Menu,
  NavbarContainer,
  NavLink,
  NavLinks,
  NavWrapper,
} from "./styled";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);

  const nav = useNavigate();

  const ClickMenu = (id, children) => {
    if (id === activeMenu) {
      CloseMenu();
      return;
    }
    if (children.length > 0) {
      setActiveMenu(id);
      console.log("parent");
    } else {
      CloseMenu();
      console.log("child");
    }
  };

  const ChangeRoute = (link) => {
    if (document.location.pathname !== link) {
      nav(link);
    }
  };

  const CloseMenu = () => {
    setActiveMenu(false);
  };

  return (
    <NavWrapper>
      <NavbarContainer>
        <Logo onClick={() => ChangeRoute("/")}>Sololearn</Logo>
        <NavLinks>
          {/* <NavLink href="#">Subjects</NavLink>
        <NavLink href="#">Code Compiler</NavLink>
        <NavLink href="#">Discuss</NavLink>
        <NavLink href="#">Teams</NavLink> */}
          {NavbarNewUser.map((v, i) => {
            return v.id ? (
              <NavLink
                onClick={() => ClickMenu(v.id, v.children)}
                key={v.id}
                // to={v.path}
                className={"linkClassName"}
              >
                {v.name}
                {v.children.length > 0 && activeMenu !== v.id ? (
                  <RiArrowDownSLine />
                ) : (
                  ""
                )}
                {v.children.length > 0 && activeMenu === v.id ? (
                  <RiArrowUpSLine />
                ) : (
                  ""
                )}
              </NavLink>
            ) : (
              <></>
            );
          })}
          <Button onClick={() => ChangeRoute("account/register")} outline="y">
            Boshlash
          </Button>
          <Button onClick={() => ChangeRoute("account/sign-in")}>Kirish</Button>
        </NavLinks>
        {activeMenu ? (
          <Menu>
            <div onClick={CloseMenu} className="back"></div>
            <div className="main">
              <CloseIcon onClick={CloseMenu} />
            </div>
          </Menu>
        ) : (
          ""
        )}
      </NavbarContainer>
    </NavWrapper>
  );
}
