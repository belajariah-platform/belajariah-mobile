import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { Text } from '@ui-kitten/components'
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
import { Searchbox, ModalFilterAdminPageUstadz } from '../../../components'
import { styles } from './admin-instructor.style'

const AdminInstructor = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)

  const state = [
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
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

  const ViewHeader = () => {
    return(
      <View style={styles.containerHeader}>
        <View
          style={{ flex : 1 }}>
          <Searchbox
            size='medium'
            placeholder={'Temukan instruktur'}
            onFocus={() => console.log('hello')}
            style={styles.searchbox}
          />
        </View>
        <TouchableOpacity
          style={styles.iconFilter}
          onPress = {toggleModal}>
          <Images.Filter.default
            width={20}
            height={20}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const CardInstructor = () => {
    return(
      <View>
        <FlatList
          data={state}
          style={{ width:'100%' }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          onEndReached={(e) => onLoadMore(e)}
          showsVerticalScrollIndicator ={false}
          contentContainerStyle={{ paddingBottom: 92 }}
          keyExtractor={(item, index) =>  index.toString()}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
          renderItem={({ item, index }) => (
            <Card
              key={index}
              containerStyle={styles.cardInstructor}>
              <View style={styles.ViewInstructorInfo}>
                <Image source={item.images} style={styles.ImgUstadz}/>
                <View style={{ flex : 1 }}>
                  <Text style={styles.TxtTitleInstructor}>{item.fullname}</Text>
                  <Text style={styles.email}>{item.email || 'example@gmail.com'}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AdminProfileInstructor', item)}>
                <Text style={styles.TxtButtonDetail}>Detail Profil</Text>
              </TouchableOpacity>
            </Card>
          )}
        />
      </View>
    )
  }

  return (
    <>
    <ModalFilterAdminPageUstadz
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
      />
    <View style={styles.containerMain}>
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
        <ViewHeader />
        <CardInstructor />
      </ImageBackground>
    </View>
    </>
  )
}

export default AdminInstructor
