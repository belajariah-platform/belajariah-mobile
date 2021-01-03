import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

import { UserAPI } from '../../api'
import { Buttons } from '../../components'

const Profile = (props) => {
  const dispatch = useDispatch()
  return (
    <View style={{ flex:1 }}>
      <Buttons
        title='Logout'
        onPress={async () => await dispatch(UserAPI.SignOut())}
      />
      <Buttons title='Edit' onPress={() => props.navigation.navigate('ProfileEdit')}/>
    </View>
  )
}

Profile.propTypes = {
  navigation : PropTypes.object
}

export default Profile
