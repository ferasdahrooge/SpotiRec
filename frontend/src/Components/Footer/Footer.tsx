import React from "react";

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return <div className='Footer'>{name}</div>;
};

export default Footer;
