import React, { Component } from 'react';
import {
  Content, 
  Button,
  InputGroup,
  Input,
  View,
  Icon,
  Text,
  Spinner
} from 'native-base';
import AuthStore from './../stores/authStore'
const authStore = new AuthStore()

export default class Account extends Component {
	render() {
		return (
			<Button rounded onPress={this.signOut.bind(this)}><Text>Sign Out</Text></Button>
		)
	}

	signOut() {
    const { navigate } = this.props.navigation;
		authStore.signOut()
		navigate("Home")
	}
}
