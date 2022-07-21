import { ACTION } from "../../constants/ActionType";


const initValue = {
    products: [],
}

const productReducer = ( state = initValue , action) => {
    switch (action.type) {
        case ACTION.TYPE.POST: 
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case ACTION.TYPE.PUT:
            return {
                ...state,
                products: [...action.payload]
            }
        default:
            return state;
    }
}

export default productReducer;