import * as React from 'react'
import { List } from 'react-native-paper';
import { Images } from '../../../assets'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { TextBox } from '../../../components'
import { styles } from './admin-user-all.style'
import { ButtonGradient } from '../../../components'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native'
import { Color, } from '../../../assets'

import AdminUserAll from './admin-user-all.container'
import AdminUserAccept from './admin-user-accept.container'
import AdminUserDecline from './admin-user-decline.container'

const AdminUser = () => {
  const Tab = createMaterialTopTabNavigator()
  

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
            <View>
              <TouchableOpacity>
                <Images.IconDownloadVoice.default 
                  width={100}
                  height={20}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerDescUser}>
            <List.Section>
              <List.Accordion title="Deskripsi Voice" style={{padding: 0, margin: 0, left: 0,}}>
                <View> 
                  <Text>{classData.DescUser}</Text>
                </View>
              </List.Accordion>
            </List.Section>
          </View>
          <View style={styles.ViewButtonActionVoice}>
           <ButtonGradient
              title='Reject'
              style={styles.ButtonAction}
              colors={['#d73c2c','#ff6c5c','#d73c2c']}
            />
            <ButtonGradient
              title='Accept'
              style={styles.ButtonAction}
              onPress={()=> {navigation.navigate('AdminInstructor')}}
            />
          </View>
        </Card>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
        <ViewHeader />
        <Tab.Navigator
          style={styles.tabContainerStyle}
          tabBarOptions={{
          style:{
            backgroundColor: 'transparent',
          },
          inactiveTintColor: Color.white,
          labelStyle: styles.labelStyle,
          activeTintColor: Color.white,
          indicatorStyle: styles.indicatorStyle,
        }}>
        <Tab.Screen
          name='AdminUserAll'
          component={AdminUserAll}
          options={{ title: 'All User' }}
        />
        <Tab.Screen
          name='AdminUserAccept'
          component={AdminUserAccept}
          options={{ title: 'Accept' }}
        />
        <Tab.Screen
          name='AdminUserDecline'
          component={AdminUserDecline}
          options={{ title: 'Decline' }}
        />
      </Tab.Navigator>
    </View>
  )
}

export default AdminUser