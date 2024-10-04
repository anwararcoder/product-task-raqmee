import React, { Fragment, useContext, useState } from "react";
import Search from "../Search/Search";
import SortBy from "../Sort/SortBy";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";
import ProductContext from "../../context/ProductContext";
import CategoriesList from "../Categories/CategoriesList";
import Pagination from "../Pagination/Pagination";

const Products = () => {
  // :: => Get Products From ProductContext
  const { products } = useContext(ProductContext);

  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("A-Z");
  const [categoryOption, setCategoryOption] = useState("All");
  const categoriesListOptions = ["All", "Clothing", "Electronics"];

  // :: => Filtered Products By Product Name Or Product Category
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  // :: => Filtered Products By Category
  const filteredByCategory =
    categoryOption === "All"
      ? filteredProducts
      : filteredProducts.filter(
          (product) => product.category === categoryOption
        );

  // :: => Sorted Products By "A-Z" Or "Z-A" Or "price-low-high" Or "high-low-price"
  const sortedProducts = filteredByCategory.sort((a, b) => {
    if (sortOption === "A-Z") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "Z-A") {
      return b.name.localeCompare(a.name);
    } else if (sortOption === "price-low-high") {
      return a.price - b.price;
    } else if (sortOption === "price-high-low)") {
      return b.price - a.price;
    }
    return 0;
  });

  // :: => Pagination
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <section className="relative py-[100px]">
      <div className="container px-[15px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-[30px] mb-[45px]">
          <Search search={search} setSearch={setSearch} />
          <div className="inline-flex flex-wrap items-center gap-[15px] max-w-[670px] w-full">
            <SortBy sortOption={sortOption} setSortOption={setSortOption} />
            <div className="max-w-[200px] w-full">
              <CategoriesList
                categoryOption={categoryOption}
                setCategoryOption={setCategoryOption}
                categoriesListOptions={categoriesListOptions}
              />
            </div>
            <AddProduct />
          </div>
        </div>
        <div className="mb-[50px]">
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px]">
              {currentProducts.map((product, index) => (
                <Fragment key={index}>
                  <ProductItem product={product} />
                </Fragment>
              ))}
            </div>
          ) : (
            <p className="font-[500] text-[22px] text-center py-[100px] capitalize">
              No products available
            </p>
          )}
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Products;
