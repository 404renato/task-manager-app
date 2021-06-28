import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },

  noTasksContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noTasks: {
    fontSize: 20,
    fontFamily: theme.fonts.text,
    textAlign: 'center',
  },

  flatlist: {
    flexGrow: 0,
    height: 500,
  },

  button: {
    position: 'absolute',
    left: 157,
    bottom: 47,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary,
  },
})
