import { StateScheme } from "../config/StateScheme";

export const getAllFavoritesSelector = (state: StateScheme) => state.allFavorites.favoritesArr;
