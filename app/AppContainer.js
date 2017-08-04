import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/Login'
import DashboardScreen from './screens/Dashboard'

const SimpleApp = StackNavigator({
  Home: { screen: LoginScreen },
  Dashboard: { screen: DashboardScreen }
});

export default SimpleApp
