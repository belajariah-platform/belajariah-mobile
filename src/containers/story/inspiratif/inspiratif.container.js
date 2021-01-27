import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, TouchableOpacity } from 'react-native'

const InspiratifStory = () => {
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity
        onPress={() =>  navigation.navigate('InspiratifStoryDetail')}
      >
        <Text>InspiratifStory</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InspiratifStory
