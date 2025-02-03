import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllFranchiseType } from "../../../types/AllFranchiseType";
import { AllFavoritesScheme } from "../../../types/AllFavorites";

const initialState: AllFavoritesScheme = {};

export const allFavoritesSlices = createSlice({
  name: "allFavorites",
  initialState,
  reducers: {
    addAllFavorites: (state, action: PayloadAction<AllFranchiseType[]>) => {
      state.favoritesArr = action.payload;
    },
  },
});

export const { actions: allFavoritesActions } = allFavoritesSlices;
export const { reducer: allFavoritesReducer } = allFavoritesSlices;
