import * as React from "react";
import Styles from "./index.module.css";
import Logo from "../../assets/img/logo.png";
import InputSenha from "../../components/InputSenha";
import { TextField, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CadastroUser = () => {
  const navigate = useNavigate();

  const CadastrarUser = () => {
    navigate();
  };

  const FazerLogin = () => {
    navigate("/*");
  };

  return (
    <div className={Styles.conteiner}>
      <img src={Logo} className={Styles.imgLogo} />
      <div className={Styles.contentCadastro}>
        <h1 className={Styles.txtTitulo}>Cadastre-se</h1>
        <form className={Styles.contentEmailSenha} onSubmit={CadastrarUser}>
          <TextField
            className={Styles.input}
            label="Nome"
            variant="outlined"
            color="tertiary"
            required
          />

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
          <Button type="submit" variant="contained" className={Styles.btnForm}>
            Salvar
          </Button>
          <Divider className={Styles.divider}>Já tem cadastro</Divider>
          <Button
            type="button"
            variant="contained"
            className={Styles.btnForm}
            onClick={FazerLogin}
          >
            Fazer Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CadastroUser;
