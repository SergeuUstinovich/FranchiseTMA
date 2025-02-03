import { AllFavoritesScheme } from "../../../types/AllFavorites";
import { AllFranchiseScheme } from "../../../types/AllFranchiseType";
import { MainTypeScheme } from "../../../types/MainType";
import { ProfileScheme } from "../../../types/ProfileType";

export interface StateScheme {
  mainProfile: MainTypeScheme;
  profileUser: ProfileScheme;
  allFranchise: AllFranchiseScheme;
  allFavorites: AllFavoritesScheme;
}
