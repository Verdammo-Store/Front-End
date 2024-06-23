import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import CadastroUser from "../pages/cadastroUser";
import NavBar from "../pages/navBar";
import Home from "../pages/navBar/home";
import Produtos from "../pages/navBar/produtos";
import CadastroProdutos from "../pages/navBar/produtos/cadastrarProdutos";
import Instrumentos from "../pages/navBar/produtos/instrumentos";
import Acessorio from "../pages/navBar/produtos/acessorios";
import Cordas from "../pages/navBar/produtos/cordas";
import Audio from "../pages/navBar/produtos/audio";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/cadastroUser" element={<CadastroUser />} />
        <Route path="/navBar" element={<NavBar />}>
          <Route path="/navBar/home" element={<Home />} />
          <Route path="/navBar/produtos" element={<Produtos />}>
            <Route
              path="/navBar/produtos/instrumentos"
              element={<Instrumentos />}
            />
            <Route path="/navBar/produtos/acessorios" element={<Acessorio />} />
            <Route path="/navBar/produtos/cordas" element={<Cordas />} />
            <Route path="/navBar/produtos/audio" element={<Audio />} />
          </Route>
        </Route>
        <Route path="/cadastrarProdutos" element={<CadastroProdutos />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
