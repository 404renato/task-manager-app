import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
