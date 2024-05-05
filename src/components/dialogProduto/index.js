import React from "react";
import Box from "@mui/material/Box";
import { TextField, Button, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Styles from "./index.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Height } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  borderRadius: "15px",
  bgcolor: "background.paper",
  p: 4,
};

const ModalProduto = ({
  open,
  onClose,
  imgSrc,
  nomeProduto,
  categoria,
  estado,
  preco,
  descricao,
}) => {
  const handleClose = () => {
    onClose(false);
  };

  const handleCancelarClick = () => {
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={Styles.modalRecuperacaoSenha}
      >
        <Box sx={style} className={Styles.modalBox}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className={Styles.contentImgInfo}>
            <div className={Styles.contentImg}>
              <img src={imgSrc} />
            </div>
            <div className={Styles.contentInfo}>
              <h2 className={Styles.TextTitulo}>Nome do produto:</h2>
              <label className={Styles.textInfo}>{nomeProduto}</label>
              <h2 className={Styles.TextTitulo}>Categoria:</h2>
              <label className={Styles.textInfo}>{categoria}</label>
              <h2 className={Styles.TextTitulo}>Estado</h2>
              <label className={Styles.textInfo}>{estado}</label>
              <h2 className={Styles.TextTitulo}>Preço:</h2>
              <label className={Styles.textInfo}>{preco}</label>
            </div>
          </div>
          <div className={Styles.contentDescrição}>
            <h2 className={Styles.TextTituloDescrição}>Descrição:</h2>
            <label className={Styles.textInfo}>{descricao}</label>
          </div>
          <Button
            type="button"
            variant="contained"
            className={Styles.btnComprar}
          >
            Comprar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalProduto;
