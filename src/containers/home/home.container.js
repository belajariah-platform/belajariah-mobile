import React, {createRef} from 'react';
import {Icon, Text} from '@ui-kitten/components';
import {View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {Card} from 'react-native-elements';

import {Swipeup, Searchbox, TextView} from '../../components';
import {Color} from '../../assets';

import {styles} from './home.style';

const search = (props) => <Icon name="search" {...props} />;
const actionSheetRef = createRef();

const Home = () => {
  const category = [
    "Al-Qur'an",
    'Fiqih',
    'Ekonomi Syariah',
    'Ibadah Kemasyarakatan',
    'Bahasa Arab',
  ];
  return (
    <ScrollView
      style={{backgroundColor: Color.bgColorWhite, flex: 1}}
      showsVerticalScrollIndicator={false}>
      {<Swipeup visible={actionSheetRef} />}
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.6}>
          <Searchbox
            name="search"
            style={styles.search}
            placeholder="Cari Kelas di Belajariah"
            accessoryRight={search}
          />
        </TouchableOpacity>

        <View style={styles.container_child}>
          <Card containerStyle={styles.card_promo}>
            <Card.Title>Banner Promo</Card.Title>
          </Card>
        </View>

        <View style={styles.container_child}>
          <Text style={styles.text_header}>Kategori Kelas</Text>
          <Text style={styles.text_sub_header}>
            Temukan kelas lewat kategori!
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {category.map((name) => {
              return <Text style={styles.text_category}>{name}</Text>;
            })}
          </ScrollView>
        </View>

        <View style={styles.container_child}>
          <Text style={styles.text_header}>Kelas Populer</Text>
          <Text style={styles.text_sub_header}>Kelas Populer saat ini</Text>
          <Card containerStyle={styles.card_class_popular}>
            <Card.Title>Kelas Tahsin</Card.Title>
          </Card>
          <Card containerStyle={styles.card_class_popular}>
            <Card.Title>Kelas Tilawah</Card.Title>
          </Card>
        </View>

        <View style={styles.container_child}>
          <Card containerStyle={styles.card_read_quran}>
            <Card.Title>Banner Baca Al-Qur'an</Card.Title>
          </Card>
        </View>

        <View style={styles.container_child}>
          <Text style={styles.text_header}>Bacaan Inspiratif</Text>
          <Text style={styles.text_sub_header}>
            Baca artikel terkini setiap hari!
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card containerStyle={styles.card_article}>
              <Card.Title>Banner Bacaan Inspiratif</Card.Title>
            </Card>
            <Card containerStyle={styles.card_article}>
              <Card.Title>Banner Bacaan Inspiratif</Card.Title>
            </Card>
          </ScrollView>
        </View>

        <View style={styles.container_child}>
          <TouchableOpacity style={styles.icon_arrow}>
            <Icon
              fill={Color.iconColor}
              name="arrow-upward-outline"
              style={{width: 22, height: 22}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
