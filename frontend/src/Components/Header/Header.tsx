import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

interface HeaderProps {
  title: Record<string, string>;
  links: Record<string, string>;
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
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
      <ul className='Header__links'>
        {Object.keys(links).map((link) => {
          return (
            <li key={link}>
              <NavLink className='Header__link' to={link}>
                {links[link]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
