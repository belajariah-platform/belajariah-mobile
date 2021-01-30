import { useFormik } from 'formik'
import RNFetchBlob from 'rn-fetch-blob'
import React, { useState, useEffect } from 'react'
import { List } from 'react-native-paper'
import { Card } from 'react-native-elements'
import { RNCamera } from 'react-native-camera'
import { RadioButton } from 'react-native-paper'
import { Icon, Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, TouchableOpacity, Image, TextInput, BackHandler } from 'react-native'

import { Images, Color } from '../../assets'
import { FormatRupiah } from '../../utils'
import { ButtonGradient, ModalInfo, Buttons, TextBox } from '../../components'

import styles from './transaction-upload.style'

const TransactionUpload = () => {

    const [openCamera, setOpenCamera] = useState(false)
  const [dataCapture, setDataCapture] = useState({})
  // const [previewImage, setPreviewImage] = useState(false)
  const [pictureTaken, setPictureTaken] = useState(false)

    const navigation = useNavigation()
    const [gateway, setGateway] = useState('ovo')
    const [modalVisible, setModalVisible] = useState(false)
    const toggleModal = () => setModalVisible(!modalVisible)
    const [value, onChangeText] = React.useState('NAMA LENGKAP');


    const classData = {
        questionNama: 'Nama pengirim di rekening Bank',
        questionBank: 'Transfer dari bank',
        questionMetode: 'Metode Transfer',
        questionJumlah: 'Jumlah Transfer',
        questionTime: 'Tanggal Transfer',
      }

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
            <View>
                <Card containerStyle={styles.cardDetail}>
                    <View style={styles.containerButtonUpload}>
                        <TouchableOpacity onPress={() =>  setModalVisible(true)}>
                            <Images.ButtonUploadPembayaran.default />
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
        )
    }

    const Bank = () => {
        return(
            <RadioButton.Group onValueChange={(newGateway) => setGateway(newGateway)} value={gateway}>
                <View style={styles.containerMethod}>
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
                </View>
            </RadioButton.Group>
        )
    }

    const DescUpload = () => {
        return(
            <View>
                <Card containerStyle={styles.cardDetail}>
                    <View>
                        <Text style={styles.TxtQuestionNama}>{classData.questionNama}</Text>
                        <TextInput
                            style={{ height: 40, borderWidth: 0 }}
                            placeholder='NAMA LENGKAP'
                        />
                    </View>
                </Card>
                <Card containerStyle={styles.cardDetail}>
                    <View>
                        <Text style={styles.TxtQuestionNama}>{classData.questionBank}</Text>
                        <List.Accordion
                            title={'Pilih bank yang anda gunakan'}
                            titleStyle={styles.textConsul}
                            descriptionStyle={styles.textMoment}
                            style={styles.containerConsul}>
                                <View>
                                    <Bank />
                                </View>
                        </List.Accordion>
                        <Text style={styles.TxtLeft}>Bank BCA</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardDetail}>
                    <View>
                        <Text style={styles.TxtQuestionNama}>{classData.questionBank}</Text>
                        <View style={styles.ViewDescBank}>
                            <Text style={styles.Txtright}>BNI Syariah</Text>
                            <Text style={styles.Txtright}>a/n Belajariah</Text>
                        </View>
                    </View>
                </Card>
                <Card containerStyle={styles.cardDetail}>
                    <View>
                        <Text style={styles.TxtQuestionNama}>{classData.questionJumlah}</Text>
                        <Text style={styles.Txtright}>IDR10.000.000</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardDetail}>
                    <View>
                        <Text style={styles.TxtQuestionNama}>{classData.questionTime}</Text>
                        <Text style={styles.Txtright}>2021-01-29 00:00 AM</Text>
                    </View>
                </Card>
            </View>
        )
    }

    const ButtonKirim = () => {
        return (
          <View style={styles.viewButtonFinish}>
            <ButtonGradient
              title='Kirim'
              styles={styles.btnBuyClass}
              textStyle={styles.textBuyClass}
              onPress={()=> {navigation.navigate('TransactionConfirm')}}
            />
          </View>
        )
    }

    const CameraOpened = () => {
        return(
          <View style={styles.containerCamera}>
            <RNCamera
              ref={ref=>{
                RNCamera.camera=ref
              }}
              style={styles.camera}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.off}
            />
            <View style={styles.containerToolCamera}>
              <TouchableOpacity onPress={() => {
                setOpenCamera(!openCamera)
                setPictureTaken(!pictureTaken)
              }}>
                <Text style={styles.textCancel}>Batal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => takePicture()}
                style={styles.btnTakePicture}>
                <View/>
              </TouchableOpacity>
              <TouchableOpacity >
                <Images.IconFlipCamera.default/>
              </TouchableOpacity>
    
            </View>
          </View>
        )
      }
    
      const takePicture = async() => {
        if (RNCamera.camera) {
          const options = { quality:0.5, base64: true }
          const data = await RNCamera.camera.takePictureAsync(options)
          const path = `${RNFetchBlob.fs.dirs.CacheDir}/test.png`
          try {
            setPictureTaken(true)
            RNFetchBlob.fs.writeFile(path, data.base64, 'base64')
              .then((res) => {
                setDataCapture({
                  data:data,
                  base64: data.base64,
                  path: path,
                  uri: data.uri,
                  fileSize: res
                })
              })
          } catch (error) {
            console.log('error 2', error)
          }
        }
      }
    
      const PictureTaken = () => {
        return (
          <View style={styles.containerCamera}>
            <View style={{ flex : 1 }}>
              <Image
                style={{ height: '100%', width: '100%' }}
                source={{ uri: dataCapture.uri }}
              />
            </View>
            <View style={styles.containerToolCamera}>
              <TouchableOpacity onPress={() => {
                setOpenCamera(!openCamera)
                setPictureTaken(!pictureTaken)
              }}>
                <Text style={styles.textCancel}>Batal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPictureTaken(!pictureTaken)
                }}
                style={styles.btnCancel}>
                <Images.IconCancelCamera.default/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textCancel}>Oke</Text>
              </TouchableOpacity>
            </View>
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
    
      const ChooseTakeImage = () => {
        return (
          <View style={{ flexDirection : 'column' }}>
            <Text style={styles.textTitleChoose}>Pilih foto pembayaran</Text>
            <View  style={{ flexDirection : 'row', paddingRight : '38%' }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.iconChoose}
                onPress={() => {
                  setModalVisible(false)
                  setOpenCamera(true)
                }}>
                <Images.IconTakeCamera.default width={40} height={40}/>
                <Text style={styles.textChoose}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.iconGallery}
                onPress={() => onClickChooseFile()}
              >
                <Images.IconOpenGallery.default width={40} height={40}/>
                <Text style={styles.textChoose}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    
    
      useEffect(() => {
        const backAction = () => {
          if(openCamera && !pictureTaken) {
            setOpenCamera(false)
          } else if(openCamera && pictureTaken) {
            setOpenCamera(false)
            setPictureTaken(false)
          }
          if(!openCamera && !pictureTaken) {
            return false
          } else {
            return true
          }
        }
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction
        )
        return () => backHandler.remove()
      }, [openCamera, pictureTaken])

    return (
    <>
    <ModalInfo
        isVisible={modalVisible}
        containerStyle={{ height:125 }}
        renderItem={<ChooseTakeImage />}
        backdropPress={() => toggleModal()}
      />
    <View style={styles.containerMain}>
        <Header />
        <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
            <ButtonUpload />
            <DescUpload />
            <ButtonKirim />
        </ScrollView>
    </View>
    </>
    )
}

export default TransactionUpload