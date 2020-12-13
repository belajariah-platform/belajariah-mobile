import React from 'react';

import TimelineContent from './timeline-content.container';
import TimelineEvent from './timeline-event.container';
import TimelineNews from './timeline-news.container';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Color, FontType} from '../../assets';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const Timeline = () => {
  return (
    <Navigator
      scrollEnabled={true}
      tabBarOptions={{
        showIcon: false,
        activeTintColor: Color.bgColor,
        inactiveTintColor: Color.textLightHint,
        labelStyle: {
          fontSize: 12,
          fontFamily: FontType.semiBold,
          textTransform: 'capitalize',
        },
        style: {
          elevation: 0,
          paddingTop: 25,
          paddingHorizontal: 5,
          fontWeight: 'bold',
          backgroundColor: 'white',
          marginTop: 0,
          marginBottom: 2,
          height: 70,
        },
        indicatorStyle: {
          backgroundColor: 'transparent',
          fontWeight: 'bold',
        },
      }}>
      <Screen name="Content" component={TimelineContent} />
      <Screen name="News" component={TimelineNews} />
      <Screen name="Event" component={TimelineEvent} />
    </Navigator>
  );
};

export default Timeline