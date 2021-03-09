import React, { useEffect, useState } from "react";
import style from "./style.module.css";
// import { Link } from "react-scroll";
import cn from "classnames";
import { Link } from "react-router-dom";
function Header() {
  const [navbar, setNavbar] = useState("navbar");
  const [menu, setMenu] = useState("menu");
  const [isActive, setIsActive] = useState("");
  const [sticky, setSticky] = useState("");

  const listenScrolEvent = (event) => {
    if (window.scrollY > 20) {
      return setSticky("sticky");
    } else {
      return setSticky("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrolEvent);
    return () => window.removeEventListener("scroll", listenScrolEvent);
  }, []);

  const handleChange = (e) => {
    if (menu === "menu") {
      setIsActive("active");
      setMenu("menu active");
    } else if (menu === "menu active") {
      setIsActive("");
      setMenu("menu");
    }
  };

  return (
    <>
      <nav className={cn(style.navbar, sticky !== "" && style.sticky)}>
        <div className={style.maxWidth}>
          <div className={style.logo}>
            <div className={style.logoImg}>
              <div className={style.logoMargin}>
                <Link to="/">Invest</Link>
              </div>
            </div>
          </div>

          <ul className={cn(style.menu, isActive === "active" && style.active)}>
            <li>
              <Link
                to="/dashboard"
                className={style.menuBtn}
                onClick={handleChange}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/questions"
                className={style.menuBtn}
                onClick={handleChange}
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className={style.menuBtn}
                onClick={handleChange}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={style.menuBtn}
                onClick={handleChange}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className={style.menuBtn}
                onClick={handleChange}
              >
                Contacts
              </Link>
            </li>
          </ul>
          <ul></ul>

          <div className={style.menuBtn} onClick={handleChange}>
            {isActive ? (
              <i class="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
