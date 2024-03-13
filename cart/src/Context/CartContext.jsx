import { useReducer, createContext } from "react";

const CartContext = createContext()

const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems:[...state.cartItems, action.payload]
            }
            case 'REMOVE_TO_CART':
                return {
                    ...state,
                    cartItems:state.cartItems.filter((item) => item.id !== action.payload.id)
                }
                case 'CLEAR_CART':
                    return {
                        ...state,
                        cartItems:[]
                    }
                    default:
                        return state
    }
}

const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer,{ cartItems:[] })

    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }