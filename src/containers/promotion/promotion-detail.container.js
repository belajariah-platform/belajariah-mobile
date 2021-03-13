import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { useNavigation, useRoute } from '@react-navigation/native'
import Clipboard from '@react-native-community/clipboard'
import { View, ScrollView, TouchableOpacity, ToastAndroid, Image } from 'react-native'

import { Images } from '../../assets'
import { ButtonGradient } from '../../components'

import styles from './promotion-detail.style'

const PromotionDetail = () => {
  const route = useRoute()
  const navigation = useNavigation()
  let { promoIndex, promo_code } = route.params ?? {}

  const promotion = [
    {
      ID: 1,
      code: 'PRC00000001',
      class_Code: 'CLC00000001',
      title: 'Diskon 30% Pengguna Baru',
      description: 'Selamat datang di Belajariah Diskon 30% buat kamu pengguna baru, Nikmati kemudahan belajar Al-Quran kapan dan dimana saja dengan ponsel digenggamanmu|Tunggu apalagi? Mari berinvestasi untuk akhiratmu.....',
      promo_code : 'BLJRIAH',
      discount: 30,
      banner_image : Images.BannerPromotionsPenggunaBaru,
      Header_Image: '',
      Expired_Date: '',
      Quota_User: 1000000,
      Quota_Used: 0,
      Is_Active: true,
      Created_By: 'belajariah20@gmail.com',
      Created_Date: '2021-02-04T11:22:39+07:00',
      Modified_By: 'belajariah20@gmail.com',
      Modified_Date: '2021-02-04T11:22:39+07:00',
      Deleted_By: '',
      Deleted_Date: '1753-07-01T00:00:00+07:07',
    },
    {
      ID: 2,
      code: 'PRC00000002',
      class_Code: 'CLC00000001',
      code_voucher: 'BLJEXPD',
      title: 'Diskon 20% Untuk Perpanjangan Kelas',
      description : 'Khusus buat kamu, perpanjang langganan kelas, diskon 20%',
      promo_code : 'BLJRIAH',
      discount: 20,
      banner_image : Images.BannerPromotionExtendClass,
      Header_Image: '',
      Expired_Date: '',
      Quota_User: 1000000,
      Quota_Used: 0,
      Is_Active: true,
      Created_By: 'belajariah20@gmail.com',
      Created_Date: '2021-02-04T11:22:39+07:00',
      Modified_By: 'belajariah20@gmail.com',
      Modified_Date: '2021-02-04T11:22:39+07:00',
      Deleted_By: '',
      Deleted_Date: '1753-07-01T00:00:00+07:07',
    },
  ]

  //jika masuk melalui voucher code, bukan mapping index
  promoIndex == undefined && (
    promoIndex = promotion.findIndex(item => item.code_voucher === promo_code)
  )

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
          <Text style={styles.textTitleWhite}>{promotion[promoIndex] == undefined ? 'Halaman Promo' : promotion[promoIndex].title}</Text>
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
            <Text style={styles.TitlePromo}>{promotion[promoIndex].title}</Text>
            <Text style={styles.DescPromo}>{handleSplitString(promotion[promoIndex].description)}</Text>
          </View>
          <View>
            <Text style={styles.TitlePromo}>Kode Voucher Disc. {promotion[promoIndex].discount}%</Text>
          </View>
          <View style={styles.containerCodePromo}>
            <View>
              <Image source={Images.VoucherCode} style={{ width : 151, height:37 }}/>
              <Text style={styles.textCode}>{promotion[promoIndex].code_voucher}</Text>
            </View>
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
        <Image source={promotion[promoIndex].banner_image} style={styles.ImgBanner}/>
      </View>
    )
  }

  return (
    promotion[promoIndex] == undefined ? (
      <View style={styles.containerMain}>
        <Header />
        <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
          <Text style={styles.textRegular}>Maaf, voucher tidak tersedia</Text>
        </ScrollView>
      </View>
    ) : (
      <View style={styles.containerMain}>
        <Header />
        <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
          <BannerPromotion />
          <DescriptionPromotion />
          <Footer />
        </ScrollView>
      </View>
    )
  )
}

PromotionDetail.propTypes = {
  promoIndex : PropTypes.number,
}

export default PromotionDetail