import React from "react";
import { Link } from "react-router-dom";

import backIcon from "../images/icons/back.svg";
import proffyLogo from "../images/logo.svg";

import "../styles/components/s_page_header.css";

interface PageHeaderProps {
  title: string;
  descripton?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={proffyLogo} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
        {props.descripton && <p>{props.descripton}</p>}
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
