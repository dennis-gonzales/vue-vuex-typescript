import { Module } from "vuex";
import { SessionState } from './state';
import { getters } from './getters';
import RootState from "@/store/interfaces/rootState";

const state: SessionState = {
    userName: "Dennis Gonzales",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg"
}

const session: Module<SessionState, RootState> = {
    state,
    getters
}

export default session;