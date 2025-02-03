import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllFranchiseScheme, AllFranchiseType } from "../../../types/AllFranchiseType";

const initialState: AllFranchiseScheme = {};

export const allFranchiseSlice = createSlice({
  name: "allFranchise",
  initialState,
  reducers: {
    addAllFranchise: (state, action: PayloadAction<AllFranchiseType[]>) => {
      state.franchiseArr = action.payload;
    },
  },
});

export const { actions: allFranchiseActions } = allFranchiseSlice;
export const { reducer: allFranchiseReducer } = allFranchiseSlice;
