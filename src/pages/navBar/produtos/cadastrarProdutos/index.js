import * as React from "react";
import Styles from "./index.module.css";
import InputSenha from "../../../../components/InputSenha";
import { TextField, Button, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
import InputSelect from "../../../../components/inputSelect";
import ClearIcon from "@mui/icons-material/Clear";

const listEstado = [
  { value: 1, label: "Novo" },
  { value: 2, label: "Usado" },
];

const CadastroProdutos = () => {
  const navigate = useNavigate();

  const fileInputRef = React.useRef(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [deleteButtonVisible, setDeleteButtonVisible] = React.useState(false);

  const [estado, setEstado] = React.useState("");

  const CadastrarProdutos = () => {
    navigate();
  };

  const Voltar = () => {
    navigate("/navBar/home");
  };

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    setDeleteButtonVisible(true);
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setDeleteButtonVisible(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setDeleteButtonVisible(true);
  };

  return (
    <div className={Styles.conteiner}>
      <IconButton className={Styles.btnVoltar} onClick={Voltar}>
        {" "}
        <KeyboardArrowLeftIcon />{" "}
      </IconButton>
      <div className={Styles.contentCadastro}>
        <h1 className={Styles.txtTitulo}>Cadastrar Produto</h1>
        <form className={Styles.form} onSubmit={CadastrarProdutos}>
          <div className={Styles.contentCaixaDeSelecao}>
            <div
              className={Styles.caixaDeSelecao}
              onClick={handleFileSelect}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="fileInput"
                accept=".png, .jpg, .jpeg"
                style={{ display: "none", width: "100%", height: "100%" }}
                ref={fileInputRef}
                onChange={handleFileUpload}
                required
              />
              <span className={Styles.textCaixaDeSelecao}>
                {selectedFile ? (
                  <>
                    Arquivo selecionado: {selectedFile.name}
                    {deleteButtonVisible && (
                      <IconButton type="button" onClick={handleClearFile}>
                        <ClearIcon />
                      </IconButton>
                    )}
                  </>
                ) : (
                  "Clique aqui ou arraste um arquivo para anexá-lo"
                )}
              </span>
            </div>
            <span>Formatos aceitos: Png, Jpg e Jpeg</span>
          </div>
          <TextField
            className={Styles.input}
            label="Nome do Produto"
            variant="outlined"
            color="tertiary"
            required
          />
          <TextField
            className={Styles.input}
            label="Categoria"
            variant="outlined"
            color="tertiary"
            required
          />
          <div className={Styles.inputEstadoPreco}>
            <InputSelect
              nomeInputLabel="Estado"
              labelSelect="Estado"
              menuItens={listEstado}
              value={estado}
              onChange={handleChange}
              className={Styles.inputSelectEstado}
            />
            <TextField
              label="Preço"
              variant="outlined"
              color="tertiary"
              required
            />
          </div>
          <TextField
            className={Styles.input}
            label="Descrição"
            multiline
            color="tertiary"
            required
          />

          <Button type="submit" variant="contained" className={Styles.btnForm}>
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CadastroProdutos;
