import React from 'react'
import { View, Text } from 'react-native'

import PropTypes from 'prop-types'
import { Color } from '../../assets'
import { styles } from './video.style'
import Slider from '@react-native-community/slider'


const ProgressBar = (props) => {
  const position = getMinutesFromSeconds(props.currentTime)
  const fullDuration = getMinutesFromSeconds(props.duration)

  return (
    <View style={styles.barWrapper}>
      <Slider
        value={props.currentTime}
        minimumValue={0}
        maximumValue={props.duration}
        step={1}
        onValueChange={handleOnSlide}
        onSlidingStart={props.onSlideStart}
        onSlidingComplete={props.onSlideComplete}
        minimumTrackTintColor={Color.bgColorPurple}
        maximumTrackTintColor={Color.white}
        thumbTintColor={Color.bgColorPurple}
      />
      <View style={styles.timeWrapper}>
        <Text style={styles.timeLeft}>{position}</Text>
        <Text style={styles.timeRight}>{fullDuration}</Text>

      </View>
    </View>
  )

  function getMinutesFromSeconds(time) {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0
    const seconds = Math.floor(time - minutes * 60)

    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`
  }

  function handleOnSlide(time) {
    props.onSlideCapture({ seekTime : time })
  }
}

ProgressBar.propTypes = {
  onPress: PropTypes.func,
  duration: PropTypes.number,
  fullscreen: PropTypes.bool,
  onSlideStart: PropTypes.func,
  currentTime: PropTypes.number,
  onSlideCapture: PropTypes.func,
  onSlideComplete: PropTypes.func,
}

export default ProgressBar