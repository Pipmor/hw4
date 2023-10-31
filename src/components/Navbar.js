import React from 'react';
import '../style/Navbar.css';

const Navbar = ({ cartLength }) => {
    return (
        <nav>
            <h2>Магазин</h2>
            <p>Корзина ({cartLength} товаров)</p>
        </nav>
    );
};

export default Navbar;
