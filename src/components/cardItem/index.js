import React from "react";
import Styles from "./index.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";

export default function MediaCard({ imgSrc, title, description, price }) {
  return (
    <Card className={Styles.Card}>
      <CardMedia className={Styles.conteinerImgCard}>
        <div className={Styles.contentImgCard}>
          <img src={imgSrc} className={Styles.img} />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={Styles.conteinerPreco}>
        <h2 className={Styles.textPreco}>{price}</h2>
        <IconButton>
          <AddShoppingCartIcon className={Styles.btnCompra} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
