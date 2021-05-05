import RootState from "@/store/interfaces/rootState";
import { SessionState } from "@/store/modules/session/state";
import { ActionTree } from "vuex";

let index = 1;

export enum SessionActions {
    UPDATE_PROFILE_PICTURE = "UPDATE_PROFILE_PICTURE"
}

export const actions: ActionTree<SessionState, RootState> = {

    [SessionActions.UPDATE_PROFILE_PICTURE]({ commit }) {
        
        commit(
            SessionActions.UPDATE_PROFILE_PICTURE, 
            `https://randomuser.me/api/portraits/men/${++index}.jpg`
        );
    }

}