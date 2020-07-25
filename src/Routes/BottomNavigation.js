import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Text,
} from '@ui-kitten/components';
import Home from '../Screen/Home/Home';
import Profile from '../Screen/Profile/Profile';
import Pembelian from '../Screen/Pembelian/Pembelian';
import TabView from './TabView';

const Tab = createBottomTabNavigator();
const Homes = props => <Icon {...props} name="home-outline" color="yellow" />;
const User = props => <Icon {...props} name="person-outline" />;
const Cart = props => <Icon {...props} name="shopping-bag-outline" />;
const Time = props => <Icon {...props} name="clock-outline" />;

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
    indicatorStyle={style.indicator}
    icon={style.icons}>
    <BottomNavigationTab
      title={evaProps => <Text {...evaProps}>Home</Text>}
      icon={Homes}
    />
    <BottomNavigationTab title="Pembelian" icon={Cart} />
    <BottomNavigationTab title="Timeline" icon={Time} />
    <BottomNavigationTab title="Profile" icon={User} />
  </BottomNavigation>
);

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pembelian" component={Pembelian} />
      <Tab.Screen name="TabView" component={TabView} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const style = StyleSheet.create({
  indicator: {
    backgroundColor: 'transparent',
  },
  icons: {
    color: '#512E8A',
  },
});
