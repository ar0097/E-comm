const ORDER_DETAILS = "ORDER_DETAILS";
const DELETE_ORDER = "DELETE_ORDER";
// const INCREMENT_ORDERS_QUANTITY = "INCREMENT_ORDERS_QUANTITY";
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

export const addToOrderDetails = (product: Product[]) => ({
  type: ORDER_DETAILS,
  payload: product,
});

export const deleteOrder = (product: Product) => ({
  type: DELETE_ORDER,
  payload: product,
});

// export const incrementOrders = (id: number) => ({
//   type: INCREMENT_ORDERS_QUANTITY,
//   payload: id,
// });

const initialState: Product[] = [];

const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ORDER_DETAILS:
      // const data = [...state, action.payload];
      // const unique = data.filter(
      //   (prod, index, self) =>
      //     index === self.findIndex((p) => p.image === prod.image)
      // );
      return [...action.payload];

    case DELETE_ORDER:
      return [];

    // case INCREMENT_ORDERS_QUANTITY:
    //   const increData = [...state];
    //   increData[action.payload].quantity =
    //     increData[action.payload].quantity == increData[action.payload].quantity
    //       ? increData[action.payload].quantity
    //       : increData[action.payload].quantity + 1;
    //   return increData;
    default:
      return state;
  }
};

export default orderReducer;
