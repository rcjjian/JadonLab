import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	StyleSheet,
	View
} from 'react-native';
import Swiper from 'react-native-swiper';

class ContentView extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	static navigationOptions = {
    	tabBarLabel: '发现'
  	};

	render(){
		return (
			<Swiper style={styles.wrapper} showsButtons={true}>
        		<View>
        			<Text>A</Text>
        		</View>
        		<View>
        			<Text>B</Text>
        		</View>
      </Swiper>



		);
	}
}

const styles = StyleSheet.create({
 
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

module.exports = ContentView;