/* eslint-disable */

/*
 * LIBRARIES
 */
import Vue 										from "vue";
import Vuex 									from "vuex";

/*
 * TOP LEVEL VUEX STUFF
 */
import state 									from "./rootState.js";
import myMutations 						from "./rootMutations.js";
import actions 								from "./rootActions.js";
import getters 								from "./rootGetters.js";

/*
 * INDIVIDUAL COMPONENT VUEX STUFF
 */

Vue.use(Vuex);

export default () => {
	return new Vuex.Store({
		actions,
		getters,
		modules: {
		},
		mutations: {
			...myMutations
		},
		state
	});

};
