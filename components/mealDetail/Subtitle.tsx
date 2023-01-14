import { View, Text, StyleSheet } from 'react-native'

function Subtitle({children}:{children: string}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subTitle: {
    color: '#e2a178',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    borderBottomColor: '#e2a178',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
  },
})