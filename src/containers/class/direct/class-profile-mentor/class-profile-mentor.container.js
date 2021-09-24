import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
    View,
    Image,
    FlatList,
    ScrollView,
    RefreshControl,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native'

import {
    Buttons,
    Searchbox,
    LoadingView,
    ModalPreference,
} from '../../../../components'
import { Images, Color } from '../../../../assets'

import styles from './class-profile-mentor.style'

const ClassInstructorProfile = (props) => {
    const navigation = useNavigation()
    const { classes, packages, instructor } = props.route.params
    const [modalPreferenceVisible, setmodalPreferenceVisible] = useState(false)
    const toggleModalPreference = () => setmodalPreferenceVisible(!modalPreferenceVisible)
    
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
                    <Image source={instructor.Image_Filepath == '' ? 
                        Images.ImageProfileDefault : { uri : instructor.Image_Filepath }} 
                        style={styles.imageStyleInstructor}
                    />
                </ImageBackground>
                <Text style={styles.TxtTitleInstructor}>{instructor.Full_Name}</Text>
                <Text style={styles.TxtFromInstructor}>Asal {instructor.City}</Text>
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
                            <Text style={styles.TxtDescCard}>Sekolah Tinggi Ilmu Islam dan Bahasa Arab Makasar.</Text>
                            <Text style={styles.TxtDescCard}>PUSDIKLAT Da’i wahdah islamiyah Makasar.</Text>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    const ScheduleInstructor = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <Images.IconTimeGreen.default  
                            width={24}
                            height={22}
                        />
                        <View style={styles.ViewTxt}>
                            <Text style={styles.TxttitleCard}>Jadwal Pengajar</Text>
                            <View>
                            {instructor.Schedule && instructor.Schedule.map((item, subindex) => {
                                return (
                                    <View key={subindex} style={styles.ViewSchedules}>
                                        <Text style={styles.TxtSchedule}>{item.Shift_Name} </Text>
                                        <View style={styles.ViewSchedule}>
                                            <Text>({item.Start_At} - </Text>
                                            <Text>{item.End_At})</Text>
                                        </View>
                                    </View>                            
                                )
                            })}
                            </View>
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
                            <Text style={styles.TxttitleCard}>Sistem Belajar</Text>
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
                            { classes : classes, packages : packages, instructor : instructor } )
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
                <ScheduleInstructor />
                <SystemInstructor />
            </ScrollView>
            <BtnInstructor />
        </View> 
        <ModalPreference
            isVisible={modalPreferenceVisible}
            backdropPress={() => toggleModalPreference()}
            backButtonPress={() => togglemodalPreference()}
        />
        </>
    )
}

ClassInstructorProfile.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object,
}

export default ClassInstructorProfile