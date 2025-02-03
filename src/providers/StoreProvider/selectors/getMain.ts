import { StateScheme } from "../config/StateScheme";

export const getMainBonuses = (state: StateScheme) => state.mainProfile.bonuses;
export const getMainUser = (state: StateScheme) => state.mainProfile.user;
