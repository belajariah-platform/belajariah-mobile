import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import {
  Icon,
  Radio,
  Avatar,
  Datepicker,
  RadioGroup,
} from '@ui-kitten/components'
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import {
  Buttons,
  TextBox,
  ModalNoConnection,
} from '../../../components'

import { Response } from '../../../utils'
import { Images } from '../../../assets'
import { Alerts } from '../../../components'
import { USER_INFO } from  '../../../action'
import { MentorAPI, UserAPI } from '../../../api'

import { styles } from './instructor-edit-profile.style'

const CalendarIcon = (props) => <Icon {...props} name='calendar' />

const InstructorEditProfile = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [connectStatus, setconnectStatus] = useState(false)
  const { userInfo } = useSelector((state) => state.UserReducer)

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    fetchDataMentor(userInfo.Email)
    setconnectStatus(!connectStatus)
  }

  const FormPersonal = useFormik({
    initialValues: {
      Full_Name: userInfo.Full_Name,
      Phone: userInfo.Phone,
      Profesion: userInfo.Profession,
      Gender: userInfo.Gender,
      Birth: userInfo.Birth || new Date(),
      Province: userInfo.Province,
      City: userInfo.City,
      Address: userInfo.Address,
    },
    onSubmit: async (values) => {
      try {
        const response = await UserAPI.UpdateProfile(values)
        if (response.status === Response.SUCCESS) {
          Alerts(true, 'Profil berhasil diubah')
          fetchDataMentor(userInfo.Email)
        } else {
          NetInfo.fetch().then(res => {
            setconnectStatus(!res.isConnected)
          })
        }
      } catch (error) {
        return error
      }
    },
  })

  const fetchDataMentor = async (email) => {
    try {
      const response = await MentorAPI.GetMentor(email)
      if (response.status === Response.SUCCESS) {
        await dispatch({
          type: USER_INFO,
          user: response.data.result,
        })
      }
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    fetchDataMentor(userInfo.Email)
  }, [])

  const filterText = (value) => {
    let valueFilter
    value.length > 25
      ? (valueFilter = value.split(' ').slice(0, 3).join(' '))
      : (valueFilter = value)
    return valueFilter
  }

  return (
    <>
      <View style={styles.containerView}>
        <ModalNoConnection
          isVisible={connectStatus}
          retry={() => retryConnection()}
          backdropPress={() => togglemodalNoConnection()}
          backButtonPress={() => togglemodalNoConnection()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerAvatar}>
            <ImageBackground source={Images.AvatarBorder} style={styles.avatarBorder}>
              <Avatar
                style={styles.avatar}
                source={userInfo.Image_Filename == '' ?
                  Images.ImageProfileDefault : { uri : userInfo.Image_Filename }}
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
              disabled={true}
              form={FormPersonal}
              placeholder='Nama lengkap'
            />
            <Text style={styles.containerText}>Nomor Telepon</Text>
            <TextBox
              name='Phone'
              form={FormPersonal}
              placeholder='+62'
              keyboardType='phone-pad'
            />
            <Text style={styles.containerText}>Profesi</Text>
            <TextBox
              name='Profesion'
              form={FormPersonal}
              placeholder='Profesi'
            />
            <Text style={styles.containerText}>Jenis Kelamin</Text>
            <RadioGroup
              style={styles.containerRadio}
              selectedIndex={FormPersonal
                .values['Gender'] == 'Laki-laki' ? 0 : 1}
              onChange={(e) => FormPersonal
                .setFieldValue('Gender', e == 0 ?
                  'Laki-laki' : 'Perempuan'
                )}>
              <Radio style={styles.containerInputRadio}>Laki-laki</Radio>
              <Radio style={styles.containerInputRadio}>Perempuan</Radio>
            </RadioGroup>
            <Text style={styles.containerText}>Tanggal Lahir</Text>
            <Datepicker
              disabled
              accessoryRight={CalendarIcon}
              style={styles.datePickerInput}
              controlStyle={styles.datePickerControl}
              date={new Date(FormPersonal.values['Birth'])}
            />
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
      </View>
    </>
  )
}

export default InstructorEditProfile
