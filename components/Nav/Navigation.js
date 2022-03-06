import Link from "next/link";
import React from "react";
import styles from "../../styles/Navigation.module.css";

const Navigation = (props) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Products</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
