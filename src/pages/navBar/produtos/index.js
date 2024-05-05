import React from "react";
import Styles from "./index.module.css";
import { useNavigate, Outlet } from "react-router-dom";

const Produtos = () => {
  const navigate = useNavigate();

  return (
    <div className={Styles.conteineProdutos}>
      <h1>Tela de produtos</h1>
    </div>
  );
};

export default Produtos;
