import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import { Images } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

import { styles } from '../../../components/modal/modal-connection/modal-noconnection.style'

const NoConnectionScreen = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
      return (
        <View style={{flex: 1}}>
          <Modal isVisible={true}>
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
                <Image source={Images.ImgModalNoConnection} style={{width:300, height: 250,}} resizeMode='contain' />
                <Button title='reload' onPress={props.onCheck} />
            </View>
            </View>
        </Modal>
        </View>
      )
}

NoConnectionScreen.propTypes = {
    isVisible : PropTypes.bool,
    renderItem : PropTypes.object,
    backdropPress : PropTypes.func,
    hideButtonClose : PropTypes.bool,
    containerStyle : PropTypes.object,
}

export default NoConnectionScreen