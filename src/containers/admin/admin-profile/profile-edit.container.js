import { useFormik } from 'formik'
import RNFetchBlob from 'rn-fetch-blob'
import { Avatar } from 'react-native-elements'
import { RNCamera } from 'react-native-camera'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import DocumentPicker from 'react-native-document-picker'

import {
  Icon,
  Radio,
  Datepicker,
  RadioGroup,
} from '@ui-kitten/components'

import {
  View,
  Text,
  Image,
  ScrollView,
  BackHandler,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import {
  Buttons,
  TextBox,
  ModalInfo,
  ModalDate,
} from '../../../components'

import { Images } from '../../../assets'
import { styles } from './profile-edit.style'

const CalendarIcon = (props) => <Icon {...props} name='calendar' />

const ProfileEdit = () => {
  const navigation = useNavigation()

  const [dataCapture, setDataCapture] = useState({})
  const [openCamera, setOpenCamera] = useState(false)
  const [pictureTaken, setPictureTaken] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)
  const [modalDateVisible, setModalDateVisible] = useState(false)
  const toggleModalDate = () => setModalDateVisible(!modalDateVisible)
  // const [previewImage, setPreviewImage] = useState(false)
  // const [cameraVisible, setCameraVisible] = useState(false)

  const FormPersonal = useFormik({
    initialValues: {
      fullname: 'Rico Darmawan',
      phone: '082184783116',
      profesion: 'Content Creator',
      gender: 0,
      birth: new Date(),
      province: 'Sumatera Selatan',
      city: 'Palembang',
      address: 'Jl.Ahmad Rivai',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const FormPassword = useFormik({
    initialValues: {
      old_password: '',
      new_password: '',
      confirm_password: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const filterText = (value) => {
    let valueFilter
    value.length > 25
      ? (valueFilter = value.split(' ').slice(0, 3).join(' '))
      : (valueFilter = value)
    return valueFilter
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
        <Text style={styles.textTitleChoose}>Pilih foto profil</Text>
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
      <View style={styles.containerView}>
        {openCamera && !pictureTaken ? (<CameraOpened />)
          : openCamera && pictureTaken
            ? (<PictureTaken />)
            : (
              <ScrollView>
                <View style={styles.containerAvatar}>
                  <ImageBackground source={Images.AvatarBorder} style={styles.avatarBorder}>
                    <Avatar
                      activeOpacity={0.7}
                      source={Images.ImageProfileDefault}
                      onPress={() =>  setModalVisible(true)}
                      style={styles.avatar}/>
                  </ImageBackground>
                  <Text style={styles.containerTitleAvatar}>
                    {filterText(FormPersonal.values['fullname'])}
                  </Text>
                </View>

                <View style={styles.containerViewBg}>
                  <ImageBackground source={Images.BgProfileEdit} style={styles.image}>
                    <TouchableOpacity
                      style={{ width: 50 }}
                      onPress={() => navigation.goBack()}>
                      <Images.ButtonBack.default style={styles.containerButtonBack} />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>

                <View style={styles.containerViewTop}>
                  <Text style={styles.containerTextJudul}>DATA PERSONAL</Text>
                  <Text style={styles.containerText}>Nama Anda</Text>
                  <TextBox
                    name='fullname'
                    form={FormPersonal}
                    placeholder='Nama lengkap'
                  />
                  <Text style={styles.containerText}>Nomor Telepon</Text>
                  <TextBox
                    name='phone'
                    form={FormPersonal}
                    placeholder='+62'
                    keyboardType='phone-pad'
                  />
                  <Text style={styles.containerText}>Profesi</Text>
                  <TextBox
                    name='profesion'
                    form={FormPersonal}
                    placeholder='Profesi'
                  />
                  <Text style={styles.containerText}>Jenis Kelamin</Text>
                  <RadioGroup
                    style={styles.containerRadio}
                    selectedIndex={FormPersonal.values['gender']}
                    onChange={(e) => FormPersonal.setFieldValue('gender', e)}>
                    <Radio style={styles.containerInputRadio}>Laki-laki</Radio>
                    <Radio style={styles.containerInputRadio}>Perempuan</Radio>
                  </RadioGroup>
                  <Text style={styles.containerText}>Tanggal Lahir</Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setModalDateVisible(true)}>
                    <Datepicker
                      disabled
                      accessoryRight={CalendarIcon}
                      style={styles.datePickerInput}
                      controlStyle={styles.datePickerControl}
                      date={FormPersonal.values['birth']}
                    />
                  </TouchableOpacity>
                  <Text style={styles.containerText}>Provinsi</Text>
                  <TextBox
                    name='province'
                    form={FormPersonal}
                    placeholder='Provinsi'
                  />
                  <Text style={styles.containerText}>Kota</Text>
                  <TextBox name='city' form={FormPersonal} placeholder='Kota' />
                  <Text style={styles.containerText}>Alamat</Text>
                  <TextBox name='address' form={FormPersonal} placeholder='Alamat' />
                  <View style={styles.fixToText}>
                    <Buttons
                      title='Simpan'
                      style={styles.containerButton}
                      onPress={FormPersonal.handleSubmit}
                    />
                  </View>
                </View>

                <View style={styles.containerViewBottom}>
                  <Text style={styles.containerTextJudul}>UBAH KATA SANDI</Text>
                  <Text style={styles.containerText}>Kata Sandi Lama</Text>
                  <TextBox
                    name='old_password'
                    form={FormPassword}
                    placeholder='Kata sandi lama'
                  />
                  <Text style={styles.containerText}>Kata Sandi Baru</Text>
                  <TextBox
                    name='new_password'
                    form={FormPassword}
                    placeholder='Kata sandi baru'
                  />
                  <Text style={styles.containerText}>Konfirmasi Kata Sandi</Text>
                  <TextBox
                    name='confirm_password'
                    form={FormPassword}
                    placeholder='Konfirmasi kata sandi'
                  />
                  <View style={styles.fixToText}>
                    <Buttons
                      title='Simpan'
                      style={styles.containerButton}
                      onPress={FormPassword.handleSubmit}
                    />
                  </View>
                </View>
              </ScrollView>
            )}
      </View>
      <ModalInfo
        isVisible={modalVisible}
        containerStyle={{ height:125 }}
        renderItem={<ChooseTakeImage />}
        backdropPress={() => toggleModal()}
      />
      <ModalDate
        mode='date'
        isVisible={modalDateVisible}
        date={FormPersonal.values['birth']}
        backdropPress={() => toggleModalDate()}
        dateChange={(e) => FormPersonal.setFieldValue('birth', e)}
      />
    </>
  )
}

export default ProfileEdit