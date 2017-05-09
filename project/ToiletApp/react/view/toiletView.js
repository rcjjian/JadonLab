import React, { Component } from 'react';
import {
	AppRegistry,
	WebView,
	Text
} from 'react-native';
import ExWebView from './component/exWebView';

const MAP_URL = '../map/aMap.html';

class ToiletView extends Component{

	constructor(props) {
	  super(props);
	}
	
	static navigationOptions = {
    	tabBarLabel: '厕所'
  	};

	render(){
		return (
			 //<ExWebView url={MAP_URL}/>
			 <Text>HelloWorld</Text>
		);
	}
}

module.exports = ToiletView;