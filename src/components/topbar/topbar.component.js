import React from 'react'
import {Icons} from '../../assets'
import {styles} from './topbar.style'
import {useNavigation} from '@react-navigation/native'
import {TopNavigation, TopNavigationAction, Text} from '@ui-kitten/components'

const Topbar = (props) => {
  const navigation = useNavigation()
  const BackAction = () => (
    <TopNavigationAction icon={Icons.BackIcon} onPress={() => navigation.goBack()}/>
  )
  return (
    <TopNavigation
      accessoryLeft={props.backIcon ? BackAction : false}
      title={<Text style={styles.iconNavigation}>{props.title}</Text>}
      style={{
        backgroundColor: 'white',
        paddingHorizontal: props.backIcon ? 0 : 20,
      }}
    />
  );
}

export default Topbar
