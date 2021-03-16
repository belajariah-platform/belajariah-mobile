import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import BottomSheet from 'reanimated-bottom-sheet'
import { Avatar, Card } from 'react-native-elements'
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
import {
  Color,
  Images,
} from '../../assets'
import {
  Cards,
  Carousel,
  ModalInfo,
  ModalInfoClass,
} from '../../components'
import { styles } from './home.style'

const Home = (props) => {
  const { isLogin } = useSelector((state) => state.UserReducer)

  const [state, setState] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
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

  const classPopular = [
    {
      rating: 5,
      Class_Category : 'Al-Quran',
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
      Banner_Image : 'https://www.belajariah.com/img-assets/BannerPromo.png',
      description: 'Selamat datang di Belajariah Diskon 30% buat kamu pengguna baru, Nikmati kemudahan belajar Al-Quran kapan dan dimana saja dengan ponsel digenggamanmu|Tunggu apalagi? Mari berinvestasi untuk akhiratmu.....',
    },
    {
      code_voucher: 'BLJEXPD',
      title: 'Diskon 20% Pengguna Baru',
      discount: 20,
      Banner_Image : 'https://www.belajariah.com/img-assets/banner%20perpanjang%20kelas.png',
      description: 'Selamat datang di Belajariah Diskon 30% buat kamu pengguna baru, Nikmati kemudahan belajar Al-Quran kapan dan dimana saja dengan ponsel digenggamanmu|Tunggu apalagi? Mari berinvestasi untuk akhiratmu.....',
    },
  ]

  const categories = [
    { id: 0, Value: 'Al-Quran', Img: Images.ImgModalComingSoon },
    { id: 1, Value: 'Fiqih' },
    { id: 2, Value: 'Ekonomi Syariah' },
    { id: 3, Value: 'Ibadah Kemasyarakatan' },
    { id: 4, Value: 'Bahasa Arab' },
  ]

  const package_category = [
    { ID: 0, Type: 'Darussalam', Price_Discount : 399000, Price_Package: 800000, Duration : 1, Consultation: 8, Webinar : 1 },
    { ID: 1, Type: 'Naim', Price_Discount : 899000,  Price_Package: 1500000,  Duration : 3, Consultation: 24, Webinar : 3 },
    { ID: 2, Type: 'Firdaus', Price_Discount : 1499000, Price_Package: 2200000,  Duration : 6, Consultation: 32, Webinar : 6 },
  ]

  // const SearchHome = () => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={0.8}
  //       style={styles.navigateSearch}
  //       onPress={() => props.navigation.navigate(isLogin ? 'HomeSearch' : 'Login')}>
  //       <Searchbox
  //         disabled
  //         style={styles.containerSearch}
  //         accessoryRight={() => (
  //           <Images.Search.default style={{ marginRight: -12 }} />
  //         )}
  //         renderItem={
  //           <Text style={styles.textSearch}>Cari kelas di belajariah</Text>
  //         }
  //       />
  //     </TouchableOpacity>
  //   )
  // }

  const PromotionHome = ({ index, item }) => {
    return (
      <View style={styles.containerPromo} key={index}>
        {promotion.length > 0  ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('PromotionDetail', { promoIndex : index })}>
            <Image style={styles.cardCustom} source={{ uri : item.Banner_Image }} resizeMode='cover'/>
          </TouchableOpacity>
        ) : (
          <Image style={styles.cardCustom} source={{ uri:'https://www.belajariah.com/img-assets/BannerPromoDefault.png' }}/>
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
          <ScrollView
            ref={horizontalScrollRef}
            horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={  () => {
                    setCategorySelected(category.id)
                    handleModal(category.Value)
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
                    {category.Value}
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
                filepath={Images.BannerTahsin}
                rating={handleRating(item.rating)}
                imageTitle={
                  <Images.JudulTahsin.default style={styles.svgClassTitle} />
                }
                description={item.description}
                // price={
                //   <View style={styles.containerPriceOptions}>
                //     <View style={styles.containerPriceFlex}>
                //       {options.map((option, index) => {
                //         return (
                //           <TouchableOpacity
                //             key={index}
                //             onPress={() => {
                //               setOptionSelected(option.id)
                //             }}>
                //             <Text
                //               style={[
                //                 styles.textPriceOptions,
                //                 option.id === optionSelected
                //                   ? {
                //                     backgroundColor: Color.purpleButton,
                //                     color: Color.white,
                //                   }
                //                   : {
                //                     backgroundColor: Color.greyHintExt,
                //                     color: Color.black,
                //                   },
                //               ]}>
                //               {option.name}
                //             </Text>
                //           </TouchableOpacity>
                //         )
                //       })}
                // </View>
                //     <Text style={styles.textPrice}>
                //       Rp {FormatRupiah(options[optionSelected].price)}
                //     </Text>
                //     <Text style={styles.textDiscountedPrice}>
                //       {' '}
                //       {FormatRupiah(options[optionSelected].discountedPrice)}
                //     </Text>
                //   </View>
                // }
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
                  onPress={() =>  props.navigation.navigate('InspiratifStoryDetail', { storyIndex : index })}>
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
                      style={styles.imageProfile}
                      source={Images.ImageProfileDefault}
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
                  {/* <SearchHome /> */}
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
          state={package_category}
          isVisible={modalInfoClassVisible}
          backdropPress={() => toggleModalInfoClass()}
          backButtonPress={() => toggleModalInfoClass()}
        />
        <ModalInfo
          isVisible={modalVisible}
          backdropPress={() => toggleModal()}
          backButtonPress={() => toggleModal()}
          renderItem={
            <View>
              {classPopular.map((value, index) => {
                if (value.Class_Category == state) {
                  return (
                    <View key={index}>
                      <Text>{state}</Text>
                    </View>
                  )
                } else {
                  return (
                    <View key={index}>
                      <Image
                        resizeMode={'cover'}
                        source={Images.ImgModalComingSoon}
                        style={styles.BackroundImgModal}
                      />
                    </View>
                  )
                }
              })}
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
