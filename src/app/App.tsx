import React, {useState} from 'react';
import {Catalog} from "./components/catalog";
import {Navbar} from "./components/navbar";
import Banner from "./components/banner";
import {Route} from "react-router-dom";
import ProductDetail from "./components/productDetail";
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const paletteType = darkMode ? 'dark' : 'light';
    const theme = createTheme({
        palette: {
            mode: paletteType,
            background: {
                default: paletteType === 'light' ? '#eaeaea' : '#121212',
            }
        }
    });

    function handleThemeChange() {
        setDarkMode(!darkMode);
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Navbar darkMode={darkMode} handleThemeChange={handleThemeChange} />
                <Container>
                    <Route exact path="/" component={Banner}/>
                    <Route exact path="/catalog" component={Catalog} />
                    <Route exact path="/catalog/:id" component={ProductDetail} />
                </Container>
            </ThemeProvider>

        </>
  );
}

export default App;
