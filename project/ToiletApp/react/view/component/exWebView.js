import React, { Component } from 'react';
import {
	View,
	WebView,
	Text,
	StyleSheet
}from 'react-native';

/**
* 扩展WebView
*/
class ExWebView extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	url : this.props.url,
	  	isShowError : false,
	  };
	}

	render(){

		let url = !this.state.url ? require('./aMap.html') : {uri:this.state.url};

		return (
			<View style={styles.container}>
				{
					this.state.isShowError?
					<View style = {styles.textView}>
							<Text style={styles.text}>打开地图时出现异常</Text>
						</View>
					:
					<WebView 
							automaticallyAdjustContentInsets = {false}
							style = {styles.container}
							startInLoadingState = {true} //开始加载时显示loadding提示
							source = {url}
							onError = {() => this._loadError.bind(this)} //调用
					/>
				}
			</View>
			
		);
	}

	_loadError() {
		this.setState({
			isShowError : true
		});
	}
 
}


const styles = StyleSheet.create({
  container: {
    flex: 1 //容器的占屏比例
  },
  text:{
    fontSize:16,
    fontWeight:'300'
  },
  textView:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
});

module.exports = ExWebView;