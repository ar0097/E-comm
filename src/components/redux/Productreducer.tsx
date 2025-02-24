// Define action type
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
// Define Product Type (Optional)
interface Product {
  image: string;
  name: string;
  price: number;
  save: number;
  reviews: number;
  quantity: number;
}

// Action creator
export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const incrementQuantity = (id: number) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

export const decrementQuantity = (id: number) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});

// Initial state as an empty array of products
const initialState: Product[] = [];
// console.log("iniiqgu", initialState);

// Cart Reducer Function
const cartReducer = (state = initialState, action: any): Product[] => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((_, id) => id !== action.payload);

    case INCREMENT_QUANTITY:
      const increData = [...state];
      increData[action.payload].quantity =
        increData[action.payload].quantity + 1;
      return increData;

    case DECREMENT_QUANTITY:
      const decData = [...state];
      decData[action.payload].quantity =
        decData[action.payload].quantity < 1
          ? 0
          : decData[action.payload].quantity - 1;
      return decData;

    default:
      return state;
  }
};

export default cartReducer;
