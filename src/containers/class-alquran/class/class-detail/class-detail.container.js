import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ImageBackground, View, ScrollView} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Buttons } from '../../../../components'
import { Images, Color } from '../../../../assets'

import ClassAbout from './class-about.container'
import styles from './class-detail.style'

const Tab = createMaterialTopTabNavigator()

const ClassDetailQuran = (props) => {
    const navigation = useNavigation()
    const { DetailClass } = props.route.params
    const Header = () => {
        return (
            <View style={styles.containerHeaderProfile}>
                <ImageBackground source={{uri : DetailClass.header_image}} style={styles.HeaderClass}>
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

            <Tab.Navigator
                style={styles.tabContainerStyle}
                tabBarOptions={{
                    inactiveTintColor: Color.white,
                    labelStyle: styles.labelStyle,
                    activeTintColor: Color.white,
                    indicatorStyle: styles.indicatorStyle,
                    style: {...styles.tabBarStyle, backgroundColor: DetailClass.color_path},
                }}>
                <Tab.Screen
                    name='ClassAbout'
                    options={{ title: 'Tentang Kelas' }}>
                    {() => <ClassAbout params={DetailClass}/>}
                </Tab.Screen>
                <Tab.Screen
                    name='ClassReview'
                    options={{ title: 'Ulasan' }}>
                    {() => <ClassAbout params={DetailClass}/>}
                </Tab.Screen>

            </Tab.Navigator>
            
            <View style={styles.ViewButton}>
            <Buttons title='Temukan Guru Ngaji' 
                style={{...
                    styles.StyleBtn, backgroundColor: DetailClass.color_path}} 
                textStyle={styles.StyleTxtBtn}
                icon={<Images.IconSearchWhite.default/>}
                onPress={() => {
                    navigation.navigate('ClassListMentorQuran', {DetailClass : DetailClass})}}
                />
            </View>
        </View>
    )
}

export default ClassDetailQuran