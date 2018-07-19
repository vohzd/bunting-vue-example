/* eslint-disable */

import state from "./rootState.js";

export default {
  currentProductBeingViewed: (state) => state.currentProductBeingViewed,
  basketQuantity: (state) => state.basketQuantity,
  basketItems: (state) => state.basketItems,
  productMeta: (state) => state.productMeta,
}
