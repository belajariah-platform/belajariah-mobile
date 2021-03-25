import PropTypes from 'prop-types'
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

const TransactionMethod = (props) => {
  const Item = props.route.params
  const navigation = useNavigation()
  const [gateway, setGateway] = useState({
    type : '',
    value : 'BCA',
  })
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
    { id: 0, type : 'virtual_account', value: 'BCA' },
    { id: 1, type : 'virtual_account',  value: 'BNI' },
    { id: 2, type : 'virtual_account',  value: 'BRI' },
    { id: 3, type : 'e_wallet', value: 'OVO' },
    { id: 3, type : 'e_wallet', value: 'GO-PAY' },
    { id: 3, type : 'mart', value: 'Indomaret' },
    { id: 3, type : 'mart', value: 'Alfamart' },
    { id: 4, type : 'bank_transfer', value: 'Bank BSI' },
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
        <View style={styles.cardDetail}>
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
        </View>
      </View>
    )
  }

  const PaymentMethod = () => {
    const setGatewayDetails = (newGateway) => {
      switch(newGateway) {
      case('BCA') :
      case('BNI') :
      case('BRI') :
        setGateway(s => ({ ...s, type : 'virtual_account' }))
        break
      case('OVO') :
      case('GOPAY') :
        setGateway(s => ({ ...s, type : 'e_wallet' }))
        break
      case('Indomaret') :
      case('Alfamart') :
        setGateway(s => ({ ...s, type : 'mart' }))
        break
      case('Bank BSI') :
        setGateway(s => ({ ...s, type : 'bank_transfer' }))
        break
      default :
        alert('Radiobutton exception')
      }

      setGateway(s => ({ ...s, value : newGateway }))
    }

    return (
      <RadioButton.Group onValueChange={(newGateway) => setGatewayDetails(newGateway)} value={gateway.value}>
        <View style={styles.containerMethod}>
          <Text style={styles.textTitleBlack}>Metode Pembayaran</Text>

          {/* E-wallet untuk sementara ini belum diimplementasikan */}
          {/* <View style={styles.cardMethods}>
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
          </View> */}

          <View style={styles.cardMethods}>
            <Text style={styles.textBold}>Transfer Virtual Account</Text>
            <Text style={styles.textRegular}>Lakukan pembayaran anda dengan mudah dan cepat</Text>
            {method.map((item, index) => {
              return item.type == 'virtual_account' &&  (
                <View key={index} style={styles.flexRow}>
                  <RadioButton value={item.value} />
                  <Text style={styles.textGateway}>{item.value}</Text>
                </View>
              )})}
          </View>

          <View style={styles.cardMethods}>
            <Text style={styles.textBold}>Minimarket</Text>
            <Text style={styles.textRegular}>Selesaikan pembayaran anda melalui minimarket terdekat</Text>
            {method.map((item, index) => {
              return item.type == 'mart' &&  (
                <View key={index} style={styles.flexRow}>
                  <RadioButton value={item.value} />
                  <Text style={styles.textGateway}>{item.value}</Text>
                </View>
              )})}
          </View>

          <View style={[styles.cardMethods, styles.cardMethodCustom]}>
            <Text style={styles.textBold}>Transfer ke Rekening Bank</Text>
            <Text style={styles.textRegular}>Lakukan pembayaran secara fleksibel ke rekening bank yang telah disediakan</Text>
            {method.map((item, index) => {
              return item.type == 'bank_transfer' &&  (
                <View key={index} style={styles.flexRow}>
                  <RadioButton value={item.value} />
                  <Text style={styles.textGateway}>{item.value}</Text>
                </View>
              )})}
          </View>

        </View>
      </RadioButton.Group>
    )
  }

  const PaymentCheckout = () => {
    return (
      <View style={styles.containerPrice}>
        <View style={styles.flexColumn}>
          <Text style={styles.textTotalPrice}>Total Harga</Text>
          <Text style={styles.textPrice}>Rp {FormatRupiah(Item.Price_Discount)}</Text>
        </View>
        <ButtonGradient
          title='Checkout Now'
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          onPress={()=> {
            Item.Gateway_Type = gateway.type
            Item.Gateway_Value = gateway.value
            navigation.navigate('TransactionInfo', Item)
          }}
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
        backButtonPress={() => {
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
                  form={FormVoucher}
                  name='voucher_code'
                  placeholder='Contoh: BLJRIAH'
                  customStyle={styles.InputVoucher}
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

TransactionMethod.propTypes = {
  route: PropTypes.object,
}

export default TransactionMethod
