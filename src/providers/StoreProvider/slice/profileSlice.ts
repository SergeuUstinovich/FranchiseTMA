import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ProfileScheme,
  ProfileTypeProps,
  ProfileTypeStataProps,
} from "../../../types/ProfileType";

const initialState: ProfileScheme = {};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addInfoProfile: (state, action: PayloadAction<ProfileTypeProps>) => {
      state.user = action.payload;
    },
    addStata: (state, action: PayloadAction<ProfileTypeStataProps>) => {
      state.stata = action.payload;
    },
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
