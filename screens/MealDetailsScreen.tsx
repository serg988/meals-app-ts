import { useContext, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import {
  MealDetailsScreenNavigationProp,
  MealDetailsScreenRouteProp,
} from '../types'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/mealDetail/Subtitle'
import ListEl from '../components/mealDetail/ListEl'
import IconButton from '../components/IconButton'
import { FavContext } from '../store/context/fav-context'

import { addFav, removeFav } from '../store/redux/favoritesSlice'

import { useAppSelector, useAppDispatch } from '../store/redux/hooks'

type Props = {
  route: MealDetailsScreenRouteProp
  navigation: MealDetailsScreenNavigationProp
}
function MealDetailsScreen({ route, navigation }: Props) {
  const mealId = route.params.mealId
  const item = MEALS.find((meal) => meal.id === mealId)
  // const {ids, addFav, removeFav} = useContext(FavContext)
  const dispatch = useAppDispatch()
  const ids = useAppSelector((state) => state.favorites.ids)

  const isFav = ids.includes(mealId)

  function onPressHandler() {
    if (isFav) {
      dispatch(removeFav({ id: mealId }))
    } else {
      dispatch(addFav({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    const categoryTitle = MEALS.find((meal) => meal.id === mealId)?.title
    navigation.setOptions({
      title: categoryTitle,
      headerRight: () => {
        return (
          <IconButton
            onPress={onPressHandler}
            icon={isFav ? 'star' : 'star-outline'}
            color='#fff'
          />
        )
      },
    })
  }, [mealId, navigation, onPressHandler])

  return (
    <ScrollView style={{ marginBottom: 32 }}>
      <View style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: item?.imageUrl }} />
        <Text style={styles.title}>{item?.title}</Text>
        {item && <MealDetails textStyle={styles.textStyle} item={item} />}
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          {item && <ListEl data={item.ingredients} />}
          <Subtitle>Steps</Subtitle>
          {item && <ListEl data={item.steps} />}
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#fff',
  },
  textStyle: {
    color: '#fff',
  },
  listContainer: {
    width: '80%',
  },
})
