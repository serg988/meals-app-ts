import { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import MealList from '../components/MealList/MealList'

import { FavContext } from '../store/context/fav-context'

import { useAppSelector, useAppDispatch } from '../store/redux/hooks'

const FavoritesScreen = () => {
  // const { ids } = useContext(FavContext)
  const ids = useAppSelector(state=>state.favorites.ids)

  if (ids.length > 0) {
    return <MealList idArray={ids} />
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No favorites found.</Text>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#fff'
  }
})
