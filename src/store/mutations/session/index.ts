import { SessionState } from "@/store/modules/session/state";
import { MutationTree } from "vuex";

export enum SessionMutations {
    UPDATE_PROFILE_PICTURE = "UPDATE_PROFILE_PICTURE"
}

export const mutations: MutationTree<SessionState> = {

    [SessionMutations.UPDATE_PROFILE_PICTURE](state: SessionState, payload: string) {
        state.profilePicture = payload;
    }
}