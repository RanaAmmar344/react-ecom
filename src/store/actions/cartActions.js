export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';


export const addToCart =(payload)=>{

    return {
        type: ADD_TO_CART,
       payload
    }
}

export const removeToCart =(product)=>{
    return {
        type: REMOVE_FROM_CART,
        payload : product
    }

};
export const AddCartItems =(product)=>{
    return {
        type: UPDATE_CART_ITEM_QUANTITY,
        payload : product
    }

};


