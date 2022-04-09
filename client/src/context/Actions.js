export const openModal = () => ({
    type: "OPEN_MODAL",
});

export const closeModal = () => ({
    type: "CLOSE_MODAL",
});

export const gotoSignup = () => ({
    type: "OPEN_SIGNUP"
})

export const gotoLogin = () => ({
    type: "OPEN_LOGIN"
})

export const addToCart = (product)=> ({
    type: "ADD_TO_CART",
    item: product,
})

export const removeFromCart = (id) => ({
    type: "REMOVE_FROM_CART",
    id: id,
})

export const clearCart = () => ({
    type: "CLEAR_CART",
})

export const increaseQuantity = (product, id) => ({
    type: "INCREASE_QUANTITY",
    id: id,
    product:product
})

export const dereaseQuantity = (product, id) => ({
    type: "DECREASE_QUANTITY",
    id: id,
    product:product
})


export const countIncrease = () => ({
    type: "COUNT_INCREASE",
})

export const countdecrease = () => ({
    type: "COUNT_DECREASE",
})

export const login = (token) => ({
    type: "LOGIN",
    token:token,
})


export const logout = () => ({
    type: "LOGOUT",
}) 

