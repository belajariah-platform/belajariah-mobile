import React from 'react'
import {useDispatch} from 'react-redux'
import {userLogout} from '../../Redux/Action/userAction'

import {
  View,
  Text,
} from 'react-native'
import {
  Buttons
} from '../../components'

import {styles} from './profile.style'

const Profile = (props) => {
  const dispatch = useDispatch();
  return (
    <View style={{flex:1}}>
      <Buttons
        title="Logout"
        onPress={async () => await dispatch(userLogout())}
          >
      </Buttons>
      <Text onPress = {() => props.navigation.navigate('ProfileEdit')}>Edit</Text>
  </View>
  )
}

export default Profile
