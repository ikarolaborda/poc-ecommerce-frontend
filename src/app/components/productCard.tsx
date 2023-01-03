import React from "react";
import {Product} from "../models/Product";
import { NumericFormat } from "react-number-format";
import {Link} from "react-router-dom";
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

function ProductCard({ product }: { product: Product }) {
  return (
      <>
          <Card>
              <CardHeader
                  avatar={
                      <Avatar sx={{  bgcolor: 'secondary.main' }}>
                            {product.name.charAt(0).toUpperCase()}
                      </Avatar>
                  }
                  title={product.name}
                  titleTypographyProps={{ sx: { fontWeight: "bold", color: 'primary.main' } }}
              />
              <CardMedia sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }} image={product.pictureUrl} />

              <CardContent>
                  <Typography gutterBottom color="secondary" variant="h5" >
                        R${(product.price / 10).toFixed(2)}
                  </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.productBrand} / {product.productType}
                    </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Add to Cart</Button>
                  <Button size="small" component={Link} to={`/catalog/${product.id}`}>View</Button>
              </CardActions>
          </Card>
      </>
  );
}

export default ProductCard;