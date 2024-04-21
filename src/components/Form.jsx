import React from 'react'
import { Modal, Text } from 'react-native'

export const Form = () => {
  return (
    <Modal animationType='slide' visible={modalVisible}>
        <Text>
          Modal
        </Text>
    </Modal>
  )
}
