import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/Login'
import DashboardScreen from './screens/Dashboard'
import SignUpScreen from './screens/SignUp'

import AuthStore from './stores/authStore'
const authStore = new AuthStore()
authStore.signOut()
const AppContainer = StackNavigator({
  Home: { screen: LoginScreen },
  Dashboard: { screen: DashboardScreen },
  SignUp: { screen: SignUpScreen }
}, {
	initialRouteName: 'Home',
	authStore: authStore
	// navigationOptions: {
	// 	header: null
	// }
});

export default AppContainer
