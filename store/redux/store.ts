import { configureStore } from '@reduxjs/toolkit'

import favoritesSlice from './favoritesSlice'

const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
