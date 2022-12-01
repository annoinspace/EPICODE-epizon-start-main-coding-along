const initialState = {
  cart: {
    content: [] // the books will be put here
  }
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    //multiple cases will happen here, but we'll start with the default
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: [...state.cart.content, action.payload]
        }
      }

    default:
      return state
    // in the case of an unknown action.type, return the current state
    // without modifying anything
  }
}

export default mainReducer
