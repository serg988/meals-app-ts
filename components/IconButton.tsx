import { StyleSheet, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

interface Props {
  onPress: () => void
  icon: keyof typeof Ionicons.glyphMap
  color: string
}

function IconButton({ icon, color, onPress }: Props) {
  return (
    <Pressable
      android_ripple={{ color: '#3e3d3d' }}
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
})
