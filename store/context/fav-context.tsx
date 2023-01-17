import { createContext, useState } from 'react'

export const FavContext = createContext({
  ids: [] as string[],
  addFav: (id: string): void => {},
  removeFav: (id: string): void => {},
})

function FavContextProvider({ children }: { children?: React.ReactNode }) {
  const [favIds, setFavIds] = useState<string[]>([])

  function addFav(id: string) {
    setFavIds((currentFavIds) => [...currentFavIds, id])
  }
  function removeFav(id: string) {
    setFavIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    )
  }
  const value = {
    ids: favIds,
    addFav,
    removeFav
  }

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>
}

export default FavContextProvider
