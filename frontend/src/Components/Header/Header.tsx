import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";

interface HeaderProps {
  title: Record<string, string>;
  links: Record<string, string>;
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  const [click, setclick] = useState(false);
  const [iconClick, setIconClick] = useState(false);

  const handleClick = () => setclick(!click);
  const handleIconClick = () => {
    if (iconClick) {
      setIconClick(!iconClick);
    }
    setclick(!click);
    console.log(iconClick);
  };

  return (
    <div className='Header'>
      <div className='Header__title'>
        {Object.keys(title).map((link) => {
          return (
            <NavLink onClick={handleIconClick} key={link} to={link}>
              {title[link]}
            </NavLink>
          );
        })}
      </div>
      <div onClick={handleClick} className='Header__icons'>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={`Header__slide ${click ? "active" : ""} ${
          iconClick ? "clicked" : ""
        }`}
      >
        <ul className={click ? "Header__links active" : "Header__links"}>
          {Object.keys(links).map((link) => {
            return (
              <li key={link}>
                <NavLink
                  onClick={handleIconClick}
                  className={({ isActive }) =>
                    "Header__link" + (isActive ? " activated" : "")
                  }
                  to={link}
                >
                  {links[link]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
