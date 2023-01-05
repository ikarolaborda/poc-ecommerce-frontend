import {Product} from "../models/Product";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ProductService} from "../services/productService";
import {
    Button,
    Divider,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@mui/material";


export default function ProductDetail() {
    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);
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

    if(!product) {
        return <h4>Product not found</h4>;
    }

    return (
        <>
            <Grid container spacing={6}>
                <Grid item xs={6} sm={12} md={6} lg={6}>
                    <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }}/>
                </Grid>
                <Grid item xs={6} sm={12} md={6} lg={6}>
                    <Typography variant="h3" gutterBottom>{product.name}</Typography>
                    <Divider sx={{ mb: 2 }}/>
                    <Typography variant="h4" color='secondary' gutterBottom>R$ {(product.price / 10).toFixed(2)}</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        Name
                                    </TableCell>
                                    <TableCell>
                                        {product.name}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Brand
                                    </TableCell>
                                    <TableCell>
                                        {product.productBrand}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Description
                                    </TableCell>
                                    <TableCell>
                                        {product.description}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Type
                                    </TableCell>
                                    <TableCell>
                                        {product.productType}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button component={Link} to={'/catalog'} sx={{ mt: 2, typography: 'h6' }}>Back to catalog</Button>
                </Grid>
            </Grid>
        </>
    );
}