import qs from 'qs';
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector} from 'react-redux'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import {
    View,
    Image,
    Linking,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'

import {
    Alerts,
    SVGIcon,
    Buttons,
} from '../../../../components'

import { Config } from '../../../../api'
import { Images } from '../../../../assets'
import { FormatRupiah } from '../../../../utils'

import styles from './class-profile-mentor.style'

const ClassProfileMentorQuran = (props) => {
    const navigation = useNavigation()
    const { userInfo } = useSelector((state) => state.UserReducer)
    const { DetailClass, instructor, UserClass } = props.route.params

    const url = `https://api.whatsapp.com/send?phone=62${parseInt(Config.ADMIN_CONTACT)}&text=Assalamu%27alaikum%20warahmatullahi%20wabarakatuh..%0APerkenalkan%20Admin%2C%20saya%0ANama%20%3A%20${userInfo.Full_Name}%20%0ADomisili%20%3A%20${userInfo.City}%0AKelas%20%3A%20${DetailClass.class_initial}%0AMemilih%20${instructor.Full_Name}%20dari%20aplikasi%20Belajariah%20sebagai%20pengajar%20saya%F0%9F%98%8A`
    
    const _sendWhatsapp = async () => {
        try {
            const supported = await Linking.canOpenURL(url)
            // console.log(supported)
            if(supported) {
              await Linking.openURL(url)
            } else {
              alert('')
            }
        } catch (error) {
          return error
        }
    }


    const _sendEmail = async () => {
        try {
            
            let url = `mailto:${'herryheryanto22@gmail.com'}`
            
            const query = qs.stringify({
                subject: 'Hello',
                body: 'Test',
                cc: 'herryheryanto22@gmail.com',
                bcc: 'herryheryanto22@gmail.com'
            });
            
            if (query.length) {
                url += `?${query}`;
            }
            
            const canOpen = await Linking.openURL(url);
             if (!canOpen) {
                console.log('Provided URL can not be handled');
             }
        } catch (error) {
            console.log(error)
          return error
        }
    }

    const Header = () => {
        return (
          <View style={{...styles.containerHeaderProfile, backgroundColor: DetailClass.color_path}}>
            <View style={styles.flexHeaderInProfile}>
              <View style={styles.flexHeaderProfile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBackProfile} />
                </TouchableOpacity>
                <Text style={styles.textTitleHeader}>Profile Pengajar</Text>
              </View>
            </View>
            <View style={{...styles.semiBoxProfile, backgroundColor: DetailClass.color_path}} />
          </View>
        )
    }

    const TitleInstructor = () => {
        return (
            <View style={styles.ViewTitle}>
                <ImageBackground source={
                    DetailClass.class_initial == 'Dirosa' 
                        ? Images.BackgroundMentor 
                        : DetailClass.class_initial == 'Iqra' 
                        ? Images.BackgroundMentorIqra
                        : DetailClass.class_initial == 'Tahsin' 
                        ? Images.BackgroundMentorTahsin
                        : DetailClass.class_initial == 'Tilawah'
                        ? Images.BackgroundMentorTilawah
                        : 
                        Images.BackgroundMentorTahfidz  
                      } style={styles.BackgroundImg}>
                    <Image source={instructor.ImageProfile !== '' 
                        ? { uri : instructor.ImageProfile } : instructor.Gender == 'Perempuan' && instructor.ImageProfile == ''
                        ? Images.IllustrasiProfileUstadzah : Images.IllustrasiProfileUstadz}
                        style={styles.imageStyleInstructor}
                    />
                </ImageBackground>
                <Text style={{...styles.TxtTitleInstructor, color: DetailClass.color_path}}>{instructor.Full_Name}</Text>
                <Text style={styles.TxtFromInstructor}>Asal {instructor.City}</Text>
                <View style={styles.ViewRating}>
                    {/* <Text style={styles.TxtRating}>{instructor.Rating}</Text>
                    <Images.Star.default />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ClassReviewMentor')
                    }}>
                        <Text style={styles.TxtAllReview}>(2 Ulasan)</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        )
    }

    const DescInstructor = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <View style={{marginRight: 6}}><SVGIcon.IconDescMentor ColorBg={DetailClass.color_path} /></View>
                        <View style={styles.ViewTxt}>
                            <Text style={{...styles.TxttitleCard, color: DetailClass.color_path}}>
                                Deskripsi dan Pengalaman Mengajar
                            </Text>
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
                        <View style={{marginRight: 16}}><SVGIcon.IconStudyMentor ColorBg={DetailClass.color_path} ColorStroke={DetailClass.color_path} /></View>
                        <View style={styles.ViewTxt}>
                            <Text style={{...styles.TxttitleCard, color: DetailClass.color_path}}>Pendidikan</Text>
                            {instructor.Mentor_Experience && instructor.Mentor_Experience
                                .filter((e) => e.Experience_Type == 'education')
                                .map((item, index) => {
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

    const AchievementInstructor = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <View style={{marginRight: 16}}><SVGIcon.IconAchievement ColorBg={DetailClass.color_path}/></View>
                        <View style={styles.ViewTxt}>
                            <Text style={{...styles.TxttitleCard, color: DetailClass.color_path}}>Prestasi</Text>
                            {instructor.Mentor_Experience && instructor.Mentor_Experience
                                .filter((e) => e.Experience_Type == 'achievement')
                                .map((item, index) => {
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
                    <View style={{marginRight: 10}}><SVGIcon.IconSystemMentor ColorBg={DetailClass.color_path} ColorStroke={DetailClass.color_path} /></View>
                        <View style={styles.ViewTxt}>
                            <Text style={{...styles.TxttitleCardOther, color: DetailClass.color_path}}>Sistem Belajar</Text>
                            <Text style={styles.TxtDescSystem}>{instructor.Learning_Method_Text}</Text>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    const TarifInstructor = () => {
        return (
            <View style={{marginBottom: 10,}}>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                    <View style={{marginRight: 10}}><SVGIcon.IconTarif ColorBg={DetailClass.color_path} ColorStroke={DetailClass.color_path} /></View>
                        <View style={styles.ViewTxt}>
                            <Text style={{...styles.TxttitleCardOther, color: DetailClass.color_path}}>Infaq Belajar Bulanan/orang</Text>
                            {/* <Text style={styles.TxtDescSystem}>{
                                instructor.Minimum_Rate == 0 
                                ? 'Diskusikan dengan pengajar' :  'Rp' + FormatRupiah(instructor.Minimum_Rate)
                                }</Text> */}
                                {instructor.Mentor_Package && instructor.Mentor_Package.map((item, index) => {
                                    return (
                                        <Text key={index}>❐ {item.Type} : Rp{FormatRupiah(item.Price_Discount)}</Text>
                                    )
                                })}
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
                        style={{...styles.BtnPengajar, backgroundColor: DetailClass.color_path}}
                        // icon={<Images.IconConsultations.default/>}
                        title={'Pilik Paket Belajar'}
                        textStyle={styles.TxtButton}
                        // onPress={() => {
                        //     userInfo.Gender == '' ? navigation.navigate('ProfileEdit', Alerts(false, 'Silahkan Ubah Jenis Kelaminmu dahulu')) 
                        //     : userInfo.Gender == 'Laki-laki' && instructor.Gender == 'Perempuan' ? Alerts(false, 'Anda tidak bisa memilih pengajar ini')
                        //         : userInfo.Gender == 'Perempuan' && instructor.Gender == 'Laki-laki' ? Alerts(false, 'Anda tidak bisa memilih pengajar ini')
                        //             : instructor.Allow_Contact_From == 'email' ? _sendWhatsapp() : _sendWhatsapp()
                        // }}
                        onPress={() => {
                            navigation.navigate('ClassPackage', {instructor : instructor, DetailClass : DetailClass})
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
                { instructor.Mentor_Experience && instructor.Mentor_Experience
                .filter((e) => e.Experience_Type == 'achievement').length > 0 && 
                <AchievementInstructor />}
                <SystemInstructor />
                <TarifInstructor />
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