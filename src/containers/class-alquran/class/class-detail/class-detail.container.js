import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ImageBackground, View, ScrollView} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import {Response} from '../../../../utils'
import {UserClassAPI} from '../../../../api'
import { Images, Color } from '../../../../assets'
import { Buttons, LoadingView } from '../../../../components'

import ClassListMentorQuran from './class-list-mentor.container'
import ClassAbout from './class-about.container'
import ClassReviewQuran from './class-review.container'
import styles from './class-detail.style'

const Tab = createMaterialTopTabNavigator()

const ClassDetailQuran = (props) => {
    const navigation = useNavigation()
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)

    const { DetailClass } = props.route.params
    
    const fetchDataUserClass = async () => {
        try {
            setLoading(true)
          const response = await UserClassAPI.GetAllUserClassQuran(DetailClass.code)
          if (response.status === Response.SUCCESS) {
            setState(response.data.message.data)
          } else {
            NetInfo.fetch().then(res => {
              setconnectStatus(!res.isConnected)
            })
          }
        } catch (err) {
          return err
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchDataUserClass()
    }, [])

    const Header = () => {
        return (
            <View style={styles.containerHeaderProfile}>
                <ImageBackground source={{uri : DetailClass.class_image_header}} style={styles.HeaderClass}>
                    <View style={styles.flexHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Images.ButtonBack.default style={styles.iconBack} />
                    </TouchableOpacity>
                    <Text style={styles.textTitleWhite}>Kelas {DetailClass.class_initial}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.semiBox}/>   
            </View>
        )
    }

    return (
        <View style={styles.flexFull}>
            <Header />

            {loading ? <LoadingView color='#FF66A1'/> 
            : (
                <>
                    <Tab.Navigator
                        style={styles.tabContainerStyle}
                        tabBarOptions={{
                            inactiveTintColor: Color.white,
                            labelStyle: styles.labelStyle,
                            activeTintColor: Color.white,
                            indicatorStyle: {...styles.indicatorStyle, 
                                left : state && state.length == 0 ? '8.6%' : '14.6%'},
                            style: {...styles.tabBarStyle, backgroundColor: DetailClass.color_path},
                    }}>
                        <Tab.Screen
                            name='ClassAbout'
                            options={{ title: 'Tentang Kelas' }}>
                            {() => <ClassAbout params={DetailClass}/>}
                        </Tab.Screen>
                        {state && state.length == 0 &&  <Tab.Screen
                            name='ClassListMentorQuran'
                            options={{ title: 'Pengajar' }}>
                            {() => <ClassListMentorQuran params={DetailClass}/>}
                        </Tab.Screen>}
                        <Tab.Screen
                            name='ClassReviewQuran'
                            options={{ title: 'Ulasan' }}>
                            {() => <ClassReviewQuran params={DetailClass}/>}
                        </Tab.Screen>

                    </Tab.Navigator>
                    <View style={styles.ViewButton}>
                        <Buttons 
                            title={state && state.length == 0 ? 'Berlangganan Sekarang' : 'Temukan Guru Ngaji'} 
                            style={{...
                                styles.StyleBtn, backgroundColor: DetailClass.color_path}} 
                            textStyle={{...styles.StyleTxtBtn, marginTop : state && state.length == 0 ?  5 : null}}
                            icon={ state && state.length == 0 ? <Images.IconCheckout.default/> : <Images.IconSearchWhite.default/>}
                            onPress={() => {
                                state && state.length == 0 
                                ? navigation.navigate('TransactionMethodQuran', {DetailClass : DetailClass})
                                : navigation.navigate('ClassListMentorQuran', {DetailClass : DetailClass, UserClass : state})
                            }}
                        />
                    </View>
                </>
            )}
        </View>
    )
}

export default ClassDetailQuran