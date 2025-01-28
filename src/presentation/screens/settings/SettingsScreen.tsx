import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useCounterStore } from '../../store/counter-store'

const SettingsScreen = () => {

  const counter = useCounterStore((state) => state.count)
  const incrementBy = useCounterStore((state) => state.incrementBy)

  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Text>{counter}</Text>

    <Pressable
            style={styles.primaryButton}
            onPress={() =>
              incrementBy(1)
            }>
            <Text>Cambiar email</Text>
          </Pressable>

          <Pressable
                  style={styles.primaryButton}
                  onPress={() =>
                    incrementBy(-1)
                  }>
                  <Text>Cambiar email</Text>
                </Pressable>

    </View>
  )
}

export default SettingsScreen
