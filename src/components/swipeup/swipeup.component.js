import React from 'react'
import PropTypes from 'prop-types'
import ActionSheet from 'react-native-actions-sheet'

import { View } from 'react-native'

const Swipeup = (props) => {
  return (
    <View>
      <ActionSheet
        ref={props.visible} {...props}
      >
        <View style={{ height: 300 }} />
      </ActionSheet>
    </View>
  )
}

Swipeup.propTypes = {
  visible : PropTypes.object,
}

export default Swipeup
