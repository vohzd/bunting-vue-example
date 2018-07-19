/* eslint-disable */
import state from "./rootState.js";

export default {
  ADD_TO_BASKET(state, key){
    let index = state.productMeta[key].productId;

    // initialise
    if (state.basketItems.length === 0){
      console.log("seeded array")
      state.basketItems.push({
        id: index,
        quantity: 1
      });
    } // append
    else if (state.basketItems.length > 0){
      console.log("more than 0");
      let doesExist = false;
      let tempIndex = null;
      for (let idx of state.basketItems){
        if (idx.id == index){
          doesExist = true;
          tempIndex = key
          console.log(tempIndex)
        }
      }
      if (doesExist){/*
        console.log("does exist")
        console.log(tempIndex)
        console.log(state.basketItems)
        state.basketItems.forEach((v, i) => {
          if (v.id === temp)
        });
        state.basketItems[tempIndex].quantity++;*/
      }
      else {
        state.basketItems.push({
          id: index,
          quantity: 1
        });
      }

    }

  },
  INCREMENT_QUANTITY(state){
    state.basketQuantity++
  },
  IS_BUNTING_SET(state, bool){
    state.isBuntingSet = bool;
  },
  SET_CURRENT_PRODUCT_BEING_VIEWED(state, productMeta){
    state.currentProductBeingViewed = productMeta;
  }
};
