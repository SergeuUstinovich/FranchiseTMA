import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllVideoScheme, AllVideoType } from "../../../types/AllVideoType";

const initialState: AllVideoScheme = {};

export const allVideoSlice = createSlice({
  name: "allVideo",
  initialState,
  reducers: {
    addAllVideo: (state, action: PayloadAction<AllVideoType[]>) => {
      state.arrVideo = action.payload;
    },
  },
});

export const { actions: allVideoActions } = allVideoSlice;
export const { reducer: allVideoReducer } = allVideoSlice;
