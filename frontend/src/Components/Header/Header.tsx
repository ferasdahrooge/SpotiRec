import React from "react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  title: String;
  links: { [key: string]: String };
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <div className='Header'>
      <div className='title'></div>
      <h1>{title}</h1>
      <ul className='Header__links'>
        {Object.keys(links).map((link) => {
          return (
            <li key={link}>
              <NavLink to={link}>{links[link]}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
