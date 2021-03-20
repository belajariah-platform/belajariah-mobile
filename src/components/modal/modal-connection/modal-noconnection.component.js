import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { styles } from './modal-noconnection.style'
import { View, TouchableOpacity, Image } from 'react-native'

import { Images } from '../../../assets'
import { Text } from 'react-native'

const ModalNoConnection = (props) => {
    return(
        <>
        <Modal
            backdropOpacity={0.25}
            isVisible={props.isVisible}
            style={styles.backdropStyle}
            onBackdropPress={props.backdropPress}
            >
            <View style={[styles.modalStyle, props.containerStyle]}>
            {props.hideButtonClose || (
                <TouchableOpacity
                onPress={props.backdropPress}
                style={styles.closeStyle}>
                <Images.ButtonClose.default/>
                </TouchableOpacity>
            )}
            <View style={styles.modalContentSyle}>
                {props.renderItem}
                <Image source={Images.ImgModalNoConnection} style={{width:280, height: 245,}} resizeMode='contain' />
                <View>
                    <TouchableOpacity onPress={props.backdropPress}>
                        <Text style={styles.TxtButton}>Retry</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </Modal>
        </>
    )
}

ModalNoConnection.propTypes = {
    isVisible : PropTypes.bool,
    renderItem : PropTypes.object,
    backdropPress : PropTypes.func,
    hideButtonClose : PropTypes.bool,
    containerStyle : PropTypes.object,
}

export default ModalNoConnection