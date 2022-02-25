import _ from 'lodash'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState } from 'react'
import { useSelector} from 'react-redux'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Image } from 'react-native'

import { FormatRupiah } from '../../../../utils'
import { Images, Color } from '../../../../assets'
import { LoadingView } from '../../../../components'

import {styles} from './class-package.style'

const ClassPackage = (props) => {
    const navigation = useNavigation()
    const { DetailClass, instructor } = props.route.params

    const ContentPackage = () => {
      return (
        <View style={styles.containerContent}>
          <Text style={styles.TxtTitle}>Pilih Paket Kelas {DetailClass.class_initial}</Text>
          {instructor.Mentor_Package && instructor.Mentor_Package.map((item, index) => {
            let IconPackages 
            item.Type == 'Paket Private' ?
              (IconPackages = Images.IconPrivate) :
            item.Type == 'Paket Double' ? 
              (IconPackages = Images.IconDouple) :
              (IconPackages = Images.IconFamily)
            return (
              <TouchableOpacity key={index} onPress={() => {
                navigation.navigate('TransactionMethodQuran', {instructor : instructor, DetailClass : DetailClass, packages : item})}}>
                <View style={[styles.containerPaket]}>
                  <View style={styles.viewTitlePaket}>
                    <Image source={IconPackages} style={{width:80, height:80}} />
                    <View style={styles.viewTxtTitlePaket}>
                      <Text style={styles.TxtTitlePackage}>{item.Type}</Text>
                      <Text style={styles.textDescPackage}>{item.Description}</Text>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...styles.TxtPrice, color: DetailClass.color_path}}>Rp{FormatRupiah(item.Price_Discount)}</Text>
                        <Text style={{...styles.TxtMeet, color: DetailClass.color_path}}>/Bln</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      )
    }

    return (
        <View style={{...styles.container, backgroundColor: DetailClass.color_path}}>
          <ContentPackage />
        </View>
    )

}

ClassPackage.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
}

export default ClassPackage