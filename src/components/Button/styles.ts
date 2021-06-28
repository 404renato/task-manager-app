import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 76,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 64,
    backgroundColor: theme.colors.secondary,
  },

  text: {
    fontSize: 36,
    fontFamily: theme.fonts.title,
    color: theme.colors.primary,
  },
})
