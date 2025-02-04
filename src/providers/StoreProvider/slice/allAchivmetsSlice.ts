import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllAchievenetsScheme, AllAchievenetsType } from "../../../types/AllAchievenetsType";

const initialState: AllAchievenetsScheme = {};

export const allAchivmetsSlice = createSlice({
  name: "allAchivmets",
  initialState,
  reducers: {
    addAllAchivmets: (state, action: PayloadAction<AllAchievenetsType[]>) => {
      state.achieves = action.payload;
    },
  },
});

export const { actions: allAchivmetsActions } = allAchivmetsSlice;
export const { reducer: allAchivmetsReducer } = allAchivmetsSlice;
