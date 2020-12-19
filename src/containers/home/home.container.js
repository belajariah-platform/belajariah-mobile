import React, { createRef } from 'react'
import { Icon } from '@ui-kitten/components';
import { 
  View, 
  ScrollView ,
  TouchableOpacity, 
} from 'react-native'

import { Color } from '../../assets'
import { 
  Swipeup,
  Carousel, 
  Searchbox 
} from '../../components'

import { styles } from './home.style'

const search = props => <Icon name="search" {...props} />
const actionSheetRef = createRef();

const Home = () => {

  return (
    <View style={{backgroundColor: Color.bgColorWhite, flex: 1}}>
      {<Swipeup visible={actionSheetRef} />}
      <View style={styles.containerTop}>
        <TouchableOpacity style={styles.bgIcon}>
          <Icon
            fill={Color.iconColor}
            name="more-vertical-outline"
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Searchbox
            disabled
            name="search"
            style={styles.search}
            placeholder="Cari materi kamu ..."
            accessoryLeft={search}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgIcon}>
          <Icon
            fill={Color.iconColor}
            name="bell-outline"
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 8}}>
        <ScrollView>
          <View style={styles.containerMiddle}>
            <Carousel />
          </View>
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
        </ScrollView>
      </View>
    </View>
  )
}

export default Home
