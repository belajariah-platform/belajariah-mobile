import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
    Color, 
    FontType,
} from '../../assets';

import {
    Home,
    Profile,
    Timeline,
} from '../../containers';

const Main = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'book';
              break;
            case 'Timeline':
              iconName = 'clock';
              break;
            case 'Other':
              iconName = 'ellipsis-h';
              break;
          }
          return <Icon name={iconName} size={21} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.bgColor,
        inactiveTintColor: Color.textLightHint,
        showLabel: false,
        allowFontScaling: true,
        adaptive: true,
        style: {
          borderWidth: 0,
          borderColor: 'transparent',
          elevation: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -30,
          elevation: 40,
          borderTopWidth: 0,
        },
        labelStyle: {
          fontSize: 12, 
          fontFamily: FontType.regular
        },
      }}>
      <Screen name="Home" component={Home} options={{headerShown: false}} />
      <Screen name="Timeline" component={Timeline} />
      <Screen name="Other" component={Profile} />
    </Navigator>
  );
};

export default Main;