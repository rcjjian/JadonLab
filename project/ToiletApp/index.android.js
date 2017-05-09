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
  }
},
{
  style : {
    backgroundColor:'#FFFFFF'
  }
},
{
	tabBarPosition  : 'bottom' //显示在底部，但暂时android6.0设置了还是在顶部
});


AppRegistry.registerComponent('ToiletApp', () => ToiletApp);  //一般情况下，整个应用只设置一次
