import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';

import ContentView from './react/view/contentView';
import ToiletView from './react/view/toiletView';

const ToiletApp = TabNavigator({
  ToiletView: {
    screen: ToiletView,
  },
  ContentView: {
    screen: ContentView,
  }
}, 
{
  tabBarOptions: {
    activeBackgroundColor: '#33CCFF',
    inactiveBackgroundColor : '#FFFFFF',
    activeTintColor : '#FFFFFF',
    inactiveTintColor : '#33CCFF',
  },
  style : {
    backgroundColor:'#FFFFFF'
  },
  tabBarPosition  : 'bottom',
  swipeEnabled : false
});


AppRegistry.registerComponent('ToiletApp', () => ToiletApp);  //一般情况下，整个应用只设置一次
