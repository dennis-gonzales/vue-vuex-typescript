import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import RootState from './interfaces/rootState';
import session from './modules/session';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        helloMessage: "Hello from index.ts"
    },
    mutations: {
        sayHelloWorld(state) {
            state.helloMessage = "Hello World"
        }
    },
    modules: {
        session
    }
};


export default new Vuex.Store<RootState>(store);