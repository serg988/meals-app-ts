import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
  ids: string[]
}

const initialState: initialState = {
  ids: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id)
    },
    removeFav: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    },
  },
})

export default favoritesSlice.reducer
export const { addFav, removeFav } = favoritesSlice.actions
