import { View, Text, StyleSheet } from 'react-native'
import Meal from '../../models/meal'

function ListEl({ data }: { data: string[] }) {
  return (
    <>
      {data?.map((dataPoint) => (
        <View style={styles.listItem} key={dataPoint}>
          <Text style={styles.itemText} key={dataPoint}>{dataPoint}</Text>
        </View>
      ))}
    </>
  )
}

export default ListEl

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2a178',
  },
  itemText: {
    color: '#24180f',
    textAlign:'center'
  },
})
