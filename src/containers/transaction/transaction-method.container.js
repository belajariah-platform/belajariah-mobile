import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { Card } from 'react-native-elements'
import { RadioButton } from 'react-native-paper'
import React, { useState, useEffect } from 'react'
import { Icon, Text } from '@ui-kitten/components'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'

import {
  PaymentAPI,
  PromotionAPI,
  PaymentMethodAPI,
} from '../../api'

import {
  Alerts,
  Loader,
  Buttons,
  TextBox,
  ModalInfo,
  ButtonGradient,
  ModalNoConnection,
} from '../../components'
import { Response } from '../../utils'
import { FormatRupiah } from '../../utils'
import { Images, Color } from '../../assets'

import styles from './transaction-method.style'

const TransactionMethod = (props) => {
  const { classes, packages, instructor } = props.route.params

  const navigation = useNavigation()
  const toggleModal = () => setModalVisible(!modalVisible)
  const { userInfo } = useSelector((state) => state.UserReducer)

  const [state, setState] = useState([])
  const [gateway, setGateway] = useState('')
  const [isClaim, setIsClaim] = useState(false)
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [dataState] = useState({ skip: 0, take: 50, filter: [], filterString: '[]' })

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    setconnectStatus(!connectStatus)
    fetchDataPaymentMethod(dataState)
  }

  const fetchDataPaymentMethod = async ({ skip, take, filterString }) => {
    try {
      const response = await PaymentMethodAPI.GetAllPaymentMethod(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      return err
    }
  }

  const FormVoucher = useFormik({
    initialValues: {
      Promo_Code: '',
      Class_Code : classes.Code,
    },
    onSubmit:  (values) => {
      claimVoucherCode(values)
    },
  })

  const claimVoucherCode = async (values) => {
    try {
      const response = await PromotionAPI.ClaimPromotion(values)
      if (response.status === Response.SUCCESS) {
        if (response.data.data.Discount == 0) {
          Alerts(false, response.data.message)
        } else {
          const value =  FormCheckout.values['Total_Transfer']
          setModalVisible(false)
          FormCheckout.setFieldValue('Total_Transfer',
            value - (value * response.data.data.Discount/100))
            setIsClaim(true)
        }
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      return err
    }
  }

  const FormCheckout = useFormik({
    initialValues: {
      User_Code: userInfo.ID,
      Class_Code: classes.Code,
      Promo_Code : '',
      Package_Code : packages.Code,
      Payment_Method_Code : '',
      Status_Payment_Code : 'ENC00000025',
      Total_Transfer : parseInt(packages.Price_Discount),
    },
    onSubmit:  (values) => {
      if (values.Payment_Method_Code != '') {
        checkoutPayment(values)
      } else {
        ToastAndroid.show('Metode pembayaran belum dipilih',
          ToastAndroid.SHORT)
      }
    },
  })

  const checkoutPayment = async (values) => {
    try {
      setLoadingBtn(true)
      const response =   await PaymentAPI.InsertPayment(values)
      if (response.data.result) {
        navigation.navigate('TransactionInfo', response.data.data)
      }
      setLoadingBtn(false)
    } catch (error) {
      setLoadingBtn(false)
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      return error
    }
  }

  useEffect(() => {
    fetchDataPaymentMethod(dataState)
  }, [])

  // const paymentDetail = {
  //   Gateway_ClassName : classData.name,
  //   Gateway_Price : Item.Price_Discount
  // }

  const handleRating = (num) => {
    let rating = []
    for (let index = 1; index <= 5; index++) {
      num - index >= 0
        ? rating.push(<Images.StarBlack.default />)
        : num - index < 0 && num - index > -1
          ? rating.push(<Images.StarHalfBlack.default />)
          : rating.push(<Images.StarEmptyBlack.default />)
    }
    return (
      <View style={styles.flexRating}>
        {rating.map((val, index) => {
          return <View key={index}>{val}</View>
        })}
        <Text style={styles.textRating}>{num.toFixed(1)}</Text>
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
          <Text style={styles.textRegular}>{classes.Class_Name}</Text>
          <Text style={styles.textBold}>Instruktur</Text>
          {classes.Is_Direct == true ? 
          (<Text style={styles.textRegular}>{`${instructor.Full_Name}`}</Text>)
          : <Text style={styles.textRegular}>{`${classes.Instructor_Name}, ${classes.Instructor_Biografi}`}</Text>}
          {classes.Class_Rating != 0 && (
            <>
              <Text style={styles.textBold}>Rating</Text>
              <View>
                {handleRating(classes.Class_Rating)}
              </View>
            </>
          )}
          {classes.Is_Direct == true ? (
            <View style={styles.ViewSchedule}>
              <Text style={styles.textBold}>Jadwal Ngaji</Text>
              <Text style={styles.textRegular}>Sabtu (08.00 - 09.30) dan Ahad (08.00 - 09.30)</Text>
            </View>
          ) : null}
          {isClaim ? (null) : (
            <View>
              <Card.Divider style={styles.divider} />
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.flexVoucher}>
                  <Text style={styles.textRegularPurple}>
                  Saya memiliki <Text style={styles.textBoldPurple}>kode Voucher</Text>
                  </Text>
                  <Icon name='chevron-right-outline' style={styles.iconChevronRight} />
                </View>
              </TouchableOpacity>
            </View>
            ) 
          }
          
        </View>
      </View>
    )
  }

  const PaymentMethod = () => {
    return (
      <RadioButton.Group onValueChange={(newGateway) => {
        FormCheckout.setFieldValue('Payment_Method_Code', newGateway)
        setGateway(newGateway)}}
      value={gateway}>
        <View style={styles.containerMethod}>
          <Text style={styles.textTitleBlack}>Metode Pembayaran</Text>

          {/* {state.some((item) => item.Type == 'e-wallet') && (
            <View style={styles.cardMethods}>
              <Text style={styles.textBold}>E-Wallet</Text>
              <Text style={styles.textRegular}>Lakukan pembayaran langsung melalui akun e-wallet anda</Text>
              <View style={styles.flexRow}>
                {state.map((item, index) => {
                  return item.Type == 'e_wallet' &&  (
                    <View key={index} style={{ flexDirection : 'row' }}>
                      <RadioButton key={index} value={item.Code} />
                      <Text style={[styles.textGateway,
                        { textTransform: 'uppercase' }]}>
                        {item.Value}
                      </Text>
                    </View>
                  )})}
              </View>
            </View>
          )}
          {state.some(item => item.Type == 'bank_transfer') && (
            <View style={styles.cardMethods}>
              <Text style={styles.textBold}>Transfer Virtual Account</Text>
              <Text style={styles.textRegular}>Transfer pembayaran anda dengan mudah dan cepat</Text>
              {state.map((item, index) => {
                return item.Type == 'bank_transfer' &&  (
                  <View key={index} style={styles.flexRow}>
                    <RadioButton value={item.Code}/>
                    <Text style={styles.textGateway}>{item.Value}</Text>
                  </View>
                )})}
            </View>
          )}
          {state.some(item => item.Type == 'cstore') && (
            <View style={styles.cardMethods}>
              <Text style={styles.textBold}>Minimarket</Text>
              <Text style={styles.textRegular}>Selesaikan pembayaran anda melalui minimarket terdekat</Text>
              {state.map((item, index) => {
                return item.Type == 'cstore' &&  (
                  <View key={index} style={styles.flexRow}>
                    <RadioButton value={item.Code} />
                    <Text style={styles.textGateway}>{item.Value}</Text>
                  </View>
                )})}
            </View>
          )} */}

          {state.some(item => item.Type == 'manual_transfer') && (
            <View style={[styles.cardMethods, styles.cardMethodCustom]}>
              <Text style={styles.textBold}>Transfer ke Rekening Bank</Text>
              <Text style={styles.textRegular}>Lakukan pembayaran secara fleksibel ke rekening bank yang telah disediakan</Text>
              {state.map((item, index) => {
                return item.Type == 'manual_transfer' &&  (
                  <View key={index} style={styles.flexRow}>
                    <RadioButton value={item.Code} />
                    <Text style={styles.textGateway}>{item.Value}</Text>
                  </View>
                )})}
            </View>
          )}

        </View>
      </RadioButton.Group>
    )
  }

  const PaymentCheckout = () => {
    return (
      <View style={styles.containerPrice}>
        <View style={styles.flexColumn}>
          <Text style={styles.textTotalPrice}>Total Harga</Text>
          <Text style={styles.textPrice}>Rp {FormatRupiah(FormCheckout.values['Total_Transfer'])}</Text>
        </View>
        <ButtonGradient
          title='Bayar Sekarang'
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          disabled={loadingBtn ? true : false}
          onPress={FormCheckout.handleSubmit}
          // onPress={()=> {
          //   const selectedGateway = method.findIndex(item => item.value === gateway)
          //   paymentDetail.Gateway_Create = true
          //   paymentDetail.Gateway_Type = method[selectedGateway].type
          //   paymentDetail.Gateway_Option = method[selectedGateway].value
          //   navigation.navigate('TransactionInfo', paymentDetail)
          // }}
        />
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Loader loading={loadingBtn}/>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
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
            <Text style={styles.TitleModal}>Punya kode voucher</Text>
            <Image source={Images.IconVoucher} style={styles.ImgVoucher}/>
            <View style={styles.viewModal}>
              <Text style={styles.TxtDescModal}>
                Masukan kode voucher anda dibawah ini jika anda memiliki kode voucher
              </Text>
              <View style={styles.viewModalInput}>
                <TextBox
                  form={FormVoucher}
                  name='Promo_Code'
                  placeholder='Contoh: BLJRIAH'
                  customStyle={styles.InputVoucher}
                />
                <Buttons
                  title='KLAIM'
                  onPress={FormVoucher.handleSubmit}
                  disabled={FormVoucher.values['Promo_Code']
                    .length > 4 ? false : true}
                  style={[styles.ButtonClaim,
                    FormVoucher.values['Promo_Code'].length > 4 ?
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