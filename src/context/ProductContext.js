import React, { createContext, useState, useEffect } from "react";
import { getProducts, saveProducts } from "../utils/functions";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = getProducts();
    setProducts(storedProducts);
  }, []);

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };

  const value = {
    products,
    addProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
