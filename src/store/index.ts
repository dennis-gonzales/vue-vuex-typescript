import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import RootState from './interfaces/rootState';
import session from './modules/session';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    modules: {
        session
    }
};


export default new Vuex.Store<RootState>(store);