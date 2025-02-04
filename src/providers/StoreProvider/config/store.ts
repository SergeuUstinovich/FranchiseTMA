import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateScheme } from "./StateScheme";
import { mainReducer } from "../slice/mainSlice";
import { profileReducer } from "../slice/profileSlice";
import { allFranchiseReducer } from "../slice/allFranchiseSlice";
import { allFavoritesReducer } from "../slice/allFavorites";
import { allFriendsReducer } from "../slice/allFriendsSlice";
import { allAchivmetsReducer } from "../slice/allAchivmetsSlice";
import { allVideoReducer } from "../slice/allVideoSlice";

export function createReduxStore(initialState?: StateScheme) {
  const rootReducer: ReducersMapObject<StateScheme> = {
    mainProfile: mainReducer,
    profileUser: profileReducer,
    allFranchise: allFranchiseReducer,
    allFavorites: allFavoritesReducer,
    allFriends: allFriendsReducer,
    allAchievenets: allAchivmetsReducer,
    allVideo: allVideoReducer,
  };

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
