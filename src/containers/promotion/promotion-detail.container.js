import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { useNavigation, useRoute } from '@react-navigation/native'
import Clipboard from '@react-native-community/clipboard'
import { View, ScrollView, TouchableOpacity, ToastAndroid, Image } from 'react-native'

import { Images } from '../../assets'
import { ButtonGradient } from '../../components'

import styles from './promotion-detail.style'

const PromotionDetail = (props) => {
  const route = useRoute()
  const { promoIndex } = route.params ?? {}
  const navigation = useNavigation()

  const promotion = [
    {
      code_voucher: 'BLJRIAH',
      title: 'Diskon 30% Pengguna Baru',
      banner : Images.BannerPromotionsPenggunaBaru,
      discount: 30,
      desc: 'Diskon 30% Pengguna Baru',
      more_desc: 'Selamat datang di Belajariah Diskon 30% buat kamu pengguna baru, Nikmati kemudahan belajar Al-Quran kapan dan dimana saja dengan ponsel digenggamanmu|Tunggu apalagi? Mari berinvestasi untuk akhiratmu.....',
    },
    {
      code_voucher: 'AMALJARIAH',
      title: 'Diskon 20% Untuk Perpanjangan Kelas',
      banner : Images.BannerPromotionExtendClass,
      discount: 20,
      desc : 'Khusus buat kamu, perpanjang langganan kelas, diskon 20%',
      more_desc: '*S&K berlaku',
    }
  ]

  const copyToClipboard = async (account) => {
    await Clipboard.setString(account)
    await ToastAndroid.show('Kode Voucher Disalin', ToastAndroid.SHORT)
  }

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('UserMain')}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>{promotion[promoIndex].title}</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const DescriptionPromotion = () => {
    const handleSplitString = (value) => {
      const stringSplit = value.split('|')
      return (
        <>
          {stringSplit.map((val, index) => {
            return <Text key={index}>{val}.{'\n'}{'\n'}</Text>
          })}
        </>
      )
    }

    return (
      <View style={styles.containerMethod}>
        <View style={styles.cardMethods}>
          <View>
            <Text style={styles.TitlePromo}>{promotion[promoIndex].desc}</Text>
            <Text style={styles.DescPromo}>{handleSplitString(promotion[promoIndex].more_desc)}</Text>
          </View>
          <View>
            <Text style={styles.TitlePromo}>Kode Voucher Disc. {promotion[promoIndex].discount}%</Text>
          </View>
          <View style={styles.containerCodePromo}>
            <View>
              <Image source={Images.VoucherCode} style={{ width : 151, height:37 }}/>
              <Text style={styles.textCode}>{promotion[promoIndex].code_voucher}</Text>
            </View>
            {/* <TouchableOpacity onPress={() => copyToClipboard(promotion[promoIndex].code_voucher)}>
              <Text style={styles.TxtButtonSalin}>SALIN</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    )
  }

  const Footer = () => {
    return (
      <View>
        <ButtonGradient
          title='Gunakan Sekarang'
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          onPress={() => copyToClipboard(promotion[promoIndex].code_voucher)}
        />
      </View>
    )
  }

  const BannerPromotion = () => {
    return (
      <View style={styles.containerBanner}>
        <Image source={promotion[promoIndex].banner} style={styles.ImgBanner}/>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
        <BannerPromotion />
        <DescriptionPromotion />
        <Footer />
      </ScrollView>
    </View>
  )
}

PromotionDetail.propTypes = {
  promoIndex : PropTypes.number,
}

export default PromotionDetail