// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { NavbarUser } from "../../Utils/newNavbar";
import { Logo, NavWrapper, NavbarContainer } from "./styled.js";
import { SiteTexts } from "../../Utils/texts.js";

const Navigating = ({ login = false }) => {
  const [toggle, setToggle] = useState(false);
  if (login == false)
    return (
      <NavWrapper>
        <NavbarContainer>
          <div className="bg-[#0b132b] text-white py-4">
            <div className="main-container">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <div
                  className={`${
                    toggle ? "pb-3" : "pb-0"
                  } flex w-full md:w-auto justify-between transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <Logo>
                      {/* <img src="/icon.png" alt="logo" className="w-10 h-10" /> */}
                      <Link
                        to="/"
                        className="text-[18px] lg:text-2xl font-semibold"
                      >
                        Sololearn
                      </Link>
                    </Logo>
                  </div>
                  <button onClick={() => setToggle(!toggle)}>
                    <FiMenu
                      className={`w-9 h-9 md:hidden transition-all duration-300 ${
                        toggle ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>
                <div
                  className={`${
                    toggle ? "h-[200px]" : "h-0"
                  } flex gap-4 md:items-center flex-col md:flex-row overflow-hidden transition-all duration-300 md:h-auto text-[14px] lg:text-base`}
                >
                  <Link
                    to="/"
                    className="cursor-pointer transition-all duration-300 hover:text-cyan-500"
                  >
                    Subjects
                  </Link>
                  <div className="flex cursor-pointer transition-all duration-300 hover:text-cyan-500 items-center gap-1">
                    <Link to="/">Code Compiler</Link>
                    <IoIosArrowDown />
                  </div>
                  <Link
                    to="/"
                    className="cursor-pointer transition-all duration-300 hover:text-cyan-500"
                  >
                    Discuss
                  </Link>
                  <Link
                    to="/"
                    className="cursor-pointer transition-all duration-300 hover:text-cyan-500"
                  >
                    Teams
                  </Link>
                  <div className="flex gap-3">
                    <Link to="/account/register">
                      <button className="py-[4px] md:py-2 px-5 md:px-6 border-2 border-blue-500 rounded-sm text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white">
                        {SiteTexts.registerText}
                      </button>
                    </Link>
                    <Link to="/account/sign-in">
                      <button className="py-[4px] md:py-2 px-3 md:px-4 border-2 border-blue-500 rounded-sm bg-blue-500 transition-all duration-300 hover:bg-transparent hover:text-blue-500 ">
                        {SiteTexts.signInText}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavbarContainer>
      </NavWrapper>
    );

  const linkClassName =
    "flex gap-4 md:items-center flex-col md:flex-row overflow-hidden transition-all duration-300 md:h-auto text-[14px] lg:text-base cursor-pointer  hover:text-cyan-500";

  return (
    <div className="bg-white text-slate-900 py-4">
      <div className="main-container">
        <div className="flex justify-between md:items-center md:flex-row">
          {/* *Mobile */}
          <div
            className={`${
              toggle ? "pb-3" : "pb-0"
            } flex w-full md:w-auto justify-between transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <img src="/icon.png" alt="logo" className="w-10 h-10" />
              <Link to="/" className="text-[18px] lg:text-2xl font-semibold">
                Sololearn
              </Link>
            </div>
            <button onClick={() => setToggle(!toggle)}>
              <FiMenu
                className={`w-9 h-9 md:hidden transition-all duration-300 ${
                  toggle ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          </div>
          {/* *Laptop */}
          <div
            className={` ${
              toggle ? "h-fit" : "h-0"
            } flex gap-4  md:items-center flex-col md:flex-row overflow-hidden transition-all duration-300 md:h-auto text-[14px] lg:text-base`}
          >
            {NavbarUser.map((v, i) => {
              return v.type === "route" ? (
                <NavLink key={v.id} to={v.path} className={linkClassName}>
                  {v.name}
                </NavLink>
              ) : v.type === "parent" ? (
                <div key={v.id} className={linkClassName}>
                  <div>parent</div>
                  <IoIosArrowDown />
                </div>
              ) : (
                <></>
              );
            })}
          </div>

          <div className={``}>hello</div>
        </div>
      </div>
    </div>
  );
};

export default Navigating;
