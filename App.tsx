import React from 'react'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter'

import { Routes } from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <Routes />
}
