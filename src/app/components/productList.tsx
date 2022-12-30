import {Product} from "../models/Product";
import ProductCard from "./productCard";
import React from "react";

interface Props {
    products: Product[];
}

export function ProductList({products}: Props) {
    return (
        <>
            {products.map((product) =>
                (
                    <div key={product.id} className="col-md-3 mb-3 d-inline-flex align-items-stretch">
                        <ProductCard product={product}/>
                    </div>
                )
            )}
        </>
    );
}