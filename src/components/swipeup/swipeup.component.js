import React from 'react'
import PropTypes from 'prop-types'
import ActionSheet from 'react-native-actions-sheet'

import { View } from 'react-native'

const ActionSheets = (props) => {
  return (
    <View>
      <ActionSheet ref={props.visible}>
        <View style={{ height: 300 }} />
      </ActionSheet>
    </View>
  )
}

ActionSheets.propTypes = {
  visible : PropTypes.bool,
}

export default ActionSheets
