import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/Login'
import DashboardScreen from './screens/Dashboard'

import AuthStore from './stores/authStore'
const authStore = new AuthStore()
authStore.signOut()
const AppContainer = StackNavigator({
  Home: { screen: LoginScreen },
  Dashboard: { screen: DashboardScreen }
}, {
	initialRouteName: 'Home'
});

export default AppContainer
