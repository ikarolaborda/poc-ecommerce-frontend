import {Box, Container, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

export default function Banner() {
    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Proof of Concept - Ecommerce React
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'Copyright © '}
                        <Link color="inherit" to="https://github.com/ikarolaborda">
                            Ikaro C. Laborda
                        </Link>{' '}
                        {new Date().getFullYear()}.
                    </Typography>
                </Box>
            </Container>
        </>
    );
}