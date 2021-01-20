import * as React from 'react'
import { List } from 'react-native-paper';
import { Images } from '../../../assets'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { TextBox } from '../../../components'
import { styles } from './admin-user-decline.style'
import { ButtonGradient } from '../../../components'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native'

const AdminUserDecline = () => {

    const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const navigation = useNavigation()

  const classData = {
    Nama: 'Rico',
    TimeUser: '8:12 AM (06/01/2021)',
    DescUser: 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum',
  }

  const ViewHeader = () => {
    return(
      <View>
        <View style={styles.containerHeader}>
          <View style={{top: '3%', left: '100%',}}>
            <TextBox  
              placeholder='Temukan user dengan cepat'
            />
          </View>
          <TouchableOpacity onPress={()=> {navigation.navigate('AdminInstructor')}}>
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
            <Image source={Images.AvatarUser} style={styles.ImgUstadz}/>
            <View>
              <Text style={styles.TxtTitleInstructor}>{classData.Nama}</Text>
              <Text style={styles.TxtTimeTitle}>{classData.TimeUser}</Text>
            </View>
            <View style={styles.ViewIconStatus}>
              <Images.IconRejectStatus.default
               width={25}
               height={25}/>
            </View>
          </View>
          <View style={styles.containerButtonAction}>
            <View style={styles.ViewButtonAction}>
              <TouchableOpacity>
                <Images.IconPlay.default 
                  width={20}
                  height={20}
                  style={{marginRight: '4%',}}/>
              </TouchableOpacity>
              <Images.GrafisVoice.default 
                width={100}
                height={20}
                style={{marginRight: '4%',}}/>
              <Text>18.12</Text>
            </View>
            <View style={styles.ViewIconDownload}>
              <TouchableOpacity>
                <Images.IconDownloadVoice.default 
                  width={100}
                  height={20}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerDescUser}>
            <List.Section>
              <List.Accordion title="Deskripsi Voice" titleStyle={styles.textRegular}>
                <View> 
                  <Text>{classData.DescUser}</Text>
                </View>
              </List.Accordion>
            </List.Section>
          </View>
          <TouchableOpacity>
            <Text style={styles.TxtButtonDetail}>Delete</Text>
          </TouchableOpacity>
        </Card>
      </View>
    )
  }

    return (
      <View style={styles.containerMain}>
        <ScrollView>
          <CardInstructor />
        </ScrollView>
      </View>
    )
}

export default AdminUserDecline