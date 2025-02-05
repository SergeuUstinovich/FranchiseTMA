import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllTasksScheme, AllTasksTypeKey } from "../../../types/AllTasksType";

const initialState: AllTasksScheme = {};

export const allTasksSlice = createSlice({
  name: "allTasks",
  initialState,
  reducers: {
    addAllTasks: (state, action: PayloadAction<AllTasksTypeKey[]>) => {
      state.arrTasks = action.payload;
    },
  },
});

export const { actions: allTasksActions } = allTasksSlice;
export const { reducer: allTasksReducer } = allTasksSlice;
