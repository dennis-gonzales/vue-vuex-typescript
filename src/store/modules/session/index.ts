import { Module } from "vuex";
import { SessionState } from './state';
import RootState from '@/store/interfaces/rootState';
import { getters } from './getters';
import { actions } from '@/store/actions/session';
import { mutations } from '@/store/mutations/session';

const state: SessionState = {
    userName: "Dennis Gonzales",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg"
}

const session: Module<SessionState, RootState> = {
    state,
    getters,
    actions,
    mutations
}

export default session;