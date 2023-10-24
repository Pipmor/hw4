export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const addToCart = (productId) => ({
    type: ADD_TO_CART,
    payload: productId,
});
