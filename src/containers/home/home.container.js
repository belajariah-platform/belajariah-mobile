import PropTypes from 'prop-types'
import BottomSheet from 'reanimated-bottom-sheet'
import { Avatar, Card } from 'react-native-elements'
import NetInfo from '@react-native-community/netinfo'
import { useIsFocused } from '@react-navigation/core'
import LinearGradient from 'react-native-linear-gradient'
import React, { useEffect, useRef, useState } from 'react'

import {
  EnumAPI,
  ClassAPI,
  StoryAPI,
  PackageAPI,
  PromotionAPI,
  CoachingProgramAPI,
} from '../../api'

import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  BackHandler,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import {
  Color,
  Images,
} from '../../assets'

import {
  Cards,
  Carousel,
  ModalInfo,
  ShimmerACC,
  ModalInfoClass,
  ModalClassDirect,
  ModalNoConnection,
  ShimmerListCategory,
  ShimmerCardClassPopuler,
  ShimmerCardInspiratifStory,
} from '../../components'
import { styles } from './home.style'
import { Response } from '../../utils'

const Home = (props) => {
  const isFocused = useIsFocused()
  const mainScrollViewRef = useRef()
  const horizontalScrollRef = useRef()
  const { height } = Dimensions.get('window')

  const [exitApp, setExitApp] = useState(0)
  const [classObj, setClassObj] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [categorySelected, setCategorySelected] = useState(0)
  const [modalInfoClassVisible, setModalInfoClassVisible] = useState(false)
  const [modalClassDirectVisible, setModalClassDirectVisible] = useState(false)

  const [stateACC, setStateACC] = useState([])
  const [stateStory, setStateStory] = useState([])
  const [stateClass, setStateClass] = useState([])
  const [statePackage, setStatePackage] = useState([])
  const [stateCategory, setStateCategory] = useState([])
  const [statePromotion, setStatePromotion] = useState([])
  const [dataState] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })

  const [loadingACC, setloadingACC] = useState(true)
  const [loadingClass, setloadingClass] = useState(true)
  const [loadingStory, setloadingStory] = useState(true)
  const [loadingPackage, setloadingPackage] = useState(true)
  const [loadingCategory, setloadingCategory] = useState(true)

  const toggleModal = () => setModalVisible(!modalVisible)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const toggleModalInfoClass = () => setModalInfoClassVisible(!modalInfoClassVisible)
  const toggleModalClassDirect = () => setModalClassDirectVisible(!modalClassDirectVisible)


  const handleCategoryChange = (category) => {
    setCategorySelected(category.ID)
    stateClass.forEach((val) => {
      val.Class_Category == category.Value ?
        fetchDataClass(dataState) : toggleModal()
    })
  }

  const retryConnection = () => {
    fetchDataStory(dataState)
    fetchDataClass(dataState)
    fetchDataCategory(dataState)
    fetchDataPromotion(dataState)
    setconnectStatus(!connectStatus)
  }

  const openModalInfoClass = async (item) => {
    await setClassObj(item)
    await setModalInfoClassVisible(!modalInfoClassVisible)
    await fetchDataPackage(dataState, item.Code)
  }

  const openModalClassDirect = async (item) => {
    await setClassObj(item)
    await setModalClassDirectVisible(!modalClassDirectVisible)
    await fetchDataPackage(dataState, item.Code)
  }

  const fetchDataACC = async ({ skip, take, filterString }) => {
    try {
      setloadingACC(true)
      const response = await CoachingProgramAPI.GetACCDetail(skip, take, filterString)
      // console.log(response.data.message.data)
      if (response.status === Response.SUCCESS) {
          setStateACC(response.data.message.data[0])
      } 
      setloadingACC(false)
    } catch (err) {
      setloadingACC(false)
      return err
    }
  }

  const fetchDataClass = async ({ skip, take, filterString }) => {
    try {
      setloadingClass(true)
      const response = await ClassAPI.GetAllClass(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateClass(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setloadingClass(false)
    } catch (err) {
      setloadingClass(false)
      return err
    }
  }

  const fetchDataPromotion = async ({ skip, take, filterString }) => {
    try {
      const response = await PromotionAPI.GetAllPromotion(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStatePromotion(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      return err
    }
  }

  const fetchDataStory = async ({ skip, take, filterString }) => {
    try {
      setloadingStory(true)
      const response = await StoryAPI.GetAllStory(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateStory(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setloadingStory(false)
    } catch (err) {
      setloadingStory(false)
      return err
    }
  }

  const fetchDataCategory = async ({ skip, take, filterString }) => {
    try {
      setloadingCategory(true)
      filterString='[{"type": "text", "field" : "type", "value": "class_type"}]'
      const response = await EnumAPI.GetAllEnum(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateCategory(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setloadingCategory(false)
    } catch (err) {
      setloadingCategory(false)
      return err
    }
  }

  const fetchDataPackage = async (state, code) => {
    try {
      setloadingPackage(true)
      let { skip, take, filterString } = state
      filterString=`[{"type": "text", "field" : "class_code", "value": "${code}"}]`
      const response = await PackageAPI.GetAllPackage(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStatePackage(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setloadingPackage(false)
    } catch (err) {
      setloadingPackage(false)
      return err
    }
  }

  const _getData = async () => {
    await fetchDataPromotion(dataState)
    await fetchDataCategory(dataState)
    await fetchDataACC(dataState)
    await fetchDataClass(dataState)
    await fetchDataStory(dataState)
  }

  useEffect(() => {
    _getData()
  }, [])

  const PromotionHome = ({ index, item }) => {
    return (
      <View style={styles.containerPromo} key={index}>
        {statePromotion.length > 0  ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('PromotionDetail', { promo_code : item.Promo_Code })}>
            <Image
              style={styles.cardCustom}
              source={item.Banner_Image == '' ? Images.ImgDefault5 : {
                uri : item.Banner_Image  }}
              resizeMode='cover'
            />
          </TouchableOpacity>
        ) : (
          <Image
            style={styles.cardCustom}
            source={{ uri: item.Banner_Image ?
              item.Banner_Image : 'https://www.belajariah.com/img-assets/BannerPromoDefault.png' }}
          />
        )}
      </View>
    )
  }

  const CategoryClassHome = () => {
    return (
      <>
        <View style={{ marginBottom: 6 }}>
          <Text style={styles.textTitle}>Kategori Kelas</Text>
          <Text style={styles.textSubtitle}>Temukan kelas lewat kategori!</Text>
          <View style={styles.ViewCategory}>
            {stateCategory.map((category, index) => {
              let icon, size
              const ValueIcon = category.Value
              ValueIcon == 'Al-Quran' ? (icon = Images.IconCategoryAlquran, size = 30) :
                ValueIcon == 'Ibadah Kemasyarakatan' ? (icon = Images.IconCategoryKemasyarakatan, size = 30) :
                  ValueIcon == 'Bahasa' ? (icon = Images.IconCategoryLanguage, size = 30) :
                    ValueIcon == 'Ekonomi Islam' ? (icon = Images.IconCategorySyaria, size = 30) :
                      ValueIcon == 'Dakwah' ? (icon = Images.IconCategoryDakwah, size = 30) :
                      (icon = Images.IconCategoryFiqh, size = 30)
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.Category}
                  onPress={() => handleCategoryChange(category)}>
                  <LinearGradient
                    colors={['#F2DCFB', '#fff']}
                    style={styles.linearGradient}>
                    <View style={[styles.CardCategory,
                          // category.ID === categorySelected
                          //   ? {
                          //     backgroundColor: Color.purpleButton,
                          //   }
                          //   : {
                          //     backgroundColor: Color.white,
                          //   },   
                      ]}>
                      <icon.default />
                    </View>
                  </LinearGradient>
                  <Text
                    style={styles.textCategories}>
                    {category.Value}
                  </Text>
                </TouchableOpacity>
              )
            })}
         </View>
        </View>
      </>
    )
  }

  const ACCHome = () => {
    return (
      <View>
        <View style={styles.ViewTitleAcc}>
          <Text style={styles.textTitle}>Program ACC</Text>
          <Images.IconFreeACC.default style={styles.StyleIconFreeAcc} />
        </View>
        <Text style={styles.textSubtitle}>Al-Fatihah Coaching Clinic</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('ClassDetailACC', {detailACC : stateACC})}>
          <View style={styles.cardAC}>
            <Image source={stateACC.image_banner == '' ? Images.ImageDefault2 : {uri : stateACC.image_banner}} style={styles.ImgCustomAC} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const PopularClassHome = () => {
    const handleRating = (num) => {
      let rating = []
      for (let index = 1; index <= 5; index++) {
        num - index >= 0
          ? rating.push(<Images.Star.default width={16} height={16} />)
          : num - index < 0 && num - index > -1
            ? rating.push(<Images.StarHalf.default width={16} height={16} />)
            : rating.push(<Images.StarEmpty.default width={16} height={16} />)
      }
      return (
        <View style={{ flexDirection: 'row', flex : 1 }}>
          {rating.map((val, index) => {
            return <View key={index}>{val}</View>
          })}
        </View>
      )
    }

    useEffect(() => {
      const backAction = () => {
        setTimeout(() => {
          setExitApp(0)
        }, 2000)

        if(exitApp == 0) {
          ToastAndroid.showWithGravityAndOffset('Tekan sekali lagi untuk keluar', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 200)
          setExitApp(1)
        }

        if(exitApp == 1) {
          BackHandler.exitApp()
        }

        return true
      }

      if(isFocused) {
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction
        )
        return () => backHandler.remove()
      }
    }, [exitApp])

    return (
      <View>
        <Text style={styles.textTitle}>Kelas Populer</Text>
        <Text style={styles.textSubtitle}>Kelas Populer saat ini</Text>
        {stateClass.map((item, index) => {
          // console.log(item)
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              onPress={() => item.Is_Direct == true ? openModalClassDirect(item) : openModalInfoClass(item)}>
              <Cards
                item={item}
                filepath={item.Class_Image}
                rating={handleRating(item.Class_Rating)}
              />
            </TouchableOpacity>
          )
        })}
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.bannerAlquranContainer}
            onPress={() => props.navigation.navigate('Alquran')}>
            <Image source={Images.BannerAlquran} style={styles.cardCustom} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const InspiratifStoryHome = () => {
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
      <View>
        <Text style={styles.textTitle}>Bacaan Inspiratif</Text>
        <View style={styles.flexStory}>
          <Text style={{ ...styles.textSubtitle, flex : 1 }}>
          Baca artikel terkini setiap hari!
          </Text>
          <TouchableOpacity onPress={() =>  props.navigation.navigate('InspiratifStory')}>
            <Text style={styles.readMoreText}>Lihat semua</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ height: 238 }}>
          {stateStory.map((item, index) => {
            return (
              <View style={styles.cardArticle} key={index}>
                <Image source={item.Image_Banner_Story == '' ?
                  Images.ImgDefault5 : { uri : item.Image_Banner_Story }}
                style={styles.storyImage}/>
                <View style={styles.storyView}>
                  <Text style={styles.textArticleDescription}>
                    {handleSplitString(item.Content.substring(0, 90))} ...
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnReadMore}
                    onPress={() =>  props.navigation.navigate('InspiratifStoryDetail', { params : item, storyIndex : index })}>
                    <Images.BtnReadMore.default />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }

  PromotionHome.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
  }

  return (
    <>
      <View style={styles.headerFlex}>
        <ImageBackground source={Images.HomeBG} style={styles.imageBackground}>
          <View style={styles.headerFlex}>
            <View style={styles.headerContainer}>
              <View style={styles.headerFlex}>
                <Images.LogoBelajariahHome.default height={40} width={40} />
              </View>
              <View style={styles.ViewHeaderProf}>
                <TouchableOpacity style={{marginRight: 16,}}
                  onPress={() => props.navigation.navigate('UserNotification')}>
                  <Images.IconNotification.default />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{ ...styles.headerAvatar, marginRight: 15 }}
                  onPress={() =>
                    props.navigation.navigate('Profil')
                  }>
                  <Avatar
                    style={styles.imageProfile}
                    source={Images.ImageProfileDefault}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.textBackContainer}>
              <Text style={styles.textBack}>
              Assalamualaikum Sobat
                <Text style={styles.textBackBold}> Belajariah</Text> Sudah Siap
              Belajar
                <Text style={styles.textBackBold}> AlQuran ?</Text>
              </Text>
            </View>
          </View>
          <BottomSheet
            snapPoints={[height / 2.7, height / 2.6, height - 92]}
            initialSnap={2}
            enabledContentGestureInteraction={false}
            renderContent={() =>  (
              <ScrollView
                ref={mainScrollViewRef}
                style={styles.scrollview}
                showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>

                  <View style={styles.carousel}>
                    <Carousel
                      data={statePromotion}
                      pagination={false}
                      renderItem={PromotionHome}
                    />
                  </View>
                  {loadingCategory ?
                    ShimmerListCategory() :
                    CategoryClassHome()
                  }
                  {loadingACC ?
                    ShimmerACC() :
                    ACCHome() 
                  }
                  {loadingClass ?
                    ShimmerCardClassPopuler() :
                    <PopularClassHome />
                  }

                  {loadingStory ?
                    ShimmerCardInspiratifStory() :
                    InspiratifStoryHome()
                  }


                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      mainScrollViewRef.current.scrollTo({
                        x: 0,
                        y: 0,
                        animated: true,
                      })
                    }>
                    <Images.BtnArrowUp.default style={styles.iconArrowUp} />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
            renderHeader={() => (
              <View style={styles.containerSheetHeader}>
                <View style={styles.topLine} />
              </View>
            )}
          />
        </ImageBackground>
        <ModalNoConnection
          isVisible={connectStatus}
          retry={() => retryConnection()}
          backdropPress={() => togglemodalNoConnection()}
          backButtonPress={() => togglemodalNoConnection()}
        />
        <ModalInfoClass
          class={classObj}
          state={statePackage}
          loading={loadingPackage}
          isVisible={modalInfoClassVisible}
          backdropPress={() => toggleModalInfoClass()}
          backButtonPress={() => toggleModalInfoClass()}
        />
        <ModalClassDirect
          class={classObj}
          state={statePackage}
          loading={loadingPackage}
          isVisible={modalClassDirectVisible}
          backdropPress={() => toggleModalClassDirect()}
          backButtonPress={() => toggleModalClassDirect()}
        />
        <ModalInfo
          isVisible={modalVisible}
          backdropPress={() => toggleModal()}
          backButtonPress={() => toggleModal()}
          renderItem={
            <View>
              <View>
                <Image
                  resizeMode='cover'
                  source={Images.ImgModalComingSoon}
                  style={styles.BackroundImgModal}
                />
              </View>
            </View>
          }
        />
      </View>
    </>
  )
}

Home.propTypes = {
  navigation : PropTypes.object,
}


export default Home
