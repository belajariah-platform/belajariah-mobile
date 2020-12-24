import React from 'react'
import PropTypes from 'prop-types'
import { Overlay } from 'react-native-elements'
import { Circle } from 'react-native-animated-spinkit'

import { Color } from '../../assets'

const  Loader = (props) => {
  return (
    <>
      <Overlay
        isVisible={props.loading}
        windowBackgroundColor='rgba(49, 49, 49, .5)'
        overlayBackgroundColor='black'
        borderWidth={0}
        width={80}
        height={80}
        borderRadius={20}
        style={{ padding: 20 }}
        overlayStyle={{ padding: 15 }}>
        <Circle size={35} color={Color.bgColor} />
      </Overlay>
    </>
  )
}

Loader.propTypes = {
  loading : PropTypes.bool,
}

export default Loader
