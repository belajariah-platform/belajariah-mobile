import React from 'react'
import {
  View,
} from 'react-native';
import {styles} from './profile.style'

import {useDispatch} from 'react-redux'
import {Button} from '../../components'
import {userLogout} from '../../Redux/Action/userAction'

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <View >
      <Button
        style={styles.logout}
          onPress={async () => await dispatch(userLogout())}>
           Logout
      </Button>
  </View>
  )
}

export default Profile
