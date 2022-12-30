import React from "react";
import {Product} from "../models/Product";

function ProductCard({ product }: { product: Product }) {
  return (
      <div className="card mx-auto mt-3 mb-3">
          <img src={product.pictureUrl} className="card-img-top h-50" alt="product_picture"/>
              <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text mt-1">{product.description}</p>
                  <p className="card-text mt-1">Quantity in Stock:  { product.quantityInStock < 100 ?
                      <span className="text-danger">{product.quantityInStock} (Critical)</span> :
                      <span className="text-success">{product.quantityInStock}</span> }
                  </p>

                  <p className="card-text mt-1 text-danger">Price: {product.price}</p>

                  <div className="row text-center">
                      <div className="d-flex flex-column bottom-0 mb-3 position-absolute">
                          <button className="btn btn-primary">Add to cart</button>
                      </div>
                  </div>

              </div>
      </div>
  );
}

export default ProductCard;