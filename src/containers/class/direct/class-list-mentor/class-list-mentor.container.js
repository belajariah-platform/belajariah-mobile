import _ from 'lodash'
import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef, } from 'react'
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
  } from 'react-native'

import {
    Searchbox,
    LoadingView,
} from '../../../../components'
import { MentorAPI } from '../../../../api'
import { Response } from '../../../../utils'
import { Images, Color } from '../../../../assets'

import styles from './class-list-mentor.style'

const ClassListMentor = (props) => {
    const navigation = useNavigation()
    const { classes, packages, instructor } = props.route.params

    const [stateMentor, setStateMentor] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [loadingMentor, setloadingMentor] = useState(true)
    const [dataState, setDataState] = useState({ skip: 0, take: 1000, filter: [], filterString: '[{"type": "text", "field" : "class_code", "value": "CLC00000003"}]' })

    const onDataStateChange = (event) => {
        setDataState({
          ...dataState,
          filterString : `[{"type": "text", "field" : "Full_Name", "value": "${event}"},{"type": "text", "field" : "class_code", "value": "CLC00000003"}]`
        })
    }

    const onRefreshing = () => {
        setRefreshing(true)
        fetchDataMentor(dataState)
        setRefreshing(false)
    }

    const fetchDataMentor = async ({ skip, take, filterString }) => {
        try {
          setloadingMentor(true)
          const response = await MentorAPI.GetAllMentor(skip, take, filterString)
          if (response.status === Response.SUCCESS) {
            setStateMentor(response.data.data)
          } 
          setloadingMentor(false)
        } catch (err) {
          setloadingMentor(false)
          return err
        }
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            fetchDataMentor(dataState)
        }, 500)
        return () => clearTimeout(delay)
    }, [dataState])

    const renderFooter = () => {
        return loadingMentor ? (
          <View style={styles.indicatorContainer}>
            <LoadingView
              size={30}
              color='#fff'/>
          </View>
        ) : null
    }

    const SortMentor = _.orderBy(stateMentor, ['Rating'],['desc'])

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
              {/* <TouchableOpacity style={styles.iconFilter}>
                <Images.Filter.default
                    width={20}
                    height={20}
                />
               </TouchableOpacity> */}
            </View>
            <View style={styles.semiBox} />
          </View>
        )
    }

    const NoList = () => {
        return (
            <View style={styles.ViewNoList}>
                <Text style={styles.TxtNoList}>Ustadz/Ustadzah yang kamu cari tidak ada</Text>
            </View>
        )
    }

    const CardList = (item, index) => {
        const handleSplitString = (value) => {
            const stringSplit = value.split('|')
            return stringSplit.map((val, index) => {
              if (val.includes('<Img>')) {
                return  (
                  <Text key={index}/>
                )
              } else {
                return (
                  <Text key={index}>{val}. </Text>
                )}})
        }
        return (
            <View key={index}>
                <Card containerStyle={styles.cardStyle}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ClassInstructorProfile',
                        { classes : classes, packages : packages, instructor : item } )
                    }}>
                        {/* {console.log(item)} */}
                        <View style={styles.viewStyle}>
                            <Image source={item.Gender == 'Perempuan' ? 
                                Images.IllustrasiProfileUstadzah : item.ImageProfile == '' ?
                                Images.ImageProfileDefault : { uri : item.ImageProfile } }
                                style={styles.imageStyle}
                            />
                            <View style={styles.containerDesc}>
                                <View style={styles.ViewTop}>
                                    <View style={styles.ViewTxtMentor}>
                                        <Text style={styles.textStyle}>{item.Full_Name}</Text>
                                    </View>
                                    {/* <View style={styles.viewNotifClass}>
                                        <Text style={styles.textNotifClass}>Kelas Tersedia</Text>
                                    </View> */}
                                </View>
                                <Text style={styles.textStyleCity}>Asal {item.City}</Text>
                                <View style={styles.ViewRating}>
                                    <Text style={styles.TxtRating}>{item.Rating}</Text>
                                    <Images.Star.default />
                                </View>
                                <Text style={styles.TxtDesc}>{handleSplitString(item.Description.substring(0, 100))}...</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <List.Accordion title='Jadwal Pengajar' left={() => <Images.IconScheduleBlack.default style={styles.IconStyle} />} titleStyle={styles.textRegular} style={styles.containerAccordion}>
                            {item.Schedule && item.Schedule.map((shift, index) => {
                                return (
                                    <View key={index} style={styles.ViewSchedules}>
                                        <Text style={styles.textRegular}>{shift.Shift_Name} </Text>
                                        <View style={styles.ViewSchedule}>
                                            <Text style={styles.textRegular}>({moment(shift.Start_At).format('LT')} - {moment(shift.End_At).format('LT')} {shift.Time_Zone})</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </List.Accordion>
                    </View>
                </Card>
            </View>
        )
    }

    return (
        <View style={styles.containerMain}>
            <Header />
            <View style={styles.containerSearch}>
                <Searchbox
                    size='medium'
                    style={styles.searchbox}
                    onChangeText={onDataStateChange}
                    placeholder='Cari Nama Pengajar'
                    accessoryRight={() => (
                        <Images.Search.default style={{ marginRight: -12 }} />
                    )}
                />
            </View>
            {loadingMentor ? 
            <View style={styles.LoadingStyle}>
                <LoadingView color='#fff' />
            </View> : 
            SortMentor == 0 ? (<NoList />) :
            <FlatList
                data={SortMentor}
                style={{ width:'100%' }}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                // onEndReached={(e) => onLoadMore(e)}
                showsVerticalScrollIndicator ={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                keyExtractor={(item, index) =>  index.toString()}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
                renderItem={({ item, index }) => CardList(item, index)}/>
            }
        </View> 
    )
}

ClassListMentor.propTypes = {
    route: PropTypes.object,
    instructor: PropTypes.object,
}

export default ClassListMentor