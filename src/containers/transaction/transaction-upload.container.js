import moment from 'moment'
import { Text } from '@ui-kitten/components'
import React, { useState } from 'react'
import DocumentPicker from 'react-native-document-picker'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../assets'
import { FormatRupiah } from '../../utils'
import { ButtonGradient, TextBox, ModalInfo } from '../../components'

import styles from './transaction-upload.style'

const TransactionUpload = () => {
  const navigation = useNavigation()
  const [dataImage, setDataImage] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const state = {
    total_price : 10000000,
    created_date : new Date(),
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
          <Text style={styles.textTitle}>Nama pengirim di rekening Bank</Text>
          <TextBox
            placeholder='NAMA LENGKAP'
            customStyle={styles.textInput}
          />
        </View>
        <View style={styles.cardDetail}>
          <Text style={styles.textTitle}>Transfer dari bank</Text>
          <TextBox
            placeholder='NAMA BANK'
            customStyle={styles.textInput}
          />
        </View>
        <View style={styles.cardDetail}>
          <View>
            <Text style={styles.textTitle}>Transfer ke bank</Text>
            <View style={styles.ViewDescBank}>
              <Text style={styles.Txtright}>BNI Syariah</Text>
              <Text style={styles.Txtright}>a/n Belajariah</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardDetail}>
          <View>
            <Text style={styles.textTitle}>Jumlah Transfer</Text>
            <Text style={styles.Txtright}>Rp {FormatRupiah(state.total_price)}</Text>
          </View>
        </View>
        <View style={styles.cardDetail}>
          <View>
            <Text style={styles.textTitle}>Tanggal Transfer</Text>
            <Text style={styles.Txtright}>
              {moment(state.created_date).format('DD MMM YYYY h:mm A')}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  const ButtonSend = () => {
    return (
      <View style={styles.viewButtonFinish}>
        <ButtonGradient
          title='Kirim'
          styles={styles.buttonStyle}
          textStyle={styles.textBuyClass}
          onPress={toggleModal}
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
        <Header />
        <ScrollView
          style={styles.containerScrollView}
          showsVerticalScrollIndicator={false}>
          <ButtonUpload />
          <DescUpload />
          <ButtonSend />
        </ScrollView>
      </View>
      <ModalInfo
        isVisible={modalVisible}
        backdropPress={() => navigation.navigate('Pembayaran')}
        backButtonPress={() => navigation.navigate('Pembayaran')}
        renderItem={<UploadSent/>}
      />
    </>
  )
}

export default TransactionUpload