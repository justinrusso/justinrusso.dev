import Link from "next/link";
import dynamic from "next/dynamic";
import { FC, useState } from "react";

import config from "../config";

const ScrollspyNav = dynamic(() => import("react-scrollspy-nav"), {
  ssr: false,
});

const Nav: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen((prevState) => !prevState);

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
            <ScrollspyNav
              scrollTargetIds={["home", "about", "portfolio", "contact"]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {config.navLinks.map(({ icon, name, url }) => (
                  <li key={name}>
                    <div className="list_inner">
                      <a href={url} onClick={handleClick}>
                        {name}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
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
