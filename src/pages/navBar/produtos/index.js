import React, { useEffect, useState } from "react";
import Styles from "./index.module.css";
import { useNavigate, Outlet } from "react-router-dom";

const Produtos = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("instrumentos");

  useEffect(() => {
    if (window.location.pathname !== "/navBar/produtos/" + currentPage) {
      navigate("/navBar/produtos/" + currentPage);
    }
  }, [currentPage]);

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className={Styles.conteineProdutos}>
      <div className={Styles.menuNavBar}>
        <div
          onClick={() => handlePageChange("instrumentos")}
          className={`${Styles.btnNavBar} ${
            currentPage === "instrumentos" ? Styles.selected : ""
          }`}
        >
          Instrumentos
        </div>
        <div
          onClick={() => handlePageChange("acessorios")}
          className={`${Styles.btnNavBar} ${
            currentPage === "acessorios" ? Styles.selected : ""
          }`}
        >
          Acessórios
        </div>
        <div
          onClick={() => handlePageChange("cordas")}
          className={`${Styles.btnNavBar} ${
            currentPage === "cordas" ? Styles.selected : ""
          }`}
        >
          Cordas
        </div>
        <div
          onClick={() => handlePageChange("audio")}
          className={`${Styles.btnNavBar} ${
            currentPage === "audio" ? Styles.selected : ""
          }`}
        >
          Áudio
        </div>
      </div>
      <div className={Styles.conteinerPagina}>
        <Outlet />
      </div>
    </div>
  );
};

export default Produtos;
