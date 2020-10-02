// import React from 'react';
// import {StyleSheet, Text, View, Animated} from 'react-native';
// import {compose, withState, withProps} from 'recompose';
// import AnimatedHeader from './Components/AnimatedHeader';
// import ItemInScroll from './Components/ItemInScroll';

// export const scrollRangeForAnimation = 100;

// const HeaderPlaceholder = (
//   <View style={{flex: 0, height: 200, width: '100%'}} />
// );

// const Home = ({scrollY, animationRange}) => {
//   let _scrollView = null;

//   const onScrollEndSnapToEdge = event => {
//     const y = event.nativeEvent.contentOffset.y;
//     if (0 < y && y < scrollRangeForAnimation / 2) {
//       if (_scrollView) {
//         _scrollView.scrollTo({y: 0});
//       }
//     } else if (
//       scrollRangeForAnimation / 2 <= y &&
//       y < scrollRangeForAnimation
//     ) {
//       if (_scrollView) {
//         _scrollView.scrollTo({y: scrollRangeForAnimation});
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <AnimatedHeader animationRange={animationRange} />
//       <Animated.ScrollView
//         style={styles.scrollView}
//         ref={scrollView => {
//           _scrollView = scrollView ? scrollView._component : null;
//         }}
//         onScrollEndDrag={onScrollEndSnapToEdge}
//         onMomentumScrollEnd={onScrollEndSnapToEdge}
//         onScroll={Animated.event(
//           [
//             {
//               nativeEvent: {contentOffset: {y: scrollY}},
//             },
//           ],
//           {
//             useNativeDriver: true,
//           },
//         )}>
//         {HeaderPlaceholder}
//         <ItemInScroll numberOfItem={1} />
//         <ItemInScroll numberOfItem={2} />
//         <ItemInScroll numberOfItem={3} />
//         <ItemInScroll numberOfItem={4} />
//         <ItemInScroll numberOfItem={5} />
//         <ItemInScroll numberOfItem={6} />
//         <ItemInScroll numberOfItem={7} />
//         <ItemInScroll numberOfItem={8} />
//         <ItemInScroll numberOfItem={9} />
//         <ItemInScroll numberOfItem={10} />
//         <ItemInScroll numberOfItem={11} />
//       </Animated.ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     zIndex: 1,
//   },
// });

// const enhance = compose(
//   withState('scrollY', 'setScrollY', () => new Animated.Value(0)),
//   withProps(({scrollY}) => ({
//     animationRange: scrollY.interpolate({
//       inputRange: [0, scrollRangeForAnimation],
//       outputRange: [0, 1],
//       extrapolate: 'clamp',
//     }),
//   })),
// );

// export default enhance(Home);

import React, {createRef} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';
import ActionSheets from '../../Components/ActionSheet';
import SearchText from '../../Components/SearchText';
import {Color} from '../../Themes/Colors';
import Carousel from './Components/Carousel';
import CategoryClass from './Components/CategoryClass';
import AllClass from './Components/Classes';
import MainFiture from './Components/MainFitur';
import Promotion from './Components/Promotion';
import OtherFeature from './Components/OtherFitur';

const search = props => <Icon name="search" {...props} />;
const actionSheetRef = createRef();

function Home(props) {
  return (
    <View style={{backgroundColor: Color.bgColorWhite, flex: 1}}>
      {<ActionSheets visible={actionSheetRef} />}
      <View style={style.containerTop}>
        <TouchableOpacity style={style.bgIcon}>
          <Icon
            fill={Color.iconColor}
            name="more-vertical-outline"
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <SearchText
            disabled
            name="search"
            style={style.search}
            placeholder="Cari materi kamu ..."
            accessoryLeft={search}
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.bgIcon}>
          <Icon
            fill={Color.iconColor}
            name="bell-outline"
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 8}}>
        <ScrollView>
          <View style={style.containerMiddle}>
            <Carousel />
          </View>
          <View style={[style.containerBottom]}>
            <MainFiture />
            <CategoryClass />
            <AllClass />
            <View />
          </View>

          <View style={[style.containerBottoms]}>
            <View
              style={{
                backgroundColor: 'white',
                marginTop: -70,
                paddingTop: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
            <Promotion />
            <OtherFeature />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default Home;
const style = StyleSheet.create({
  containerTop: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Color.bgColorGray,
  },
  bgIcon: {
    width: 38,
    height: 38,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 60,
  },
  search: {
    borderWidth: 0,
    width: 220,
    borderColor: 'transparent',
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 5,
    marginHorizontal: 15,
  },
  containerMiddle: {
    flex: 6,
    backgroundColor: Color.bgColorGray,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  containerBottom: {
    flex: 2,
    backgroundColor: Color.bgColorWhite,
    borderRadius: 50,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  containerBottoms: {
    flex: 2,
    backgroundColor: Color.bgColor,
    marginTop: 10,
    paddingTop: 50,
  },
});
