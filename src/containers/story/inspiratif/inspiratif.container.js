import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import styles from './inspiratif.style'
import { Images } from '../../../assets'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { Searchbox } from '../../../components'

const InspiratifStory = () => {
  const navigation = useNavigation()

  const state = [
    { TitleBacaan : 'Jadi Sukses, Belajar dari Sandiaga Uno', images: Images.IconTokohInspiratif, DescBacaan : 'Tokoh Inspiratif "Sandiaga Uno", pengusaha dan politikus Indonesia yang menjadi Menteri' },
    { TitleBacaan : 'Jadi Sukses, Belajar dari Sandiaga Uno', images: Images.IconTokohInspiratif, DescBacaan : 'Tokoh Inspiratif "Sandiaga Uno", pengusaha dan politikus Indonesia yang menjadi Menteri' },
    { TitleBacaan : 'Jadi Sukses, Belajar dari Sandiaga Uno', images: Images.IconTokohInspiratif, DescBacaan : 'Tokoh Inspiratif "Sandiaga Uno", pengusaha dan politikus Indonesia yang menjadi Menteri' },
    { TitleBacaan : 'Jadi Sukses, Belajar dari Sandiaga Uno', images: Images.IconTokohInspiratif, DescBacaan : 'Tokoh Inspiratif "Sandiaga Uno", pengusaha dan politikus Indonesia yang menjadi Menteri' },
  ]

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Bacaan Inspiratif</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Search = () => {
    return(
      <View
        style={{ marginHorizontal: '5%', }}>
          <Searchbox
            size='medium'
            placeholder={'Telusuri Bacaan Inpiratif'}
            onFocus={() => console.log('hello')}
            style={styles.searchbox}
            accessoryRight={() => (
              <Images.Search.default style={{ marginRight: -12 }} />
            )}
          />
      </View>
    )
  }

  const Inspiratif = () => {
    return(
      <View>
        <FlatList
          data={state}
          style={{ width:'100%' }}
          contentContainerStyle={{ paddingBottom: 92 }}
          showsVerticalScrollIndicator ={false}
          keyExtractor={(item, index) =>  index.toString()}
          renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() =>  navigation.navigate('InspiratifStoryDetail')}>
            <Card
              key={index}
              containerStyle={styles.cardInstructor}>
              <View style={styles.ViewInstructorInfo}>
                <Image source={item.images} style={styles.ImgUstadz}/>
                <View style={{ flex : 1 }}>
                  <Text style={styles.TxtTitleInstructor}>{item.TitleBacaan}</Text>
                  <Text style={styles.email}>{item.DescBacaan}</Text>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
          )}
        />
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
       <Search />
       <Inspiratif />
      </ScrollView>
    </View>
  )
}

export default InspiratifStory
