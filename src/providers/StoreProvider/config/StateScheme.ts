import { AllAchievenetsScheme } from "../../../types/AllAchievenetsType";
import { AllFavoritesScheme } from "../../../types/AllFavorites";
import { AllFranchiseScheme } from "../../../types/AllFranchiseType";
import { AllFriendsScheme } from "../../../types/AllFriends";
import { AllVideoScheme } from "../../../types/AllVideoType";
import { MainTypeScheme } from "../../../types/MainType";
import { ProfileScheme } from "../../../types/ProfileType";

export interface StateScheme {
  mainProfile: MainTypeScheme;
  profileUser: ProfileScheme;
  allFranchise: AllFranchiseScheme;
  allFavorites: AllFavoritesScheme;
  allFriends: AllFriendsScheme;
  allAchievenets: AllAchievenetsScheme;
  allVideo: AllVideoScheme;
}
