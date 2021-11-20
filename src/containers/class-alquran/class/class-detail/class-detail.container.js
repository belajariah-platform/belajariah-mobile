
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ImageBackground, View, ScrollView} from 'react-native'

import { Images, Color } from '../../../../assets'
import { Buttons } from '../../../../components'
import styles from './class-detail.style'

const ClassDetailQuran = (props) => {
    const navigation = useNavigation()
    const { DetailClass } = props.route.params
    const Header = () => {
        return (
            <View style={styles.containerHeaderProfile}>
                <ImageBackground source={{uri : DetailClass.class_image}} style={styles.HeaderClass}>
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

    const Desc = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyle}>
                    <Text style={styles.TxtTitleDesc}>Deskripsi Kelas {DetailClass.class_initial}</Text>
                    <Text style={styles.TxtDesc}>{DetailClass.class_description}</Text>
                </Card>
            </View>
        )
    }

    const BenefitClass = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyle}>
                    <Text style={styles.TxtTitleDesc}>Benefit</Text>
                    {DetailClass.class_benefit && DetailClass.class_benefit.map((subItem, index) => {
                    return (
                        <View key={index} style={styles.ViewBenefits}>
                            <Text>✔</Text>
                            <Text style={styles.TxtBenefits}>{subItem.description}</Text>
                        </View>
                    )
                    })}
                </Card>
            </View>
        )
    }

    return (
        <View style={styles.flexFull}>
            <Header />
            <ScrollView>
                <Desc />
                <BenefitClass />
            </ScrollView>
            <View style={styles.ViewButton}>
                <Buttons 
                    title='Beli Kelas' 
                    style={{...
                        styles.StyleBtn, Color: DetailClass.color_path}} 
                    textStyle={styles.StyleTxtBtn}
                    onPress={() => {
                        navigation.navigate('ClassListMentorQuran', {DetailClass : DetailClass})}}
                />
            </View>
        </View>
    )
}

export default ClassDetailQuran