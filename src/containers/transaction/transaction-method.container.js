import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { RadioButton } from 'react-native-paper'
import { Icon, Text } from '@ui-kitten/components'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, ScrollView, Alert, TouchableOpacity } from 'react-native'

import { Images } from '../../assets'
import { FormatRupiah } from '../../utils'
import { ButtonGradient } from '../../components'

import styles from './transaction-method.style'

const TransactionMethod = () => {
  const navigation = useNavigation()
  const route = useRoute()

  let { discountedPrice } = route.params ?? {}

  const [code, setCode] = useState('')

  const classData = {
    name: 'Kelas Tahsin',
    quote: 'Belajar Al-Qur\'an dari dasar dengan metode yang mudah dan menyenangkan (Tahsin)',
    ustadz: 'Ustadz Maulana Achmad Al-Hafiz, S. Ag',
    ustadzAbout: 'Hafidz Al-Qur\'an 30 Juz dan Guru SIT Al-Azhar Cairo Palembang',
    rating: 4.5,
    price: discountedPrice,
    voucher: code,
  }

  const [gateway, setGateway] = React.useState('ovo')

  const handleRating = (num) => {
    let rating = []
    const numRound = Math.round(num)
    for (let index = 1; index <= numRound; index++) {
      num - index == 0
        ? rating.push(<Images.Star.default />)
        : num - index < 0
          ? rating.push(<Images.StarHalfBlack.default />)
          : rating.push(<Images.StarBlack.default />)
    }
    return (
      <View style={styles.flexRating}>
        {rating.map((val, index) => {
          return <View key={index}>{val}</View>
        })}
        <Text style={styles.textRating}>{num}</Text>
      </View>
    )
  }

  const handleVoucher = (code) => {
    let discountedPrice = ''
    switch (code) {
    case 'NEWMEMBER':
      discountedPrice = (classData.price - (classData.price * 30/100))
      return (
        <View style={styles.flexRow}>
          <Text style={styles.textLineThroughPrice}>IDR {FormatRupiah(classData.price)}</Text>
          <Text style={styles.textPrice}>IDR {FormatRupiah(discountedPrice)}</Text>
        </View>
      )
    default:
      return <Text style={styles.textPrice}>IDR {FormatRupiah(classData.price)}</Text>
    }
  }

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Metode Pembayaran</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const PaymentDetail = () => {
    return (
      <View>
        <Text style={styles.textTitleBlack}>Detail Pembayaran</Text>
        <Card containerStyle={styles.cardDetail}>
          <Text style={styles.textBold}>Judul Kelas:</Text>
          <Text style={styles.textRegular}>{classData.quote}</Text>
          <Text style={styles.textBold}>Instruktur</Text>
          <Text style={styles.textRegular}>{`${classData.ustadz}, ${classData.ustadzAbout}`}</Text>
          <Text style={styles.textBold}>Rating</Text>
          <View>{handleRating(classData.rating)}</View>
          <Card.Divider style={styles.divider} />
          <TouchableOpacity onPress={() => {
            Alert.alert('Pakai kode voucher?', 'Diskon 30% : NEWMEMBER', [
              {
                text: 'Gak usah',
              },
              {
                text: 'Pakai dong',
                onPress: () => setCode('NEWMEMBER')
              }
            ])
          }}>
            <View style={styles.flexVoucher}>
              <Text style={styles.textRegularPurple}>
              Saya memiliki <Text style={styles.textBoldPurple}>kode Voucher</Text>
              </Text>
              <Icon name='chevron-right-outline' style={styles.iconChevronRight} />
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    )
  }

  const PaymentMethod = () => {
    return (
      <RadioButton.Group onValueChange={(newGateway) => setGateway(newGateway)} value={gateway}>
        <View style={styles.containerMethod}>
          <Text style={styles.textTitleBlack}>Metode Pembayaran</Text>
          <Card containerStyle={styles.cardMethods}>
            <Text style={styles.textBold}>E-Wallet</Text>
            <Text style={styles.textRegular}>Lakukan pembayaran langsung melalui akun e-wallet anda</Text>
            <View style={styles.flexRow}>
              <RadioButton value='ovo' />
              <Text style={styles.textGateway}>OVO</Text>
              <RadioButton value='gopay' />
              <Text style={styles.textGateway}>GO-PAY</Text>
            </View>
          </Card>

          <Card containerStyle={styles.cardMethods}>
            <Text style={styles.textBold}>Transfer Virtual Account</Text>
            <Text style={styles.textRegular}>Transfer pembayaran anda dengan mudah dan cepat</Text>
            <View style={styles.flexRow}>
              <RadioButton value='bankMandiri' />
              <Text style={styles.textGateway}>Bank Mandiri</Text>
            </View>
            <View style={styles.flexRow}>
              <RadioButton value='bankBNI' />
              <Text style={styles.textGateway}>Bank BNI</Text>
            </View>
            <View style={styles.flexRow}>
              <RadioButton value='bankBCA' />
              <Text style={styles.textGateway}>Bank BCA</Text>
            </View>
          </Card>

          <Card containerStyle={[styles.cardMethods, styles.cardMethodCustom]}>
            <Text style={styles.textBold}>Minimarket</Text>
            <Text style={styles.textRegular}>Selesaikan pembayaran anda melalui minimarket terdekat</Text>
            <View style={styles.flexRow}>
              <RadioButton value='indomaret' />
              <Text style={styles.textGateway}>Indomaret</Text>
            </View>
            <View style={styles.flexRow}>
              <RadioButton value='alfamart' />
              <Text style={styles.textGateway}>Alfamart</Text>
            </View>
          </Card>
        </View>
      </RadioButton.Group>
    )
  }

  const PaymentCheckout = () => {
    return (
      <View style={styles.containerPrice}>
        <View style={styles.flexColumn}>
          <Text style={styles.textTotalPrice}>Total Harga</Text>
          {handleVoucher(classData.voucher)}
        </View>
        <ButtonGradient
          title='Checkout Now'
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          onPress={()=> {navigation.navigate('TransactionInfo')}}
        />
      </View>
    )
  }

  const ThreeButtonAlert = () =>
    Alert.alert(
      'Konfirmasi Pembayaran',
      `Bayar dengan ${gateway}?`,
      [
        {
          text: 'Nanti saja',
          onPress: () => {
            navigation.navigate('Transaction', { status: 'Pending' })
          },
        },
        {
          text: 'Nggak jadi',
          onPress: () => {
            navigation.navigate('Transaction', { status: 'Failed' })
          },
        },
        {
          text: 'Bayar',
          onPress: () => {
            navigation.navigate('Transaction', { status: 'Complete' })
          },
        },
      ],
      { cancelable: false },
    )

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
        <PaymentDetail />
        <PaymentMethod />
      </ScrollView>
      <PaymentCheckout />
    </View>
  )
}

export default TransactionMethod
