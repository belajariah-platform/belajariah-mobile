import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { FormatRupiah } from '../../../utils'
import { Images, Color } from '../../../assets'
import { styles } from './modal-info-class.style'

const ModalInfoClass = (props) => {
  const navigation = useNavigation()

  const ViewClass = () => {
    return(
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.state && props.state.map((value, index) => {
          let icon, colors, fontColor, iconBell, iconConsul, iconWebinar
          value.Type == 'Darussalam' ?
            (
              colors = '#f9edff',
              fontColor = Color.purpleText,
              icon = Images.IconPaketDarussalam,
              iconBell = Images.IconBenefit1Darussalam,
              iconConsul = Images.IconBenefit2Darussalam,
              iconWebinar = Images.IconBenefit3Darussalam
            ) :
            value.Type == 'Naim' ?
              (
                colors = '#fff',
                fontColor = '#ea4c88',
                icon = Images.IconPaketNaim,
                iconBell = Images.IconBenefit1Naim,
                iconConsul = Images.IconBenefit2Naim,
                iconWebinar = Images.IconBenefit3Naim
              ) :
              (
                colors = '#e7fcf8',
                fontColor = '#1abc9c',
                icon = Images.IconPaketFirdaus,
                iconBell = Images.IconBenefit1Firdaus,
                iconConsul = Images.IconBenefit2Firdaus,
                iconWebinar = Images.IconBenefit3Firdaus
              )
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                props.backdropPress()
                navigation.navigate('ClassDetail', { packages : value, classes : props.class })
              }}>
              <View style={[styles.containerPaketDarussalam, { backgroundColor: colors }]}>
                <View style={styles.viewTitlePaket}>
                  <icon.default
                    width={50}
                    height={50}
                  />
                  <View style={styles.viewTxtTitlePaket}>
                    <Text style={[styles.TxtTitlePaket, { color : fontColor }]}>Paket {value.Type}</Text>
                    <Text style={styles.textRegular}>Keuntungan yang kamu dapatkan</Text>
                  </View>
                </View>
                <View style={styles.flexBenefits}>
                  <iconBell.default
                    width={23}
                    height={23}
                    style={styles.IconBenefit}
                  />
                  <Text style={styles.TxtDescPaket}>Langganan {value.Duration} bulan</Text>
                </View>
                <View style={styles.flexBenefits}>
                  <iconConsul.default
                    width={23}
                    height={23}
                    style={styles.IconBenefit}
                  />
                  <Text style={styles.TxtDescPaket}>Akses Konsultasi {value.Consultation}x</Text>
                </View>
                <View style={styles.flexBenefits}>
                  <iconWebinar.default
                    width={23}
                    height={23}
                    style={styles.IconBenefit}
                  />
                  <Text style={styles.TxtDescPaket}>Webinar {value.Webinar}x</Text>
                </View>
                <View style={styles.flexBenefits}>
                  <Text style={styles.TxtHargaCoret}>
                    Rp {FormatRupiah(value.Price_Package)}
                  </Text>
                  <Text style={[styles.TxtTitlePaket, { color : fontColor }]}>
                    Rp {FormatRupiah(value.Price_Discount)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>

    )
  }

  return(
    <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={() => props.backdropPress()}
      >
        <View style={[styles.modalStyle, props.containerStyle]}>
          <View style={styles.modalContentSyle}>
            <View style={styles.viewTxtJudulModal}>
              <Text style={styles.TxtJudulModal}>Pilih Paket Belajar</Text>
            </View>
            <ViewClass />
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalInfoClass.propTypes = {
  title : PropTypes.string,
  class : PropTypes.object,
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  containerStyle : PropTypes.object,
}

export default ModalInfoClass
