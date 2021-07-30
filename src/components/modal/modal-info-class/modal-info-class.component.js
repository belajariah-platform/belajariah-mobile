import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { Text } from '@ui-kitten/components'
import { View, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FormatRupiah } from '../../../utils'
import { Images, Color } from '../../../assets'
import { LoadingView } from '../../../components'
import { styles } from './modal-info-class.style'

const ModalInfoClass = (props) => {
  const navigation = useNavigation()

  const DataDirosa = [
    { id: 1, name: 'Paket Private', DescPackage: 'Paket belajar sendiri adalah paket privat antara 1 orang ustadz/Ustadzah dengan1 orang santri.', IconPackage: Images.IconPrivate, PricePackage: 'Rp.780.000', MeetPackage: '/20x Pertemuan'},
    { id: 2, name: 'Paket Double', DescPackage: 'Paket belajar Double adalah paket privat antara 1 orang ustadz/Ustadzah yang mengajar 2 orang santri sekaligus.', IconPackage: Images.IconDouple, PricePackage: 'Rp.780.000', MeetPackage: '/20x Pertemuan'},
    { id: 3, name: 'Paket Family', DescPackage: 'Paket belajar Family adalah paket privat antara 1 orang ustadz/Ustadzah yang mengajar 4 orang santri.', IconPackage: Images.IconFamily, PricePackage: 'Rp.780.000', MeetPackage: '/20x Pertemuan'},
  ]

  const DirectPackage = () => {
    return(
      <View>
        {DataDirosa.map((item, index) => {
          return(
            <TouchableOpacity key={index} onPress={() => {
              props.backdropPress()
              navigation.navigate('ClassDetailDirect', { packages : item, classes : props.class })
            }}>
              <View style={[styles.containerPaket]}>
                <View style={styles.viewTitlePaket}>
                  <Image source={item.IconPackage} style={{width:80, height:80}} />
                  <View style={styles.viewTxtTitlePaket}>
                    <Text style={styles.TxtTitlePackage}>{item.name}</Text>
                    <Text style={styles.textDescPackage}>{item.DescPackage}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={styles.TxtPrice}>{item.PricePackage}</Text>
                      <Text style={styles.TxtMeet}>{item.MeetPackage}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const ViewClass = () => {
    return(
      <View>
        {props.state && props.state.map((value, index) => {
          let icon, colors, fontColor, iconBell, iconConsul, iconWebinar
          value.Type == 'Darussalam' ?
            (
              colors = Color.softPink,
              fontColor = Color.purpleText,
              icon = Images.IconPaketDarussalam,
              iconBell = Images.IconBenefit1Darussalam,
              iconConsul = Images.IconBenefit2Darussalam,
              iconWebinar = Images.IconBenefit3Darussalam
            ) :
            value.Type == 'Naim' ?
              (
                colors = Color.mediumPink,
                fontColor = Color.textPink,
                icon = Images.IconPaketNaim,
                iconBell = Images.IconBenefit1Naim,
                iconConsul = Images.IconBenefit2Naim,
                iconWebinar = Images.IconBenefit3Naim
              ) :
              (
                colors = Color.softGreen,
                fontColor = Color.textGreen,
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
              <View style={[styles.containerPaket, { backgroundColor: colors }]}>
                <View style={styles.viewTitlePaket}>
                  <icon.default
                    width={36}
                    height={36}
                  />
                  <View style={styles.viewTxtTitlePaket}>
                    <Text style={[styles.TxtTitlePaket, { color : fontColor }]}>Paket {value.Type}</Text>
                    <Text style={styles.textRegular}>Keuntungan yang kamu dapatkan</Text>
                  </View>
                </View>
                <View style={styles.flexBenefits}>
                  <iconBell.default
                    width={20}
                    height={20}
                    style={styles.IconBenefit}
                  />
                  <Text style={styles.TxtDescPaket}>Akses video selamanya</Text>
                </View>
                {/* <View style={styles.flexBenefits}>
                  <iconConsul.default
                    width={20}
                    height={20}
                    style={styles.IconBenefit}
                  />
                  <Text style={styles.TxtDescPaket}>
                    Akses Konsultasi {value.Consultation}x ({value.Duration} bulan)
                  </Text>
                </View> */}
                <View style={styles.flexBenefits}>
                  <iconWebinar.default
                    width={20}
                    height={20}
                    style={styles.IconBenefit}
                  />
                  <Text style={styles.TxtDescPaket}>Webinar {value.Webinar}x</Text>
                </View>
                <View style={styles.flexBenefits}>
                  <Text style={styles.TxtHargaCoret}>
                    Rp{FormatRupiah(value.Price_Package)}
                  </Text>
                  <Text style={styles.TxtHarga}>
                    Rp{FormatRupiah(value.Price_Discount)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
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
              // <ViewClass />
              <DirectPackage />
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
