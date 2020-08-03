import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import './styles.css'

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, title, ...rest }) => {
  return (
    <header className="page-header" {...rest}>
      <div className="top-bar-container">
        <Link to="/" >
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={imgLogo} alt="Logo" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
}

export default PageHeader;