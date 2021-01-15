import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './text-view.style'
import { Text } from '@ui-kitten/components'
import ViewMoreText from 'react-native-view-more-text'

const renderViewMore = onPress => {
  return (
    <Text style={styles.viewMore} onPress={onPress}>
      selengkapnya
    </Text>
  )
}
const renderViewLess = onPress => {
  return (
    <Text style={styles.viewMore} onPress={onPress}>
      lebih sedikit
    </Text>
  )
}

const TextView = (props) => {
  return (
    <ViewMoreText
      numberOfLines={3}
      renderViewMore={renderViewMore}
      renderViewLess={renderViewLess}>
      {props.component}
    </ViewMoreText>
  )
}
TextView.propTypes = {
  component : PropTypes.object,
}

export default TextView