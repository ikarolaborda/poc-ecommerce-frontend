import React from "react";
import {Product} from "../models/Product";
import {ProductList} from "./productList";

interface Props {
    products: Product[];
}
export function Catalog({products}: Props) {
    return (
        <div className="col-md-12">
            <div className="">
                <h4 className="display-6 text-center"> List of Products fetched from Backend</h4>
                <hr className="my-5"/>
                <div className="row">
                    <ProductList products={products}/>
                </div>
            </div>
        </div>
    );
}