import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { RadioButton } from 'react-native-paper'
import { Icon, Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, TouchableOpacity, Image } from 'react-native'

import { FormatRupiah } from '../../utils'
import { Images, Color } from '../../assets'
import { ButtonGradient, ModalInfo, Buttons, TextBox } from '../../components'

import styles from './transaction-method.style'

const TransactionMethod = () => {
  const navigation = useNavigation()

  const [gateway, setGateway] = useState('ovo')
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)

  const FormVoucher = useFormik({
    initialValues: { voucher_code: '' },
    onSubmit:  (values) => {
      console.log(values)
    },
  })

  const classData = {
    name: 'Kelas Tahsin',
    quote: 'Belajar Al-Qur\'an dari dasar dengan metode yang mudah dan menyenangkan (Tahsin)',
    ustadz: 'Ustadz Maulana Achmad Al-Hafiz, S. Ag',
    ustadzAbout: 'Hafidz Al-Qur\'an 30 Juz dan Guru SIT Al-Azhar Cairo Palembang',
    rating: 4.5,
    price: 1990000,
    titleModal: 'Punya kode voucher?',
    modalDesc: 'Masukan kode voucher anda dibawah ini jika anda memiliki kode voucher',
  }

  var method = [
    { id: 0, type : 'virtual_account', value: 'Mandiri' },
    { id: 1, type : 'virtual_account',  value: 'BNI' },
    { id: 2, type : 'virtual_account',  value: 'BCA' },
    { id: 3, type : 'e_wallet', value: 'OVO' },
    { id: 3, type : 'e_wallet', value: 'GO-PAY' },
    { id: 3, type : 'mart', value: 'Indomaret' },
    { id: 3, type : 'mart', value: 'Alfamart' },
  ]

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

  const handleVoucher = () => {
    // let discountedPrice = ''
    // switch (code) {
    // case 'NEWMEMBER':
    //   discountedPrice = (classData.price - (classData.price * 30/100))
    //   return (
    //     <View style={styles.flexRow}>
    //       <Text style={styles.textLineThroughPrice}>IDR {FormatRupiah(classData.price)}</Text>
    //       <Text style={styles.textPrice}>IDR {FormatRupiah(discountedPrice)}</Text>
    //     </View>
    //   )
    // default:
    return <Text style={styles.textPrice}>IDR {FormatRupiah(classData.price)}</Text>
    // }
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
          <View>
            {handleRating(classData.rating)}
          </View>
          <Card.Divider style={styles.divider} />
          <TouchableOpacity
            onPress = {toggleModal}
          >
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
              {method.map((item, index) => {
                return item.type == 'e_wallet' &&  (
                  <>
                    <RadioButton key={index} value={item.value} />
                    <Text style={styles.textGateway}>{item.value}</Text>
                  </>
                )})}
            </View>
          </Card>

          <Card containerStyle={styles.cardMethods}>
            <Text style={styles.textBold}>Transfer Virtual Account</Text>
            <Text style={styles.textRegular}>Transfer pembayaran anda dengan mudah dan cepat</Text>
            {method.map((item, index) => {
              return item.type == 'virtual_account' &&  (
                <View key={index} style={styles.flexRow}>
                  <RadioButton value={item.value} />
                  <Text style={styles.textGateway}>{item.value}</Text>
                </View>
              )})}
          </Card>

          <Card containerStyle={[styles.cardMethods, styles.cardMethodCustom]}>
            <Text style={styles.textBold}>Minimarket</Text>
            <Text style={styles.textRegular}>Selesaikan pembayaran anda melalui minimarket terdekat</Text>
            {method.map((item, index) => {
              return item.type == 'mart' &&  (
                <View key={index} style={styles.flexRow}>
                  <RadioButton value={item.value} />
                  <Text style={styles.textGateway}>{item.value}</Text>
                </View>
              )})}
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

  return (
    <View style={styles.containerMain}>
      <ModalInfo
        isVisible={modalVisible}
        backdropPress={() => {
          toggleModal()
          FormVoucher.resetForm()
        }}
        renderItem={
          <View style={styles.containerModal}>
            <Text style={styles.TitleModal}>{classData.titleModal}</Text>
            <Image source={Images.IconVoucher} style={styles.ImgVoucher}/>
            <View style={styles.viewModal}>
              <Text style={styles.TxtDescModal}>{classData.modalDesc}</Text>
              <View style={styles.viewModalInput}>
                <TextBox
                  customStyle={styles.InputVoucher}
                  placeholder='Contoh: BLJRIAH'
                  name='voucher_code'
                  form={FormVoucher}
                />
                <Buttons
                  title='KLAIM'
                  onPress={FormVoucher.handleSubmit}
                  disabled={FormVoucher.values['voucher_code']
                    .length > 4 ? false : true}
                  style={[styles.ButtonClaim,
                    FormVoucher.values['voucher_code'].length > 4 ?
                      { backgroundColor : Color.purpleButton } :
                      { backgroundColor : '#cbcbcb' } ]}
                />
              </View>
            </View>
          </View>
        }
      />
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
