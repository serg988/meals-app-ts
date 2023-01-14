import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from 'react-native'
import Meal from '../models/meal'
import { MealDetailsScreenNavigationProp } from '../types'
import MealDetails from './MealDetails'

interface Props {
  item: Meal
}

function MealItem({ item }: Props) {
  const navigation = useNavigation<MealDetailsScreenNavigationProp>()

  function onPressHandler() {
    navigation.navigate('MealDetails', {mealId: item.id})
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <MealDetails item={item} textStyle={{color: '#000'}}/>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
})
