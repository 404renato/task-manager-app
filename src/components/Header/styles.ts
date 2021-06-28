import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 63,
  },

  title: {
    color: theme.colors.tertiary,
    fontFamily: theme.fonts.title,
    fontSize: 36,
  },
})
