import React, { useEffect, useState } from "react";
import { style } from "./style.css";
import cn from "classnames";
import { Link } from "react-scroll";
import InfoLine from "../InfoLine";

function Header() {
  const [navbar, setNavbar] = useState("navbar");
  const [menu, setMenu] = useState("menu");
  const [iActive, setIActive] = useState("fas fa-bars");

  //скролл эффект
  const listenScrolEvent = (event) => {
    if (window.scrollY > 20) {
      return setNavbar("navbar sticky");
    } else {
      return setNavbar("navbar");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrolEvent);
    return () => window.removeEventListener("scroll", listenScrolEvent);
  }, []);

  const handleChange = (e) => {
    if (menu === "menu") {
      setIActive("fas fa-bars active");
      setMenu("menu active");
    } else if (menu === "menu active") {
      setIActive("fas fa-bars");
      setMenu("menu");
    }
  };

  return (
    <>
      <nav className={navbar} style={style}>
        <div className="max-width">
          <div className="logo">
            <Link to="#">Logo</Link>
          </div>
          <ul className={menu} style={style}>
            <li>
              <Link to="home" className="menu-btn" onClick={handleChange}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="menu-btn" onClick={handleChange}>
                SomeInfo
              </Link>
            </li>
            <li>
              <Link to="services" className="menu-btn" onClick={handleChange}>
                SomeInfo
              </Link>
            </li>
            <li>
              <Link to="skills" className="menu-btn" onClick={handleChange}>
                SomeInfo
              </Link>
            </li>
          </ul>
          <ul></ul>

          <div className="menu-btn" onClick={handleChange}>
            <i className={iActive}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
