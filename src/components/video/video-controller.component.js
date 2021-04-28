import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import PropTypes from 'prop-types'
import { Images } from '../../assets'
import { styles } from './video.style'

const PlayerControls = (props) => (
  <View style={styles.controllerWrapper}>
    {props.showPreviousAndNext && (
      <TouchableOpacity
        style={[styles.controllerTouchable, props.previousDisabled && styles.controllerTouchableDisabled]}
        onPress={props.onPrevious}
        disabled={props.previousDisabled}>
        <Images.VideoPrevious.default width={24} height={24} />
      </TouchableOpacity>
    )}

    {props.showSkip && (
      <TouchableOpacity style={styles.controllerTouchable} onPress={props.skipBackwards}>
        <Images.VideoSkipBack.default width={props.iconSkipSize || 24} height={props.iconSkipSize || 24} />
      </TouchableOpacity>
    )}

    <TouchableOpacity
      style={styles.controllerTouchable}
      onPress={props.playing ? props.onPause : props.onPlay}>
      {props.playing ? <Images.VideoPause.default width={props.iconPlaySize || 24} height={props.iconPlaySize || 24} /> : <Images.VideoPlay.default width={props.iconPlaySize} height={props.iconPlaySize}/>}
    </TouchableOpacity>

    {props.showSkip && (
      <TouchableOpacity style={styles.controllerTouchable} onPress={props.skipForwards}>
        <Images.VideoSkipForward.default width={props.iconSkipSize  || 24} height={props.iconSkipSize  || 24} />
      </TouchableOpacity>
    )}

    {props.showPreviousAndNext && (
      <TouchableOpacity
        style={[styles.controllerTouchable, props.nextDisabled && styles.controllerTouchableDisabled]}
        onPress={props.onNext}
        disabled={props.nextDisabled}>
        <Images.VideoNext.default width={24} height={24} />
      </TouchableOpacity>
    )}
  </View>
)

PlayerControls.propTypes = {
  onPlay: PropTypes.func,
  onNext: PropTypes.func,
  onPause: PropTypes.func,
  playing: PropTypes.bool,
  showSkip: PropTypes.bool,
  onPrevious: PropTypes.func,
  nextDisabled: PropTypes.bool,
  skipForwards: PropTypes.func,
  skipBackwards: PropTypes.func,
  iconPlaySize: PropTypes.number,
  iconSkipSize: PropTypes.number,
  previousDisabled: PropTypes.bool,
  showPreviousAndNext: PropTypes.bool,
}

export default PlayerControls