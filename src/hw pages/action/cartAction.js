import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchProductsSuccess = (products) => ({
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProducts = (limit, skip) => {
    return (dispatch) => {
        axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then((response) => {
                dispatch(fetchProductsSuccess(response.data));
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };
};

export const addToCart = (productId) => ({
    type: actionTypes.ADD_TO_CART,
    payload: productId,
});
