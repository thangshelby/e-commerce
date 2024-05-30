import {productsInCart} from "../types";

export const useProductSelector = (state: {
  cart: {
    products: [productsInCart];
  };
}) => state.cart.products;
