import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "../assets/styles/Navbar.module.css";

function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about") {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let scrollPosition = window.scrollY + 200;

        sections.forEach((section) => {
          if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
          ) {
            setActiveSection(section.getAttribute("id"));
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>Sankar</div>

      {/* Navigation Links */}
      <ul
        className={`${styles.navLinks} ${
          mobileMenuOpen ? styles.mobileActive : ""
        }`}
      >
        {/* Home and About — smooth scroll */}
        <li>
          {location.pathname === "/" ? (
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className={`${styles.scrollLink} ${
                activeSection === "home" ? styles.active : ""
              }`}
              onClick={closeMenu}
            >
              Home
            </ScrollLink>
          ) : (
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          )}
        </li>

        <li>
          {location.pathname === "/about" ? (
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className={`${styles.scrollLink} ${
                activeSection === "about" ? styles.active : ""
              }`}
              onClick={closeMenu}
            >
              About
            </ScrollLink>
          ) : (
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          )}
        </li>

        {/* Expertise Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setOpenDropdown("expertise")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span
            className={styles.dropdownToggle}
            onClick={() => handleDropdown("expertise")}
          >
            Expertise ▾
          </span>
          {openDropdown === "expertise" && (
            <ul className={styles.dropdownMenu}>
              <li>
                <NavLink to="/skills-certifications" onClick={closeMenu}>
                  Skills & Certifications
                </NavLink>
              </li>
              <li>
                <NavLink to="/trainings-programs" onClick={closeMenu}>
                  Training & Programs
                </NavLink>
              </li>
              <li>
                <NavLink to="/roles-responsibilities" onClick={closeMenu}>
                  Roles & Responsibilities
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Achievements Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setOpenDropdown("achievements")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span
            className={styles.dropdownToggle}
            onClick={() => handleDropdown("achievements")}
          >
            Achievements ▾
          </span>
          {openDropdown === "achievements" && (
            <ul className={styles.dropdownMenu}>
              <li>
                <NavLink to="/awards-recognition" onClick={closeMenu}>
                  Awards & Recognition
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Research & Work Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setOpenDropdown("research")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span
            className={styles.dropdownToggle}
            onClick={() => handleDropdown("research")}
          >
            Research & Work ▾
          </span>
          {openDropdown === "research" && (
            <ul className={styles.dropdownMenu}>
              <li>
                <NavLink to="/research-projects" onClick={closeMenu}>
                  Research Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/application-development" onClick={closeMenu}>
                  Application Development
                </NavLink>
              </li>
              <li>
                <NavLink to="/product-portfolio" onClick={closeMenu}>
                  Product Portfolio
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Static Links */}
        <li>
          <NavLink to="/publications-patents" onClick={closeMenu}>
            Publications & Patents
          </NavLink>
        </li>
        <li>
          <NavLink to="/experimental-lab" onClick={closeMenu}>
            Experimental Lab
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={closeMenu}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Theme Toggle & Mobile Hamburger */}
      <div className={styles.actions}>
        <div className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </div>
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          {mobileMenuOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
