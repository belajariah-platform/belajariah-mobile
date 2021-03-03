import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  BackHandler,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { Avatar, Card } from 'react-native-elements'
import { useSelector } from 'react-redux'
import BottomSheet from 'reanimated-bottom-sheet'
import { Color, Images } from '../../assets'
import images from '../../assets/images'
import { Cards, Carousel, ModalInfo, ModalInfoClass, Searchbox } from '../../components'
import { FormatRupiah } from '../../utils'
import { styles } from './home.style'

const Home = (props) => {
  const { isLogin } = useSelector((state) => state.UserReducer)

  const [state, setState] = useState('')
  const [hasPromo, setHasPromo] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [optionSelected, setOptionSelected] = useState(0)
  const [categorySelected, setCategorySelected] = useState(0)
  const [modalInfoClassVisible, setModalInfoClassVisible] = useState(false)
  const toggleModalInfoClass = () => setModalInfoClassVisible(!modalInfoClassVisible)

  const { height } = Dimensions.get('window')

  const mainScrollViewRef = useRef()
  const horizontalScrollRef = useRef()
  const toggleModal = () => setModalVisible(!modalVisible)

  const handleModal = (event) => {
    setModalVisible(true)
    setState(event)
  }

  const ImgBanner = [
    {
      url : 'https://www.belajariah.com/img-assets/banner%20perpanjang%20kelas.png',
    }
  ]

  const classPopular = [
    {
      rating: 5,
      description:
        'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sitamet, lorem veri seyum not beije veri seyum not ',
    },
  ]

  const Inspiratif = [
    {
      id: 0,
      description:
        'Tokoh Inspiratif Sandiaga Uno Pengusaha dan politikus Indonesia yang jadi Menteri Pariwisata dan Ekonomi Kreatif',
    },
    {
      id: 1,
      description:
        'Tokoh Inspiratif Sandiaga Uno Pengusaha dan politikus Indonesia yang jadi Menteri Pariwisata dan Ekonomi Kreatif',
    },
    {
      id: 2,
      description:
        'Tokoh Inspiratif Sandiaga Uno Pengusaha dan politikus Indonesia yang jadi Menteri Pariwisata dan Ekonomi Kreatif',
    },
  ]

  const promotion = [
    {
      code_voucher: 'BLJRIAH',
      title: 'Diskon 30% Pengguna Baru',
      banner : Images.BannerPromotionsPenggunaBaru,
      discount: 30,
      desc: 'Diskon 30% Pengguna Baru',
      more_desc: 'Selamat datang di Belajariah Diskon 30% buat kamu pengguna baru, Nikmati kemudahan belajar Al-Quran kapan dan dimana saja dengan ponsel digenggamanmu|Tunggu apalagi? Mari berinvestasi untuk akhiratmu.....',
    },
    {
      code_voucher: 'AMALJARIAH',
      title: 'Diskon 20% Untuk Perpanjangan Kelas',
      banner : Images.BannerPromotionExtendClass,
      discount: 20,
      desc : 'Khusus buat kamu, perpanjang langganan kelas, diskon 20%',
      more_desc: '*S&K berlaku',
    }
  ]

  const categories = [
    { id: 0, name: 'Al-Qur\'an', Img: Images.ImgModalComingSoon },
    { id: 1, name: 'Fiqih' },
    { id: 2, name: 'Ekonomi Syariah' },
    { id: 3, name: 'Ibadah Kemasyarakatan' },
    { id: 4, name: 'Bahasa Arab' },
  ]

  const options = [
    { id: 0, name: 'A', price: '499000', discountedPrice: '199000' },
    { id: 1, name: 'B', price: '600000', discountedPrice: '249000' },
    { id: 2, name: 'C', price: '1500000', discountedPrice: '999000' },
  ]

  const package_category = [
    { ID: 0, Type: 'Darussalam', Price_Package : 399000, Price_Discount: 599000, Duration : 1, Consultation: 8, Webinar : 1 },
    { ID: 1, Type: 'Naim', Price_Package : 899000,  Price_Discount: 1000000,  Duration : 3, Consultation: 24, Webinar : 3 },
    { ID: 2, Type: 'Firdaus', Price_Package : 1499000, Price_Discount: 1699000,  Duration : 6, Consultation: 32, Webinar : 6 },
  ]

  const SearchHome = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.navigateSearch}
        onPress={() => props.navigation.navigate(isLogin ? 'HomeSearch' : 'Login')}>
        <Searchbox
          disabled
          style={styles.containerSearch}
          accessoryRight={() => (
            <Images.Search.default style={{ marginRight: -12 }} />
          )}
          renderItem={
            <Text style={styles.textSearch}>Cari kelas di belajariah</Text>
          }
        />
      </TouchableOpacity>
    )
  }

  const PromotionHome = ({ index, item }) => {
    return (
      <View style={styles.container} key={index}>
        {hasPromo ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('PromotionDetail', { promoIndex : index })}>
            <Image style={styles.cardCustom} source={Images.BannerPromo} resizeMode='cover'/>
          </TouchableOpacity>
        ) : (
          <Image style={styles.cardCustom} source={{ uri:'https://www.belajariah.com/img-assets/banner%20perpanjang%20kelas.png' }}/>
        )}
      </View>
    )
  }

  const CategoryClassHome = () => {
    return (
      <>
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.textTitle}>Kategori Kelas</Text>
          <Text style={styles.textSubtitle}>Temukan kelas lewat kategori!</Text>
          {/* <Tabs
            onChangeTab={(event) => {
              handleModal('ok')
              setCategorySelected(event.i)
            }}
            style={{ backgroundColor:'transparent', height : 50, }}
            tabBarUnderlineStyle={{ backgroundColor : 'transparent' }}
            renderTabBar={()=> <ScrollableTab
              style={{ backgroundColor : 'transparent', height : 20, borderBottomWidth : 0 }}/>}>
            {categories.map((item, index) => {
              return (
                <Tab
                  key={index}
                  heading={
                    <TabHeading style={{ backgroundColor :
                    categorySelected == index ?   Color.purpleButton : Color.grey, borderRadius : 16, marginHorizontal : 5 }}>
                      <Text style={{ color : 'white' }}>{item.name}</Text>
                    </TabHeading>
                  }/>
              )
            })}
          </Tabs> */}
          <ScrollView
            ref={horizontalScrollRef}
            horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={ () => {
                    handleModal(category.name)
                    setCategorySelected(category.id)
                    // await horizontalScrollRef.current.scrollTo({
                    //   x: 4000,
                    //   animated: true,
                    // })
                  }}>
                  <Text
                    style={[
                      styles.textCategories,
                      category.id === categorySelected
                        ? {
                          color: Color.white,
                          borderColor: Color.transparent,
                          backgroundColor: Color.purpleButton,
                        }
                        : {
                          color: Color.greyHeadInput,
                          backgroundColor: Color.bgColorWhite,
                        },
                    ]}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
      </>
    )
  }

  const PopularClassHome = () => {
    const handleRating = (num) => {
      let rating = []
      const numRound = Math.round(num)
      for (let index = 1; index <= numRound; index++) {
        num - index == 0
          ? rating.push(<Images.Star.default />)
          : num - index < 0
            ? rating.push(<Images.StarHalf.default />)
            : rating.push(<Images.Star.default />)
      }
      return (
        <View style={{ flexDirection: 'row' }}>
          {rating.map((val, index) => {
            return <View key={index}>{val}</View>
          })}
        </View>
      )
    }

    useEffect(() => {
      console.log('hello ')
      const backAction = () => {
        if(modalVisible) {
          setModalVisible(false)
        }
        if(!modalVisible) {
          return false
        } else {
          return true
        }
      }
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      )
      return () => backHandler.remove()
    }, [modalVisible])

    return (
      <View>
        <Text style={styles.textTitle}>Kelas Populer</Text>
        <Text style={styles.textSubtitle}>Kelas Populer saat ini</Text>
        {classPopular.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.6}
              onPress={toggleModalInfoClass}>
              <Cards
                images={Images.BannerTahsin}
                rating={handleRating(item.rating)}
                imageTitle={
                  <Images.JudulTahsin.default style={styles.svgClassTitle} />
                }
                description={item.description}
                price={
                  <View style={styles.containerPriceOptions}>
                    <View style={styles.containerPriceFlex}>
                      {options.map((option, index) => {
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              setOptionSelected(option.id)
                            }}>
                            <Text
                              style={[
                                styles.textPriceOptions,
                                option.id === optionSelected
                                  ? {
                                    backgroundColor: Color.purpleButton,
                                    color: Color.white,
                                  }
                                  : {
                                    backgroundColor: Color.greyHintExt,
                                    color: Color.black,
                                  },
                              ]}>
                              {option.name}
                            </Text>
                          </TouchableOpacity>
                        )
                      })}
                    </View>
                    <Text style={styles.textPrice}>
                      Rp {FormatRupiah(options[optionSelected].price)}
                    </Text>
                    <Text style={styles.textDiscountedPrice}>
                      {' '}
                      {FormatRupiah(options[optionSelected].discountedPrice)}
                    </Text>
                  </View>
                }
              />
            </TouchableOpacity>
          )
        })}
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.bannerAlquranContainer}
            onPress={() => props.navigation.navigate('Alquran')}>
            <Image source={Images.BannerAlquran} style={styles.cardCustom} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const InspiratifStoryHome = () => {
    return (
      <View>
        <Text style={styles.textTitle}>Bacaan Inspiratif</Text>
        <Text style={styles.textSubtitle}>
          Baca artikel terkini setiap hari!
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ height: 238 }}>
          {Inspiratif.map((item, index) => {
            return (
              <Card containerStyle={styles.cardArticle} key={index}>
                <Images.BlogExample.default
                  style={styles.svgArticleBackground}
                />
                <Text style={styles.textArticleDescription}>
                  {item.description.substring(0, 120)} ...
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btnReadMore}
                  onPress={() =>  props.navigation.navigate('InspiratifStory')}>
                  <Images.BtnReadMore.default />
                </TouchableOpacity>
              </Card>
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
              <View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{ ...styles.headerAvatar, marginRight: 15 }}
                  onPress={() =>
                    props.navigation.navigate(isLogin ? 'Profil' : 'Login')
                  }>
                  {isLogin ? (
                    <Avatar
                      source={images.ImageProfileDefault}
                      style={styles.imageProfile}
                    />
                  ) : (
                    <Images.LoginDirect.default />
                  )}
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
            renderContent={() => (
              <ScrollView
                ref={mainScrollViewRef}
                style={styles.scrollview}
                showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                  <SearchHome />
                  <View style={styles.carousel}>
                    <Carousel
                      data={promotion}
                      pagination={false}
                      renderItem={PromotionHome}
                    />
                  </View>
                  <CategoryClassHome />
                  <PopularClassHome />
                  <InspiratifStoryHome />
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
        <ModalInfoClass
          isVisible={modalInfoClassVisible}
          state={package_category}
          backdropPress={() => toggleModalInfoClass()}
        />
        <ModalInfo
          isVisible={modalVisible}
          backdropPress={() => toggleModal()}
          renderItem={
            <View>
              <Image source={Images.ImgModalComingSoon} resizeMode={'cover'} style={styles.BackroundImgModal}/>
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
