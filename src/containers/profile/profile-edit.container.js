import moment from 'moment'
import { useFormik } from 'formik'
import RNFetchBlob from 'rn-fetch-blob'
import { RNCamera } from 'react-native-camera'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import DocumentPicker from 'react-native-document-picker'
import {
  Icon,
  Radio,
  RadioGroup,
  Datepicker,
} from '@ui-kitten/components'
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  BackHandler,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../assets'
import { Response } from '../../utils'
import { USER_INFO } from  '../../action' 
import { Alerts, ModalNoConnection } from '../../components'
import { UserAPI, UploaderAPI, CountryCodeAPI } from '../../api'
import { Buttons, TextBox, ModalInfo, ModalDate } from '../../components'

import { styles } from './profile-edit.style'
import { Avatar } from 'react-native-elements'

const CalendarIcon = (props) => <Icon {...props} name='calendar' />

const ProfileEdit = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { userInfo } = useSelector((state) => state.UserReducer)

  const [countryCode, setCountryCode] = useState([])
  const [dataCapture, setDataCapture] = useState({})
  const [openCamera, setOpenCamera] = useState(false)
  const [pictureTaken, setPictureTaken] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [modalDateVisible, setModalDateVisible] = useState(false)

  // const [previewImage, setPreviewImage] = useState(false)
  // const [cameraVisible, setCameraVisible] = useState(false)

  const toggleModal = () => setModalVisible(!modalVisible)
  const toggleModalDate = () => setModalDateVisible(!modalDateVisible)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

  const retryConnection = () => {
    fetchDataUser(userInfo.Email)
    setconnectStatus(!connectStatus)
  }

  // console.log(moment(new Date()).format('LL'))

  const FormPersonal = useFormik({
    initialValues: {
      User_Code : userInfo.Code,
      Full_Name: userInfo.Full_Name,
      Profession: userInfo.Profession,
      Phone: userInfo.Phone == 0 ? '' : userInfo.Phone,
      Gender: userInfo.Gender,
      Birth: new Date(),
      Province: userInfo.Province,
      City: userInfo.City,
      Address: userInfo.Address,
      Country_Number_Code: userInfo.Country_Number_Code,
      Number_Code: '',
    },
    onSubmit: async (values) => {
      if (values.Phone.charAt(0) == '0') {
        Alerts(false, 'Format nomor telepon tidak sesuai')
      } else if (values.Phone.charAt(0) != '0' && values.Phone.length > 0 && values.Country_Number_Code == '') {
        Alerts(false, 'Kode negara belum dipilih')
      } else {
      try {
        const data = {
          User_Code : values.User_Code,
          Full_Name : values.Full_Name,
          Profession : values.Profession,
          Phone: Number(values.Phone), 
          Gender : values.Gender,
          Birth: new Date(),
          Province : values.Province,
          City : values.City,
          Address : values.Address,
          Country_Number_Code: values.Country_Number_Code,
        }
        const response = await UserAPI.UpdateProfile(data)
        if (response.data.result) {
          fetchDataUser(userInfo.Email)
          navigation.navigate('Profile', Alerts(true, 'Profil berhasil diubah')) 
        }
      } catch (error) {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
        return error
      }
    }}
  })

  const fetchDataCountryCode = async () => {
    try {
      const response = await CountryCodeAPI.GetAllCountryCode()
      if (response.status === Response.SUCCESS) {
        setCountryCode(response?.data?.message?.data ?? [])
        response?.data?.message?.data 

      } 
    } catch (err) {
      return err
    }
  }

  const fetchDataUser = async (email) => {
    try {
      const response = await UserAPI.GetUser(email)
      if (response.status === Response.SUCCESS) {
        await dispatch({
          type: USER_INFO,
          user: response.data.result,
        })
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    fetchDataUser(userInfo.Email)
    fetchDataCountryCode()
  }, [])

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
      const path = `${RNFetchBlob.fs.dirs.CacheDir}/pict-bljrh.png`
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
        console.log('error', error)
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
      formData.append('file', '')
      formData.append('action', 'SINGLE_UPLOADER')
      const response = UploaderAPI.UploaderFile(formData)
      console.log('HELLO', response)
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
            activeOpacity={0.5}
            style={styles.iconChoose}
            onPress={() => {
              setModalVisible(false)
              setOpenCamera(true)
            }}>
            <Images.IconTakeCamera.default width={40} height={40}/>
            <Text style={styles.textChoose}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
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

  const dataCountryCode = props => {
    return (
     <TouchableOpacity 
       style={{marginBottom: 20}} 
       onPress={() => {
          FormPersonal.setFieldValue('Number_Code', props.number_code)
          FormPersonal.setFieldValue('Country_Number_Code', props.code)
          setModalVisible(false)
       }}
       >
       <View style={styles.containerCountry}>
         <Image
             source={{uri : props.flag}}
             style={styles.ImageFlag}
         />
         <Text>{props.country}</Text>
         <Text style={styles.textCountry}>+{props.number_code}</Text>
       </View>
         <View style={styles.divider}/>
     </TouchableOpacity>
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
                      activeOpacity={1}
                      style={styles.avatar}
                      // onPress={() =>  setModalVisible(true)}
                      source={userInfo.Image_Profile == '' ?
                        Images.ImageProfileDefault : { uri : userInfo.Image_Profile }}
                    />
                  </ImageBackground>
                  <Text style={styles.containerTitleAvatar}>
                    {filterText(FormPersonal.values['Full_Name'])}
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
                    name='Full_Name'
                    form={FormPersonal}
                    placeholder='Nama lengkap'
                  />
                  <Text style={styles.containerText}>Nomor Telepon</Text>
                  <View style={{ flexDirection : 'row' }}>
                      <TouchableOpacity 
                        onPress={toggleModal} 
                        style={styles.inputCountry}
                      >
                        <View>
                          {FormPersonal.values['Number_Code'] == '' ? 
                            <Text style={styles.textCountry}>Kode Negara</Text> 
                            : 
                            <View style={{flexDirection: 'row'}}>
                             <Text style={styles.textCountry}>+{FormPersonal.values['Number_Code']}</Text> 
                          </View>
                          }
                        </View>
                    </TouchableOpacity>
                    <TextBox
                      name='Phone'
                      form={FormPersonal}
                      placeholder='Telepon'
                      keyboardType='phone-pad'
                      customStyle={styles.phoneTwo}
                    />
                  </View>
                  <Text style={styles.containerText}>Profesi</Text>
                  <TextBox
                    name='Profession'
                    form={FormPersonal}
                    placeholder='Profesi'
                  />
                  <Text style={styles.containerText}>Jenis Kelamin</Text>
                  <RadioGroup
                    style={styles.containerRadio}
                    selectedIndex={FormPersonal
                      .values['Gender'] != 'Laki-laki' ? 1 : 0}
                    onChange={(e) => FormPersonal
                      .setFieldValue('Gender', e == 0 ?
                        'Laki-laki' : 'Perempuan'
                      )}>
                    <Radio style={styles.containerInputRadio}>Laki-laki</Radio>
                    <Radio style={styles.containerInputRadio}>Perempuan</Radio>
                  </RadioGroup>
                  <Text style={styles.containerText}>Tanggal Lahir</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setModalDateVisible(true)}>
                    <Datepicker
                      disabled
                      accessoryRight={CalendarIcon}
                      style={styles.datePickerInput}
                      controlStyle={styles.datePickerControl}
                      date={new Date()}
                    />
                  </TouchableOpacity>
                  <Text style={styles.containerText}>Provinsi</Text>
                  <TextBox
                    name='Province'
                    form={FormPersonal}
                    placeholder='Provinsi'
                  />
                  <Text style={styles.containerText}>Kota</Text>
                  <TextBox name='City' form={FormPersonal} placeholder='Kota' />
                  <Text style={styles.containerText}>Alamat</Text>
                  <TextBox name='Address' form={FormPersonal} placeholder='Alamat' />
                  <View style={styles.fixToText}>
                    <Buttons
                      title='Simpan'
                      style={styles.containerButton}
                      onPress={FormPersonal.handleSubmit}
                    />
                  </View>
                </View>
              </ScrollView>
            )}
      </View>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <ModalInfo
        isVisible={modalVisible}
        containerStyle={{ height:125 }}
        renderItem={<ChooseTakeImage />}
        backdropPress={() => toggleModal()}
        backButtonPress={() => toggleModal()}
      />
      <ModalDate
        mode='date'
        titleBtn='Atur Tanggal'
        isVisible={modalDateVisible}
        date={new Date()}
        backdropPress={() => toggleModalDate()}
        dateChange={(e) => FormPersonal.setFieldValue('Birth', e)}
      />
       <ModalInfo
          isVisible={modalVisible}
          containerStyle={{height:'70%'}}
          backdropPress={() => toggleModal()}
          backButtonPress={() => toggleModal()}
          renderItem={
            <View style={{paddingTop:40}}>
               <FlatList
                  data={countryCode}
                  style={{ width:'100%' }}
                  onEndReachedThreshold={0.1}
                  showsVerticalScrollIndicator ={false}
                  contentContainerStyle={{ paddingBottom: 20 }}
                  keyExtractor={(item, index) =>  index.toString()}
                  renderItem={({ item, index }) => dataCountryCode(item, index)}
                />
            </View>
          }
        />
    </>
  )
}

export default ProfileEdit