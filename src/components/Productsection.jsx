import React, { useEffect } from "react";
import Productcard from "./Productcard";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../features/products/productslice";


const Productsection = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, isSuccess } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchproducts());
  }, []);

  if (isError) {
    return (
      <div>
        <h2 className="fs-3 fw-bold">
          Page not found. Something went wrong...
        </h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if(isSuccess){
    return (
      <div className="container-fluid mt-4">
        <h2 className="fs-3 fw-bold">Top Product</h2>
        <div className="container-fluid d-flex justify-content-between flex-wrap">
        {products.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}
        </div>
      </div>
    );
  }
};

export default Productsection;
