import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Clipboard from '@react-native-community/clipboard'
import { View, ScrollView, TouchableOpacity, ToastAndroid, Image } from 'react-native'

import { Images } from '../../assets'
import styles from './promotion-detail.style'
import { ButtonGradient } from '../../components'

const PromotionDetail = (props) => {
  const { params } = props.route
  const navigation = useNavigation()

  const classData = {
    CodeVoucher: 'BLJRIAH',
    TitlePromo: 'Diskon 30% Pengguna Baru',
    titleCode: 'Kode Voucher Disc.30%',
    DescPromo: 'Selamat datang di Belajariah Diskon 30% buat kamu pengguna baru, Nikmati kemudahan belajar Al-Quran kapan dan dimana saja dengan ponsel digenggamanmu',
    DescOther: 'Tunggu apalagi? Mari berinvestasi untuk akhiratmu.....',
  }


  const copyToClipboard = async (account) => {
    await Clipboard.setString(account)
    await ToastAndroid.show('Kode Voucher Disalin', ToastAndroid.SHORT)
  }

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Diskon 30% Pengguna Baru</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const PaymentMethod = () => {
    return (
      <View style={styles.containerMethod}>
        <View style={styles.cardMethods}>
          <View>
            <Text style={styles.TitlePromo}>{classData.TitlePromo}</Text>
            <Text style={styles.DescPromo}>{classData.DescPromo}</Text>
            <Text style={styles.DescOtherPromo}>{classData.DescOther}</Text>
          </View>
          <View>
            <Text style={styles.TitlePromo}>{classData.titleCode}</Text>
          </View>
          <View style={styles.containerCodePromo}> 
            <Images.VoucherCode.default />
            <TouchableOpacity onPress={() => copyToClipboard(classData.CodeVoucher)}>
                <Text style={styles.TxtButtonSalin}>SALIN</Text>
             </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  const PaymentButton = () => {
    return (
      <View>
        <ButtonGradient
          title='Gunakan Sekarang'
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          onPress={()=> {navigation.navigate('TransactionConfirm')}}
        />
      </View>
    )
  }

  const PaymentCheckout = () => {
    return (
      <View style={{marginHorizontal: '5%', alignItems: 'center',}}>
        <Image source={Images.BannerPromotionsPenggunaBaru} style={styles.ImgBanner}/>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
        <PaymentCheckout />
        <PaymentMethod />
        <PaymentButton />
      </ScrollView>
    </View>
  )
}

PromotionDetail.propTypes = {
  route : PropTypes.object,
}

export default PromotionDetail