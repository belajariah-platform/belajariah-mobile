import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, FlatList, Image, Linking } from 'react-native'

import { Images } from '../../../../assets'
import { Response } from '../../../../utils'
import { UserClassAPI } from '../../../../api'

import { styles } from './class-user.style'

const ClassUserQuranDetail = () => {
  const navigation = useNavigation()

  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)

  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [dataState, setDataState] = useState({ skip: 0, take: 10, filter: [], filterString: '[]',  sort : 'DESC' })

  
  const _sendWhatsapp = async (item) => {
      const url = `https://api.whatsapp.com/send?phone=62${parseInt(item.mentor_phone)}&text=Assalamu%27alaikum%20warahmatullahi%20wabarakatuh..%0APerkenalkan%20Ustadz/ustadxah%2C%20saya%0ANama%20%3A%20${item.user_name}%0AMemilih%20${item.mentor_name}%20dari%20aplikasi%20Belajariah%20sebagai%20pengajar%20saya%F0%9F%98%8A`
        try {
            const supported = await Linking.canOpenURL(url)
            if(supported) {
              await Linking.openURL(url)
            } else {
              alert('')
            }
        } catch (error) {
          return error
        }
    }


  const fetchDataUserClassDetail = async ({skip, take, filter}) => {
    try {
      const response = await UserClassAPI.GetAllUserClassQuranDetail(skip, take, filter)
      if (response.status === Response.SUCCESS) {
        setState(response?.data?.message?.data ?? [])
        setCount(response?.data?.count ?? 0)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  useEffect(() => {
    fetchDataUserClassDetail(dataState)
  }, [])

    const Header = () => {
        return (
          <View style={styles.containerHeaderDetail}>
            <View style={styles.flexHeaderInProfile}>
              <View style={styles.flexHeaderProfile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBackProfile} />
                </TouchableOpacity>
                <Text style={styles.textTitleHeader}>Daftar Pengajar</Text>
              </View>
            </View>
            <View style={styles.semiBoxDetail} />
          </View>
        )
    }

    const Content = () => {
        return (
          <FlatList
              data={state}
              style={{ width:'100%' }}
              onEndReachedThreshold={0.1}
              // ListFooterComponent={renderFooter}
              // onEndReached={(e) => onLoadMore(e)}
              showsVerticalScrollIndicator ={false}
              contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 20 }}
              keyExtractor={(item, index) =>  index.toString()}
              renderItem={({ item, index }) => CardList(item, index)}
              // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
          />
        )
    }

    const CardList = (item, index) => {
      return (
          <View key={index}>
              <View style={styles.cardStyle}>
                      <View style={styles.viewStyle}>
                          <Image source={item.mentor_image
                              ? { uri : item.mentor_image } : item.Gender == 'Perempuan' && item.mentor_image == ''
                              ? Images.IllustrasiProfileUstadzah : Images.IllustrasiProfileUstadz}
                              style={styles.imageStyle}
                          />
                          <View style={styles.containerDesc}>
                              <View style={styles.ViewTop}>
                                  <View style={styles.ViewTxtMentor}>
                                      <Text style={styles.textStyle}>{item.mentor_name}</Text>
                                  </View>
                              </View>
                              <Text style={styles.textStyleCity}>Asal {item.mentor_city}</Text>
                              <Text style={styles.TxtDesc}>{item.package_type}</Text>
                              {console.log(item)}
                              <TouchableOpacity 
                                  onPress={() => _sendWhatsapp(item)}
                                  style={styles.containerSchedule}>
                                <Text style={styles.TxtSchedule}>Chat Pengajar</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
              </View>
          </View>
      )
  }

    return (
        <View style={styles.container}>
          <Header />
          <Content />
        </View>
    )
}

export default ClassUserQuranDetail