import Link from "next/link";
import dynamic from "next/dynamic";
import { FC, useMemo, useState } from "react";
import { useRouter } from "next/router";

import config from "../config";

const ScrollspyNav = dynamic(() => import("react-scrollspy-nav"), {
  ssr: false,
});

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
                <a href={href} onClick={handleClick}>
                  <Icon className="svg" />
                  {name}
                </a>
              ) : (
                <Link href={href} passHref>
                  <a onClick={handleClick}>
                    <Icon className="svg" />
                    {name}
                  </a>
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
      <div
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
      </div>
    </>
  );
};

export default Nav;
