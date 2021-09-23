import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import {
    View,
    Image,
    FlatList,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    ImageBackground,
  } from 'react-native'

import {
    Searchbox,
    LoadingView,
    Buttons,
} from '../../../../components'
import { Images, Color } from '../../../../assets'

import styles from './class-list-mentor.style'
import images from '../../../../assets/images'

const ClassListMentor = (props) => {
    const navigation = useNavigation()
    const { classes, packages, instructor } = props.route.params
    const Header = () => {
        return (
          <View style={styles.containerHeader}>
            <View style={styles.flexHeaderIn}>
              <View style={styles.flexHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBack} />
                </TouchableOpacity>
                <Text style={styles.textTitleWhite}>Daftar Guru Ngaji</Text>
              </View>
              <TouchableOpacity style={styles.iconFilter}>
                <Images.Filter.default
                    width={20}
                    height={20}
                />
               </TouchableOpacity>
            </View>
            <View style={styles.semiBox} />
          </View>
        )
    }

    const CardList = (item, index) => {
        return (
            <Card
                containerStyle={styles.cardStyle}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ClassInstructorProfile',
                    { classes : classes, packages : packages, instructor : 'Ust. Hamdan Ngaja' } )
                }}>
                    <View style={styles.viewStyle}>
                        <Image source={Images.ImgProfileMentor} style={styles.imageStyle}/>
                        <View style={styles.containerDesc}>
                            <Text style={styles.textStyle}>Ust. Hamdan Ngaja</Text>
                            <Text style={styles.City}>{packages.Price_Package}</Text>
                            <View style={styles.ViewRating}>
                                <Text style={styles.TxtRating}>5.0</Text>
                                <Images.Star.default />
                            </View>
                        </View>
                        <View style={styles.viewNotifClass}>
                            <Text style={styles.textNotifClass}>Kelas Tersedia</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <View>
                    <List.Accordion title='Jadwal Pengajar' left={() => <Images.IconScheduleBlack.default style={styles.IconStyle} />} titleStyle={styles.textRegular} style={styles.containerAccordion}>
                        <List.Item title='Senin (09:00 - 12:00 WIB)' titleStyle={styles.textRegular} style={styles.containerItem} />
                    </List.Accordion>
                </View>

            </Card>
        )
    }

    

    return (
        <View style={styles.containerMain}>
            <Header />
            <ScrollView>
                <View style={styles.containerSearch}>
                    <Searchbox
                        size='medium'
                        style={styles.searchbox}
                        // onChangeText={onDataStateChange}
                        placeholder='Masukkan Nama Guru Ngaji'
                        accessoryRight={() => (
                            <Images.Search.default style={{ marginRight: -12 }} />
                        )}
                        />
                </View>
                <CardList />
                <CardList />
                <CardList />
                <CardList />
                <CardList />
            </ScrollView>
        </View> 
    )
}

ClassListMentor.propTypes = {
    route: PropTypes.object,
    instructor: PropTypes.object,
}

export default ClassListMentor