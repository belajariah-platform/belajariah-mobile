<<<<<<< HEAD
import React, {createRef, useRef, useState} from 'react';
import {Text} from '@ui-kitten/components';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import {Card} from 'react-native-elements';

import {Swipeup, Searchbox, Buttons} from '../../components';
import {Color, Images} from '../../assets';

import {styles} from './home.style';

const actionSheetRef = createRef();

const Home = () => {
  const mainScrollViewRef = useRef();

  const [categorySelected, setCategorySelected] = useState(0);
  const [option1Selected, setOption1Selected] = useState(0);
  const [option2Selected, setOption2Selected] = useState(0);

  const categories = [
    {id: 0, name: "Al-Qur'an"},
    {id: 1, name: 'Fiqih'},
    {id: 2, name: 'Ekonomi Syariah'},
    {id: 3, name: 'Ibadah Kemasyarakatan'},
    {id: 4, name: 'Bahasa Arab'},
  ];

  const options = [
    {id: 0, name: 'A', price: 'Rp499.000', discountedPrice: 'Rp199.000'},
    {id: 1, name: 'B', price: 'Rp600.000', discountedPrice: 'Rp249.000'},
    {
      id: 2,
      name: 'C',
      price: 'Rp1.500.000',
      discountedPrice: 'Rp999.000',
    },
  ];

  return (
    <ScrollView
      ref={mainScrollViewRef}
      style={styles.scrollview}
      showsVerticalScrollIndicator={false}>
      {<Swipeup visible={actionSheetRef} />}

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => ToastAndroid.show('Tombol Search', ToastAndroid.SHORT)}>
        <Searchbox
          name="search"
          style={styles.containerSearch}
          placeholder="Cari Kelas di Belajariah"
          accessoryRight={() => <Images.Search.default />}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => ToastAndroid.show('Banner Promo', ToastAndroid.SHORT)}>
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
                  setCategorySelected(category.id);
                }}>
                <Text
                  style={[
                    styles.textCategories,
                    category.id === categorySelected
                      ? {
                          backgroundColor: Color.bgHighlight,
                          color: Color.textWhite,
                        }
                      : {
                          backgroundColor: Color.bgColorWhite,
                          color: Color.textBlack,
                        },
                  ]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View>
        <Text style={styles.textTitle}>Kelas Populer</Text>
        <Text style={styles.textSubtitle}>Kelas Populer saat ini</Text>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => ToastAndroid.show('Kelas Tahsin', ToastAndroid.SHORT)}>
          <Card containerStyle={styles.cardPopularClass}>
            <Images.JudulTahsin.default style={styles.svgClassTitle} />
            <Images.BannerTahsin.default style={styles.svgClassBackground} />
            <Text style={styles.textClassDescription}>
              Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sit
              amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum
              berusit
            </Text>

            <Images.Star5.default style={styles.svgClassRating} />

            <Card.Divider style={styles.dividerPopularClass} />

            <View style={styles.containerPriceOptions}>
              {options.map((option) => {
                return (
                  <TouchableOpacity
                    key={option.id}
                    onPress={() => {
                      setOption1Selected(option.id);
                    }}>
                    <Text
                      style={[
                        styles.textPriceOptions,
                        option.id === option1Selected
                          ? {
                              backgroundColor: Color.bgHighlight,
                              color: Color.textWhite,
                            }
                          : {
                              backgroundColor: Color.bgGray,
                              color: Color.textBlack,
                            },
                      ]}>
                      {option.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
              <Text style={styles.textPrice}>
                {options[option1Selected].price}
              </Text>
              <Text style={styles.textDiscountedPrice}>
                {options[option1Selected].discountedPrice}
              </Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() =>
            ToastAndroid.show('Kelas Tilawah', ToastAndroid.SHORT)
          }>
          <Card containerStyle={styles.cardPopularClass}>
            <Images.JudulTilawah.default style={styles.svgClassTitle} />
            <Images.BannerTilawah.default style={styles.svgClassBackground} />
            <Text style={styles.textClassDescription}>
              Belajar Ngaji Tilawah dengan ustadz dan ustadzah lorem ipsum dolor
              sit amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum
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
                      setOption2Selected(option.id);
                    }}>
                    <Text
                      style={[
                        styles.textPriceOptions,
                        option.id === option2Selected
                          ? {
                              backgroundColor: Color.bgHighlight,
                              color: Color.textWhite,
                            }
                          : {
                              backgroundColor: Color.bgGray,
                              color: Color.textBlack,
                            },
                      ]}>
                      {option.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
              <Text style={styles.textPrice}>
                {options[option2Selected].price}
              </Text>
              <Text style={styles.textDiscountedPrice}>
                {options[option2Selected].discountedPrice}
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => Alert.alert("Page Baca Al-Qur'an")}>
        <Card containerStyle={styles.cardReadQuran}>
          <Images.BannerAlquran.default style={styles.svgReadQuran} />
        </Card>
      </TouchableOpacity>

      <View>
        <Text style={styles.textTitle}>Bacaan Inspiratif</Text>
        <Text style={styles.textSubtitle}>
          Baca artikel terkini setiap hari!
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{height: 238}}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              ToastAndroid.show('Bacaan Inspiratif', ToastAndroid.SHORT)
            }>
            <Card containerStyle={styles.cardArticle}>
              <Images.BlogExample.default style={styles.svgArticleBackground} />
              <Text style={styles.textArticleDescription}>
                Tokoh Inspiratif '
                <Text style={styles.textBold}>Sandiaga Uno</Text>
                ', Pengusaha dan politikus Indonesia yang jadi Menteri
                Pariwisata dan Ekonomi Kreatif
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => Alert.alert('Page Artikel')}>
                <Images.BtnReadMore.default style={styles.btnReadMore} />
              </TouchableOpacity>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              ToastAndroid.show('Bacaan Inspiratif', ToastAndroid.SHORT)
            }>
            <Card containerStyle={styles.cardArticle}>
              <Images.BlogExample.default style={styles.svgArticleBackground} />
              <Text style={styles.textArticleDescription}>
                Tokoh Inspiratif '
                <Text style={styles.textBold}>Sandiaga Uno</Text>
                ', Pengusaha dan politikus Indonesia yang jadi Menteri
                Pariwisata dan Ekonomi Kreatif
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => Alert.alert('Page Artikel')}>
                <Images.BtnReadMore.default style={styles.btnReadMore} />
              </TouchableOpacity>
            </Card>
          </TouchableOpacity>
