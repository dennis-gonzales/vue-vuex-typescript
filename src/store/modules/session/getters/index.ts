import RootState from "@/store/interfaces/rootState";
import { GetterTree } from "vuex";
import { SessionState } from "../state";

export const getters: GetterTree<SessionState, RootState> = {
    getUserName(state: SessionState): string {
        return state.userName;
    },

    getBio(state: SessionState): string {
        return state.bio;
    },

    getProfilePicture(state: SessionState) {
        return state.profilePicture;
    }
}