import React, { Component } from 'react';
import {
	AppRegistry,
	WebView,
	Text
} from 'react-native';
import ExWebView from './component/exWebView';


class ToiletView extends Component{

	constructor(props) {
	  super(props);
	}
	
	static navigationOptions = {
    	tabBarLabel: '厕所'
  	};

	render(){
		return (
			 <ExWebView/>
		);
	}
}

module.exports = ToiletView;