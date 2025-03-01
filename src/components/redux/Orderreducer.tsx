const ORDER_DETAILS = "ORDER_DETAILS";
const DELETE_ORDER = "DELETE_ORDER";
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
}

export const addToOrderDetails = (product: Product) => ({
  type: ORDER_DETAILS,
  payload: product,
});

export const deleteOrder = (product: Product) => ({
  type: DELETE_ORDER,
  payload: product,
});

const initialState: Product[] = [];

// console.log("initial", initialState);

const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ORDER_DETAILS:
      const data = [...state, action.payload];
      const unique = data.filter(
        (prod, index, self) =>
          index === self.findIndex((p) => p.image === prod.image)
      );
      return unique;

    case DELETE_ORDER:
      return [];
    default:
      return state;
  }
};

export default orderReducer;
