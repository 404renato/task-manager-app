import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 108.5,
  },

  back: {
    marginTop: 67,
    marginRight: 54,
    marginLeft: 25,
  },

  titleContainer: {
    width: 328,
    height: 62,
    borderRadius: 32,
    backgroundColor: theme.colors.area,
    marginTop: 49,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 23,
  },

  input: {
    marginLeft: 27,
    fontSize: 18,
    fontFamily: theme.fonts.text,
  },

  descriptionContainer: {
    width: 328,
    height: 149,
    borderRadius: 32,
    backgroundColor: theme.colors.area,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  button: {
    alignItems: 'center',
    marginTop: 48,
  },
})
