import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type {
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native'

//------------------

export type OverviewScreenRouteProp = RouteProp<
  StackNavigatorParamList,
  'Overview'
>
export type OverviewScreenNavigationProp =
  NativeStackNavigationProp<StackNavigatorParamList>

//-----------------

export type MealDetailsScreenRouteProp = RouteProp<
  StackNavigatorParamList,
  'MealDetails'
>

export type MealDetailsScreenNavigationProp =
  NativeStackNavigationProp<StackNavigatorParamList>

//------------

export type CategoriesNavigationProp = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Overview'
>

//-----------

export type StackNavigatorParamList = {
  Categories: undefined
  Overview: { categoryId: string }
  MealDetails: { mealId: string }
}
