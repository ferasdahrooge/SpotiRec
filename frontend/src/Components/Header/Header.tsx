import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

interface HeaderProps {
  title: String;
  links: { [key: string]: String };
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <div className='Header'>
      <div className='Header__title'>{title}</div>
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
