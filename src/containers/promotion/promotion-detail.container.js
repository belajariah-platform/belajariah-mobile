import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

const PromotionDetail = (props) => {
  const { params } = props.route

  return (
    <View style={{ flex:1 }}>
      <Text>{params.title}</Text>
    </View>
  )
}

PromotionDetail.propTypes = {
  route : PropTypes.object,
}

export default PromotionDetail
