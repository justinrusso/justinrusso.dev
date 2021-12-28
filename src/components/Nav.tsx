import Link from "next/link";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { FC, useMemo, useState } from "react";
import { useRouter } from "next/router";

import Button from "./common/Button";
import config from "../config";

const ScrollspyNav = dynamic(() => import("react-scrollspy-nav"), {
  ssr: false,
});

const Sidebar = styled.div`
  width: 320px;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 99;
  transition: all 0.5s ease;
  border-right: 1px solid var(--color-divider);
  @media screen and (min-width: 1200px) and (max-width: 1500px) {
    width: 288px;
  }
  @media screen and (max-width: 1199px) {
    transform: translateX(-100%);
    &.menu-open {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 991px) {
    width: 280px;
  }
  @media screen and (max-width: 359px) {
    width: 240px;
  }
`;

const NavButton = styled(Button)`
  display: flex;
  align-items: center;
  font-size: 15px;
  border-radius: var(--border-radius);
  padding: 9px 15px;
  position: relative;
  border: none;

  @media screen and (max-width: 1199px) {
    font-size: 14px;
    padding: 5px 15px;
  }

  /* Reset the hover props from Button */
  &:hover {
    color: var(--color-text-primary);
    background-color: inherit;
    border-color: inherit;
  }

  &:before {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: var(--color-bg-hover);
    border-radius: var(--border-radius);
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover:before,
  &.active:before {
    width: 100%;
  }
`;

const Nav: FC = () => {
  const { pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen((prevState) => !prevState);

  const navLinks = useMemo(
    () =>
      config.navLinks.map(({ Icon, name, url }) => {
        let href = url;
        let scrollLink = false;
        const split = url.split("#");
        if (split[0] === pathname) {
          href = url.replace(pathname, "");
          scrollLink = true;
        }
        return (
          <li key={name}>
            <div className="list_inner">
              {scrollLink ? (
                <NavButton as="a" href={href} onClick={handleClick}>
                  <Icon className="svg" />
                  {name}
                </NavButton>
              ) : (
                <Link href={href} passHref>
                  <NavButton as="a" onClick={handleClick}>
                    <Icon className="svg" />
                    {name}
                  </NavButton>
                </Link>
              )}
            </div>
          </li>
        );
      }),
    [pathname]
  );

  return (
    <>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={menuOpen ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <Sidebar
        className={menuOpen ? "edina_tm_sidebar menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <div className="logo">
            <Link href="/">
              {/* <img
                className="logo_light"
                src={`img/logo/${logo2}.png`}
                alt="brand"
              /> */}
              Logo
            </Link>
          </div>

          <div className="menu">
            {pathname === "/" ? (
              <ScrollspyNav
                scrollTargetIds={["home", "about", "portfolio", "contact"]}
                activeNavClass="active"
                offset={0}
                scrollDuration="100"
              >
                <ul className="anchor_nav">{navLinks}</ul>
              </ScrollspyNav>
            ) : (
              <ul className="anchor_nav">{navLinks}</ul>
            )}
          </div>

          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={
                    {
                      // backgroundImage: `url(sidebarFooterContent.avatar})`,
                    }
                  }
                ></div>
              </div>
              <div className="short">
                <h3>{config.personal.name}</h3>
                <a
                  style={{ direction: "rtl", unicodeBidi: "bidi-override" }}
                  href={`mailto:${config.personal.email}`}
                >
                  {config.personal.email.split("").reverse().join("")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Nav;
