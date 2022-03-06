import React from "react";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import styles from "../styles/Home.module.css";
import { useStore } from "../store/store";

const Favorites = (props) => {
  let content = <p className="placeholder">Got no favorites yet!</p>;

  const state = useStore()[0];
  console.log(state);
  const favoriteProducts = state.products.filter((p) => p.isFavorite === true);
  if (favoriteProducts.length > 0) {
    content = (
      <ul className={styles.products}>
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
