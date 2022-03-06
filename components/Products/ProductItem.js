import React from "react";

import Card from "../UI/Card";
import styles from "../../styles/ProductItem.module.css";
import { useStore } from "../../store/store";
const ProductItem = (props) => {
  console.log("RENDERING");
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className={styles.product}>
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
