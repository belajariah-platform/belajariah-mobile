import * as Yup from 'yup'
import moment from 'moment'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'

import { Images } from '../../../../assets'
import { TextBox } from '../../../../components'
import { Response } from '../../../../utils'
import { UserClassAPI } from '../../../../api'

import { styles } from './class-user.style'

const ClassUserQuranScheduleEdit = () => {
  const navigation = useNavigation()

  const FormSubmit = useFormik({
    enableReinitialize: true,
    initialValues: {
        material: '',
        start_date: new Date(),
        finish_date: new Date(),
        mentor_message: '',
        user_message: ''
    },
    // validationSchema: Yup.object({

    // }),
    onSubmit: async (values) => {
       
    },
    })

    const Header = () => {
        return (
          <View style={styles.containerHeaderDetail}>
            <View style={styles.flexHeaderInProfile}>
              <View style={styles.flexHeaderProfile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBackProfile} />
                </TouchableOpacity>
                <Text style={styles.textTitleHeader}>Jadwal</Text>
              </View>
            </View>
            <View style={{...styles.semiBoxDetail, backgroundColor: 'white'}} />
          </View>
        )
    }

    const Content = () => {
        return (
         <View style={{padding: 20}}>
             <Text style={styles.containerText}>
                Materi Belajar
            </Text>
              <TextBox
                name={'material'}
                form={FormSubmit}
                placeholder='8xxxxxx'
            />
            <Text style={styles.containerText}>
                Waktu Mulai
            </Text>
              <TextBox
                name={'start_date'}
                form={FormSubmit}
                placeholder='Waktu Mulai'
            />
            <Text style={styles.containerText}>
                Waktu Selesai
            </Text>
              <TextBox
                name={'finish_date'}
                form={FormSubmit}
                placeholder='Waktu Selesai'
            />
            <Text style={styles.containerText}>
                Catatan untuk pengajar
            </Text>
              <TextBox
                name={'mentor_message'}
                form={FormSubmit}
                placeholder='8xxxxxx'
                // multiline={true}
                // textStyle={{ minHeight: 64 }}
            />
            <Text style={styles.containerText}>
                Catatan untuk santri
            </Text>
              <TextBox
                name={'user_message'}
                form={FormSubmit}
                placeholder='8xxxxxx'
                // multiline={true}
                // textStyle={{ minHeight: 64 }}
            />
         </View>
        )
    }

    return (
        <View style={{...styles.container, backgroundColor: 'white'}}>
          {/* <Header />
          {Content()} */}
          <TextBox
                name={'material'}
                form={FormSubmit}
                placeholder='8xxxxxx'
            />
        </View>
    )
}

export default ClassUserQuranScheduleEdit