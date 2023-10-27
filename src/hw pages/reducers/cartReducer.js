import * as actionTypes from '../action/actionTypes';

const initialState = {
    items: [],
    paid: false,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case actionTypes.PAYMENT_SUCCESS:
            return {
                ...state,
                paid: true,
            };
        default:
            return state;
    }
};

export default cartReducer;

