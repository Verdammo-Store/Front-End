import React, { useEffect, useState } from "react";
import Styles from "./index.module.css";
import Logo from "../../assets/img/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate, Outlet } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

const NavBar = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("home");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Logout = async (event) => {
    navigate("/*");
  };

  useEffect(() => {
    if (window.location.pathname !== "/navBar/" + currentPage) {
      navigate("/navBar/" + currentPage);
    }
  }, [currentPage]);

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className={Styles.conteiner}>
      <div className={Styles.conteinerNavBar}>
        <img
          src={Logo}
          className={Styles.imgLogo}
          onClick={() => handlePageChange("home")}
        />
        <div className={Styles.contentLinks}>
          <div
            onClick={() => handlePageChange("home")}
            className={`${Styles.item} ${
              currentPage === "home" ? Styles.selected : ""
            }`}
          >
            HOME
          </div>
          <div
            onClick={() => handlePageChange("produtos")}
            className={`${Styles.item} ${
              currentPage === "produtos" ? Styles.selected : ""
            }`}
          >
            PRODUTOS
          </div>
          <AddShoppingCartIcon className={Styles.item} />
          <AccountCircleIcon className={Styles.item} onClick={handleClick} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              style: {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "0 0 0 8px",
              },
            }}
          >
            <label className={Styles.textNameUser}>Manuel</label>
            <MenuItem onClick={handleClose}>Cadastrar</MenuItem>
            <MenuItem onClick={Logout}>Sair</MenuItem>
          </Menu>
        </div>
      </div>
      <div className={Styles.conteinerPagina}>
        <Outlet />
      </div>
      
    </div>
  );
};

export default NavBar;
