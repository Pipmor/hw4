import { FETCH_PRODUCTS_SUCCESS, ADD_TO_CART } from '../action/productAction';

const initialState = {
    products: [],
    cart: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
            };
        case ADD_TO_CART:
            const productId = action.payload;
            return {
                ...state,
                cart: [...state.cart, productId],
            };
        default:
            return state;
    }
};

export default productReducer;
