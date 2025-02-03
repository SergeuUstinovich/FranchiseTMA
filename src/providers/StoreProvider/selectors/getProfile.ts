import { StateScheme } from "../config/StateScheme";

export const getProfileStata = (state: StateScheme) => state.profileUser.stata;
export const getProfileUser = (state: StateScheme) => state.profileUser.user;
