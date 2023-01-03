import React, {useEffect, useState} from "react";
import {Product} from "../models/Product";
import {ProductList} from "./productList";
import {ProductService} from "../services/productService";

export function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getAll().then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <>
            <ProductList products={products}/>
        </>

    );
}