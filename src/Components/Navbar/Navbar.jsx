import React, { useRef, useState } from "react";
import "./Navbar2.css";
import underline from "../../assets/nav_underline.svg";
import theme_pettern from "../../assets/theme_pattern.svg";
import { Link } from "react-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import githubIcon from "../../assets/icon-github.svg";
import linkden from "../../assets/icon-linkdein.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState();
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  

  return (
    <div id="navbar" className="navbar">
      <div className="navbar-title" >
          <h1>KeNiL</h1>
          <img src={theme_pettern} alt="" />
      </div>

      <img
        src={menu_open}
        onClick={openMenu}
        alt="toggle-icon-open"
        className="toggle-icon-open"
      />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="toggle-icon-close"
          className="toggle-icon-close"
        />
        <li>
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            <p onClick={() => setMenu("home")}>Home</p>
            {menu === "home" ? <img src={underline} alt=""></img> : <></>}
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={800}>
            <p onClick={() => setMenu("about")}>About Me</p>
            {menu === "about" ? <img src={underline} alt=""></img> : <></>}
          </Link>
        </li>
        <li>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
          >
            <p onClick={() => setMenu("education")}>Education</p>
            {menu === "education" ? <img src={underline} alt=""></img> : <></>}
          </Link>
        </li>
        <li>
          <Link
            to="techstack"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
          >
            <p onClick={() => setMenu("techstack")}>Tech Stack</p>
            {menu === "techstack" ? <img src={underline} alt=""></img> : <></>}
          </Link>
        </li>
        <li>
          <Link to="mywork" spy={true} smooth={true} offset={50} duration={800}>
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
            {menu === "portfolio" ? <img src={underline} alt=""></img> : <></>}
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
          >
            <p onClick={() => setMenu("contact")}>Contact</p>
            {menu === "contact" ? <img src={underline} alt=""></img> : <></>}
          </Link>
        </li>
      </ul>

      <div className="nav-connect">
        <a
          onClick={() => setMenu("github")}
          className="nav-github"
          href="https://github.com/patelkenil26"
          target="_blank"
        >
          <img src={githubIcon} alt="github" />
        </a>
        <a
          onClick={() => setMenu("linkden")}
          className="nav-linkden"
          href="https://www.linkedin.com/in/kenilpatel26"
          target="_blank"
        >
          <img src={linkden} alt="linkden" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
