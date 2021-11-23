import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { 
    View,
    Image,
    FlatList,
    RefreshControl,
} from 'react-native'

import {
    Searchbox,
    LoadingView,
    ModalNoConnection,
} from '../../../../components'
import styles from './class-list.style'
import { Images, Color } from '../../../../assets'
import { Response } from '../../../../utils'
import { ClassQuranAPI } from '../../../../api'

const ClassListQuran = () => {
    const navigation = useNavigation()
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const [loadingQuran, setloadingQuran] = useState(true)
    const [connectStatus, setconnectStatus] = useState(false)
    const [dataState, setDataState] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })
    
    const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

    const retryConnection = () => {
      fetchDataClassQuran(dataState)
        setconnectStatus(!connectStatus)
    }

    const onDataStateChange = (event) => {
        setDataState({
          ...dataState,
          filterString : `[{"type": "text", "field" : "class_name", "value": "${event}"}]`
        })
    }

    const onRefreshing = () => {
        setRefreshing(true)
        fetchDataClassQuran(dataState)
        setRefreshing(false)
    }

    const fetchDataClassQuran = async ({ skip, take, filterString }) => {
        try {
          filterString = []
          setloadingQuran(true)
          const response = await ClassQuranAPI.GetAllClass(skip, take, filterString)
          if (response.status === Response.SUCCESS) {
            setState(response.data.message.data)
          } else {
            NetInfo.fetch().then(res => {
              setconnectStatus(!res.isConnected)
            })
          }
          setloadingQuran(false)
        } catch (err) {
          setloadingQuran(false)
          return err
        }
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            fetchDataClassQuran(dataState)
        }, 500)
        return () => clearTimeout(delay)
    }, [dataState])

    const renderFooter = () => {
        return loadingQuran ? (
          <View style={styles.indicatorContainer}>
            <LoadingView
              size={30}
              color={Color.purpleMedium}/>
          </View>
        ) : null
    }

    const Header = () => {
        return (
          <View style={styles.containerHeader}>
            <View style={styles.flexHeader}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Images.ButtonBack.default style={styles.iconBack} />
              </TouchableOpacity>
              <Text style={styles.textTitleWhite}>Kelas Al-Qur'an</Text>
            </View>
            <View style={styles.semiBox} />
          </View>
        )
    }

    const NoStory = () => {
        return(
          <View style={styles.containerNoStory}>
            <Images.IconStoryEmpty.default width={200} height={200}/>
          </View>
        )
    }

    const ClassList = (item, index) => {
        return (
            <TouchableOpacity key={index} 
                activeOpacity={0.5} 
                onPress={() => navigation.navigate('ClassDetailQuran', 
                {DetailClass : item})} >
                <Card
                    containerStyle={styles.cardStyle}>
                    <Image source={item.class_image == '' ?
                        Images.ImgDefault4  : { uri : item.class_image }}
                        style={styles.imageStyle} />
                    {/* <View style={styles.viewStyle}>
                        <Image source={item.class_image == '' ?
                        Images.ImgDefault4  : { uri : item.class_image }}
                        style={styles.imageStyle}/>
                        <View style={styles.containerDesc}>
                            <Text style={styles.textStyle}>{item.class_name}</Text>
                            <Text style={styles.description}>
                                {item.class_description.substring(0, 70)} ...
                            </Text>
                        </View>
                    </View> */}
                </Card>
            </TouchableOpacity>
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
                placeholder='Telusuri Kelas Al-Quran'
                accessoryRight={() => (
                    <Images.Search.default style={{ marginRight: -12 }} />
                )}
                />
            </View>
            {loadingQuran ?
                <LoadingView color='#FF66A1' /> :
                state == 0 ? <NoStory/>:
                <FlatList
                    data={state}
                    style={{ width:'100%' }}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={renderFooter}
                    // onEndReached={(e) => onLoadMore(e)}
                    showsVerticalScrollIndicator ={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    keyExtractor={(item, index) =>  index.toString()}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
                    renderItem={({ item, index }) => ClassList(item, index)}/>
            }
        </View>
    )
}

export default ClassListQuran