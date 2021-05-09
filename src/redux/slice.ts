import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {getStarshipsList} from '../api/api'
import {InitialStateResultType, InitialStateType, StarshipsResponseType} from '../types/types';

const initialState: InitialStateType = {
  next: null,
  previous: null,
  results: [],
  page: 1,
  loading: false
}

export const getStarships = createAsyncThunk(
  'getStarships',
  async (page: number=1) => {
    return await getStarshipsList(page)
  }
)

export const starshipSlice = createSlice({
  name: 'starship',
  initialState,
  reducers: {
    setNewPage:(state,{payload}:PayloadAction<number>)=>({
      ...state,
      page:payload
    })
  },
  extraReducers: builder => {
    builder.addCase(getStarships.pending, state => ({
      ...state,
      loading: true
    }))
    builder.addCase(getStarships.fulfilled, (state, {payload}: PayloadAction<StarshipsResponseType>) => ({
      ...state,
      loading: false,
      next: payload.next,
      previous: payload.previous,
      results: payload.results.map((i): InitialStateResultType => {
        return {
          name: i.name,
          hyperdrive_rating: i.hyperdrive_rating,
          model: i.model,
          starship_class: i.starship_class,
          passengers: i.passengers,
          manufacturer: i.manufacturer
        }
      })
    }))
  }
})

export const {
  setNewPage
}=starshipSlice.actions
