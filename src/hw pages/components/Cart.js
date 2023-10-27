import React from 'react';
import { connect } from 'react-redux';
import { asyncMakePayment } from '../action/cartAction';

const Cart = ({ items, paid, makePayment }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {paid ? (
                <p>Payment Successful!</p>
            ) : (
                <button onClick={makePayment}>Pay Now</button>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.cart.items,
    paid: state.cart.paid,
});

const mapDispatchToProps = (dispatch) => ({
    makePayment: () => dispatch(asyncMakePayment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
