import _ from 'lodash'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
    View,
    Image,
    FlatList,
    RefreshControl,
    TouchableOpacity,
} from 'react-native'

import {MentorAPI} from '../../../../api'
import { Images } from '../../../../assets'
import {Response, FormatRupiah} from '../../../../utils'
import {LoadingView,Searchbox} from '../../../../components'

import styles from './class-list-mentor.style'

const ClassListMentorQuran = (props) => {
    const navigation = useNavigation()
    const { DetailClass, UserClass } = props.route.params
    const [count, setCount] = useState(0)
    const [stateMentor, setStateMentor] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [loadingMentor, setloadingMentor] = useState(true)
    const [dataState, setDataState] = useState({ skip: 0, take: 10, filter: [], filterString: `[{"type": "text", "field" : "class_code", "value": "${DetailClass.code}"}]` })

    const onDataStateChange = (event) => {
        setDataState({
          ...dataState,
          filterString : `[{"type": "text", "field" : "Fullname", "value": "${event}"},  
            {"type": "text", "field" : "class_code", "value": "${DetailClass.code}"}]`
        })
    }
        
    const onRefreshing = () => {
        setRefreshing(true)
        fetchDataMentor(dataState)
        setRefreshing(false)
    }

    const onLoadMore = (e) => {
        if (dataState.take < count && e.distanceFromEnd >= 0) {
          setDataState({
            ...dataState,
            take : dataState.take + 10
          })
        }
    }

    const fetchDataMentor = async ({ skip, take, filterString }) => {
        try {
          setloadingMentor(true)
          const response = await MentorAPI.GetAllMentor(skip, take, filterString)
          if (response.status === Response.SUCCESS) {
              setStateMentor(response.data.data)
              setCount(response.data.count)
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

    const Header = () => {
        return (
          <View style={{...styles.containerHeader, backgroundColor : 
            DetailClass.class_initial == 'Iqra' 
            ? '#b961d0' : DetailClass.class_initial == 'Dirosa' 
            ? '#2ac8aa' : DetailClass.class_initial == 'Tahsin' 
            ? '#67b8e3' : DetailClass.class_initial == 'Tilawah' 
            ? '#ffaa24' : '#f97bac' }}
            >
            <View style={styles.flexHeaderIn}>
              <View style={styles.flexHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBack} />
                </TouchableOpacity>
                <Text style={styles.textTitleWhite}>Daftar Guru Ngaji</Text>
              </View>
            </View>
            <View style={{...styles.semiBox, backgroundColor : DetailClass.color_path}} />
          </View>
        )
    }

    const NoList = () => {
        return (
            <View style={styles.ViewNoList}>
                <Text style={styles.TxtNoList}>Ustadz/Ustadzah tidak ada</Text>
            </View>
        )
    }

    const SortMentor = _.orderBy(stateMentor, ['Rating'],['desc'])

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
                  <Text style={styles.TxtDesc} key={index}>{val}. </Text>
                )}})
        }

        return (
            <View key={index}>
                <Card containerStyle={styles.cardStyle}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ClassProfileMentorQuran', { DetailClass : DetailClass, instructor : item, UserClass : UserClass})
                    }}>
                        <View style={styles.viewStyle}>
                            <Image source={item.ImageProfile !== '' 
                                ? { uri : item.ImageProfile } : item.Gender == 'Perempuan'
                                ? Images.IllustrasiProfileUstadzah : Images.IllustrasiProfileUstadz}
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
                                <Text style={{...styles.textStyleCity, color: DetailClass.color_path}}>
                                    Asal {item.City}
                                </Text>
                                <View style={styles.ViewTarif}>
                                    <Text style={{...styles.textStylePrice, color: DetailClass.color_path}}>Infaq Belajar/jam : {item.Minimum_Rate == 0 ? 'Diskusikan dengan pengajar' :  'Rp' + FormatRupiah(item.Minimum_Rate)}</Text>
                                </View>
                                {/* <View style={styles.ViewRating}>
                                    <Text style={styles.TxtRating}>{item.Rating}</Text>
                                    <Images.Star.default />
                                </View> */}
                                <Text style={styles.TxtDesc}>{handleSplitString(item.Description.substring(0, 100))}...</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Card>
            </View>
        )
    }
    
    return (
        <>
        <View style={{...styles.containerMain, backgroundColor : DetailClass.color_path}}>
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
                 SortMentor.length == 0 || SortMentor == 0 ? (<NoList />) :
            <FlatList
                data={SortMentor}
                style={{ width:'100%' }}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                onEndReached={(e) => onLoadMore(e)}
                showsVerticalScrollIndicator ={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                keyExtractor={(item, index) =>  index.toString()}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
                renderItem={({ item, index }) => CardList(item, index)}/>
            }
        </View>
        </> 
    )
}

export default ClassListMentorQuran