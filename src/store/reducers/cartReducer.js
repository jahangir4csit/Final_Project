import { 
    ADD_TO_CART,

} from '../../constants/actionTypes.js';

const initial = {
    cartItems: [],
    total: 0,
};

export const CartReducer = (state=initial, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const item = action.payload;
            const isItemExist = state.cartItems.find(i => i.product === item.product);
            if(isItemExist){
                return{
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === isItemExist.product ? item : i)
                }
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                     total: state.total + 1,
                };
            }
        default: 
            return state;
    }
}
