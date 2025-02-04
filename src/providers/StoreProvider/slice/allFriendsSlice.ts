import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllFriendsScheme, AllFriendsType } from "../../../types/AllFriends";

const initialState: AllFriendsScheme = {};

export const allFriendsSlices = createSlice({
  name: "allFriends",
  initialState,
  reducers: {
    addAllFriends: (state, action: PayloadAction<AllFriendsType[]>) => {
      state.arrFriends = action.payload;
    },
  },
});

export const { actions: allFriendsActions } = allFriendsSlices;
export const { reducer: allFriendsReducer } = allFriendsSlices;
