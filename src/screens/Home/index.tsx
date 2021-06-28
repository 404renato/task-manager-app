import React, { useState, useRef, useCallback } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Modalize } from 'react-native-modalize'

import { Entypo } from '@expo/vector-icons'

import { Header } from '../../components/Header'
import { ListDivider } from '../../components/ListDivider'
import { TaskDetails } from '../TaskDetails'
import { Task, TaskProps } from '../../components/Task'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { COLLECTION_TASKS } from '../../config/database'

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [index, setIndex] = useState(0)
  const modalizeRef = useRef<Modalize>(null)

  const navigation = useNavigation()

  function handleTaskCreate() {
    navigation.navigate('TaskCreate')
  }

  const onOpen = () => {
    modalizeRef.current?.open()
  }

  const onClose = () => {
    modalizeRef.current?.close()
  }

  async function loadTasks() {
    const response = await AsyncStorage.getItem(COLLECTION_TASKS)
    const storage: TaskProps[] = response ? JSON.parse(response) : []

    setTasks(storage)
  }

  async function handleDelete() {
    try {
      const response = await AsyncStorage.getItem(COLLECTION_TASKS)
      if (response !== null) {
        const responseJSON = JSON.parse(response)
        let storage = responseJSON.filter(function (item: TaskProps) {
          return item.id !== tasks[index].id
        })
        AsyncStorage.setItem(COLLECTION_TASKS, JSON.stringify(storage))
        setIndex(0)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadTasks()
    }, [tasks])
  )

  return (
    <View style={styles.container}>
      <Header title="Your Tasks" />
      {tasks.length === 0 ? (
        <View style={styles.noTasksContainer}>
          <Text style={[styles.noTasks, { marginBottom: 1 }]}>
            No tasks left.
          </Text>
          <Text style={styles.noTasks}>You must be tired!</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 70 }}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item, index }) => (
            <Task
              data={item}
              onPress={() => {
                setIndex(index)
                onOpen()
              }}
            />
          )}
        />
      )}

      <Modalize
        ref={modalizeRef}
        velocity={5000}
        snapPoint={397}
        modalHeight={397}
        modalStyle={{ borderTopLeftRadius: 100, borderTopRightRadius: 0 }}
        handlePosition={'inside'}
      >
        <>
          {tasks.length !== 0 ? (
            <TaskDetails
              data={tasks[index]}
              onClose={onClose}
              handleDelete={handleDelete}
            />
          ) : (
            []
          )}
        </>
      </Modalize>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleTaskCreate}
      >
        <Entypo name="plus" size={77} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  )
}
