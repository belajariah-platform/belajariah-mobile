import React from 'react'
import { useDispatch } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'

import { UserAPI } from '../../../api'

const AdminDashboard = () => {
  const dispatch = useDispatch()
  return (
    <View>
      <TouchableOpacity onPress={async () => await dispatch(UserAPI.SignOut())}>
        <Text>AdminDashboard</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AdminDashboard
