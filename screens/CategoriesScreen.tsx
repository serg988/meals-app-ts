import { StyleSheet, View, FlatList } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'
import { CategoryType } from '../models/types'
import type { CategoriesNavigationProp } from '../types'

type ItemDataType = {
  index: number
  item: CategoryType
}

type Props = { navigation: CategoriesNavigationProp }

function CategoriesScreen ({ navigation }: Props) {
  function renderItem(itemData: ItemDataType) {
    function pressHandler() {
      navigation.navigate('Overview', {
        categoryId: itemData.item.id
      })
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => renderItem(itemData)}
        numColumns={2}
      />
    </View>
  )
}
export default CategoriesScreen
const styles = StyleSheet.create({})
