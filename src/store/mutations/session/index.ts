import { SessionState } from "@/store/modules/session/state";
import { MutationTree } from "vuex";

export const mutations: MutationTree<SessionState> = {

    UPDATE_PROFILE_PICTURE(state: SessionState, payload: string) {
        state.profilePicture = payload;
    }
}