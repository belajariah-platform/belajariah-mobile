import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './progressbar.style'

const Progressbar = (props) => {
  const progressBar = props.progress.toString().concat('%')
  return (
    <View style={styles.container}>
      <LinearGradient
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 1 }}
        colors={['white', 'aqua']}
        style={{ ...styles.progressBar, maxWidth: progressBar }}/>
    </View>
  )
}

Progressbar.propTypes = {
  progress : PropTypes.number
}

export default Progressbar