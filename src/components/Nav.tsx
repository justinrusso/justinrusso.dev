import Link from "next/link";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Button from "./common/Button";
import config from "../config";
import { transitionDurations, transitionNames } from "../theme/transitions";

const ScrollspyNav = dynamic(() => import("react-scrollspy-nav"), {
  ssr: false,
});

export const MobileButtonWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 11;
  display: none;
  @media screen and (max-width: 1199px) {
    display: block;
  }

  ${Button} {
    width: 55px;
    height: 55px;
    position: relative;
    border-radius: 50%;
    padding: 0;
    border: none;
    background-color: var(--color-text-primary);
  }
`;

const MenuIcon = styled.div`
  span {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 25px;
    height: 2px;
    margin: auto;
    background: var(--color-bg);
    color: var(--color-bg);
    transition: 0.3s;
  }

  & span:nth-child(1) {
    top: -17px;
  }
  & span:nth-child(2) {
    top: -1px;
  }
  & span:nth-child(3) {
    top: auto;
    bottom: 19px;
  }
  &.active span:nth-child(1) {
    top: 0px;
    transform: rotate(45deg);
  }
  &.active span:nth-child(2) {
    left: 50%;
    width: 0px;
  }
  &.active span:nth-child(3) {
    top: 19px;
    transform: rotate(-45deg);
  }
`;

const Sidebar = styled.div`
  width: 320px;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 99;
  transition: all 0.5s ease;
  border-right: 1px solid var(--color-divider);
  background-color: var(--color-bg);

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

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 1200px) {
    display: none;
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
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen((prevState) => !prevState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const NavLinks = (
    <TransitionGroup className="anchor_nav" component="ul">
      {isMounted ? (
        config.navLinks.map(({ Icon, name, url }, i) => {
          let href = url;
          let scrollLink = false;
          const split = url.split("#");
          if (split[0] === pathname) {
            href = url.replace(pathname, "");
            scrollLink = true;
          }

          const delay = 100 * (i + 1);

          return (
            <CSSTransition
              key={name}
              classNames={transitionNames.fadeRight}
              timeout={transitionDurations.fade + delay}
            >
              <li
                key={name}
                className={transitionNames.fadeRight}
                style={{
                  transitionDelay: `${delay}ms`,
                }}
              >
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
            </CSSTransition>
          );
        })
      ) : (
        <></>
      )}
    </TransitionGroup>
  );

  return (
    <>
      <MobileButtonWrapper>
        <Button onClick={handleClick}>
          <MenuIcon className={menuOpen ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        </Button>
      </MobileButtonWrapper>
      <Sidebar
        className={menuOpen ? "edina_tm_sidebar menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                classNames="fade"
                timeout={transitionDurations.fade}
              >
                <div className="logo fade">
                  <Link href="/">
                    {/* <img
                      className="logo_light"
                      src={`img/logo/${logo2}.png`}
                      alt="brand"
                    /> */}
                    Logo
                  </Link>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>

          <div className="menu">
            {pathname === "/" ? (
              <ScrollspyNav
                scrollTargetIds={["about", "portfolio", "contact"]}
                activeNavClass="active"
                offset={0}
                scrollDuration="100"
              >
                {NavLinks}
              </ScrollspyNav>
            ) : (
              NavLinks
            )}
          </div>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                classNames={transitionNames.fade}
                timeout={transitionDurations.fade}
              >
                <div className={`author ${transitionNames.fade}`}>
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
                        style={{
                          direction: "rtl",
                          unicodeBidi: "bidi-override",
                        }}
                        href={`mailto:${config.personal.email}`}
                      >
                        {config.personal.email.split("").reverse().join("")}
                      </a>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </Sidebar>
      {menuOpen && <ModalBackground />}
    </>
  );
};

export default Nav;
