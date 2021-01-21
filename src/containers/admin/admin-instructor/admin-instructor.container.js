import React from 'react'
import { View, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native'
import { styles } from './admin-instructor.style'
import { Text } from '@ui-kitten/components'
import { Images } from '../../../assets'
import { TextBox } from '../../../components'
import { Card } from 'react-native-elements'

const AdminInstructor = () => {

  const ViewHeader = () => {
    return(
      <View>
        <View style={styles.containerHeader}>
          <View style={{top: '3%', left: '100%',}}>
            <TextBox  
            placeholder='Temukan user dengan cepat'
            />
          </View>
          <TouchableOpacity>
            <Images.Filter.default
              width={40}
              height={40}
              style={styles.iconFilter}
            />
          </TouchableOpacity>
      </View>
      </View>
    )
  }

  const CardInstructor = () => {
    return(
      <View>
        <Card containerStyle={styles.cardInstructor}>
          <View style={styles.ViewInstructorInfo}>
            <Image source={Images.AvatarUstadz} style={styles.ImgUstadz}/>
            <View>
              <Text style={styles.TxtTitleInstructor}>Ustadz Maulana Al-Hafidz</Text>
              <Text>example@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.TxtButtonDetail}>Details Profile</Text>
          </TouchableOpacity>
        </Card>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
          <ViewHeader />
          <ScrollView>
            <CardInstructor />
          </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default AdminInstructor
