import React, { Component } from 'react'
import {
  Content, 
  Container,
  View,
  Text
} from 'native-base'
import {Image, StyleSheet, Dimensions} from 'react-native'

import SignUp from './../components/SignUp'
export default class SignUpScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			LoginBG: require('./../../images/LoginBG.jpg')
    }
	}
	render() {
		return (
			<Container>
				<Content scrollEnabled={false}>
					<View>
						<SignUp {...this.props}/>
					</View>
				</Content>
			</Container>
		)
	}
}



const style = StyleSheet.create({
	container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  loginBackground: {
    flex:1,
    width: null,
    height: null
  },
  loginForeground: {
    flex:1,
    marginTop: Dimensions.get('window').height/1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 90,
    bottom: 0
  }
})