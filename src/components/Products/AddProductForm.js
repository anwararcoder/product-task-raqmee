import React, { useContext, useState } from "react";
import CategoriesList from "../Categories/CategoriesList";
import ProductContext from "../../context/ProductContext";

const AddProductForm = ({ setOpenAddProduct }) => {
  const { products, addProduct } = useContext(ProductContext);

  const [categoryOption, setCategoryOption] = useState("Clothing");
  const categoriesListOptions = ["Clothing", "Electronics"]


  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!product.name) newErrors.name = "Name is required";
    if (!product.price || isNaN(product.price) || product.price <= 0)
      newErrors.price = "Price must be a valid number and greater than 0";
    if (!product.category) newErrors.category = "Category is required";
    if (!product.description) newErrors.description = "Description is required";
    if (!product.image) newErrors.image = "Image is required";
    return newErrors;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, image: reader.result });
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addProduct(product);

    setProduct({
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
    setImageFile(null);
    setErrors({});
    setOpenAddProduct(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <span className="block text-sm font-light mb-1">Upload photos</span>
        <div className="relative border-[1px] border-[#E5E5E5] hover:border-[#D9F99D] flex items-center justify-center h-[180px] rounded-[4px] overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt="Uploaded"
              className="object-cover h-full w-full"
            />
          ) : (
            <span className="group border-[1px] border-[#D9F99D] text-[#171717] hover:text-white h-[44px] inline-flex items-center gap-[10px] px-[25px] rounded-[4px]">
              Upload photo
            </span>
          )}
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 cursor-pointer opacity-0 z-10"
            onChange={handleImageUpload}
          />
        </div>
        {errors.image && (
          <div className="text-red-500 mt-2 text-sm">{errors.image}</div>
        )}
      </div>

      <div>
        <span className="block text-[14px] leading-[22px] font-[300] mb-[5px]">
          Title
        </span>
        <div className="relative">
          <input
            type="text"
            className="relative border-[1px] border-[#E5E5E5] hover:border-[#D9F99D] leading-[44px] h-[44px] px-[13px] w-full"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        {errors.name && (
          <div className="text-red-500 mt-[5px]">{errors.name}</div>
        )}
      </div>
      <div>
        <span className="block text-[14px] leading-[22px] font-[300] mb-[5px]">
          Describe your item
        </span>
        <div className="relative">
          <textarea
            className="relative border-[1px] border-[#E5E5E5] hover:border-[#D9F99D] leading-[44px] h-[44px] px-[13px] w-full min-h-[150px]"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        {errors.description && (
          <div className="text-red-500 mt-[5px]">{errors.description}</div>
        )}
      </div>
      <div>
        <span className="block text-[14px] leading-[22px] font-[300] mb-[5px]">
          Category
        </span>
        <div className="relative">
          <CategoriesList
            categoryOption={categoryOption}
            setCategoryOption={(cat) => {
              setCategoryOption(cat);
              setProduct({ ...product, category: cat });
            }}
            categoriesListOptions={categoriesListOptions}
          />
        </div>
        {errors.category && (
          <div className="text-red-500 mt-[5px]">{errors.category}</div>
        )}
      </div>
      <div>
        <span className="block text-[14px] leading-[22px] font-[300] mb-[5px]">
          Item price
        </span>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="15"
            viewBox="0 0 10 15"
            fill="none"
            className=" absolute top-[50%] translate-y-[-50%] left-[13px] z-10"
          >
            <path
              d="M9.125 3.87463C9.125 2.35585 7.89378 1.12463 6.375 1.12463C4.85622 1.12463 3.625 2.35585 3.625 3.87463V10.7496C3.625 12.2684 2.39378 13.4996 0.875 13.4996H9.125M0.875 7.99963H6.375"
              stroke="#171717"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            className="relative border-[1px] border-[#E5E5E5] hover:border-[#D9F99D] leading-[44px] h-[44px] px-[30px] w-full"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        {errors.price && (
          <div className="text-red-500 mt-[5px]">{errors.price}</div>
        )}
      </div>

      <button
        type="submit"
        className="w-full group bg-[#D9F99D] hover:bg-[#171717] text-[#171717] hover:text-white h-[44px] inline-flex justify-center items-center gap-[10px] px-[25px] rounded-[4px]"
      >
        Upload item
      </button>
    </form>
  );
};

export default AddProductForm;
