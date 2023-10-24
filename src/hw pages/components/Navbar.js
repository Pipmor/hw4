import React from 'react';
import { connect } from 'react-redux';

const Navbar = ({ cartItemsCount }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Cart Items: {cartItemsCount}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItemsCount: state.products.cart.length,
});

export default connect(mapStateToProps)(Navbar);
