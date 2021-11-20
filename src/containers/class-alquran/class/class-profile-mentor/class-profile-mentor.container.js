import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
    View,
    Image,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'

import {
    Buttons,
} from '../../../../components'
import { Images, Color } from '../../../../assets'

import styles from './class-profile-mentor.style'

const ClassProfileMentorQuran = (props) => {
    const navigation = useNavigation()
    const { DetailClass, instructor } = props.route.params

    const Header = () => {
        return (
          <View style={styles.containerHeaderProfile}>
            <View style={styles.flexHeaderInProfile}>
              <View style={styles.flexHeaderProfile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBackProfile} />
                </TouchableOpacity>
                <Text style={styles.textTitleHeader}>Profile Pengajar</Text>
              </View>
            </View>
            <View style={styles.semiBoxProfile} />
          </View>
        )
    }

    const TitleInstructor = () => {
        return (
            <View style={styles.ViewTitle}>
                <ImageBackground source={Images.BackgroundMentor} style={styles.BackgroundImg}>
                    <Image source={instructor.Gender == 'Perempuan' ? 
                        Images.IllustrasiProfileUstadzah : instructor.ImageProfile == '' ?
                        Images.IllustrasiProfileUstadz : { uri : instructor.ImageProfile } } 
                        style={styles.imageStyleInstructor}
                    />
                </ImageBackground>
                <Text style={styles.TxtTitleInstructor}>{instructor.Full_Name}</Text>
                <Text style={styles.TxtFromInstructor}>Asal {instructor.City}</Text>
                <View style={styles.ViewRating}>
                    <Text style={styles.TxtRating}>{instructor.Rating}</Text>
                    <Images.Star.default />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ClassReviewMentor')
                    }}>
                        <Text style={styles.TxtAllReview}>(2 Ulasan)</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const DescInstructor = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <Images.IconDescGreen.default  
                            width={24}
                            height={22}
                        />
                        <View style={styles.ViewTxt}>
                            <Text style={styles.TxttitleCard}>Deskripsi & Pengalaman Mengajar Dirosa</Text>
                            <Text style={styles.TxtDescCard}>{instructor.Description}</Text>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    const StudyInstructor = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <Images.IconStudyGreen.default  
                            width={24}
                            height={22}
                        />
                        <View style={styles.ViewTxt}>
                            <Text style={styles.TxttitleCard}>Pendidikan</Text>
                            {instructor.Mentor_Experience && instructor.Mentor_Experience.map((item, index) => {
                                return (
                                    <View key={index} style={{flexDirection: 'row'}}>
                                        <Text>❐ </Text>
                                        <Text style={styles.TxtDescStudy}>{item.Experience}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    const SystemInstructor = () => {
        return (
            <View style={{marginBottom: 10,}}>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <Images.IconSystemGreen.default  
                            width={24}
                            height={22}
                        />
                        <View style={styles.ViewTxt}>
                            <Text style={styles.TxttitleCardOther}>Sistem Belajar</Text>
                            <Text style={styles.TxtDescSystem}>{instructor.Learning_Method_Text}</Text>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    const BtnInstructor = () => {
        return (
            <View style={styles.ViewBtn}>
                    <Buttons 
                        title='Pilih Pengajar'
                        style={styles.BtnPengajar}
                        textStyle={styles.TxtButton}
                        onPress={() => {
                            navigation.navigate('ClassPreference',
                            { instructor : instructor } )
                        }}
                    />
            </View>
        )
    }

    return (
        <>
        <View style={styles.containerMainProfile}>
            <Header />
            <ScrollView>
                <TitleInstructor />
                <DescInstructor />
                <StudyInstructor />
                <SystemInstructor />
            </ScrollView>
            <BtnInstructor />
        </View> 
        </>
    )
}

ClassProfileMentorQuran.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object,
}

export default ClassProfileMentorQuran