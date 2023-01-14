import { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MealItem from '../components/MealItem'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import { MealType } from '../models/types'
import { OverviewScreenNavigationProp, OverviewScreenRouteProp } from '../types'

type Props = {
  route: OverviewScreenRouteProp
  navigation: OverviewScreenNavigationProp
}

const OverviewScreen = ({ route, navigation }: Props) => {
  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
    (cat) => cat.id === catId
  )?.title
  navigation.setOptions({
    title: categoryTitle,
  })
  },[catId, navigation])
  

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
export default OverviewScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
