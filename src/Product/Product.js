import React from 'react';
import '../style/Product.css';

const Product = ({ product, addToCart }) => {
    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product._id)}>Купить</button>
        </div>
    );
};

export default Product;
