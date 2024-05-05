import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import CadastroUser from "../pages/cadastroUser";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/cadastroUser" element={<CadastroUser />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
