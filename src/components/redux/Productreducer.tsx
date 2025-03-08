// Define action type
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
const INCREMENT_SUBTOTAL = "INCREMENT_SUBTOTAL";
const DECREMENT_SUBTOTAL = "DECREMENT_SUBTOTAL";
// Define Product Type (Optional)
interface Product {
  image: string;
  name: string;
  price: number;
  save: number;
  reviews: number;
  quantity: number;
  total: number;
  tax: number;
  order: boolean;
  type: string;
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

export const incSubTotal = (id: number) => ({
  type: INCREMENT_SUBTOTAL,
  payload: id,
});

export const decSubTotal = (id: number) => ({
  type: DECREMENT_SUBTOTAL,
  payload: id,
});

export const decrementQuantity = (id: number) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});

// Initial state as an empty array of products
const initialState: Product[] = [];

// Cart Reducer Function
const cartReducer = (state = initialState, action: any): Product[] => {
  switch (action.type) {
    case ADD_TO_CART:
      const data = [...state, action.payload];
      const unique = data.filter(
        (prod, index, self) =>
          index === self.findIndex((p) => p.image === prod.image)
      );

      console.log(unique);
      return unique;
    // return Array.from(new Set([...state, action.payload]));
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
        decData[action.payload].quantity < 2
          ? 1
          : decData[action.payload].quantity - 1;
      return decData;
    case INCREMENT_SUBTOTAL:
      // console.log("action", state[action.payload]);
      let sum =
        state[action.payload]["price"] * state[action.payload]["quantity"];

      // console.log("jbccjk", sum);
      const newData = [...state];
      newData[action.payload].total = sum;
      console.log("newData", newData);
      return newData;

    case DECREMENT_SUBTOTAL:
      let newSum =
        state[action.payload].quantity < 2
          ? state[action.payload].price
          : state[action.payload]["total"] - state[action.payload]["price"];

      // console.log("jbccjk", sum);
      const updatedData = [...state];
      updatedData[action.payload].total = newSum;
      // console.log("newData", newData);
      return updatedData;

    default:
      return state;
  }
};

export default cartReducer;
