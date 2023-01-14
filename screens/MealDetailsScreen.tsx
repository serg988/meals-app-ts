import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import {
  MealDetailsScreenNavigationProp,
  MealDetailsScreenRouteProp,
} from '../types'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/mealDetail/Subtitle'
import ListEl from '../components/mealDetail/ListEl'

type Props = {
  route: MealDetailsScreenRouteProp
  navigation: MealDetailsScreenNavigationProp
}
function MealDetailsScreen({ route, navigation }: Props) {
  const mealId = route.params.mealId
  const item = MEALS.find((meal) => meal.id === mealId)

  useLayoutEffect(() => {
    const categoryTitle = MEALS.find((meal) => meal.id === mealId)?.title
    navigation.setOptions({
      title: categoryTitle,
    })
  }, [mealId, navigation])

  return (
    <ScrollView style={{marginBottom: 32}}>
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
