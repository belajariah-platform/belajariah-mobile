import React from 'react'
import { Card } from 'react-native-elements'
import { Text } from '@ui-kitten/components'
import {
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../assets'
import { Searchbox } from '../../../components'
import { styles } from './admin-instructor.style'

const AdminInstructor = () => {
  const state = [
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
    { fullname : 'Ustadz Maulana Al-Hafidz', images: Images.ImageProfileDefault, email : 'maulana@gmail.com' },
  ]

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
          onPress={() => console.log('icon')}>
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
          contentContainerStyle={{ paddingBottom: 92 }}
          showsVerticalScrollIndicator ={false}
          keyExtractor={(item, index) =>  index.toString()}
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
              <TouchableOpacity>
                <Text style={styles.TxtButtonDetail}>Details Profile</Text>
              </TouchableOpacity>
            </Card>
          )}
        />
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
        <ViewHeader />
        <CardInstructor />
      </ImageBackground>
    </View>
  )
}

export default AdminInstructor
