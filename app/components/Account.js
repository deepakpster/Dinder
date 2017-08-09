import React, { Component } from 'react';
import {
  Content,
  Footer, 
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
		 const {state} = this.props.navigation;
		return (
			<Content>
				<Text>{state.params.auth.authUser.email}</Text>
				<Footer>
					<Button rounded block onPress={this.signOut.bind(this)}>
					<Text>Sign Out</Text>
					</Button>
				</Footer>
			</Content>
		)
	}

	signOut() {
    const { navigate } = this.props.navigation;
		authStore.signOut()
		navigate("Home")
	}
}
