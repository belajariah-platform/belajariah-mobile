import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { Icon, Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Image} from 'react-native'

import { FormatRupiah } from '../../../utils'
import { Images, Color } from '../../../assets'
import { LoadingView, Buttons } from '../../../components'
import { styles } from './modal-info-class.style'

const ModalInfoClass = (props) => {
  const navigation = useNavigation()
  const BenefitTahsin = [
    { IconModal : Images.IconPackageTahsin1, TxtVal : 'Akses video selamanya'},
    { IconModal : Images.IconPackageTahsin2, TxtVal : 'Akses grub diskusi'},
    { IconModal : Images.IconPackageTahsin3, TxtVal : 'Resume materi'},
    { IconModal : Images.IconPackageTahsin4, TxtVal : 'Mendapatkan pembinaan lanjutan'},
    { IconModal : Images.IconPackageTahsin5, TxtVal : 'Free sertifikat'},
  ]

  const InDirectPackage = () => {
    return(
      <View style={styles.NewContainer}>
        {props.state && props.state.map((value, index) => {
          return (
            <View key={index}>
              <View style={styles.FlexNew}>
                <Images.IllustrationPackageTahsin.default />
                <View style={{marginLeft: 10}}>
                  <Text style={styles.TxtTitlePackage}>Paket Darussalam</Text>
                  <Text style={styles.TxtDescTitle}>Benefit yang kamu dapatkan</Text>
                  {BenefitTahsin.map((item, index) => {
                    return (
                      <View key={index} style={styles.FlexNew}>
                        <item.IconModal.default 
                          width={16}
                          height={16}
                        />
                        <Text style={styles.TxtDescPack}>{item.TxtVal}</Text>
                      </View>
                    )
                  })}
                   <View style={styles.ViewPrice}>
                     <Text style={styles.TxtPrice}>Rp{FormatRupiah(value.Price_Package)}</Text>
                     <Text style={styles.TxtPriceDiscount}>Rp{FormatRupiah(value.Price_Discount)}</Text>
                   </View>
                </View>
              </View>
              <View>
                <Buttons 
                  title='Pilih Paket'
                  style={styles.StyleBtn}
                  onPress={() => {
                    props.backdropPress()
                    navigation.navigate('ClassDetail', { packages : value, classes : props.class })
                  }}
                />
              </View>              
            </View>
          )
        })}
      </View>

    )
  }

  return(
    <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={props.backdropPress}
        onBackButtonPress={props.backButtonPress}
      >
        <View style={[styles.modalStyle, props.containerStyle]}>
          <View style={styles.modalContentSyle}>
            {/* <View style={styles.viewTxtJudulModal}>
              <Text style={styles.TxtJudulModal}>Pilih Paket Belajar</Text>
            </View> */}
            {props.loading ?
              <LoadingView
                loadingStyle={{ flex : 0 }}
              /> :
              <InDirectPackage />
            }
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalInfoClass.propTypes = {
  loading : PropTypes.bool,
  title : PropTypes.string,
  class : PropTypes.object,
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  containerStyle : PropTypes.object,
}

export default ModalInfoClass