=======
import React, { createRef } from 'react'
import { Icon } from '@ui-kitten/components'
import { View, ScrollView, TouchableOpacity } from 'react-native'

import { Color } from '../../assets'
import { Swipeup, Searchbox } from '../../components'

import { styles } from './home.style'

const search = (props) => <Icon name='search' {...props} />
const actionSheetRef = createRef()

const Home = () => {
  return (
    <View style={{ backgroundColor: Color.bgColorWhite, flex: 1 }}>
      {<Swipeup visible={actionSheetRef} />}
      <View style={styles.containerTop}>
        <TouchableOpacity style={styles.bgIcon}>
          <Icon
            fill={Color.iconColor}
            name='more-vertical-outline'
            style={{ width: 22, height: 22 }}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Searchbox
            disabled
            name='search'
            style={styles.search}
            placeholder='Cari materi kamu ...'
            accessoryLeft={search}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgIcon}>
          <Icon
            fill={Color.iconColor}
            name='bell-outline'
            style={{ width: 22, height: 22 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 8 }}>
        <ScrollView>
          <View style={styles.containerMiddle} />
          <View style={[styles.containerBottom]}>
            {/* <MainFiture />
            <CategoryClass />
            <AllClass /> */}
            <View />
          </View>

          <View style={[styles.containerBottoms]}>
            <View
              style={{
                backgroundColor: 'white',
                marginTop: -70,
                paddingTop: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
            {/* <Promotion />
            <OtherFeature /> */}
          </View>
>>>>>>> e1fe67e3ee073d77306753e0545e124b19481e2c
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
  );
};

export default Home;
