import {Product} from "../models/Product";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ProductService} from "../services/productService";


export default function ProductDetail() {
    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null >();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        ProductService.get(parseInt(id)).then((response) => {
            setProduct(response.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 d-flex">
                    <div className="col-md-6">
                        <img src={product!.pictureUrl} className="img-fluid" alt="product_picture"/>
                    </div>
                    <div className="col-md-6">
                        <div className="card w-100">
                            <div className="card-header">
                                <h4 className="card-title">{product!.name}</h4>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{product!.description}</p>
                                <p className="card-text">Quantity in Stock: {product!.quantityInStock}</p>
                                <p className="card-text">Price: {product!.price}</p>
                            </div>
                            <div className="card-footer">
                                <Link to="/catalog" className="btn btn-warning">Back to Catalog</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}