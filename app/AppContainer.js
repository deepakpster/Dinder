import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/Login'
import DashboardScreen from './screens/Dashboard'
import AddStoryScreen from './screens/AddStory'
import SignUpScreen from './screens/SignUp'

import AuthStore from './stores/authStore'
const authStore = new AuthStore()
authStore.signOut()
const AppContainer = StackNavigator({
  Home: { screen: LoginScreen },
  Dashboard: { screen: DashboardScreen },
  AddStory: { screen: AddStoryScreen },
  SignUp: { screen: SignUpScreen }
}, {
	initialRouteName: 'Home'//,
	// navigationOptions: {
	// 	authStore: authStore
	// }
});

export default AppContainer
