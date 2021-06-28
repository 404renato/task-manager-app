import React, { useState } from 'react'
import { View, Alert, TextInput, KeyboardAvoidingView } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'
import uuid from 'react-native-uuid'

import { Feather } from '@expo/vector-icons'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_TASKS } from '../../config/database'

export function TaskCreate() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleCreate() {
    const newTask = {
      id: uuid.v4(),
      title,
      description,
      date: moment().format('D/MM/YYYY  -  h:mm'),
    }

    const storage = await AsyncStorage.getItem(COLLECTION_TASKS)
    const tasks = storage ? JSON.parse(storage) : []

    await AsyncStorage.setItem(
      COLLECTION_TASKS,
      JSON.stringify([...tasks, newTask])
    )

    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <BorderlessButton style={styles.back} onPress={handleGoBack}>
          <Feather
            name="chevron-left"
            color={theme.colors.tertiary}
            size={36}
          />
        </BorderlessButton>
        <Header title="Create Task" />
      </View>

      <View style={styles.titleContainer}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          autoCorrect={false}
          placeholder="title"
          placeholderTextColor={theme.colors.holder}
        ></TextInput>
      </View>

      <View style={styles.descriptionContainer}>
        <TextInput
          multiline
          numberOfLines={5}
          value={description}
          onChangeText={setDescription}
          style={[styles.input, { textAlign: 'left', marginBottom: 85 }]}
          autoCorrect={false}
          placeholder="description"
          placeholderTextColor={theme.colors.holder}
        ></TextInput>
      </View>

      <View style={styles.button}>
        <Button
          title="Create"
          onPress={() => {
            title !== '' && description !== ''
              ? handleCreate()
              : Alert.alert('Error', 'All fields must be filled.', [
                  {
                    text: 'OK',
                  },
                ])
          }}
        />
      </View>
    </KeyboardAvoidingView>
  )
}
