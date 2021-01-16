import { useFormik } from 'formik'
import React, { useState } from 'react'
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

import { Images } from '../../assets'
import { Buttons, TextBox } from '../../components'

import { styles } from './profile.style'

const CalendarIcon = (props) => <Icon {...props} name='calendar' />

const ProfileEdit = () => {
  const navigation = useNavigation()

  const strName = 'Rico Darmawan'
  const [date, setDate] = useState(new Date())
  const [selectedIndex, setSelectedIndex] = useState(0)

  const FormPersonal = useFormik({
    initialValues: {
      fullname: '',
      phone: '',
      profesion: '',
      gender: '',
      birth: '',
      province: '',
      city: '',
      address: '',
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

  return (
    <>
      <View style={styles.containerView}>
        <ScrollView>
          <View style={styles.containerAvatar}>
            <TouchableOpacity style={styles.containerTouch}>
              <Avatar
                source={Images.AvatarProfile}
                style={styles.Avatar}/>
            </TouchableOpacity>
            <Text style={styles.containerTitleAvatar}>
              {filterText(strName)}
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
              selectedIndex={selectedIndex}
              style={styles.containerRadio}
              onChange={(index) => setSelectedIndex(index)}>
              <Radio style={styles.containerInputRadio}>Laki-laki</Radio>
              <Radio style={styles.containerInputRadio}>Perempuan</Radio>
            </RadioGroup>
            <Text style={styles.containerText}>Tanggal Lahir</Text>
            <Datepicker
              date={date}
              accessoryRight={CalendarIcon}
              style={styles.datePickerInput}
              controlStyle={styles.datePickerControl}
              onSelect={(nextDate) => setDate(nextDate)}
            />
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
      </View>
    </>
  )
}

export default ProfileEdit
