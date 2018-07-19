/* eslint-disable */
import getters 				  						from "./rootGetters.js";
import state 				    						from "./rootState.js";

import $                            from "jquery";

export default {
  addBuntingScript({ commit }){
    if (typeof window.$_Bunting == "undefined") window.$_Bunting = {
        d: {}
    };
    $_Bunting.src = ("https:" == document.location.protocol ? "https://" : "http://") + "vohzd.1.bunting.com/call.js?wmID=5";
    $_Bunting.s = document.createElement("script");
    $_Bunting.s.type = "text/javascript";
    $_Bunting.s.async = false;
    $_Bunting.s.defer = false;
    $_Bunting.s.charset = "UTF-8";
    $_Bunting.s.src = $_Bunting.src;
    document.getElementsByTagName("head")[0].appendChild($_Bunting.s);
    commit("IS_BUNTING_SET", true);
  },
  addToBasket({ commit, dispatch }, key){
    dispatch("incrementQuantity");
    commit("ADD_TO_BASKET", key);
  },
  incrementQuantity({ commit }){
    commit("INCREMENT_QUANTITY")
  },
  initBunting({ dispatch }, pageName){
    console.log(pageName)
    if (!state.isBuntingSet){
      dispatch("setBuntingPageContextVars").then(() => {
        console.log("promise resolved... moving onto next stage")
        dispatch("addBuntingScript");
      });
    }
    else {
      dispatch("removeBuntingScript");
    }
  },
  setBuntingPageContextVars({ commit }, pageName){
    if (pageName === "product"){
      console.log("hit a product page, please define some vars");

    }
  },
  removeBuntingScript({ commit }){
    $("script[src*='vohzd.1.bunting.com']").remove()
    $_Bunting = undefined;
    commit("IS_BUNTING_SET", false);
  },
  updateProductKey({ commit }, event){
    for (let product of state.productMeta){
      if (event.currentTarget.value === product.productId){
        commit("SET_CURRENT_PRODUCT_BEING_VIEWED", product);
      }
    }  
  }
};
