import React from "react";
import Products from "./components/Products/Products";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <Products />
    </ProductProvider>
  );
};

export default App;
