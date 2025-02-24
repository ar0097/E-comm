import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./Productreducer";

interface Product {
  image: string;
  name: string;
  price: number;
  save: number;
  reviews: number;
}

const rootReducer = combineReducers({
  cart: cartReducer,
});

function saveToLocalStorage(state: any) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
