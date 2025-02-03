import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MainTypeBonusesProps, MainTypeProps, MainTypeScheme } from '../../../types/MainType'

const initialState: MainTypeScheme = {}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    initStartUser: (state, action: PayloadAction<MainTypeProps>) => {
      state.user = action.payload
    },
    initStartBonus: (state, action: PayloadAction<MainTypeBonusesProps[]>) => {
      state.bonuses = action.payload
    },
  },
})

export const { actions: mainActions } = mainSlice
export const { reducer: mainReducer } = mainSlice
