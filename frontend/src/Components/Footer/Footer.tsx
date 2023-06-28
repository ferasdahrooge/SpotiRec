import React from "react";
import "./Footer.scss";
interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <div className='Footer'>
      <div className='Footer__title'>{name}</div>
    </div>
  );
};

export default Footer;
