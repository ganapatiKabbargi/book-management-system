import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Headers.module.css";

function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={styles.headers}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <NavLink to="/">
            <span className={styles.logoIcon}>📚</span>
            <span className={styles.logoText}>BookManager</span>
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            {/* <li className={styles.navItem}>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Features
              </NavLink>
            </li> */}
            {/* <li className={styles.navItem}>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Books
              </NavLink>
            </li> */}
            {/* <li className={styles.navItem}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li> */}
          </ul>
          {/* <div className={styles.authButtons}>
            <button className={`btn btn-secondary ${styles.loginBtn}`}>
              Log In
            </button>
            <button className={`btn btn-primary ${styles.signupBtn}`}>
              Sign Up
            </button>
          </div> */}
        </nav>
      </div>
    </header>
  );
}

export default Headers;
