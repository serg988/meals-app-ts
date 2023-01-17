import { useLayoutEffect } from 'react'

import MealList from '../components/MealList/MealList'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import { MealType } from '../models/types'
import { OverviewScreenNavigationProp, OverviewScreenRouteProp } from '../types'

type Props = {
  route: OverviewScreenRouteProp
  navigation: OverviewScreenNavigationProp
}

const OverviewScreen = ({ route, navigation }: Props) => {
  const catId = route.params.categoryId

  const displayedMealsIds = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0
  }).map((meal) => meal.id)

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId)?.title
    navigation.setOptions({
      title: categoryTitle,
    })
  }, [catId, navigation])
  return <MealList idArray={displayedMealsIds} />
}
export default OverviewScreen
