import { View, Text, StyleSheet } from 'react-native'
import Meal from '../models/meal'

interface Props {
  item: Meal
  textStyle: {color: string}
}

function MealDetails({ item, textStyle }: Props) {
  return (
    <View style={[styles.details]}>
      <Text style={[styles.detailItem, textStyle]}>{item.duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {item.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {item.affordability.toUpperCase()}
      </Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  detailItem: {
    fontSize: 12,
    marginHorizontal: 8,
  },
})
