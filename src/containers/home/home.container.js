import React, { createRef, useRef, useState } from 'react'
import { Text } from '@ui-kitten/components'
import { View, ScrollView, Image, ImageBackground, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import { Card } from 'react-native-elements'

import { Swipeup, Searchbox, Buttons } from '../../components'
import { Color, Images } from '../../assets'

import { styles } from './home.style'
import Profile from '../profile'

const actionSheetRef = createRef()

const Home = () => {
  const mainScrollViewRef = useRef()

  const [categorySelected, setCategorySelected] = useState(0)
  const [option1Selected, setOption1Selected] = useState(0)
  const [option2Selected, setOption2Selected] = useState(0)

  const categories = [
    { id: 0, name: "Al-Qur'an" },
    { id: 1, name: 'Fiqih' },
    { id: 2, name: 'Ekonomi Syariah' },
    { id: 3, name: 'Ibadah Kemasyarakatan' },
    { id: 4, name: 'Bahasa Arab' },
  ]

  const options = [
    { id: 0, name: 'A', price: 'Rp499.000', discountedPrice: 'Rp199.000' },
    { id: 1, name: 'B', price: 'Rp600.000', discountedPrice: 'Rp249.000' },
    {
      id: 2,
      name: 'C',
      price: 'Rp1.500.000',
      discountedPrice: 'Rp999.000',
    },
  ]

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={Images.HomeBackground} style={{ width: '100%', height: 64 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Images.LogoBelajariahHome.default width={48} height={48} style={{ marginTop: 8 }} />
          <TouchableOpacity onPress={() => <Profile />}>
            <Image
              source={Images.IconProfile}
              style={{
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                borderWidth: 2,
                borderColor: 'white',
                backgroundColor: 'white',
                marginTop: 12,
                marginRight: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ScrollView ref={mainScrollViewRef} style={styles.scrollview} showsVerticalScrollIndicator={false}>
        {<Swipeup visible={actionSheetRef} />}

        <TouchableOpacity activeOpacity={0.6} onPress={() => ToastAndroid.show('Tombol Search', ToastAndroid.SHORT)}>
          <Searchbox
            name='search'
            style={styles.containerSearch}
            placeholder='Cari Kelas di Belajariah'
            accessoryRight={() => <Images.Search.default />}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} onPress={() => ToastAndroid.show('Banner Promo', ToastAndroid.SHORT)}>
          <Card containerStyle={styles.cardPromo}>
            <Card.Title>Banner Promo</Card.Title>
          </Card>
        </TouchableOpacity>

        <View>
          <Text style={styles.textTitle}>Kategori Kelas</Text>
          <Text style={styles.textSubtitle}>Temukan kelas lewat kategori!</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((category) => {
              return (
                <TouchableOpacity
                  key={category.name}
                  onPress={() => {
                    setCategorySelected(category.id)
                  }}>
                  <Text
                    style={[
                      styles.textCategories,
                      category.id === categorySelected
                        ? { backgroundColor: Color.bgHighlight, color: Color.textWhite }
                        : { backgroundColor: Color.bgColorWhite, color: Color.textBlack },
                    ]}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>

        <View>
          <Text style={styles.textTitle}>Kelas Populer</Text>
          <Text style={styles.textSubtitle}>Kelas Populer saat ini</Text>

          <TouchableOpacity activeOpacity={0.6} onPress={() => ToastAndroid.show('Kelas Tahsin', ToastAndroid.SHORT)}>
            <Card containerStyle={styles.cardPopularClass}>
              <Images.JudulTahsin.default style={styles.svgClassTitle} />
              <Images.BannerTahsin.default style={styles.svgClassBackground} width={'109%'} />
              <Text style={styles.textClassDescription}>
                Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sit amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit
              </Text>

              <Images.Star5.default style={styles.svgClassRating} />

              <Card.Divider style={styles.dividerPopularClass} />

              <View style={styles.containerPriceOptions}>
                {options.map((option) => {
                  return (
                    <TouchableOpacity
                      key={option.id}
                      onPress={() => {
                        setOption1Selected(option.id)
                      }}>
                      <Text
                        style={[
                          styles.textPriceOptions,
                          option.id === option1Selected
                            ? { backgroundColor: Color.bgHighlight, color: Color.textWhite }
                            : { backgroundColor: Color.bgGray, color: Color.textBlack },
                        ]}>
                        {option.name}
                      </Text>
                    </TouchableOpacity>
                  )
                })}
                <Text style={styles.textPrice}>{options[option1Selected].price}</Text>
                <Text style={styles.textDiscountedPrice}>{options[option1Selected].discountedPrice}</Text>
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} onPress={() => ToastAndroid.show('Kelas Tilawah', ToastAndroid.SHORT)}>
            <Card containerStyle={styles.cardPopularClass}>
              <Images.JudulTilawah.default style={styles.svgClassTitle} />
              <Images.BannerTilawah.default style={styles.svgClassBackground} width={'109%'} />
              <Text style={styles.textClassDescription}>
                Belajar Ngaji Tilawah dengan ustadz dan ustadzah lorem ipsum dolor sit amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum
                berusit
              </Text>
              <Images.Star45.default style={styles.svgClassRating} />
              <Card.Divider style={styles.dividerPopularClass} />
              <View style={styles.containerPriceOptions}>
                {options.map((option) => {
                  return (
                    <TouchableOpacity
                      key={option.id}
                      onPress={() => {
                        setOption2Selected(option.id)
                      }}>
                      <Text
                        style={[
                          styles.textPriceOptions,
                          option.id === option2Selected
                            ? { backgroundColor: Color.bgHighlight, color: Color.textWhite }
                            : { backgroundColor: Color.bgGray, color: Color.textBlack },
                        ]}>
                        {option.name}
                      </Text>
                    </TouchableOpacity>
                  )
                })}
                <Text style={styles.textPrice}>{options[option2Selected].price}</Text>
                <Text style={styles.textDiscountedPrice}>{options[option2Selected].discountedPrice}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.6} onPress={() => Alert.alert("Page Baca Al-Qur'an")}>
          <Card containerStyle={styles.cardReadQuran}>
            <Images.BannerAlquran.default style={styles.svgReadQuran} width={'109%'} />
          </Card>
        </TouchableOpacity>

        <View>
          <Text style={styles.textTitle}>Bacaan Inspiratif</Text>
          <Text style={styles.textSubtitle}>Baca artikel terkini setiap hari!</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 238 }}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => ToastAndroid.show('Bacaan Inspiratif', ToastAndroid.SHORT)}>
              <Card containerStyle={styles.cardArticle}>
                <Images.BlogExample.default style={styles.svgArticleBackground} />
                <Text style={styles.textArticleDescription}>
                  Tokoh Inspiratif '<Text style={styles.textBold}>Sandiaga Uno</Text>
                  ', Pengusaha dan politikus Indonesia yang jadi Menteri Pariwisata dan Ekonomi Kreatif
                </Text>
                <TouchableOpacity activeOpacity={0.6} onPress={() => Alert.alert('Page Artikel')}>
                  <Images.BtnReadMore.default style={styles.btnReadMore} />
                </TouchableOpacity>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} onPress={() => ToastAndroid.show('Bacaan Inspiratif', ToastAndroid.SHORT)}>
              <Card containerStyle={styles.cardArticle}>
                <Images.BlogExample.default style={styles.svgArticleBackground} />
                <Text style={styles.textArticleDescription}>
                  Tokoh Inspiratif '<Text style={styles.textBold}>Sandiaga Uno</Text>
                  ', Pengusaha dan politikus Indonesia yang jadi Menteri Pariwisata dan Ekonomi Kreatif
                </Text>
                <TouchableOpacity activeOpacity={0.6} onPress={() => Alert.alert('Page Artikel')}>
                  <Images.BtnReadMore.default style={styles.btnReadMore} />
                </TouchableOpacity>
              </Card>
            </TouchableOpacity>
          </ScrollView>
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
    </View>
  )
}

export default Home
