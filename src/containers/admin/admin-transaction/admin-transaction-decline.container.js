import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import {
  View,
  FlatList,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import {
  ImageView,
  ModalRepair,
  ModalConfirm,
  ButtonGradient,
} from '../../../components'

import { Images } from '../../../assets'
import { FormatRupiah } from '../../../utils'
import { styles } from './admin-transaction.style'

const AdminTransactionDecline = () => {
  const [action, setAction] = useState('')
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalRepairVisible, setmodalRepairVisible] = useState(false)

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const toggleModalRepair = () => setmodalRepairVisible(!modalRepairVisible)

  const toggleModal = (e) => {
    setAction(e)
    setModalVisible(!modalVisible)
  }

  const state = [
    { username : 'Rico Febriansyah', NoInvoice : 'INV/10gitukd68/03/2021', created_date : new Date(), ClassTitle : 'Tahsin', ClassDescription : 'Belajar Al-Quran dari dasar dengan metode yang mudah dan menyenangkan', BankName : 'Bank Mandiri', jumlahTransfer : 249000, Status_Payment : 'Failed' },
    { username : 'Riki Jenifer', NoInvoice : 'INV/10gitukd68/03/2021', created_date : new Date(), ClassTitle : 'Fiqih Pernikahan', ClassDescription : 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ', BankName : 'Bank BCA', jumlahTransfer : 649000, Status_Payment : 'Canceled' },
  ]

  const handleSubmit = () => {
    if (action == 'approved') {
      console.log('approved')
    } else {
      console.log('rejected')
    }
  }

  const handleRevised = () => {
    console.log('Revised')
  }

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

  const CardUser = (item, index) => {
    return(
      <View key={index}>
        <Card containerStyle={styles.cardUserOpacity}>
          <View style={styles.ViewInstructorInfo}>
            <Text style={{ ...styles.textUsername, opacity : 0.5 }}>{item.username}</Text>
            <View style={{ ...styles.ViewTop, opacity : 0.5 }}>
              <Text style={styles.TxtTimeTitle}>
                {moment(new Date()).format('h:mm A')} ({moment(new Date()).format('L')})
              </Text>
              <Text style={styles.TxtInvoice}>{item.NoInvoice}</Text>
            </View>
          </View>
          <View style={{ ...styles.ViewLabel, opacity : 0.5 }}>
            <Text style={styles.TxtLabel}>{item.ClassTitle}</Text>
          </View>
          <View style={{ ...styles.viewTxtClass, opacity : 0.5 }}>
            <Text style={styles.TxtDescKelas}>{item.ClassDescription}</Text>
          </View>
          <View style={{ ...styles.containerButtonAction, opacity : 0.5 }}>
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
          <View style={{ ...styles.ViewPrice, opacity : 0.5 }}>
            <Text style={styles.TxtBank}>{item.BankName}</Text>
            <Text style={styles.TxtHarga}>{FormatRupiah(item.jumlahTransfer)}</Text>
          </View>
          <View style={styles.ViewButtonReject}>
            {item.Status_Payment == 'Failed' ?
              <ButtonGradient
                title='Perbaiki'
                styles={styles.ButtonAction}
                colors={['#0bb091', '#16c4a4', '#0bb091']}
                onPress = {toggleModalRepair}
              /> :
              <ButtonGradient
                title='Batalkan'
                styles={styles.ButtonActionReject}
                onPress = {() => toggleModal('revised')}
                colors={['#d73c2c', '#ff6c5c', '#d73c2c']}
              />
            }
          </View>
        </Card>
      </View>
    )
  }

  const NoTransaction = () => {
    return(
      <View style={styles.containerNoTransaction}>
        <Images.IllustrationNoTransactionReject.default />
        <Text style={styles.TxtNoTransaction}>
          Belum ada transaksi yang ditolak saat ini
        </Text>
      </View>
    )
  }

  return (
    <View>
      <ModalRepair
        submit={() => handleRevised()}
        isVisible={modalRepairVisible}
        backdropPress={() => toggleModalRepair()}
        backButtonPress={() => toggleModalRepair()}
      />
      <ModalConfirm
        isVisible={modalVisible}
        submit={() => handleSubmit()}
        backdropPress={() => toggleModal()}
        backButtonPress={() => toggleModal()}
      />
      <ImageView
        isVisible={isModalFotoVisible}
        setVisible={() => toggleModalFoto()}
        backButtonPress={() => toggleModalFoto()}
        filepath={'https://www.belajariah.com/img-assets/ImgHeadingBacaanInspiratif.png'}
      />
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
        {state == 0 ?
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

AdminTransactionDecline.propTypes = {
  navigation: PropTypes.object,
}

export default AdminTransactionDecline