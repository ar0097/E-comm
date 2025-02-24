// Define action type
const ADD_TO_CART = "ADD_TO_CART";

// Define Product Type (Optional)
interface Product {
  image: string;
  name: string;
  price: number;
  save: number;
  reviews: number;
}

// Action creator
export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Initial state as an empty array of products
const initialState: Product[] = [];
console.log(initialState)



// Cart Reducer Function
const cartReducer = (state = initialState, action: any): Product[] => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartReducer;
