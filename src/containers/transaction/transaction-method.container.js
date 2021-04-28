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
  const [gateway, setGateway] = useState('bca')
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
    price: Item.Price_Discount
  }

  var method = [
    { id: 0, type : 'bank_transfer', name : 'BCA', value : 'bca' },
    { id: 1, type : 'bank_transfer',  name : 'BNI', value : 'bni' },
    { id: 2, type : 'bank_transfer',  name : 'BRI', value : 'bri' },
    { id: 3, type : 'e_wallet', name : 'GO-PAY', value : 'gopay' },
    { id: 4, type : 'e_wallet', name : 'Shopeepay', value : 'shopeepay' },
    { id: 5, type : 'cstore', name : 'Indomaret', value : 'indomaret' },
    { id: 6, type : 'cstore', name : 'Alfamart', value : 'alfamart' },
    { id: 7, type : 'manual_transfer', name : 'Bank BSI', value : 'bsi' },
  ]

  const paymentDetail = {
    Gateway_ClassName : classData.name,
    Gateway_Price : Item.Price_Discount
  }

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
    return (
      <RadioButton.Group onValueChange={(newGateway) => setGateway(newGateway)} value={gateway}>
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
              return item.type == 'bank_transfer' &&  (
                <View key={index} style={styles.flexRow}>
                  <RadioButton value={item.value} />
                  <Text style={styles.textGateway}>{item.name}</Text>
                </View>
              )})}
          </View>

          <View style={styles.cardMethods}>
            <Text style={styles.textBold}>Minimarket</Text>
            <Text style={styles.textRegular}>Selesaikan pembayaran anda melalui minimarket terdekat</Text>
            {method.map((item, index) => {
              return item.type == 'cstore' &&  (
                <View key={index} style={styles.flexRow}>
                  <RadioButton value={item.value} />
                  <Text style={styles.textGateway}>{item.name}</Text>
                </View>
              )})}
          </View>

          <View style={[styles.cardMethods, styles.cardMethodCustom]}>
            <Text style={styles.textBold}>Transfer ke Rekening Bank</Text>
            <Text style={styles.textRegular}>Lakukan pembayaran secara fleksibel ke rekening bank yang telah disediakan</Text>
            {method.map((item, index) => {
              return item.type == 'manual_transfer' &&  (
                <View key={index} style={styles.flexRow}>
                  <RadioButton value={item.value} />
                  <Text style={styles.textGateway}>{item.name}</Text>
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
          <Text style={styles.textPrice}>Rp{FormatRupiah(Item.Price_Discount)}</Text>
        </View>
        <ButtonGradient
          title='Checkout Now'
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          onPress={()=> {
            const selectedGateway = method.findIndex(item => item.value === gateway)
            paymentDetail.Gateway_Create = true
            paymentDetail.Gateway_Type = method[selectedGateway].type
            paymentDetail.Gateway_Option = method[selectedGateway].value
            navigation.navigate('TransactionInfo', paymentDetail)
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
            <Text style={styles.TitleModal}>Punya kode voucher?</Text>
            <Image source={Images.IconVoucher} style={styles.ImgVoucher}/>
            <View style={styles.viewModal}>
              <Text style={styles.TxtDescModal}>Masukan kode voucher anda dibawah ini jika anda memiliki kode voucher</Text>
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
