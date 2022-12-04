import React from 'react';
import './Header.css';
const logo = require('../../images/logo-white.png');

interface IHeaderProps {
  username: string;
}

const Header: React.FC<IHeaderProps> = ({ username }) => {
  return (
    <div className="header-container">
      <div className="content-container">
        <div className="logo-container">
          <img src={logo} alt="Check It Logotype" />
        </div>
        <div className="options-container">
          <ul className="options-list">
            <li className="active">Workspace</li>
            <li>Suporte</li>
            <li className="user">{username}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
