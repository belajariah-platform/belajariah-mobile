import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import Clipboard from '@react-native-community/clipboard'
import { View, ScrollView, TouchableOpacity, ToastAndroid, Image } from 'react-native'

import { Images } from '../../assets'
import { ButtonGradient } from '../../components'

import styles from './promotion-detail.style'

const PromotionDetail = (props) => {
  const item = props.route.params
  const navigation = useNavigation()
  const { isLogin } = useSelector((state) => state.UserReducer)

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
            <Text style={styles.TitlePromo}>{item.title}</Text>
            <Text style={styles.DescPromo}>{handleSplitString(item.description)}</Text>
          </View>
          <View>
            <Text style={styles.TitlePromo}>Kode Voucher Disc. {item.discount}%</Text>
          </View>
          <View style={styles.containerCodePromo}>
            <View>
              <Image source={Images.VoucherCode} style={{ width : 151, height:37 }}/>
              <Text style={styles.textCode}>{item.code_voucher}</Text>
            </View>
            <TouchableOpacity onPress={() => copyToClipboard(item.code_voucher)}>
              <Text style={styles.TxtButtonSalin}>SALIN</Text>
            </TouchableOpacity>
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
          onPress={()=> navigation.navigate(isLogin ? 'TransactionMethod' : 'Login')}
        />
      </View>
    )
  }

  const BannerPromotion = () => {
    return (
      <View style={styles.containerBanner}>
        <Image source={Images.BannerPromotionsPenggunaBaru} style={styles.ImgBanner}/>
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
  route : PropTypes.object,
}

export default PromotionDetail