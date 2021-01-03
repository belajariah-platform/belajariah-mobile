import React from 'react'
import { DrawerItems, SafeAreaView } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import Images from '../../assets/images'

const CustomDrawer = () => {
  return (
    <View>
      <Images.ProfileDrawerBackground.default />
      <DrawerItems {...this.props} />
    </View>
  )
}

export default CustomDrawer
