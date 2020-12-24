import React from 'react'
import PropTypes from 'prop-types'
import { Icons } from '../../assets'
import { styles } from './topbar.style'
import { useNavigation } from '@react-navigation/native'
import { TopNavigation, TopNavigationAction, Text } from '@ui-kitten/components'

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
  )
}

Topbar.propTypes = {
  title : PropTypes.string,
  backIcon : PropTypes.bools,
}

export default Topbar
