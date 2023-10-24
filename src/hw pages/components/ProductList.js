import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductsSuccess, addToCart } from '../action/productAction';

const ProductList = ({ products, fetchProducts, addToCart }) => {
    useEffect(() => {
        fetch('../data/products.json')
            .then((response) => response.json())
            .then((data) => {
                fetchProducts(data);
            });
    }, [fetchProducts]);

    return (
        <div>
            {products.map((product) => (
                <div key={product._id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product._id)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products.products,
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (products) => dispatch(fetchProductsSuccess(products)),
    addToCart: (productId) => dispatch(addToCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
