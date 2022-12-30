import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Catalog} from "./components/catalog";
import {Product} from "./models/Product";
import {Navbar} from "./components/navbar";
import Banner from "./components/banner";

function App() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
       fetch("http://localhost:5000/api/products")
           .then(
               response => response.json()
           )
           .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className="w-100">
                <Navbar/>
            </div>
            <div className="container">
                <Banner/>
                <div className="row">
                    <Catalog products={products}/>
                </div>
            </div>
        </div>
  );
}

export default App;
