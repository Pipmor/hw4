import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../action/productAction'; // Импортируем экшены

const ProductList = ({ products, fetchProducts, addToCart }) => {
    useEffect(() => {
        fetchProducts(10, 10);
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

const mapDispatchToProps = {
    fetchProducts,
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);