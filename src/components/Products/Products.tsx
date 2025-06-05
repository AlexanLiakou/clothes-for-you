import { useState, useEffect } from "react";
import Product from "./Product/Product";
import {ProductInterface} from '../../interfaces'
import './products.scss';

const Products = () => {

const [products, setProducts] = useState<ProductInterface[]>([]);

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
                        <Product key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} id={product.id} ></Product>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Products;