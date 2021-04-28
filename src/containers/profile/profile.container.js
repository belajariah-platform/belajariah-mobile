import React from 'react'
import { useDispatch } from 'react-redux'
import { UserAPI } from '../../api'

import {
  View,
} from 'react-native'
import {
  Buttons
} from '../../components'

const Profile = () => {
  const dispatch = useDispatch()
  return (
    <View style={{ flex:1 }}>
      <Buttons
        title='Logout'
        onPress={async () => await dispatch(UserAPI.SignOut())}
      >
      </Buttons>
    </View>
  )
}

export default Profile
