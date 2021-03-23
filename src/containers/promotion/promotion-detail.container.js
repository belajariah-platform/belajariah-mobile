import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import Clipboard from '@react-native-community/clipboard'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  View,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'
import {
  LoadingView,
  ButtonGradient,
  ModalNoConnection,
} from '../../components'

import { Images } from '../../assets'
import { Response } from '../../utils'
import { PromotionAPI } from '../../api'

import styles from './promotion-detail.style'

const PromotionDetail = () => {
  const route = useRoute()
  const navigation = useNavigation()
  let { promo_code } = route.params ?? {}

  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [connectStatus, setconnectStatus] = useState(false)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

  const retryConnection = () => {
    setconnectStatus(!connectStatus)
    fetchDataPromotionDetail(promo_code)
  }

  const fetchDataPromotionDetail = async (code) => {
    try {
      const response = await PromotionAPI.GetPromotion(code)
      if (response.status === Response.SUCCESS) {
        setState(response.data.result)
        setLoading(false)
      } else {
        setLoading(false)
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  useEffect(() => {
    fetchDataPromotionDetail(promo_code)
  }, [])

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
          <Text
            style={styles.textTitleWhite}>
            { state.ID == 0 || Object.keys(state).length == 0 ?
              'Halaman Promo' : state.Title}</Text>
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
            <Text style={styles.TitlePromo}>{state.Title}</Text>
            <Text style={styles.DescPromo}>{handleSplitString(state.Description)}</Text>
          </View>
          <View>
            <Text style={styles.TitlePromo}>Kode Voucher Disc. {state.Discount}%</Text>
          </View>
          <View style={styles.containerCodePromo}>
            <View>
              <Image
                source={Images.VoucherCode}
                style={{ width : 151, height:37 }}/>
              <Text style={styles.textCode}>{state.Promo_Code}</Text>
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
          onPress={() => copyToClipboard(state.Promo_Code)}
        />
      </View>
    )
  }

  const BannerPromotion = () => {
    return (
      <View style={styles.containerBanner}>
        <Image
          style={styles.ImgBanner}
          source={state.Header_Image == '' ?
            Images.ImgDefault1 :
            { uri :state.Header_Image }}
        />
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      {loading ?
        <LoadingView/> :
        state.ID == 0 || Object.keys(state).length == 0 ?
          (
            <ScrollView
              style={styles.containerScrollView }
              showsVerticalScrollIndicator={false}>
              <ModalNoConnection
                isVisible={connectStatus}
                retry={() => retryConnection()}
                backdropPress={() => togglemodalNoConnection()}
                backButtonPress={() => togglemodalNoConnection()}
              />
              <Image source={Images.IconPromoEmpty} style={{ width : 260, height : 200, alignContent : 'center', alignSelf : 'center' }}/>
            </ScrollView>
          ) : (
            <ScrollView
              style={styles.containerScrollView}
              showsVerticalScrollIndicator={false}>
              <ModalNoConnection
                isVisible={connectStatus}
                retry={() => retryConnection()}
                backdropPress={() => togglemodalNoConnection()}
                backButtonPress={() => togglemodalNoConnection()}
              />
              <BannerPromotion />
              <DescriptionPromotion />
              <Footer />
            </ScrollView>
          )}
    </View>
  )
}

PromotionDetail.propTypes = {
  promoIndex : PropTypes.number,
}

export default PromotionDetail