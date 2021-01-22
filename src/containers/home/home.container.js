import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import React, { useRef, useState } from 'react'

import {
  Text,
  View,
  Alert,
  Image,
  Animated,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { Card, Avatar } from 'react-native-elements'
import {
  State,
  Directions,
  FlingGestureHandler,
} from 'react-native-gesture-handler'

import { Cards, Carousel, ModalInfo, Searchbox } from '../../components'
import { FormatRupiah } from '../../utils'
import { Color, Images } from '../../assets'

import { styles } from './home.style'
import images from '../../assets/images'

const Home = (props) => {
  const { isLogin } = useSelector((state) => state.UserReducer)

  const [state, setState] = useState('')
  const [beganY, setBeganY] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [optionSelected, setOptionSelected] = useState(0)
  const [categorySelected, setCategorySelected] = useState(0)

  const { height } = Dimensions.get('window')
  const swipeLength = height / 2
  const swipeAnimation = useRef(new Animated.Value(swipeLength)).current

  const mainScrollViewRef = useRef()
  const toggleModal = () => setModalVisible(!modalVisible)

  const handleSwipe = ({ nativeEvent }) => {
    if (nativeEvent.state === State.BEGAN) {
      setBeganY(nativeEvent.absoluteY)
    }
    if (nativeEvent.state === State.END) {
      if (beganY > nativeEvent.absoluteY) {
        Animated.spring(swipeAnimation, {
          speed: 1,
          toValue: 0,
          bounciness: 1,
          useNativeDriver: true,
        }).start()
      } else {
        Animated.spring(swipeAnimation, {
          speed: 1,
          bounciness: 0,
          toValue: swipeLength,
          useNativeDriver: true,
        }).start()
      }
    }
  }

  const handleModal = (event) => {
    setModalVisible(true)
    setState(event)
  }

  const classPopular = [
    {
      rating: 5,
      description:
        'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sitamet, lorem veri seyum not beije veri seyum not ',
    },
    {
      rating: 4.5,
      description:
        'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sitamet, lorem veri seyum not beiveri seyum not',
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
      title: 'Promo 1',
      imgUrl:
        'https://idseducation.com/wp-content/uploads/2018/09/thumbnail-5-840x430.jpg',
    },
    {
      title: 'Promo 2',
      imgUrl:
        'https://blognyalucy.files.wordpress.com/2018/11/flat-design-office-desk-02-preview-o.jpg',
    },
    {
      title: 'Promo 3',
      imgUrl:
        'https://image.freepik.com/free-vector/designer-s-office-flat-illustration_23-2147492101.jpg',
    },
  ]

  const categories = [
    { id: 0, name: 'Al-Qur/an' },
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

  const SearchHome = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.navigateSearch}
        onPress={() => props.navigation.navigate('HomeSearch')}>
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate('PromotionDetail', item)}>
          <Image style={styles.cardCustom} source={{ uri: item.imgUrl }} />
        </TouchableOpacity>
      </View>
    )
  }

  const CategoryClassHome = () => {
    const RenderItem = () => {
      return (
        <View>
          <Text>{state}</Text>
        </View>
      )
    }

    return (
      <>
        <ModalInfo
          isVisible={modalVisible}
          renderItem={<RenderItem />}
          backdropPress={() => toggleModal()}
        />
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.textTitle}>Kategori Kelas</Text>
          <Text style={styles.textSubtitle}>Temukan kelas lewat kategori!</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handleModal(category.name)
                    setCategorySelected(category.id)
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

    return (
      <View>
        <Text style={styles.textTitle}>Kelas Populer</Text>
        <Text style={styles.textSubtitle}>Kelas Populer saat ini</Text>
        {classPopular.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.6}
              onPress={() => {
                props.navigation.navigate('ClassDetail', {
                  price: options[optionSelected].price,
                  discountedPrice: options[optionSelected].discountedPrice,
                })
              }}>
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
                      IDR {FormatRupiah(options[optionSelected].price)}
                    </Text>
                    <Text style={styles.textDiscountedPrice}>
                      IDR{' '}
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
                  onPress={() => Alert.alert('Page Artikel')}>
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
    <View style={styles.headerFlex}>
      <ImageBackground source={Images.HomeBG} style={styles.imageBackground}>
        <View style={styles.headerFlex}>
          <View style={styles.headerContainer}>
            <View style={styles.headerFlex}>
              <Images.LogoBelajariahHome.default height={40} width={40} />
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={{ ...styles.headerAvatar, marginRight: 15 }}
                onPress={() =>
                  props.navigation.navigate(isLogin ? 'Profile' : 'Login')
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
        <Animated.View
          style={[
            styles.frontContainer,
            { transform: [{ translateY: swipeAnimation }] },
          ]}>
          <FlingGestureHandler
            onHandlerStateChange={handleSwipe}
            direction={Directions.UP | Directions.DOWN}>
            <View style={styles.fingerGesture}>
              <View style={styles.topLine} />
            </View>
          </FlingGestureHandler>
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
        </Animated.View>
      </ImageBackground>
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.object,
}

export default Home
