import { useContext, useLayoutEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem'

import { MEALS, CATEGORIES } from '../../data/dummy-data'
import { MealType } from '../../models/types'
import { FavContext } from '../../store/context/fav-context'
import {
  OverviewScreenNavigationProp,
  OverviewScreenRouteProp,
} from '../../types'

type Props = {
  idArray: string[]
}

const MealList = ({ idArray }: Props) => {
  const displayedMeals = MEALS.filter((meal) => {
    return idArray.includes(meal.id)
  })

  function renderMealItem({ item }: { item: MealType }) {
    return <MealItem item={item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}
export default MealList
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
