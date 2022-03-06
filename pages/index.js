import ProductItem from "../components/Products/ProductItem";
import styles from "../styles/Home.module.css";

import { useStore } from "../store/store";
export default function Home() {
  const state = useStore()[0];
  console.log(state);
  return (
    <ul className={styles.products}>
      {state.products &&
        state.products.map((prod) => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
            isFav={prod.isFavorite}
          />
        ))}
    </ul>
  );
}
