import { Module } from "vuex";
import { SessionState } from './state';
import RootState from "@/store/interfaces/rootState";

const state: SessionState = {
    userName: "Unnamed",
    age: -1
}

const session: Module<SessionState, RootState> = {
    state
}

export default session;