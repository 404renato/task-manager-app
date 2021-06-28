import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  circle: {
    marginTop: 53,
    marginLeft: 61,
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary,
  },

  textContainer: {
    marginTop: 38,
    paddingLeft: 13,
    paddingBottom: 6,
  },

  title: {
    fontSize: 18,
    fontFamily: theme.fonts.title,
    color: theme.colors.tertiary,
    textTransform: 'capitalize',
  },

  date: {
    fontSize: 13,
    fontFamily: theme.fonts.text,
    color: theme.colors.tertiary,
  },
})
