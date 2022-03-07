import _ from 'lodash'
import PropTypes from 'prop-types' 
import React, { useState } from 'react' 
import { useSelector } from 'react-redux'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Image, ScrollView } from 'react-native'

import { FormatRupiah } from '../../../../utils'
import { Images, Color } from '../../../../assets'
import { ModalInfo, Buttons } from '../../../../components'

import { styles } from './class-package.style'

const ClassPackage = (props) => {
    const navigation = useNavigation()
    const [modalVisibleCheck, setModalVisibleCheck] = useState(false)
    const { DetailClass, instructor } = props.route.params 
    const { userInfo } = useSelector((state) => state.UserReducer) 

    const DirectToProfile = async () => {
      await setModalVisibleCheck(false)
      await navigation.navigate('ProfileEdit')
    } 

    const ListItem =  _.orderBy(instructor.Mentor_Package, ['Price_Discount'],['desc'])

    const ContentPackage = () => {
      const choosePackage = (item) => {
        if (!userInfo.Address 
          || !userInfo.City 
          || !userInfo.Birth 
          || !userInfo.Phone 
          || !userInfo.Province 
          || !userInfo.Profession
          || !userInfo.Country_Number_Code 
          ) {
            setModalVisibleCheck(true)
          } else { 
            navigation.navigate('TransactionMethodQuran', {instructor : instructor, DetailClass : DetailClass, packages : item})
          }
      }

      return (
        <View style={styles.containerContent}>
           <ScrollView contentContainerStyle={{paddingBottom:100}}>
          {ListItem && ListItem.map((item, index) => {
            let IconPackages 
            item.Type == 'Paket Belajar Private' ?
              (IconPackages = Images.IconPrivate) :
            item.Type == 'Paket Belajar Berdua' || item.Type == 'Paket Belajar Berempat' ? 
              (IconPackages = Images.IconDouple) :
              (IconPackages = Images.IconFamily)
            return (
              <TouchableOpacity key={index} onPress={() => choosePackage(item)}>
                <View style={[styles.containerPaket]}>
                  <View style={styles.viewTitlePaket}>
                    <Image source={IconPackages} style={{width:80, height:80}} />
                    <View style={styles.viewTxtTitlePaket}>
                      <Text style={styles.TxtTitlePackage}>{item.Type}</Text>
                      <Text style={styles.textDescPackage}>{'\u2022'} {item.Total_Members} Peserta</Text>
                      <Text style={styles.textDescPackage}>{'\u2022'} Usia {item.Age_Range} Tahun</Text>
                      <Text style={styles.textDescPackage}>{'\u2022'} {item.Duration}x pertemuan/bulan</Text>
                      <Text style={styles.textDescPackage}>{'\u2022'} Pertemuan {item.Total_Hours} jam</Text>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...styles.TxtPrice, color: Color.transactionBgColor}}>Rp{FormatRupiah(item.Price_Discount)}</Text>
                        <Text style={{...styles.TxtMeet, color: Color.transactionBgColor}}>/Bln</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
            </ScrollView>
        </View>
      )
    }

    const Header = () => {
      return (
        <View style={styles.containerHeaderProfile}>
          <View style={styles.flexHeaderInProfile}>
            <View style={styles.flexHeaderProfile}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Images.ButtonBack.default style={styles.iconBackProfile} />
              </TouchableOpacity>
              <Text style={styles.textTitleHeader}>Pilih Paket</Text>
            </View>
          </View>
          <View style={styles.semiBoxProfile} />
        </View>
      )
  }

    return (
        <View style={styles.container}>
          <Header />
          <ContentPackage />
          <ModalInfo
            hideButtonClose={true}
            isVisible={modalVisibleCheck}
            containerStyle={styles.whitemdl}
            custombackdropStyle={styles.backdropStyle}
            backdropPress={() => setModalVisibleCheck(false)}
            backButtonPress={() => setModalVisibleCheck(false)}
            renderItem={
              <View style={{alignItems:'center', paddingHorizontal: 25, paddingTop:30}}>
                  <Text style={styles.textVersion}>Data profilmu belum lengkap, silahkan lengkapi terlebih dahulu</Text>
                  <Buttons title='Update Profile' onPress={DirectToProfile} />
              </View>
            }
          />
        </View>
    )

}

ClassPackage.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
}

export default ClassPackage