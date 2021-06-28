import React from 'react'
import { View, Text } from 'react-native'

import { COLLECTION_TASKS } from '../../config/database'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Button } from '../../components/Button'
import { TaskProps } from '../../components/Task'

import { styles } from './styles'

type Props = {
  data: TaskProps
  onClose: () => void
  handleDelete: () => void
}

export function TaskDetails({ data, onClose, handleDelete }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Details</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.date}>Date Created: {data.date}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>

      <View style={styles.button}>
        <Button
          title="Done"
          onPress={() => {
            handleDelete()
            onClose()
          }}
        />
      </View>
    </View>
  )
}
