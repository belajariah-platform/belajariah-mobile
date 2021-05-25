import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './text-view.style'
import { Text } from '@ui-kitten/components'

const TextView = (props) => {
  const ViewMore = () => {
    return (
      <Text style={styles.viewMore} onPress={props.onPress}>
        selengkapnya
      </Text>
    )
  }
  const ViewLess = () => {
    return (
      <Text style={styles.viewMore} onPress={props.onPress}>
        lebih sedikit
      </Text>
    )
  }

  return (
    <>
      <Text
        numberOfLines={props.numberOfLines}>
        {props.component}
      </Text>
      {props.showMore ? (
        <ViewMore />
      ) : (
        <ViewLess />
      )}
    </>
  )
}
TextView.propTypes = {
  onPress : PropTypes.func,
  showMore : PropTypes.bool,
  component : PropTypes.object,
  numberOfLines : PropTypes.number,
}

export default TextView