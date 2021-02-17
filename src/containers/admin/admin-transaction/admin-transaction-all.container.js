import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Image,
  FlatList,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { Images } from '../../../assets'
import { TimeConvert } from '../../../utils'
import { styles } from './admin-transaction.style'
import { ButtonGradient, Buttons, ModalConfirm, ModalFilterAdmin, ModalFilterUser, ModalFilterUstadz, ModalFilterAdminPageUser } from '../../../components'

const AdminTransactionAll = () => {
  const navigation = useNavigation()
  const [isEmpty, setIsEmpty] = useState(true)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)
  const state = [
    { username : 'Rico Febriansyah', NoInvoice : 'INV/19e451a74e', created_date : new Date(), ClassTitle : 'Tahsin', ClassDescription : 'Belajar Al-Quran dari dasar dengan metode yang mudah dan menyenangkan', BankName : 'Bank Mandiri', jumlahTransfer : 'IDR249.000' },
    { username : 'Riki Jenifer', NoInvoice : 'INV/1ssds223', created_date : new Date(), ClassTitle : 'Fiqih Pernikahan', ClassDescription : 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ', BankName : 'Bank BCA', jumlahTransfer : 'IDR649.000' },
  ]

  const onRefreshing = () => {
    setRefreshing(true)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (e.distanceFromEnd >= 0) {
      setLoading(true)
    }
  }

  const renderFooter = () => {
    return loading ? (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          color='white'
          size={30} />
      </View>
    ) : null
  }

  const ConfirmModal = () => {
    return(
      <View>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={{ ...styles.viewButtonModal, backgroundColor: '#6e248d', }}>
            <Text style={{ ...styles.TxtButtonModal, color: 'white' }}>Ya, saya yakin!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => { setModalVisible(!modalVisible) }}>
          <View style={{ ...styles.viewButtonModal, borderColor: '#6e248d', borderWidth: 1, }}>
            <Text style={{ ...styles.TxtButtonModal, color: '#6e248d', }}>Batal</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const CardUser = (item, index) => {
    return(
      <View key={index}>
        <Card containerStyle={styles.cardUser}>
          <View style={styles.ViewInstructorInfo}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.textUsername}>{item.username}</Text>
              <View style={styles.ViewTop}>
                <Text style={styles.TxtTimeTitle}>
                  {moment(new Date()).format('h:mm A')} ({moment(new Date()).format('L')})
                </Text>
                <Text style={styles.TxtInvoice}>{item.NoInvoice}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ViewLabel}>
            <Text style={styles.TxtLabel}>{item.ClassTitle}</Text>
          </View>
          <View style={styles.viewTxtKelas}>
            <Text style={styles.TxtDescKelas}>{item.ClassDescription}</Text>
          </View>
          <View style={styles.containerButtonAction}>
            <View style={styles.ViewButtonAction}>
              <TouchableOpacity>
                <View style={styles.viewFoto}>
                  <Images.IconGallery.default
                    width={20}
                    height={20}
                    style={{ marginRight: 5 }}/>
                  <Text>Screen_shoot787878xxx...</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Images.IconUnduhanAdmin.default
                  width={30}
                  height={30}
                  style={{ marginRight: 5,  }}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ViewPrice}>
            <Text style={styles.TxtBank}>{item.BankName}</Text>
            <Text style={styles.TxtHarga}>{item.jumlahTransfer}</Text>
          </View>
          <View style={styles.ViewButtonActionVoice}>
            <ButtonGradient
              title='Tolak'
              styles={styles.ButtonAction}
              colors={['#d73c2c', '#ff6c5c', '#d73c2c']}
              onPress = {toggleModal}
            />
            <ButtonGradient
              title='Terima'
              styles={styles.ButtonAction}
              onPress = {toggleModal}
            />
          </View>
        </Card>
      </View>
    )
  }

  const NoTransaction = () => {
    return(
      <View style={styles.containerNoTransaction}>
        <Images.IllustrationNoTransactionAll.default />
        <Text style={styles.TxtNoTransaction}>Belum ada transaksi!</Text>
      </View>
    )
  }

  return (
    <View>
      <ModalConfirm
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
        renderItem={<ConfirmModal />}
      />
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
        {isEmpty?
          <NoTransaction/>
          :
          <FlatList
            data={state}
            style={{ width:'100%' }}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            onEndReached={(e) => onLoadMore(e)}
            showsVerticalScrollIndicator ={false}
            contentContainerStyle={{ paddingBottom: 25 }}
            keyExtractor={(item, index) =>  index.toString()}
            renderItem={({ item, index }) => CardUser(item, index)}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}/>
        }

      </ImageBackground>
    </View>
  )
}

AdminTransactionAll.propTypes = {
  navigation: PropTypes.object,
}

export default AdminTransactionAll