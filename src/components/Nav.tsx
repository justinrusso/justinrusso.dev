import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Button from "./common/Button";
import FullLogo from "./logo/FullLogo";
import Social from "./Social";
import config from "../config";
import { transitionDurations, transitionNames } from "../theme/transitions";
import { underlinedLink } from "../theme/mixins";
import { zIndexes } from "../theme/utils";

const ScrollspyNav = dynamic(() => import("react-scrollspy-nav"), {
  ssr: false,
});

export const MobileButtonWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: ${zIndexes.modalBackground + 1};
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
    background-color: var(--color-secondary-main);
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
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: ${zIndexes.modal};
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

  .sidebar_inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    @media screen and (max-width: 1199px) {
      padding: 20px;
    }
  }

  .logo {
    width: 100%;

    img {
      max-width: 120px;
      @media screen and (max-width: 1199px) {
        max-width: 70px;
      }
    }
  }

  .menu {
    width: 100%;
    padding: 60px 0;
    @media screen and (max-width: 1199px) {
      padding: 35px 0;
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 0;

      li {
        width: 100%;

        .svg {
          width: 22px;
          height: 22px;
          margin-right: 15px;
          filter: invert(0.3);
          transition: all 0.3s ease;
          @media screen and (max-width: 1199px) {
            width: 18px;
            height: 18px;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .author {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;

    .profile-picture-wrapper {
      width: 50px;
      height: 50px;
      display: inline-block;
      position: relative;

      .profile-picture {
        border-radius: 100%;
      }
    }

    .short {
      padding-left: 13px;

      h3 {
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
      }

      a {
        ${underlinedLink}

        text-decoration: none;
        color: var(--color-text-secondary);
        font-size: 14px;
        transition: all 0.5s ease;

        &:hover {
          color: var(--color-primary-main);
        }
      }
    }
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${zIndexes.modalBackground};
  opacity: 0;
  display: none;

  &.${transitionNames.fade}-enter,
    &.${transitionNames.fade}-enter-active,
    &.${transitionNames.fade}-enter-done,
    &.${transitionNames.fade}-exit,
    &.${transitionNames.fade}-exit-active {
    display: block;
  }

  @media screen and (min-width: 1200px) {
    display: none;

    &.${transitionNames.fade}-enter,
      &.${transitionNames.fade}-enter-active,
      &.${transitionNames.fade}-enter-done,
      &.${transitionNames.fade}-exit,
      &.${transitionNames.fade}-exit-active {
      display: none;
    }
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

const ResumeButtonWrapper = styled.div`
  padding-top: 20px;
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

  const transitionTimeout = 0;

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
              timeout={transitionTimeout}
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
        <Button onClick={handleClick} color="secondary">
          <MenuIcon className={menuOpen ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        </Button>
      </MobileButtonWrapper>
      <Sidebar className={menuOpen ? "menu-open" : ""}>
        <div className="sidebar_inner">
          <div>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames="fade" timeout={transitionTimeout}>
                  <div className="logo fade">
                    <Link href="/" passHref>
                      <a>
                        <FullLogo />
                      </a>
                    </Link>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>

            <nav className="menu">
              {pathname === "/" ? (
                <ScrollspyNav
                  scrollTargetIds={["about", "work", "contact"]}
                  activeNavClass="active"
                  offset={0}
                  scrollDuration="100"
                >
                  {NavLinks}
                </ScrollspyNav>
              ) : (
                NavLinks
              )}
              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition
                    classNames={transitionNames.fadeRight}
                    timeout={transitionTimeout}
                  >
                    <ResumeButtonWrapper
                      className={transitionNames.fadeRight}
                      style={{
                        transitionDelay: `${400}ms`,
                      }}
                    >
                      <Button
                        as="a"
                        href={config.personal.resumeUrl}
                        color="primary"
                        target="_blank"
                      >
                        Resume
                      </Button>
                    </ResumeButtonWrapper>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </nav>
          </div>

          <div className="bottom">
            <TransitionGroup component={null}>
              {isMounted && [
                <CSSTransition
                  key="author"
                  classNames={transitionNames.fade}
                  timeout={transitionTimeout}
                >
                  <div className={`author ${transitionNames.fade}`}>
                    <div className="profile-picture-wrapper">
                      <Image
                        src="/images/profile-portrait.jpg"
                        alt="hero image"
                        className="profile-picture"
                        layout="fill"
                        priority
                      />
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
                </CSSTransition>,
                <CSSTransition
                  key="social"
                  classNames={transitionNames.fade}
                  timeout={transitionTimeout}
                >
                  <Social className={transitionNames.fade} />
                </CSSTransition>,
              ]}
            </TransitionGroup>
          </div>
        </div>
      </Sidebar>
      <CSSTransition
        classNames={transitionNames.fade}
        timeout={transitionDurations.fade}
        in={menuOpen}
      >
        <ModalBackground
          className="fade"
          onClick={() => setMenuOpen((prevState) => !prevState)}
        />
      </CSSTransition>
    </>
  );
};

export default Nav;
