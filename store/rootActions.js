/* eslint-disable */
import getters 				  						from "./rootGetters.js";
import state 				    						from "./rootState.js";

import $                            from "jquery";

export default {
  addBuntingWrapper({ commit, dispatch }, pageName){
    dispatch("setBuntingPageContextVars", pageName).then(() => {
      dispatch("addBuntingMasterScript");
    });
  },
  addBuntingMasterScript({ commit }){
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
  initBunting({ commit, dispatch }, pageName){
    if (!state.isBuntingSet){
      dispatch("addBuntingWrapper", pageName);
    }
    else {
      dispatch("removeBuntingScript").then(() => {
        dispatch("addBuntingWrapper", pageName);
      });
    }
  },
  setBuntingPageContextVars({ commit }, pageName){
    if (typeof window.$_Bunting == "undefined") window.$_Bunting = {
        d: {}
    };
    if (pageName === "product"){
      window.$_Bunting.d.vp_upc = state.currentProductBeingViewed.productId;
    }
  },
  removeBuntingScript({ commit }){
    $("script[src*='vohzd.1.bunting.com']").remove();
    $_Bunting = undefined;
    commit("IS_BUNTING_SET", false);
  },
  updateProductKey({ commit, dispatch }, event){
    for (let product of state.productMeta){
      if (event.currentTarget.value === product.productId){
        dispatch("initBunting", "product").then(() => {
          commit("SET_CURRENT_PRODUCT_BEING_VIEWED", product);
        });
      }
    }
  }
};
