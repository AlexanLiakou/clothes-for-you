import { useState, useEffect } from "react";
import Product from "./Product/Product";
import './products.scss';

const Products = () => {

const [products, setProducts] = useState([]);

const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(result => setProducts(result))
}

useEffect (() => {
    fetchProducts();
}, [])

    return(
        <div className="products-container">
            <div className="row">
            {
                products && products.map((product) => {
                    return (
                        <Product key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} ></Product>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Products;