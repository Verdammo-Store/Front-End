import * as React from "react";
import Styles from "./index.module.css";
import Logo from "../../assets/img/logo.png";
import InputSenha from "../../components/InputSenha";
import { TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navigateCadastro = () => {
    navigate();
  };

  const Autenticacao = () => {
    navigate();
  };

  return (
    <div className={Styles.conteiner}>
      <div className={Styles.contentLogin}>
        <img src={Logo} className={Styles.imgLogo} />
        <form className={Styles.contentEmailSenha} onSubmit={Autenticacao}>
          <TextField
            className={Styles.input}
            label="Email"
            variant="outlined"
            color="tertiary"
            required
          />

          <InputSenha
            className={Styles.input}
            nomeInputLabel={"Senha*"}
            label={"Senha*"}
          />

          <div className={Styles.linkCadastro}>
            {" "}
            <Link
              onClick={navigateCadastro}
              style={{ color: "var(--secondary)" }}
            >
              Cadastre-se
            </Link>
          </div>
          <Button type="submit" variant="contained" className={Styles.btnForm}>
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
