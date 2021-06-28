import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 24,
    fontFamily: theme.fonts.title,
    marginTop: 43,
  },

  details: {
    marginLeft: 43,
  },

  title: {
    marginBottom: 1,
    fontSize: 36,
    fontFamily: theme.fonts.title,
    color: theme.colors.tertiary,
    textTransform: 'capitalize',
  },

  date: {
    marginBottom: 18,
    fontSize: 13,
    fontFamily: theme.fonts.text,
    color: theme.colors.holder,
  },

  description: {
    fontSize: 16,
    fontFamily: theme.fonts.text,
    color: theme.colors.tertiary,
    textTransform: 'capitalize',
  },

  button: {
    alignItems: 'center',
    marginTop: 90,
  },
})
