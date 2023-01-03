import {Product} from "../models/Product";
import ProductCard from "./productCard";
import React from "react";
import {Grid} from "@mui/material";

interface Props {
    products: Product[];
}

export function ProductList({products}: Props) {
    return (
        <Grid container spacing={4}>
                {products.map((product) =>
                    (
                        <Grid item xs={12} sm={12} md={2} lg={3} key={product.id}>
                            <ProductCard key={product.id} product={product}/>
                        </Grid>
                    )
                )}
        </Grid>
    );
}