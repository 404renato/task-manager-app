import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'

export type TaskProps = {
  id: string
  title: string
  description: string
  date: string
}

type Props = RectButtonProps & {
  data: TaskProps
}

export function Task({ data, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.circle} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.date}>date: {data.date.split(' - ')[0]}</Text>
      </View>
    </RectButton>
  )
}
