import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {starshipSlice} from "./slice";


const reducer = combineReducers({
  starships: starshipSlice.reducer
})

const store = configureStore({reducer})
export default store;

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
