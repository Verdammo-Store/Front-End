import React, { useState } from "react";
import Styles from "./index.module.css";
import imgHome from "../../../assets/img/imgHome.png";
import Violao from "../../../assets/img/violao.png";
import { useNavigate } from "react-router-dom";
import { Link, IconButton } from "@mui/material";
import Card from "../../../components/cardItem";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Footer from "../../../components/footer";
import ModalProduto from "../../../components/dialogProduto";

const Home = () => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [open, setOpen] = React.useState(false);

  const itemsPerPage = 3;

  const VerTodosProdutos = () => {
    navigate("/produtos");
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const produtos = [
    {
      id: 1,
      imgSrc: Violao,
      title: "Violão",
      description: "Descrição do Produto 1",
      price: "R$ 1.800,00",
    },
    {
      id: 2,
      imgSrc: Violao,
      title: "Violão",
      description: "Descrição do Produto 2",
      price: "R$ 1.500,00",
    },
    {
      id: 3,
      imgSrc: Violao,
      title: "Violão",
      description: "Descrição do Produto 3",
      price: "R$ 1.500,00",
    },
    {
      id: 4,
      imgSrc: Violao,
      title: "Violão",
      description: "Descrição do Produto 4",
      price: "R$ 1.500,00",
    },
  ];

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < produtos.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div>
      <div className={Styles.conteinerHome}>
        <img src={imgHome} className={Styles.imgHome} />
        <div className={Styles.contentSobreNos}>
          <h1 className={Styles.tituloSobreNos}>Sobre Nós</h1>
          <div className={Styles.textSobreNos}>
            Bem-vindo à Verdammo Store, sua loja de referência em Campo Grande,
            MS, para tudo relacionado à música. Desde instrumentos clássicos até
            os mais recentes acessórios, estamos aqui para atender às suas
            necessidades musicais com qualidade e paixão. <br /> Além de
            oferecer produtos de alta qualidade, também nos orgulhamos de nosso
            atendimento personalizado. Nossa equipe está aqui para ajudá-lo a
            encontrar o instrumento perfeito, fornecer orientação sobre
            acessórios essenciais e garantir que você tenha uma experiência de
            compra memorável. <br /> Seja você um músico experiente ou apenas
            esteja começando sua jornada musical, a Verdammo Store é o seu
            destino para encontrar tudo o que precisa. Visite-nos hoje e
            descubra o mundo emocionante da música conosco!
          </div>
        </div>
        <div className={Styles.contentProdutos}>
          <div className={Styles.contentTextrodutos}>
            <h1 className={Styles.TituloProdutos}>Principais Produtos</h1>
            <div className={Styles.linkCadastro}>
              <Link
                onClick={VerTodosProdutos}
                style={{ color: "var(--secondary)", fontSize: "1.2rem" }}
              >
                Ver tudo
              </Link>
            </div>
          </div>
          <div className={Styles.contentlistaProdutos}>
            <IconButton onClick={handlePrevious}>
              <KeyboardArrowLeftIcon className={Styles.seta} />
            </IconButton>
            {produtos
              .slice(startIndex, startIndex + itemsPerPage)
              .map((produto) => (
                <Card
                  key={produto.id}
                  imgSrc={produto.imgSrc}
                  title={produto.title}
                  description={produto.description}
                  price={produto.price}
                  onCLick={handleOpenModal}
                />
              ))}
            <IconButton onClick={handleNext}>
              <KeyboardArrowRightIcon className={Styles.seta} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={Styles.footer}>
        <Footer />
      </div>
      <ModalProduto
        open={open}
        onClose={handleCloseModal}
        imgSrc={Violao}
        nomeProduto={"Violão"}
        categoria={"cordas"}
        estado={"novo"}
        preco={"R$ 1.800,00"}
        descricao={"teste"}
      />
    </div>
  );
};

export default Home;
