import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { TaskCreate } from '../screens/TaskCreate'
import { theme } from '../global/styles/theme'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: theme.colors.primary } }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="TaskCreate" component={TaskCreate} />
    </Navigator>
  )
}
