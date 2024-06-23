import React, { useEffect, useState } from "react";
import Styles from "../instrumentos/index.module.css";
import SearchComponent from "../../../../components/search";
import Footer from "../../../../components/footer";
import ModalProduto from "../../../../components/dialogProduto";
import Violao from "../../../../assets/img/violao.png";
import Card from "../../../../components/cardItem";

const Acessorio = () => {
  const [open, setOpen] = React.useState(false);

  const handleSearch = (searchTerm) => {
    console.log("Buscando:");
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
      title: "Acessorio 1",
      description: "Descrição do Produto 1",
      price: 99.99,
    },
    {
      id: 2,
      imgSrc: Violao,
      title: "Acessorio 2",
      description: "Descrição do Produto 2",
      price: 149.99,
    },
    {
      id: 3,
      imgSrc: Violao,
      title: "Acessorio 3",
      description: "Descrição do Produto 3",
      price: 99.99,
    },
    {
      id: 4,
      imgSrc: Violao,
      title: "Acessorio 4",
      description: "Descrição do Produto 4",
      price: 149.99,
    },
    {
      id: 5,
      imgSrc: Violao,
      title: "Acessorio 5",
      description: "Descrição do Produto 5",
      price: 99.99,
    },
    {
      id: 6,
      imgSrc: Violao,
      title: "Acessorio 6",
      description: "Descrição do Produto 6",
      price: 149.99,
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const currentPageProducts = produtos.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className={Styles.conteiner}>
      <div className={Styles.contentTitulo}>
        <h1 className={Styles.titulo}>Acessórios</h1>
      </div>
      <div className={Styles.contentProdutos}>
        <SearchComponent
          placeholder="Pesquisar"
          onSearch={handleSearch}
          className={Styles.search}
        />
      </div>
      <div className={Styles.gridContainer}>
        {currentPageProducts.map((produto) => (
          <Card
            key={produto.id}
            imgSrc={produto.imgSrc}
            title={produto.title}
            description={produto.description}
            price={produto.price}
            onCLick={handleOpenModal}
            className={Styles.card}
          />
        ))}
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
export default Acessorio;
