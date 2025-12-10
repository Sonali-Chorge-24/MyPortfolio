import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_open from '../../assets/Open_Menu.svg';
import menu_close from '../../assets/Close_Menu.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="Sonali" className="nav-logo" />
      <img
        src={menu_open}
        onClick={openMenu} alt="Open Menu"
        className="nav-mob-open"/>

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav-mob-close" />

        <li onClick={() => { setMenu("home"); closeMenu(); }} className={menu === "home" ? "active" : ""}>
          <a href="#home">Home</a>
        </li>
        <li onClick={() => { setMenu("about"); closeMenu(); }} className={menu === "about" ? "active" : ""}>
          <a href="#about">About Me</a>
        </li>
        <li onClick={() => { setMenu("services"); closeMenu(); }} className={menu === "services" ? "active" : ""}>
          <a href="#services">Services</a>
        </li>
        <li onClick={() => { setMenu("work"); closeMenu(); }} className={menu === "work" ? "active" : ""}>
          <a href="#mywork">My Work</a>
        </li>
        <li onClick={() => { setMenu("contact"); closeMenu(); }} className={menu === "contact" ? "active" : ""}>
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-connect" onClick={() => { setMenu("contact"); closeMenu(); }}>
          <a href="#contact">Connect With Me</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
