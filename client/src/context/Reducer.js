const Reducer = (state, action) => {
    let index;
    switch (action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                openModal: true
            };
        case "CLOSE_MODAL":
            return {
                ...state,
                openModal: false
            };
        case "OPEN_SIGNUP":
            return{
                ...state,
                isSignup: true
            };
        case "OPEN_LOGIN":
            return{
                ...state,
                isSignup: false
            };
        case "ADD_TO_CART":
            console.log("adding to cart")
            state = {
                ...state,
                cart: [...state.cart,action.item]
            }
            console.log(state)
            return state
        
        case "REMOVE_FROM_CART":
            let newCart = [...state.cart]
            console.log("removing item from cart")
            index = state.cart.findIndex((Item) => Item._id === action.id)
            if(index > -1){
                //item exists in basket
                newCart.splice(index,1);
                console.log("removed")
            }                       
            return {...state, cart: newCart}


        
        case "INCREASE_QUANTITY":
            console.log(" adding item to cart")
            index = state.cart.findIndex((Item) => Item._id === action.id)
            if(index > -1){
                //item exists in basket
                state.cart.splice(index,1,action.product);
            }                       
            return {...state, cart: [...state.cart]};

        case "DECREASE_QUANTITY":
            console.log(" adding item to cart")
            index = state.cart.findIndex((Item) => Item._id === action.id)
            if(index > -1){
                //item exists in basket
                state.cart.splice(index,1,action.product);
            }                       
            return {...state, cart: [...state.cart]};


        case "COUNT_INCREASE": 
            const newCount = state.count + 1
            return {...state, count: newCount}

        case "COUNT_DECREASE":
            return {...state, count: state.count-1}

        case "LOGIN":
            console.log("Logged in")
            state = {...state, user: action.token}
            console.log("new state value=>", state)
            return state
        
        case "LOGOUT":
            console.log("Logged out")
            state = {...state, user: null}
            console.log("new state value=>", state)
            return state

        case "CLEAR_CART":
            return {...state, cart: []}
            
        default:
            return state;
    }
}

export default Reducer;