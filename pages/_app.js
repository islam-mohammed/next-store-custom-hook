import Layout from "../components/Layout";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import configureProductStore from "../store/product-store";

function MyApp({ Component, pageProps }) {
  const [storeInit, setStoreInit] = useState(false);
  useEffect(() => {
    configureProductStore();
    //initialize any store we need
    setStoreInit(true);
  }, [storeInit]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
