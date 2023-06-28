import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";

interface HeaderProps {
  title: Record<string, string>;
  links: Record<string, string>;
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);

  return (
    <div className='Header'>
      <div className='Header__title'>
        {Object.keys(title).map((link) => {
          return (
            <NavLink key={link} to={link}>
              {title[link]}
            </NavLink>
          );
        })}
      </div>
      <div onClick={handleClick} className='Header__icons'>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`Header__slide ${click ? "active" : ""}`}>
        <ul className={click ? "Header__links active" : "Header__links"}>
          {Object.keys(links).map((link) => {
            return (
              <li key={link}>
                <NavLink
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
