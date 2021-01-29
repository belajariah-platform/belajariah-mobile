import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'


const ConsultationDetail = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex:1 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>ConsultationDetail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ConsultationDetail
