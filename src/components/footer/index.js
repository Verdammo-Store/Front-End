import React from "react";
import Styles from "./index.module.css";
import Logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <div className={Styles.conteinerFooter}>
      <img src={Logo} className={Styles.imgLogo} />
      <ul>
        <li className={Styles.textLista}>Manuel Augusto</li>
        <li className={Styles.textLista}>Eduã de jesus</li>
        <li className={Styles.textLista}>Link do Projeto do gitHub</li>
      </ul>
    </div>
  );
};

export default Footer;
