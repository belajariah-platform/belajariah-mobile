import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import DocumentPicker from 'react-native-document-picker'

import {
  View,
  ScrollView,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import {
  Loader,
  TextBox,
  ModalInfo,
  ButtonGradient,
  ModalNoConnection,
} from '../../components'

import { Images } from '../../assets'
import { PaymentAPI } from '../../api'
import { FormatRupiah } from '../../utils'

import styles from './transaction-upload.style'
import { Linking } from 'react-native'

const TransactionUpload = (props) => {
  const item = props.route.params
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [dataImage, setDataImage] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const url = 'https://api.whatsapp.com/send?phone=6285266643607&text=Assalamu\'alaikum%20Admin%20Belajariah,%20saya%20mau%20kirim%20foto%20bukti%20bayar%20kelas%20Belajariah%20%3A%29'

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    setconnectStatus(!connectStatus)
  }

  const FormUpload = useFormik({
    initialValues: {
      ID: item.ID,
      Payment_Method_Code: item.Payment_Method_Code,
      Status_Payment_Code : item.Status_Payment_Code,
      Sender_Bank : '',
      Sender_Name : '',
      Image_Code : 0,
      Total_Transfer : item.Total_Transfer,
      Action : 'Approved',

    },
    onSubmit:   (values) => {
      if (values.Sender_Bank != '' || values.Sender_Name !='') {
        uploadPayment(values)
      } else {
        ToastAndroid.show('Mohon lengkapi semua data',
          ToastAndroid.SHORT)
      }
    },
  })

  const uploadPayment = async (values) => {
    try {
      setLoading(true)
      const response = await PaymentAPI.UploadPayment(values)
      if (response.data.result) {
        // toggleModal()
        const supported = await Linking.canOpenURL(url)

        if(supported) {
          await Linking.openURL(url)
        } else {
          alert('')
        }
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      return error
    }
  }

  const toggleModal = () => setModalVisible(!modalVisible)

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Konfirmasi</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Notice = () => {
    return (
      <View style={styles.ViewNotice}>
        <Images.IconConfirmTransaction.default style={styles.IconNotice}
          />
        <Text style={styles.TxtNotice}>Harap kirim bukti pembayaran anda melalui 
Whatsapp Admin Belajariah : )</Text>
      </View>
    )
  }

  const ButtonUpload = () => {
    return (
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={{ uri : dataImage.uri }}
        style={[styles.cardDetail, styles.customStyle]}
      >
        <View style={styles.containerButtonUpload}>
          <TouchableOpacity onPress={() => onClickChooseFile()}>
            <Images.ButtonUploadPembayaran.default />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }

  const DescUpload = () => {
    return(
      <View>
        <View style={styles.cardDetail}>
          <View>
            <Text style={styles.textTitle}>Transfer ke bank</Text>
            <View style={styles.ViewDescBank}>
              <Text style={styles.Txtright}>{item.Payment_Method}</Text>
              <Text style={styles.Txtright}>a/n {item.Account_Name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardDetail}>
          <View>
            <Text style={styles.textTitle}>Jumlah Transfer</Text>
            <Text style={styles.Txtright}>Rp {FormatRupiah(item.Total_Transfer)}</Text>
          </View>
        </View>
      </View>
    )
  }

  const ButtonSend = () => {
    return (
      <View style={styles.viewButtonFinish}>
        <ButtonGradient
          title='Kirim Bukti Bayar'
          styles={styles.buttonStyle}
          textStyle={styles.textBuyClass}
          onPress={FormUpload.handleSubmit}
        />
      </View>
    )
  }

  const onClickChooseFile = async() => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        // type: [type === 'file' ? DocumentPicker.types.allFiles : DocumentPicker.types.images],
      })
      const formData = new FormData()
      formData.append('file', res)
      setDataImage(formData._parts[0][1])
      console.log(formData._parts[0][1].uri)
      // ServiceRequestAPI.UploadAttachments(formData)
      // .then(async (res) => {
      //   // const { Company, UserName, AgentName } = usersProfileReducer
      //   const data = res.data.data
      //   const result = []
      //   for (let i = 0; i < data.length; i++) {
      //     const attachment = data[i]
      //     const docsObj = {
      //       Sr_Code: item.Code,
      //       Filename: attachment.FileName,
      //       Filesize: attachment.FileSize,
      //       Filetype: 'document',
      //       Path: attachment.Path,
      //       Created_By: 'Control Room - Kariangau (Interport)',
      //     }
      //     try {
      //       await ServiceRequestAPI.InsertAlldoc(docsObj)
      //       docsObj['Sr_Code'] = item.Code
      //       docsObj['Alldoc_Code'] = attachment.Code
      //       docsObj['Attachment_Type_Code'] = attachmentTypeCode
      //       docsObj['Is_Active'] = true

      //       await ServiceRequestAPI.InsertAllAttachment(docsObj)
      //       result.push(docsObj)
      //     } catch (error) {
      //       console.log(error)
      //     }
      //   }
      //   setFileList([...fileList, ...result])
      //   _getAllAttachment()
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err
      }
    }
  }

  const UploadSent = () => {
    return (
      <View style={styles.containerModal}>
        <Text style={styles.textModalTitle}>Bukti pembayaran anda Terkirim</Text>
        <View style={styles.iconComplete}>
          <Images.IconCompletePurple.default width={120} height={120} />
        </View>
        <View style={styles.contentModal}>
          <Text style={styles.textModalDesc}>Terima Kasih, bukti pembayaran anda sedang diproses.
            <Text style={styles.textModalDescBold}> Kelas dapat diakses setelah pembayaran anda kami verifikasi.</Text>
          </Text>
        </View>
      </View>
    )
  }

  return (
    <>
      <View style={styles.containerMain}>
        <Loader loading={loading}/>
        <Header />
        <ScrollView
          style={styles.containerScrollView}
          showsVerticalScrollIndicator={false}>
          {/* <ButtonUpload /> */}
          <Notice />
          <View style={styles.cardDetail}>
            <Text style={styles.textTitle}>Nama pengirim di rekening Bank</Text>
            <TextBox
              form={FormUpload}
              name='Sender_Name'
              placeholder='NAMA LENGKAP'
              customStyle={styles.textInput}
            />
          </View>
          <View style={styles.cardDetail}>
            <Text style={styles.textTitle}>Transfer dari bank</Text>
            <TextBox
              form={FormUpload}
              name='Sender_Bank'
              placeholder='NAMA BANK'
              customStyle={styles.textInput}
            />
          </View>
          <DescUpload />
          <ButtonSend />
        </ScrollView>
      </View>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <ModalInfo
        isVisible={modalVisible}
        backdropPress={() => navigation.navigate('Pembayaran')}
        backButtonPress={() => navigation.navigate('Pembayaran')}
        renderItem={<UploadSent/>}
      />
    </>
  )
}

TransactionUpload.propTypes = {
  route: PropTypes.object,
}

export default TransactionUpload