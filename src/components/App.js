import React, { useState } from 'react';
import products from '../data/Products.json';
import Navbar from '../components/Navbar';
import Product from '../Product/Product';
import '../style/App.css';

const App = () => {
    const [productList] = useState(products);
    const [cart, setCart] = useState([]);

    const addToCart = (productId) => {
        const selectedProduct = productList.find(product => product._id === productId);
        setCart([...cart, selectedProduct]);
    };

    return (
        <div className="App">
            <Navbar cartLength={cart.length} />
            {productList.map(product => (
                <Product key={product._id} product={product} addToCart={addToCart} />
            ))}
            <h2>Корзина ({cart.length} товаров)</h2>
            <ul>
                {cart.map(item => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
