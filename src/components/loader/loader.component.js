import React from 'react'
import PropTypes from 'prop-types'
import { Overlay } from 'react-native-elements'
import { Flow } from 'react-native-animated-spinkit'

import { Color } from '../../assets'

const  Loader = (props) => {
  return (
    <>
      <Overlay
        width={80}
        height={80}
        borderWidth={0}
        borderRadius={100}
        style={{ padding: 20 }}
        isVisible={props.loading}
        overlayBackgroundColor='purple'
        windowBackgroundColor='rgba(49, 49, 60, .8)'
        overlayStyle={{ padding: 15 }}>
        <Flow size={35} color={Color.bgColor} />
      </Overlay>
    </>
  )
}

Loader.propTypes = {
  loading : PropTypes.bool,
}

export default Loader
