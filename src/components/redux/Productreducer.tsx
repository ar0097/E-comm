// Define action type
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

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

// Initial state as an empty array of products
const initialState: Product[] = [];
console.log("iniiqgu", initialState);

// Cart Reducer Function
const cartReducer = (state = initialState, action: any): Product[] => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((_, id) => id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
