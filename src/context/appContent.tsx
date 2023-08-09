import {
  IAppContextProviderProps,
  IContext,
  IProduct,
  IState,
  ProductKey,
} from "@/interfaces/index";
import { useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext<IContext>(null as any);

const initialState: IState = {
  cart: [],
  wishlist: [],
  checkout: [],
};

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [state, setState] = useLocalStorage({
    key: "shopy",
    defaultValue: initialState,
  });

  const addToCart = (key: ProductKey, product: IProduct, count?: number) => {
    setState((prev) => ({
      ...prev,
      [key]: [...prev[key], { ...product, count: count || 1 }],
    }));
  };

  const removeFromCart = (key: ProductKey, productId: string) => {
    setState((prev) => ({
      ...prev,
      [key]: prev[key].filter((product) => product.id !== productId),
    }));
  };

  const increase = (key: ProductKey, productId: string) => {
    const items = [...state[key]];
    const index = items.findIndex((item) => item.id === productId);
    items[index].count += 1;
    setState((prevState) => ({ ...prevState, [key]: items }));
  };
  const decrease = (key: ProductKey, productId: string) => {
    const items = [...state[key]];
    const index = items.findIndex((item) => item.id === productId);
    if (items[index].count > 1) {
      items[index].count -= 1;
    }
    setState((prevState) => ({ ...prevState, [key]: items }));
  };
  const reset = (key: ProductKey) => {
    setState((prevState) => ({
      ...prevState,
      [key]: [],
    }));
  };

  const checkBasket = (key: ProductKey, productId: string): boolean => {
    return state[key].some((p) => p.id === productId);
  };
  return (
    <AppContext.Provider
      value={{
        state,
        addToCart,
        checkBasket,
        removeFromCart,
        reset,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
